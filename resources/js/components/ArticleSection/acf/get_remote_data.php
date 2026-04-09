<?php

if (!function_exists('colby_block_article_section_is_truthy')) {
    function colby_block_article_section_is_truthy($value): bool
    {
        return in_array($value, [true, 1, '1', 'true'], true);
    }
}

if (!function_exists('colby_block_article_section_get_cached_remote_json')) {
    function colby_block_article_section_get_cached_remote_json(string $cache_key, string $url, int $ttl = 300): array
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

if (!function_exists('colby_block_article_section_strip_html_preserve_emphasis')) {
    function colby_block_article_section_strip_html_preserve_emphasis(string $html): string
    {
        return preg_replace('/<(?!\/?(i|em)\b)[^>]+>/i', '', $html) ?? '';
    }
}

if (!function_exists('colby_block_article_section_truncate')) {
    function colby_block_article_section_truncate(string $text, int $length = 120): string
    {
        $text = trim($text);

        if ($text === '') {
            return '';
        }

        if (mb_strlen($text) <= $length) {
            return $text;
        }

        return mb_substr($text, 0, $length) . '...';
    }
}

if (!function_exists('colby_block_article_section_get_endpoint')) {
    function colby_block_article_section_get_endpoint(array $data): ?string
    {
        switch ($data['api'] ?? '') {
            case 'Academic News':
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&categories=8,12,14,15&_embed=1';

            case 'Faculty Accomplishments':
                return 'https://news.colby.edu/wp-json/wp/v2/external_post?story_type_slug=faculty-accomplishments&per_page=5&_embed=1';

            default:
                return null;
        }
    }
}

if (!function_exists('colby_block_article_section_normalize_academic_items')) {
    function colby_block_article_section_normalize_academic_items(array $items): array
    {
        return array_map(function ($item) {
            return [
                'yoast_head_json' => [
                    'og_image' => [
                        [
                            'url' => $item['yoast_head_json']['og_image'][0]['url'] ?? '',
                            'src' => $item['yoast_head_json']['og_image'][0]['url'] ?? '',
                        ],
                    ],
                    'og_description' => $item['yoast_head_json']['og_description'] ?? '',
                ],
                'title' => [
                    'rendered' => $item['title']['rendered'] ?? '',
                ],
                'post-meta-fields' => [
                    'primary_category' => $item['post-meta-fields']['primary_category'] ?? '',
                    'summary' => [
                        $item['post-meta-fields']['summary'][0] ?? '',
                    ],
                ],
                'guid' => [
                    'rendered' => $item['guid']['rendered'] ?? '#',
                ],
            ];
        }, $items);
    }
}

if (!function_exists('colby_block_article_section_normalize_faculty_items')) {
    function colby_block_article_section_normalize_faculty_items(array $items): array
    {
        return array_map(function ($item) {
            $title = colby_block_article_section_strip_html_preserve_emphasis($item['title']['rendered'] ?? '');
            $content = colby_block_article_section_strip_html_preserve_emphasis($item['content']['rendered'] ?? '');
            $summary = colby_block_article_section_truncate($content, 120);

            return [
                'yoast_head_json' => [
                    'og_image' => [
                        [
                            'url' => '',
                            'src' => '',
                        ],
                    ],
                    'og_description' => '',
                ],
                'title' => [
                    'rendered' => $title,
                ],
                'post-meta-fields' => [
                    'primary_category' => '',
                    'summary' => [$summary],
                ],
                'guid' => [
                    'rendered' => $item['external_url'] ?? '#',
                ],
            ];
        }, $items);
    }
}

if (!function_exists('colby_block_article_section_get_remote_data')) {
    function colby_block_article_section_get_remote_data(array $data, int $index, array $block = []): array
    {
        $render_api = $data['render_api'] ?? false;

        if (!colby_block_article_section_is_truthy($render_api)) {
            return $data;
        }

        $endpoint = colby_block_article_section_get_endpoint($data);

        if (!$endpoint) {
            return $data;
        }

        $cache_key = 'colby_block_article_section_' . md5($endpoint);
        $items = colby_block_article_section_get_cached_remote_json($cache_key, $endpoint, 300);

        if (($data['api'] ?? '') === 'Faculty Accomplishments') {
            $items = colby_block_article_section_normalize_faculty_items($items);
        } elseif (($data['api'] ?? '') === 'Academic News') {
            $items = colby_block_article_section_normalize_academic_items($items);
        }

        $data['initial_items'] = is_array($items) ? $items : [];
        $data['hydrated_from_server'] = !empty($data['initial_items']);
        $data['should_client_refresh'] = false;

        return $data;
    }
}