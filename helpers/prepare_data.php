<?php
// helpers/normalize_types.php content (acf_normalize_types function)
function acf_normalize_types(array $data, $parent_key = null): array
{
    foreach ($data as $key => $value) {

        // Skip nested arrays (handled recursively)
        if (is_array($value)) {
            $data[$key] = acf_normalize_types($value, $key);
            continue;
        }

        // Fetch ACF field object if available
        $field = get_field_object($key) ?: get_field_object($parent_key);

        if (!$field || empty($field['type'])) {
            // If we can't find the field object (which happens for nested repeater fields),
            // but the value is numeric, force a conversion to number type.
            if (is_numeric($value)) {
                $data[$key] = $value + 0;
            }
            continue;
        }

        switch ($field['type']) {
            case 'true_false':
                $data[$key] = filter_var($value, FILTER_VALIDATE_BOOLEAN);
                break;

            case 'number':
            case 'range':
                $data[$key] = is_numeric($value) ? $value + 0 : null;
                break;

            case 'select':
            case 'radio':
                if (!empty($field['multiple'])) {
                    $data[$key] = is_array($value) ? $value : [$value];
                }
                break;

            case 'post_object':
            case 'relationship':
            case 'image':
                // They come as strings—we normalize to int
                if (is_numeric($value)) {
                    $data[$key] = (int)$value;
                }
                break;

            case 'text':
            case 'textarea':
            case 'wysiwyg':
            default:
                break;
        }
    }
    return $data;
}

function acf_unflatten(array $data): array
{
    $result = $data;

    foreach ($data as $key => $value) {

        if (preg_match('/^([a-zA-Z0-9_]+)(?:_(\d+))_(.+)$/', $key, $matches)) {

            $base   = $matches[1];
            $index  = (int) $matches[2];
            $rest   = $matches[3];

            if (!isset($result[$base]) || !is_array($result[$base])) {
                $result[$base] = [];
            }

            // Recursively resolve nested fields
            $nested = acf_unflatten([ $rest => $value ]);

            $result[$base][$index] = array_merge(
                $result[$base][$index] ?? [],
                $nested
            );

            unset($result[$key]);
        }
    }

    return $result;
}

function prepare_data(array $blocks): array
{
    foreach ($blocks as &$block) {

        if (!empty($block['attrs']['data']) && is_array($block['attrs']['data'])) {
            // Normalize scalar fields first (fixes top-level fields like 'columns' if not nested)
            $block['attrs']['data'] = acf_normalize_types($block['attrs']['data']);

            // Then unflatten the nested arrays
            $block['attrs']['data'] = acf_unflatten($block['attrs']['data']);
            
            // Normalize again to catch any numbers/booleans that were nested deep inside repeaters/flex fields
            $block['attrs']['data'] = acf_normalize_types($block['attrs']['data']);
        }

        if (!empty($block['innerBlocks'])) {
            $block['innerBlocks'] = prepare_data($block['innerBlocks']);
        }
    }

    return $blocks;
}