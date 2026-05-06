<?php

if (!function_exists('colby_block_context_article_grid_is_truthy')) {
    function colby_block_context_article_grid_is_truthy($value): bool
    {
        return in_array($value, [true, 1, '1', 'true'], true);
    }
}

if (!function_exists('colby_block_context_article_grid_get_cached_remote_json')) {
    function colby_block_context_article_grid_get_cached_remote_json(string $cache_key, string $url, int $ttl = 300): array
    {
        $cached = get_transient($cache_key);

        if ($cached !== false) {
            return is_array($cached) ? $cached : [];
        }

        $response = wp_remote_get($url, [
            'timeout' => 8,
            'headers' => [
                'Accept' => 'application/json',
            ],
        ]);

        if (is_wp_error($response)) {
            return [];
        }

        $status = wp_remote_retrieve_response_code($response);

        if ($status < 200 || $status >= 300) {
            return [];
        }

        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        if (!is_array($data)) {
            return [];
        }

        set_transient($cache_key, $data, $ttl);

        return $data;
    }
}

if (!function_exists('colby_block_context_article_grid_get_endpoint')) {
    function colby_block_context_article_grid_get_endpoint(array $data): string
    {
        $per_page = $data['per_page'];

        switch ($data['api'] ?? '') {
            case 'Arts':
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=' . $per_page . '&categories=8&_embed=1';

            case 'Alumni':
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=' . $per_page . '&categories=6&_embed=1';
            
            case 'AI':
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=' . $per_page . '&categories=9&_embed=1';

            case 'people':
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=' . $per_page . '&tags=569&_embed=1';
        }
    }
}

if (!function_exists('colby_block_context_article_grid_decode')) {
    function colby_block_context_article_grid_decode(?string $value): string
    {
        return html_entity_decode((string) $value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
}

if (!function_exists('colby_block_context_article_grid_normalize_items')) {
    function colby_block_context_article_grid_normalize_items(array $items, array $data): array
    {   
        $cta = $data['cta'] ?? 'Read Story';

        return array_map(function ($item) use ($cta) {
            $og_image_url = $item['yoast_head_json']['og_image'][0]['url'] ?? '';
            $og_description = $item['yoast_head_json']['og_description'] ?? '';

            return [
                'id' => $item['id'] ?? null,
                'image' => $og_image_url
                    ? [
                        'src' => $og_image_url,
                        'alt' => $og_description,
                        'height' => $item['yoast_head_json']['og_image'][0]['height'],
                        'width' => $item['yoast_head_json']['og_image'][0]['width'],
                    ]
                    : null,
                'subheading' => $item['post-meta-fields']['primary_category'] ?? '',
                'heading' => colby_block_context_article_grid_decode($item['title']['rendered'] ?? ''),
                'paragraph' => colby_block_context_article_grid_decode($item['post-meta-fields']['summary'][0] ?? ''),
                'buttons' => [
                    [
                        'button' => [
                            'url' => $item['guid']['rendered'] ?? '#',
                            'title' => $cta,
                            'target' => '_blank',
                        ],
                    ],
                ],
            ];
        }, $items);
    }
}

if (!function_exists('colby_block_context_article_grid_get_remote_data')) {
    function colby_block_context_article_grid_get_remote_data(array $data, int $index, array $block = []): array
    {

        if ($data['api'] === 'manual') {
            // dd($data);
            return $data;
        }

        $render_api = $data['render_api'] ?? false;

        if (!colby_block_context_article_grid_is_truthy($render_api)) {
            return $data;
        }

        $per_page = $data['per_page'];
        $endpoint = colby_block_context_article_grid_get_endpoint($data);

        $cache_key = 'colby_block_context_article_grid_' . md5($endpoint);
        $items = colby_block_context_article_grid_get_cached_remote_json($cache_key, $endpoint, 300);

        $items = array_slice($items, 0, $per_page);

        $data['initial_items'] = colby_block_context_article_grid_normalize_items($items, $data);
        $data['hydrated_from_server'] = !empty($data['initial_items']);
        $data['should_client_refresh'] = false;

        return $data;
    }
}