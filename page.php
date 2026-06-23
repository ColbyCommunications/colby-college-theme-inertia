<?php
use BoxyBird\Inertia\Inertia;

global $post;

// Pre-process for classic blocks (matching sidebar logic)
$parsed_blocks = array_map(function ($block) {
    if (
        empty($block['blockName'])
        && !empty(trim($block['innerHTML'] ?? ''))
    ) {
        $block['blockName'] = 'core/classic';
    }
    return $block;
}, parse_blocks($post->post_content));

$filtered_blocks = array_values(array_filter(
    $parsed_blocks,
    function ($block) {
        return !empty($block['blockName']);
    }
));

function colby_flatten_group_descendants(array $blocks): array
{
    $flattened = [];

    foreach ($blocks as $block) {
        $block_name = $block['blockName'] ?? null;

        if ($block_name === 'core/group') {
            $flattened = array_merge(
                $flattened,
                colby_flatten_group_descendants($block['innerBlocks'] ?? [])
            );
            continue;
        }

        if (!is_null($block_name)) {
            $flattened[] = $block;
        }
    }

    return $flattened;
}

function get_structured_block_data($block, $index = 0) {
    if ($block['blockName'] === 'core/heading' ) {
        return ['heading' => str_replace(array("\r", "\n"), '', $block['innerHTML'])];
    }

    $meta_id = !empty($block['attrs']['id'])
        ? 'block_' . $block['attrs']['id']
        : 'block_' . $index . '_' . md5(wp_json_encode($block['attrs']['data'] ?? []));

    acf_setup_meta($block['attrs']['data'] ?? [], $meta_id, true);
    $fields = get_fields($meta_id);
    acf_reset_meta($meta_id);

    return $fields ?: [];
}

function colby_block_slug_from_name(string $block_name): string
{
    $parts = explode('/', $block_name, 2);
    return $parts[1] ?? '';
}

function colby_block_folder_from_slug(string $slug): string
{
    $parts = preg_split('/[-_]/', $slug);

    $parts = array_map(function ($part) {
        return ucfirst($part);
    }, $parts);

    return implode('', $parts);
}

function colby_block_function_suffix_from_slug(string $slug): string
{
    return str_replace('-', '_', strtolower($slug));
}

function colby_block_helper_file_path(string $block_name): string
{
    $slug = colby_block_slug_from_name($block_name);
    $folder = colby_block_folder_from_slug($slug);

    return get_template_directory() . '/resources/js/components/' . $folder . '/acf/get_remote_data.php';
}

function colby_block_remote_data_function_name(string $block_name): string
{
    $slug = colby_block_slug_from_name($block_name);
    $suffix = colby_block_function_suffix_from_slug($slug);

    return 'colby_block_' . $suffix . '_get_remote_data';
}

function enrich_block_data(array $block, int $index): array
{
    $block_name = $block['blockName'] ?? '';
    $data = $block['attrs']['data'] ?? [];

    if (!$block_name) {
        return $block;
    }

    $helper_file = colby_block_helper_file_path($block_name);

    if (file_exists($helper_file)) {
        require_once $helper_file;
    } else {
        return $block;
    }

    $function_name = colby_block_remote_data_function_name($block_name);

    if (is_callable($function_name)) {
        $block['attrs']['data'] = $function_name($data, $index, $block);
    }

    return $block;
}

function colby_prepare_advanced_accordion_block(array $block, string $block_path): array
{
    $block['attrs'] = isset($block['attrs']) && is_array($block['attrs'])
        ? $block['attrs']
        : [];

    $block['attrs']['data'] = isset($block['attrs']['data']) && is_array($block['attrs']['data'])
        ? $block['attrs']['data']
        : [];

    $accordion_blocks = [];

    foreach (array_values($block['innerBlocks'] ?? []) as $panel_index => $panel_block) {
        if (is_null($panel_block['blockName'] ?? null)) {
            continue;
        }

        $panel_block['attrs'] = isset($panel_block['attrs']) && is_array($panel_block['attrs'])
            ? $panel_block['attrs']
            : [];

        $panel_block['attrs']['data'] = isset($panel_block['attrs']['data']) && is_array($panel_block['attrs']['data'])
            ? $panel_block['attrs']['data']
            : [];

        $panel_children = $panel_block['innerBlocks'] ?? [];

        $panel_block['attrs']['data']['blocks'] = colby_process_blocks(
            colby_flatten_group_descendants($panel_children),
            $block_path . '_accordion_' . $panel_index
        );

        $accordion_blocks[] = $panel_block;
    }

    $block['attrs']['data']['blocks'] = $accordion_blocks;

    return $block;
}

function colby_process_single_block(array $block, int $index = 0, string $path = 'root'): array
{
    $block_path = $path . '_' . $index;

    $block['attrs']['data'] = get_structured_block_data($block, $block_path);

    if (($block['blockName'] ?? null) === 'core/html' || ($block['blockName'] ?? null) === 'core/classic') {
        $block['attrs'] = isset($block['attrs']) && is_array($block['attrs'])
            ? $block['attrs']
            : [];
    
        $block['attrs']['data'] = isset($block['attrs']['data']) && is_array($block['attrs']['data'])
            ? $block['attrs']['data']
            : [];
    
        $block['attrs']['data']['html'] = wp_kses_post($block['innerHTML'] ?? '');
    
        return $block;
    } elseif (($block['blockName'] ?? null) === 'core/group') {
        $block['attrs'] = isset($block['attrs']) && is_array($block['attrs'])
            ? $block['attrs']
            : [];

        $block['attrs']['data'] = isset($block['attrs']['data']) && is_array($block['attrs']['data'])
            ? $block['attrs']['data']
            : [];

        $block['attrs']['data']['blocks'] = colby_flatten_group_descendants(
            $block['innerBlocks'] ?? []
        );

        $block['attrs']['data']['blocks'] = colby_process_blocks(
            $block['attrs']['data']['blocks'],
            $block_path . '_group'
        );
    } elseif (($block['blockName'] ?? null) === 'acf/advanced-accordion') {
        $block = colby_prepare_advanced_accordion_block($block, $block_path);
    }

    $block = enrich_block_data($block, $index);

    return $block;
}

function colby_process_blocks(array $blocks, string $path = 'root'): array
{
    $processed = [];

    foreach (array_values($blocks) as $index => $block) {
        $processed[] = colby_process_single_block($block, $index, $path);
    }

    return $processed;
}

$filtered_blocks = colby_process_blocks($filtered_blocks);

if ( post_password_required( $post->ID ) ) {
    Inertia::render('Password/Show', [
        'password_form' => get_the_password_form($post->ID),
    ]);
} else {
    Inertia::render('Page/Show', [
        'id'     => $post->ID,
        'title'  => get_the_title($post->ID),
        'layout' => 'default',
        'blocks' => $filtered_blocks,
    ]);
}