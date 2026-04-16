<?php

if (!function_exists('colby_block_slug_from_name')) {
    function colby_block_slug_from_name(string $block_name): string
    {
        $parts = explode('/', $block_name, 2);

        return $parts[1] ?? '';
    }
}

if (!function_exists('colby_block_folder_from_slug')) {
    function colby_block_folder_from_slug(string $slug): string
    {
        $parts = preg_split('/[-_]/', $slug);

        $parts = array_map(function ($part) {
            return ucfirst($part);
        }, $parts);

        return implode('', $parts);
    }
}

if (!function_exists('colby_block_function_suffix_from_slug')) {
    function colby_block_function_suffix_from_slug(string $slug): string
    {
        return str_replace('-', '_', strtolower($slug));
    }
}

if (!function_exists('colby_block_helper_file_path')) {
    function colby_block_helper_file_path(string $block_name): string
    {
        $slug = colby_block_slug_from_name($block_name);
        $folder = colby_block_folder_from_slug($slug);

        return get_template_directory() . '/resources/js/components/' . $folder . '/acf/get_remote_data.php';
    }
}

if (!function_exists('colby_block_remote_data_function_name')) {
    function colby_block_remote_data_function_name(string $block_name): string
    {
        $slug = colby_block_slug_from_name($block_name);
        $suffix = colby_block_function_suffix_from_slug($slug);

        return 'colby_block_' . $suffix . '_get_remote_data';
    }
}

if (!function_exists('colby_block_meta_id')) {
    function colby_block_meta_id($block_identifier, $fallback, array $block_data): string
    {
        if (!empty($block_identifier)) {
            $identifier = (string) $block_identifier;

            return str_starts_with($identifier, 'block_') ? $identifier : 'block_' . $identifier;
        }

        return 'block_' . $fallback . '_' . md5(wp_json_encode($block_data));
    }
}

if (!function_exists('colby_get_structured_block_data')) {
    function colby_get_structured_block_data(array $block, $reference = 0): array
    {
        $block_name = $block['blockName'] ?? '';

        if ($block_name === 'core/heading') {
            return [
                'heading' => str_replace(["\r", "\n"], '', $block['innerHTML'] ?? ''),
            ];
        }

        $attrs = isset($block['attrs']) && is_array($block['attrs']) ? $block['attrs'] : [];
        $block_data = isset($attrs['data']) && is_array($attrs['data']) ? $attrs['data'] : [];
        $meta_id = colby_block_meta_id($attrs['id'] ?? '', $reference, $block_data);

        acf_setup_meta($block_data, $meta_id, true);
        $fields = get_fields($meta_id);
        acf_reset_meta($meta_id);

        return $fields ?: [];
    }
}

if (!function_exists('colby_prepare_block_props')) {
    function colby_prepare_block_props(array $block, $reference = 0, int $remote_index = 0): array
    {
        $block_name = $block['blockName'] ?? '';

        if (!$block_name) {
            return $block;
        }

        $block['attrs'] = isset($block['attrs']) && is_array($block['attrs']) ? $block['attrs'] : [];
        $block['attrs']['data'] = colby_get_structured_block_data($block, $reference);

        $helper_file = colby_block_helper_file_path($block_name);

        if (!file_exists($helper_file)) {
            return $block;
        }

        require_once $helper_file;

        $function_name = colby_block_remote_data_function_name($block_name);

        if (is_callable($function_name)) {
            $block['attrs']['data'] = $function_name($block['attrs']['data'], $remote_index, $block);
        }

        return $block;
    }
}
