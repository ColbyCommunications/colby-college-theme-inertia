<?php

include_once __DIR__ . '/../inc/block-validation.php';

// helpers/normalize_types.php content (acf_normalize_types function)
function acf_normalize_types(array $data, $parent_key = null, $block_name): array
{
    foreach ($data as $key => $value) {
        // var_dump($data);

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
            $data[$key] = acf_normalize_types($value, $key, $block_name);
            continue;
        }

        /**
         * -------------------------------------------------
         * IMAGE NORMALIZATION (attachment-based)
         * -------------------------------------------------
         */
        if (is_numeric($value)) {
            $id = (int) $value;

            if ($block_name !== 'acf/stat-group') {
                if (wp_attachment_is_image($id)) {
                    $attachment = get_post($id);

                    $data[$key] = [
                        'id'      => $id,
                        // 'src'     => str_replace('colby.lndo.site', 'www.colby.edu', wp_get_attachment_url($id)),
                        'src'     => 'ON' === getenv( 'LANDO' ) ? str_replace($_SERVER['HTTP_HOST'], PRIMARY_DOMAIN, wp_get_attachment_url($id)) : wp_get_attachment_url($id),
                        'alt'     => get_post_meta($id, '_wp_attachment_image_alt', true),
                        'caption' => $attachment ? $attachment->post_excerpt : '',
                        'description' => $attachment ? $attachment->post_content : '',
                    ];

                    continue;
                }
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
        // dd($block);
        // $folder = colby_block_name_to_folder($block['blockName']);

        // if ($folder) {
        //     $path = get_theme_file_path("resources/js/components/{$folder}/acf/prepare_data.php");

        //     if (file_exists($path)) {
        //         include $path;
        //     }
            
        //     dd(is_callable($path));

        //     if (is_callable($validators[$folder])) {
        //         $result = $validators[$folder]($data, $block);
        //         if (is_wp_error($result)) {
        //             $errors[] = $result;
        //         }
        //     }
        // }

        // escape on specific block handlers
        switch ($block['blockName']) {
            case 'acf/list-section':
                

                
                break;
            
            default:
                if (!empty($block['attrs']['data']) && is_array($block['attrs']['data'])) {

                    // Pass 1: normalize scalars + images
                    $block['attrs']['data'] = acf_normalize_types($block['attrs']['data'], null, $block['blockName']);
        
                    // Unflatten repeaters
                    $block['attrs']['data'] = acf_unflatten($block['attrs']['data']);
        
                    // Pass 2: normalize nested values (safe now)
                    $block['attrs']['data'] = acf_normalize_types($block['attrs']['data'], null, $block['blockName']);
                }
        
                if (!empty($block['innerBlocks'])) {
                    $block['innerBlocks'] = prepare_data($block['innerBlocks']);
                }
                break;
        }

        
    }

    return $blocks;
}

