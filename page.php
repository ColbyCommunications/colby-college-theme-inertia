<?php
use BoxyBird\Inertia\Inertia;

global $post;

$filtered_blocks = array_values(array_filter(
    parse_blocks($post->post_content),
    function ($block) {
        return !is_null($block['blockName'] ?? null);
    }
));

function get_structured_block_data($block, $index = 0) {
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

foreach ($filtered_blocks as $index => &$block) {
    $block['attrs']['data'] = get_structured_block_data($block, $index);
    $block = enrich_block_data($block, $index);
}
unset($block);

Inertia::render('Page/Show', [
    'id'     => $post->ID,
    'title'  => get_the_title($post->ID),
    'layout' => 'default',
    'blocks' => $filtered_blocks,
]);