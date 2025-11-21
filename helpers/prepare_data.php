<?php
require_once get_theme_file_path('helpers/normalize_types.php');
/**
 * Convert flattened ACF field keys (e.g. items_0_heading) into nested arrays.
 *
 * Example:
 * [
 *   'items' => 2,
 *   'items_0_heading' => 'Foo',
 *   'items_0_image' => 123,
 *   'items_1_heading' => 'Bar'
 * ]
 *
 * becomes:
 *
 * [
 *   'items' => [
 *     [ 'heading' => 'Foo', 'image' => 123 ],
 *     [ 'heading' => 'Bar' ]
 *   ]
 * ]
 */
function acf_unflatten(array $data): array
{
    $result = $data;

    foreach ($data as $key => $value) {

        // Match keys like "items_0_heading" or "gallery_3_images_2_caption"
        if (preg_match('/^([a-zA-Z0-9_]+)(?:_(\d+))_(.+)$/', $key, $matches)) {

            $base   = $matches[1];   // items
            $index  = (int) $matches[2]; // 0
            $rest   = $matches[3];   // heading OR nested (e.g. "images_2_caption")

            // Ensure the base becomes an array
            if (!isset($result[$base]) || !is_array($result[$base])) {
                $result[$base] = [];
            }

            // Recursively resolve nested fields
            $nested = acf_unflatten([ $rest => $value ]);

            // Merge the nested structure into the correct index
            $result[$base][$index] = array_merge(
                $result[$base][$index] ?? [],
                $nested
            );

            // Remove the flattened version
            unset($result[$key]);
        }
    }

    return $result;
}

function prepare_data(array $blocks): array
{
    foreach ($blocks as &$block) {

        // ACF block data exists here:
        if (!empty($block['attrs']['data']) && is_array($block['attrs']['data'])) {
            $block['attrs']['data'] = acf_unflatten($block['attrs']['data']);
            $block['attrs']['data'] = acf_normalize_types($block['attrs']['data']);
        }

        // Recursively process innerBlocks
        if (!empty($block['innerBlocks'])) {
            $block['innerBlocks'] = prepare_data($block['innerBlocks']);
        }
    }

    return $blocks;
}

