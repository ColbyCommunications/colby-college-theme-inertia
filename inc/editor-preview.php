<?php

if (!function_exists('colby_vue_mapped_blocks')) {
    function colby_vue_mapped_blocks(): array
    {
        return [
            'acf/article-grid',
            'acf/article-section',
            'acf/carousel',
            'acf/dark-interstitial',
            'acf/facts-figures',
            'acf/hero',
            'acf/home-hero',
            'acf/overlay-hero',
            'acf/section-nav',
            'acf/featured-post',
            'acf/testimonial-carousel',
            'acf/full-bleed-image',
            'acf/related-content',
            'acf/hw-image-section',
            'acf/list-section',
            'acf/list-context',
            'acf/stat-group',
            'acf/media-context',
            'acf/context-article-grid',
            'acf/table',
            'acf/paragraph',
            'acf/accordion',
            'acf/advanced-accordion',
            'acf/people-grid',
            'acf/embed',
        ];
    }
}

if (!function_exists('colby_is_vue_mapped_block')) {
    function colby_is_vue_mapped_block(string $block_name): bool
    {
        static $lookup = null;

        if ($lookup === null) {
            $lookup = array_fill_keys(colby_vue_mapped_blocks(), true);
        }

        return isset($lookup[$block_name]);
    }
}

if (!function_exists('colby_is_block_renderer_rest_request')) {
    function colby_is_block_renderer_rest_request(): bool
    {
        $candidates = [];

        if (isset($_REQUEST['rest_route'])) {
            $candidates[] = (string) wp_unslash($_REQUEST['rest_route']);
        }

        if (isset($_SERVER['REQUEST_URI'])) {
            $candidates[] = (string) wp_unslash($_SERVER['REQUEST_URI']);
        }

        foreach ($candidates as $candidate) {
            if ($candidate !== '' && str_contains($candidate, '/wp/v2/block-renderer/')) {
                return true;
            }
        }

        return false;
    }
}

if (!function_exists('colby_should_install_vue_preview_callback')) {
    function colby_should_install_vue_preview_callback(): bool
    {
        return is_admin() || colby_is_block_renderer_rest_request();
    }
}

if (!function_exists('colby_render_vue_block_preview')) {
    function colby_render_vue_block_preview($block, $content = '', $is_preview = false, $post_id = 0): void
    {
        if (!colby_should_install_vue_preview_callback()) {
            echo (string) $content;
            return;
        }

        $block_name = $block['name'] ?? '';

        if (!$block_name || !colby_is_vue_mapped_block($block_name)) {
            echo (string) $content;
            return;
        }

        $normalized_block = [
            'blockName' => $block_name,
            'attrs' => [
                'id' => $block['id'] ?? '',
                'data' => is_array($block['data'] ?? null) ? $block['data'] : [],
            ],
        ];

        $prepared_block = colby_prepare_block_props($normalized_block, $block['id'] ?? '', 0);
        $payload = wp_json_encode([
            'blockName' => $block_name,
            'props' => $prepared_block['attrs']['data'] ?? [],
        ]);
        $wrapper_attributes = get_block_wrapper_attributes([
            'class' => 'vue-block-preview',
            'data-block-name' => $block_name,
            'data-vue-props' => $payload ?: '{}',
        ]);

        echo sprintf(
            '<div %1$s><div class="vue-block-preview__mount"></div></div>',
            $wrapper_attributes
        );
    }
}

if (!function_exists('colby_filter_vue_block_preview_metadata')) {
    function colby_filter_vue_block_preview_metadata(array $metadata): array
    {
        $block_name = $metadata['name'] ?? '';

        if (!$block_name || !colby_is_vue_mapped_block($block_name)) {
            return $metadata;
        }

        if (!colby_should_install_vue_preview_callback()) {
            return $metadata;
        }

        $metadata['acf'] = isset($metadata['acf']) && is_array($metadata['acf'])
            ? $metadata['acf']
            : [];
        $metadata['acf']['mode'] = 'preview';
        $metadata['acf']['renderCallback'] = 'colby_render_vue_block_preview';

        return $metadata;
    }
}

add_filter('block_type_metadata', 'colby_filter_vue_block_preview_metadata', 5);
