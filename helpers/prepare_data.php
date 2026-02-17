<?php
// helpers/normalize_types.php content (acf_normalize_types function)
function acf_normalize_types(array $data, $parent_key = null): array
{
    foreach ($data as $key => $value) {


        /**
         * -------------------------------------------------
         * SKIP already-normalized image objects
         * -------------------------------------------------
         */
        if (
            is_array($value) &&
            isset($value['id'], $value['src']) &&
            is_int($value['id'])
        ) {
            continue;
        } 

        /**
         * -------------------------------------------------
         * RECURSE into nested arrays
         * -------------------------------------------------
         */
        if (is_array($value)) {
            $data[$key] = acf_normalize_types($value, $key);
            continue;
        }

        /**
         * -------------------------------------------------
         * IMAGE NORMALIZATION (attachment-based)
         * -------------------------------------------------
         */
        if (is_numeric($value)) {
            $id = (int) $value;

            if (wp_attachment_is_image($id)) {
                $attachment = get_post($id);

                $data[$key] = [
                    'id'      => $id,
                    'src'     => wp_get_attachment_url($id),
                    'alt'     => get_post_meta($id, '_wp_attachment_image_alt', true),
                    'caption' => $attachment ? $attachment->post_excerpt : '',
                    'description' => $attachment ? $attachment->post_content : '',
                ];

                continue;
            }
        }

        /**
         * -------------------------------------------------
         * ACF TYPE NORMALIZATION (best-effort)
         * -------------------------------------------------
         */
        $field = get_field_object($key) ?: get_field_object($parent_key);

        if (!$field || empty($field['type'])) {
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
                if (is_numeric($value)) {
                    $data[$key] = (int) $value;
                }
                break;
        }
    }

    return $data;
}

/**
 * Unflatten ACF repeater keys.
 */
function acf_unflatten(array $data): array
{
    $result = $data;

    foreach ($data as $key => $value) {

        if (preg_match('/^([a-zA-Z0-9_]+)_(\d+)_(.+)$/', $key, $matches)) {

            $base  = $matches[1];
            $index = (int) $matches[2];
            $rest  = $matches[3];

            if (!isset($result[$base]) || !is_array($result[$base])) {
                $result[$base] = [];
            }

            $nested = acf_unflatten([$rest => $value]);

            $result[$base][$index] = array_merge(
                $result[$base][$index] ?? [],
                $nested
            );

            unset($result[$key]);
        }
    }

    return $result;
}

/**
 * Prepare Gutenberg block data.
 */
function prepare_data(array $blocks): array
{
    foreach ($blocks as &$block) {

        if (!empty($block['attrs']['data']) && is_array($block['attrs']['data'])) {

            // Pass 1: normalize scalars + images
            $block['attrs']['data'] = acf_normalize_types($block['attrs']['data']);

            // Unflatten repeaters
            $block['attrs']['data'] = acf_unflatten($block['attrs']['data']);

            // Pass 2: normalize nested values (safe now)
            $block['attrs']['data'] = acf_normalize_types($block['attrs']['data']);
        }

        if (!empty($block['innerBlocks'])) {
            $block['innerBlocks'] = prepare_data($block['innerBlocks']);
        }
    }

    return $blocks;
}

