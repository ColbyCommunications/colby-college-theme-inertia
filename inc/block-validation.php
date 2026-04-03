<?php

/**
 * Metadata-driven ACF block validation for required fields.
 *
 * Intercepts save and autosave requests, reads ACF field definitions
 * from the runtime registry, and validates only fields marked as required.
 * Respects conditional_logic so hidden fields are not validated.
 */

// ---------------------------------------------------------------------------
// 1. Field-group lookup: block name → ACF field groups
// ---------------------------------------------------------------------------

function colby_get_block_field_groups(string $block_name): array {
    static $map = null;

    if ($map === null) {
        $map = [];

        if (!function_exists('acf_get_field_groups')) {
            return [];
        }

        foreach (acf_get_field_groups() as $group) {
            foreach (($group['location'] ?? []) as $or_group) {
                foreach ($or_group as $rule) {
                    if (
                        ($rule['param'] ?? null) === 'block'
                        && ($rule['operator'] ?? '==') === '=='
                    ) {
                        $map[$rule['value']][] = $group;
                    }
                }
            }
        }
    }

    return $map[$block_name] ?? [];
}

// ---------------------------------------------------------------------------
// 2. Schema expansion: resolve clone targets into a full field tree
// ---------------------------------------------------------------------------

/**
 * Build a map of field_key → original required value from ACF's local field store.
 *
 * acf_get_local_fields() returns the raw field arrays as registered via
 * acf_add_local_field_group(), BEFORE ACF's clone resolution propagates
 * the clone wrapper's required flag to resolved children.
 */
function colby_get_source_required_map(string $parent_key): array {
    static $cache = [];

    if (isset($cache[$parent_key])) {
        return $cache[$parent_key];
    }

    $map = [];

    if (!function_exists('acf_get_local_fields')) {
        return $cache[$parent_key] = $map;
    }

    $walk = function (string $parent) use (&$walk, &$map): void {
        foreach ((array) acf_get_local_fields($parent) as $field) {
            $key = $field['key'] ?? '';
            if ($key === '') {
                continue;
            }

            $map[$key] = (int) ($field['required'] ?? 0);

            // Recurse into clone targets to get their original required flags too
            if (($field['type'] ?? '') === 'clone') {
                foreach (($field['clone'] ?? []) as $target) {
                    if (strpos($target, 'group_') === 0) {
                        $walk($target);
                    }
                }
            }

            $walk($key);
        }
    };

    $walk($parent_key);

    return $cache[$parent_key] = $map;
}

/**
 * Restore original required flags on resolved fields using the source map.
 */
function colby_restore_required_flags(array $fields, array $required_map): array {
    foreach ($fields as &$field) {
        $key = $field['key'] ?? '';
        if ($key !== '') {
            $matched = false;

            // Direct match
            if (array_key_exists($key, $required_map)) {
                $field['required'] = $required_map[$key];
                $matched = true;
            }

            // ACF creates compound keys for clone-resolved fields (e.g.,
            // field_clone_field_original). Match by suffix.
            if (!$matched) {
                foreach ($required_map as $source_key => $source_required) {
                    if (str_ends_with($key, '_' . $source_key)) {
                        $field['required'] = $source_required;
                        $matched = true;
                        break;
                    }
                }
            }

            // If no direct match found but the compound key contains a segment
            // that maps to required=0 (a non-required clone ancestor), treat
            // this field as non-required to prevent clone inheritance false positives.
            if (!$matched && $field['required']) {
                foreach ($required_map as $source_key => $source_required) {
                    if ($source_required === 0 && strpos($key, $source_key . '_') !== false) {
                        $field['required'] = 0;
                        break;
                    }
                }
            }
        }

        if (!empty($field['sub_fields'])) {
            $field['sub_fields'] = colby_restore_required_flags($field['sub_fields'], $required_map);
        }
    }
    unset($field);

    return $fields;
}

function colby_expand_field_schema(array $field): array {
    if ($field['type'] === 'clone') {
        // Use the clone field's own resolved sub_fields if ACF populated them
        // (these have the correct compound keys from the parent context).
        // Fall back to fetching from clone targets independently.
        $cloned_fields = $field['sub_fields'] ?? [];

        if (empty($cloned_fields)) {
            foreach (($field['clone'] ?? []) as $target) {
                if (function_exists('acf_get_fields')) {
                    $target_fields = acf_get_fields($target);
                    if (is_array($target_fields)) {
                        $cloned_fields = array_merge($cloned_fields, $target_fields);
                    }
                }
            }
        }

        // Restore original required flags from the local field store
        // to undo ACF's clone-required inheritance (where a required clone
        // forces all its resolved children to be required too)
        foreach (($field['clone'] ?? []) as $target) {
            if (strpos($target, 'group_') === 0) {
                $source_map = colby_get_source_required_map($target);
                if (!empty($source_map)) {
                    $cloned_fields = colby_restore_required_flags($cloned_fields, $source_map);
                }
            }
        }

        $seamless = ($field['display'] ?? 'seamless') === 'seamless'
            && empty($field['prefix_name']);

        $field['_resolved_clone_fields'] = array_map('colby_expand_field_schema', $cloned_fields);
        $field['_clone_seamless'] = $seamless;

        return $field;
    }

    if (!empty($field['sub_fields'])) {
        $field['sub_fields'] = array_map('colby_expand_field_schema', $field['sub_fields']);
    }

    return $field;
}

// ---------------------------------------------------------------------------
// 3. Flat-key extraction helpers
// ---------------------------------------------------------------------------

/**
 * Extract all raw_data keys that start with a given prefix into a sub-array.
 * E.g., prefix "post" extracts "post_image" => val as "image" => val.
 */
function colby_extract_prefixed_data(array $raw_data, string $prefix): array {
    $result = [];
    $prefix_len = strlen($prefix) + 1; // +1 for the underscore

    foreach ($raw_data as $key => $value) {
        if (!is_string($key)) {
            continue;
        }
        if (strpos($key, $prefix . '_') === 0) {
            $remainder = substr($key, $prefix_len);
            // Only take the immediate key (no further underscores means it's a direct child)
            // But we keep ALL keys — the recursive normalizer will handle deeper extraction
            $result[$remainder] = $value;
        }
    }

    return $result;
}

/**
 * Extract repeater row data from flat keys.
 * Supports both name-based keys (images_0_image) and field-key-based keys
 * (field_xxx_0_field_yyy) since ACF versions may use either format.
 */
function colby_extract_row_data(
    array $raw_data,
    string $repeater_name,
    int $row_index,
    string $repeater_key = '',
    array $sub_fields = []
): array {
    $result = [];

    // Try name-based patterns first (most common)
    $patterns = [
        "{$repeater_name}_{$row_index}_",
        "{$repeater_name}_row-{$row_index}_",
    ];

    foreach ($raw_data as $k => $value) {
        if (!is_string($k)) {
            continue;
        }
        foreach ($patterns as $pattern) {
            if (strpos($k, $pattern) === 0) {
                $remainder = substr($k, strlen($pattern));
                $result[$remainder] = $value;
                break;
            }
        }
    }

    // If name-based extraction found nothing, try field-key-based patterns
    if (empty($result) && $repeater_key !== '') {
        $key_patterns = [
            "{$repeater_key}_{$row_index}_",
            "{$repeater_key}_row-{$row_index}_",
        ];

        $key_to_name = [];
        foreach ($sub_fields as $sf) {
            $sf_key = $sf['key'] ?? '';
            $sf_name = $sf['name'] ?? '';
            if ($sf_key !== '' && $sf_name !== '') {
                $key_to_name[$sf_key] = $sf_name;
            }
        }

        foreach ($raw_data as $k => $value) {
            if (!is_string($k)) {
                continue;
            }
            foreach ($key_patterns as $pattern) {
                if (strpos($k, $pattern) === 0) {
                    $remainder = substr($k, strlen($pattern));
                    // Map field key remainder back to field name if possible
                    $mapped_name = $key_to_name[$remainder] ?? $remainder;
                    $result[$mapped_name] = $value;
                    break;
                }
            }
        }
    }

    return $result;
}

// ---------------------------------------------------------------------------
// 4. Data normalization: raw attrs.data → structured values keyed by field name
// ---------------------------------------------------------------------------

function colby_normalize_block_data(array $raw_data, array $schema): array {
    $normalized = [];

    foreach ($schema as $field) {
        $name = $field['name'] ?? '';
        $key = $field['key'] ?? '';
        $type = $field['type'] ?? '';

        if ($name === '' && $key === '') {
            continue;
        }

        if ($type === 'clone' && !empty($field['_clone_seamless'])) {
            // Seamless clones inline their fields into the current scope
            $clone_fields = $field['_resolved_clone_fields'] ?? [];
            $clone_data = colby_normalize_block_data($raw_data, $clone_fields);
            $normalized = array_merge($normalized, $clone_data);
            continue;
        }

        // Find the value - try field name first, then field key
        $value = $raw_data[$name] ?? $raw_data[$key] ?? null;

        if ($type === 'group') {
            $sub_fields = $field['sub_fields'] ?? [];
            $group_data = [];

            if (is_array($value)) {
                $group_data = $value;
            }

            // Merge in all flat keys that start with the group name prefix
            // This handles deep nesting like post_image, post_context_heading, etc.
            $prefixed = colby_extract_prefixed_data($raw_data, $name);
            $group_data = array_merge($prefixed, $group_data);

            $normalized[$name] = colby_normalize_block_data($group_data, $sub_fields);
            continue;
        }

        if ($type === 'repeater') {
            $sub_fields = $field['sub_fields'] ?? [];
            $rows = [];

            if (is_array($value) && !empty($value)) {
                // Check if it's structured rows (nested arrays keyed by index, row-N, or ACF hash IDs)
                $first_value = reset($value);
                $is_row_collection = is_array($first_value);

                if ($is_row_collection) {
                    foreach ($value as $row_data) {
                        if (is_array($row_data)) {
                            $rows[] = colby_normalize_block_data($row_data, $sub_fields);
                        }
                    }
                } else {
                    // Single value — might be a count string like "1"
                    // Fall through to flat extraction below
                }
            }

            if (empty($rows)) {
                // Flat format: field_name = count, field_name_0_subfield = value
                $count = is_numeric($value) ? (int) $value : 0;

                if ($count === 0 && $key !== '' && isset($raw_data[$key]) && is_numeric($raw_data[$key])) {
                    $count = (int) $raw_data[$key];
                }

                for ($i = 0; $i < $count; $i++) {
                    // Extract ALL keys matching this row's prefix pattern
                    // Tries name-based first, falls back to field-key-based
                    $row_data = colby_extract_row_data($raw_data, $name, $i, $key, $sub_fields);

                    // Skip empty rows (stale count with no actual data)
                    if (empty($row_data)) {
                        continue;
                    }

                    $rows[] = colby_normalize_block_data($row_data, $sub_fields);
                }
            }

            $normalized[$name] = $rows;
            continue;
        }

        if ($type === 'clone' && empty($field['_clone_seamless'])) {
            // Prefixed clone: data is under clone field name
            $clone_fields = $field['_resolved_clone_fields'] ?? [];
            $clone_data = is_array($value) ? $value : [];

            // Merge in flat prefixed keys
            $prefixed = colby_extract_prefixed_data($raw_data, $name);
            $clone_data = array_merge($prefixed, $clone_data);

            $normalized[$name] = colby_normalize_block_data($clone_data, $clone_fields);
            continue;
        }

        // Scalar or other field types
        $normalized[$name] = $value;
    }

    return $normalized;
}

// ---------------------------------------------------------------------------
// 5. Conditional logic evaluation
// ---------------------------------------------------------------------------

/**
 * Build a field key → name index from a schema, including seamless clone fields.
 */
function colby_build_key_index(array $schema): array {
    $index = [];
    foreach ($schema as $f) {
        if (!empty($f['key']) && !empty($f['name'])) {
            $index[$f['key']] = $f['name'];
        }
        if (($f['type'] ?? '') === 'clone' && !empty($f['_clone_seamless'])) {
            foreach (($f['_resolved_clone_fields'] ?? []) as $cf) {
                if (!empty($cf['key']) && !empty($cf['name'])) {
                    $index[$cf['key']] = $cf['name'];
                }
            }
        }
    }
    return $index;
}

/**
 * Evaluate a single conditional rule against data.
 */
function colby_rule_matches(array $rule, $actual): bool {
    $operator = $rule['operator'] ?? '==';
    $expected = $rule['value'] ?? '';

    // Normalize actual value for comparison
    if (is_bool($actual)) {
        $actual = $actual ? '1' : '0';
    } elseif (is_numeric($actual)) {
        $actual = (string) $actual;
    } elseif (is_null($actual)) {
        $actual = '';
    } elseif (is_array($actual)) {
        $actual = !empty($actual) ? '__non_empty__' : '';
    }

    if (!is_string($actual)) {
        $actual = '';
    }

    switch ($operator) {
        case '==':
            return $actual === (string) $expected;

        case '!=':
            return $actual !== (string) $expected;

        case '==empty':
            return trim($actual) === '' || $actual === '0';

        case '!=empty':
            return trim($actual) !== '' && $actual !== '0';

        default:
            return true;
    }
}

/**
 * Evaluate whether a field is visible based on its conditional_logic rules.
 *
 * Accepts both the current scope's schema/data and a parent scope stack
 * so that rules referencing fields in ancestor scopes can be resolved.
 */
function colby_evaluate_conditional_logic(
    array $field,
    array $data,
    array $schema,
    array $parent_scopes = []
): bool {
    $logic = $field['conditional_logic'] ?? false;

    if (empty($logic) || $logic === 0) {
        return true;
    }

    // Build key index for current scope
    $key_to_name = colby_build_key_index($schema);

    // Also build indexes for all parent scopes
    $parent_indexes = [];
    foreach ($parent_scopes as $scope) {
        $parent_indexes[] = [
            'index' => colby_build_key_index($scope['schema']),
            'data' => $scope['data'],
        ];
    }

    // Conditional logic is OR of AND groups
    foreach ($logic as $and_group) {
        $all_matched = true;

        foreach ($and_group as $rule) {
            $target_key = $rule['field'] ?? '';

            // Try resolving in current scope first
            $resolved = false;
            $target_name = $key_to_name[$target_key] ?? '';

            if ($target_name !== '') {
                $actual = $data[$target_name] ?? null;
                $resolved = true;
            }

            // If not found in current scope, check parent scopes
            if (!$resolved) {
                foreach ($parent_indexes as $parent) {
                    $parent_name = $parent['index'][$target_key] ?? '';
                    if ($parent_name !== '') {
                        $actual = $parent['data'][$parent_name] ?? null;
                        $resolved = true;
                        break;
                    }
                }
            }

            if (!$resolved) {
                // Can't resolve the field - treat as visible (safe default)
                continue;
            }

            if (!colby_rule_matches($rule, $actual)) {
                $all_matched = false;
                break;
            }
        }

        if ($all_matched) {
            return true;
        }
    }

    return false;
}

// ---------------------------------------------------------------------------
// 6. Per-type required-value checks
// ---------------------------------------------------------------------------

function colby_field_has_required_value(array $field, $value): bool {
    $type = $field['type'] ?? '';

    switch ($type) {
        case 'text':
        case 'textarea':
        case 'email':
        case 'url':
        case 'password':
        case 'wysiwyg':
            return is_string($value) ? trim(wp_strip_all_tags($value)) !== '' : !empty($value);

        case 'radio':
        case 'select':
        case 'checkbox':
        case 'button_group':
            return is_string($value) ? trim($value) !== '' : !empty($value);

        case 'number':
        case 'range':
            return $value !== null && $value !== '' && $value !== false;

        case 'true_false':
            return true;

        case 'image':
        case 'file':
        case 'gallery':
            if (is_array($value)) {
                return !empty($value['id']) || !empty($value['ID']) || !empty($value['url']);
            }
            return is_numeric($value) && (int) $value > 0;

        case 'link':
            if (is_array($value)) {
                return !empty($value['url']);
            }
            return !empty($value);

        case 'repeater':
            if (!is_array($value) || count($value) === 0) {
                return false;
            }
            // Verify at least one row has actual content (not just empty arrays from stale counts)
            foreach ($value as $row) {
                if (!is_array($row)) {
                    continue;
                }
                foreach ($row as $v) {
                    if ($v !== null && $v !== '' && $v !== false && $v !== []) {
                        return true;
                    }
                }
            }
            return false;

        case 'group':
            // A required group must have at least one non-empty sub-field value
            if (!is_array($value)) {
                return false;
            }
            foreach ($value as $v) {
                if ($v !== null && $v !== '' && $v !== false && $v !== []) {
                    return true;
                }
            }
            return false;

        case 'clone':
            if (!is_array($value)) {
                return false;
            }
            foreach ($value as $v) {
                if ($v !== null && $v !== '' && $v !== false && $v !== []) {
                    return true;
                }
            }
            return false;

        case 'taxonomy':
        case 'post_object':
        case 'relationship':
        case 'page_link':
        case 'user':
            return !empty($value);

        default:
            if (is_array($value)) {
                return !empty(array_filter($value, function ($v) {
                    return $v !== null && $v !== '' && $v !== false;
                }));
            }
            if (is_string($value)) {
                return trim($value) !== '';
            }
            return $value !== null && $value !== false && $value !== '';
    }
}

// ---------------------------------------------------------------------------
// 7. Recursive field-tree validation
// ---------------------------------------------------------------------------

/**
 * Validate required fields in a field list.
 *
 * @param array  $schema        The expanded field schema for the current scope.
 * @param array  $data          The normalized data for the current scope.
 * @param string $block_label   The block's display name (for error messages).
 * @param array  $parent_scopes Stack of parent scopes [{schema, data}, ...] for conditional logic.
 */
function colby_validate_field_list(
    array $schema,
    array $data,
    string $block_label = '',
    array $parent_scopes = []
): array {
    $errors = [];

    foreach ($schema as $field) {
        $name = $field['name'] ?? '';
        $type = $field['type'] ?? '';
        $required = !empty($field['required']);

        // Handle seamless clones
        if ($type === 'clone' && !empty($field['_clone_seamless'])) {
            $clone_fields = $field['_resolved_clone_fields'] ?? [];

            // Check if the clone has any data present
            $clone_has_data = false;
            foreach ($clone_fields as $cf) {
                $cf_name = $cf['name'] ?? '';
                $cf_value = $data[$cf_name] ?? null;
                if ($cf_value !== null && $cf_value !== '' && $cf_value !== false && $cf_value !== []) {
                    $clone_has_data = true;
                    break;
                }
            }

            // If the clone wrapper is required, enforce that it has data
            if ($required && !$clone_has_data) {
                $label = $field['label'] ?? $name;
                $errors[] = $label;
                continue;
            }

            // If the clone wrapper is optional and has no data, skip validation entirely
            if (!$required && !$clone_has_data) {
                continue;
            }

            // Validate the inlined clone fields in the current scope
            $clone_errors = colby_validate_field_list($clone_fields, $data, $block_label, $parent_scopes);
            $errors = array_merge($errors, $clone_errors);
            continue;
        }

        // Check conditional visibility (with parent scope awareness)
        if (!colby_evaluate_conditional_logic($field, $data, $schema, $parent_scopes)) {
            continue;
        }

        $value = $data[$name] ?? null;

        // Check required
        if ($required && !colby_field_has_required_value($field, $value)) {
            $label = $field['label'] ?? $name;
            $errors[] = $label;
            continue;
        }

        // Build new parent scope stack for children
        $child_parent_scopes = array_merge(
            [['schema' => $schema, 'data' => $data]],
            $parent_scopes
        );

        // Recurse into groups
        if ($type === 'group' && is_array($value)) {
            $sub_fields = $field['sub_fields'] ?? [];
            $sub_errors = colby_validate_field_list($sub_fields, $value, $block_label, $child_parent_scopes);
            $errors = array_merge($errors, $sub_errors);
        }

        // Recurse into repeater rows
        if ($type === 'repeater' && is_array($value)) {
            $sub_fields = $field['sub_fields'] ?? [];
            foreach ($value as $row_index => $row_data) {
                if (!is_array($row_data)) {
                    continue;
                }
                $row_errors = colby_validate_field_list($sub_fields, $row_data, $block_label, $child_parent_scopes);
                foreach ($row_errors as $row_error) {
                    $errors[] = sprintf('%s (row %d)', $row_error, $row_index + 1);
                }
            }
        }

        // Recurse into prefixed clones
        if ($type === 'clone' && empty($field['_clone_seamless']) && is_array($value)) {
            $clone_fields = $field['_resolved_clone_fields'] ?? [];
            $clone_errors = colby_validate_field_list($clone_fields, $value, $block_label, $child_parent_scopes);
            $errors = array_merge($errors, $clone_errors);
        }
    }

    return $errors;
}

// ---------------------------------------------------------------------------
// 8. Main validation entry point
// ---------------------------------------------------------------------------

function colby_validate_blocks(array $blocks): array {
    $errors = [];

    foreach ($blocks as $block) {
        $block_name = $block['blockName'] ?? '';

        if (strpos($block_name, 'acf/') !== 0) {
            if (!empty($block['innerBlocks'])) {
                $errors = array_merge($errors, colby_validate_blocks($block['innerBlocks']));
            }
            continue;
        }

        if (!function_exists('acf_get_field_groups') || !function_exists('acf_get_fields')) {
            continue;
        }

        $raw_data = is_array($block['attrs']['data'] ?? null) ? $block['attrs']['data'] : [];

        // Get field definitions from ACF runtime registry
        $field_groups = colby_get_block_field_groups($block_name);
        $fields = [];

        foreach ($field_groups as $group) {
            $group_fields = acf_get_fields($group['key']);
            if (is_array($group_fields)) {
                // Restore original required flags to undo ACF's clone inheritance.
                // Build the source map from the block's own group AND all referenced
                // clone target groups.
                $source_map = colby_get_source_required_map($group['key']);
                if (!empty($source_map)) {
                    $group_fields = colby_restore_required_flags($group_fields, $source_map);
                }
                $fields = array_merge($fields, $group_fields);
            }
        }

        if (empty($fields)) {
            if (!empty($block['innerBlocks'])) {
                $errors = array_merge($errors, colby_validate_blocks($block['innerBlocks']));
            }
            continue;
        }

        // Expand clone targets in the field tree
        $schema = array_map('colby_expand_field_schema', $fields);

        // Normalize the raw flat data against the schema
        $data = colby_normalize_block_data($raw_data, $schema);

        // Validate required fields recursively
        $block_title = $block['attrs']['data']['_block_title']
            ?? ucwords(str_replace('-', ' ', substr($block_name, 4)));
        $field_errors = colby_validate_field_list($schema, $data, $block_title);

        if (!empty($field_errors)) {
            $message = sprintf(
                __('%s requires the following fields before saving: %s.', 'colby'),
                $block_title,
                implode(', ', $field_errors)
            );

            $errors[] = new WP_Error(
                'colby_block_validation_failed',
                $message,
                ['status' => 400]
            );
        }

        if (!empty($block['innerBlocks'])) {
            $errors = array_merge($errors, colby_validate_blocks($block['innerBlocks']));
        }
    }

    return $errors;
}

// ---------------------------------------------------------------------------
// 9. Request content extraction (unchanged)
// ---------------------------------------------------------------------------

function colby_get_request_content(WP_REST_Request $request): string {
    $content_sources = [
        $request->get_param('content'),
        $request->get_json_params()['content'] ?? null,
        $request->get_body_params()['content'] ?? null,
    ];

    foreach ($content_sources as $content_param) {
        if (is_array($content_param) && !empty($content_param['raw'])) {
            return (string) $content_param['raw'];
        }

        if (is_string($content_param) && $content_param !== '') {
            return $content_param;
        }
    }

    $body = $request->get_body();
    if ($body) {
        $decoded_body = json_decode($body, true);
        $content_param = $decoded_body['content'] ?? null;

        if (is_array($content_param) && !empty($content_param['raw'])) {
            return (string) $content_param['raw'];
        }

        if (is_string($content_param) && $content_param !== '') {
            return $content_param;
        }
    }

    return '';
}

// ---------------------------------------------------------------------------
// 10. Validation error aggregation (unchanged)
// ---------------------------------------------------------------------------

function colby_get_block_validation_error(WP_REST_Request $request): ?WP_Error {
    $content = colby_get_request_content($request);

    if (!$content) {
        return null;
    }

    $blocks = parse_blocks($content);
    $errors = colby_validate_blocks($blocks);

    if (!empty($errors)) {
        $messages = array_map(function ($error) {
            return $error->get_error_message();
        }, $errors);
        $message = implode("\n", $messages);

        if (count($messages) > 1) {
            $message = "\n" . $message;
        }

        return new WP_Error(
            'colby_block_validation_failed',
            $message,
            ['status' => 400]
        );
    }

    return null;
}

// ---------------------------------------------------------------------------
// 11. Hook into WordPress save and autosave
// ---------------------------------------------------------------------------

function colby_validate_blocks_on_save($prepared_post, WP_REST_Request $request) {
    $validation_error = colby_get_block_validation_error($request);

    if ($validation_error) {
        return $validation_error;
    }

    return $prepared_post;
}

add_action('init', function () {
    $post_types = get_post_types(['show_in_rest' => true], 'names');

    foreach ($post_types as $post_type) {
        if (!post_type_supports($post_type, 'editor')) {
            continue;
        }

        add_filter("rest_pre_insert_{$post_type}", 'colby_validate_blocks_on_save', 10, 2);
    }
});

add_action('enqueue_block_editor_assets', function () {
    wp_register_style('colby-block-validation-editor', false);
    wp_enqueue_style('colby-block-validation-editor');
    wp_add_inline_style(
        'colby-block-validation-editor',
        '.components-notice__content, .components-snackbar__content { white-space: pre-line; }'
    );
});
