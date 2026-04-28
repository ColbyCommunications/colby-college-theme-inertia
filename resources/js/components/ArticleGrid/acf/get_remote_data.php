<?php


function get_image($image_orientation, $post_id) {
    $newImage = '';

    if (!empty($image_orientation)) {

        if ($image_orientation === 'rectangle') {
            $newImage = get_the_post_thumbnail_url($post_id, 'Landscape');
        } elseif ($image_orientation === 'square') {
                $newImage = get_the_post_thumbnail_url($post_id, 'Square');
        } elseif ($image_orientation === 'portrait') {
            $newImage = get_the_post_thumbnail_url($post_id, 'Portrait');
        }
    }
}

if (!function_exists('colby_block_article_grid_is_truthy')) {
    function colby_block_article_grid_is_truthy($value): bool
    {
        return in_array($value, [true, 1, '1', 'true'], true);
    }
}

if (!function_exists('colby_block_article_grid_strip_html_preserve_emphasis')) {
    function colby_block_article_grid_strip_html_preserve_emphasis(string $html): string
    {
        return preg_replace('/<(?!\/?(i|em)\b)[^>]+>/i', '', $html) ?? '';
    }
}

if (!function_exists('colby_block_article_grid_truncate')) {
    function colby_block_article_grid_truncate(string $text, int $length = 120): string
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

if (!function_exists('colby_block_article_grid_format_date')) {
    function colby_block_article_grid_format_date(string $date_string): string
    {
        $timestamp = strtotime($date_string);

        if (!$timestamp) {
            return '';
        }

        return wp_date('M d, Y', $timestamp);
    }
}

if (!function_exists('colby_block_article_grid_get_cached_remote_json')) {
    function colby_block_article_grid_get_cached_remote_json(string $cache_key, string $url, int $ttl = 300): array
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

if (!function_exists('colby_block_article_grid_matches_external_filter')) {
    function colby_block_article_grid_matches_external_filter(array $item, string $external_media_api): bool
    {
        switch ($external_media_api) {
            case 'all_media':
                return true;

            case 'president':
                if (empty($item['tags']) || !is_array($item['tags'])) {
                    return false;
                }

                foreach ($item['tags'] as $tag) {
                    if (($tag['name'] ?? '') === 'president') {
                        return true;
                    }
                }

                return false;

            case 'highlight':
                if (empty($item['tags']) || !is_array($item['tags'])) {
                    return false;
                }

                foreach ($item['tags'] as $tag) {
                    if (($tag['name'] ?? '') === 'editors-pick') {
                        return true;
                    }
                }

                return false;

            default:
                return false;
        }
    }
}

if (!function_exists('colby_block_article_grid_fetch_external_items')) {
    function colby_block_article_grid_fetch_external_items(array $data): array
    {
        $endpoint = 'https://news.colby.edu/wp-json/custom/v1/external-posts';
        $cache_key = 'colby_block_article_grid_external_' . md5($endpoint);

        $items = colby_block_article_grid_get_cached_remote_json($cache_key, $endpoint, 300);

        if (!is_array($items)) {
            return [];
        }

        $external_media_api = $data['external_media_api'] ?? 'all_media';
        $range = (int) ($data['range'] ?? 6);

        $filtered = array_filter($items, function ($item) use ($external_media_api) {
            return colby_block_article_grid_matches_external_filter($item, $external_media_api);
        });

        $normalized = array_map(function ($item) {
            $title = colby_block_article_grid_strip_html_preserve_emphasis($item['title']['rendered'] ?? '');
            $content = colby_block_article_grid_strip_html_preserve_emphasis($item['content']['rendered'] ?? '');
            $summary = colby_block_article_grid_truncate($content, 120);

            return [
                'title' => [
                    'rendered' => $title,
                ],
                'summary' => $summary,
                'url' => $item['external_url'] ?? '#',
                'image' => [
                    'src' => $item['image'] ?? '',
                    'alt' => $item['taxonomy'][0]['name'] ?? '',
                ],
            ];
        }, array_values($filtered));

        return array_slice($normalized, 0, $range);
    }
}

if (!function_exists('colby_block_article_grid_build_internal_summary')) {
    function colby_block_article_grid_build_internal_summary(int $post_id): string
    {
        $excerpt = get_the_excerpt($post_id);
        $excerpt = colby_block_article_grid_strip_html_preserve_emphasis((string) $excerpt);
        $excerpt = trim($excerpt);

        if ($excerpt !== '') {
            return colby_block_article_grid_truncate($excerpt, 120);
        }

        $post = get_post($post_id);
        if (!$post) {
            return '';
        }

        $blocks = parse_blocks($post->post_content);

        foreach ($blocks as $block) {
            $block_name = $block['blockName'] ?? '';
            $attrs_data = $block['attrs']['data'] ?? [];

            if (strpos($block_name, 'paragraph') !== false && !empty($attrs_data['paragraph_text'])) {
                $text = colby_block_article_grid_strip_html_preserve_emphasis((string) $attrs_data['paragraph_text']);
                $text = trim($text);

                if ($text !== '') {
                    return colby_block_article_grid_truncate($text, 120);
                }
            }
        }

        return '';
    }
}

if (!function_exists('colby_block_article_grid_fetch_internal_items')) {
    function colby_block_article_grid_fetch_internal_items(array $data): array
    {
        $category = (int) ($data['render_posts_category'] ?? 1);
        $post_limit = (int) ($data['post_limit'] ?? -1);

        $query_args = [
            'post_type'           => 'post',
            'post_status'         => 'publish',
            'cat'                 => $category,
            'posts_per_page'      => $post_limit === -1 ? -1 : $post_limit,
            'ignore_sticky_posts' => true,
            'no_found_rows'       => true,
        ];

        $query = new WP_Query($query_args);

        if (!$query->have_posts()) {
            return [];
        }

        $normalized = [];

        foreach ($query->posts as $post_obj) {
            $post_id = $post_obj->ID;
            
            $thumb_src = get_image($data['image_orientation'], $post_id);
            $title = get_the_title($post_id);
            $normalized[] = [
                'title' => [
                    'rendered' => $title,
                ],
                'heading' => $title,
                'subheading' => colby_block_article_grid_format_date(get_the_date('c', $post_id)),
                'paragraph' => colby_block_article_grid_build_internal_summary($post_id),
                'date' => colby_block_article_grid_format_date(get_the_date('c', $post_id)),
                'post-meta-fields' => [
                    'summary' => colby_block_article_grid_build_internal_summary($post_id),
                ],
                'url' => get_permalink($post_id),
                'image' => [
                    'src' => $thumb_src,
                    'alt' => $thumb_id ? (get_post_meta($thumb_id, '_wp_attachment_image_alt', true) ?: '') : '',
                ],
            ];
        }

        wp_reset_postdata();

        return $normalized;
    }
}

if (!function_exists('colby_block_article_grid_get_remote_data')) {
    function colby_block_article_grid_get_remote_data(array $data, int $index, array $block = []): array
    {
        $method = $data['display_posts_method'] ?? 'internal';

        if ($method === 'manual') {
            return $data;
        }

        if ($method === 'api') {
            $items = colby_block_article_grid_fetch_external_items($data);

            $data['initial_items'] = $items;
            $data['initial_visible_count'] = count($items);
            $data['hydrated_from_server'] = !empty($items);
            $data['should_client_refresh'] = false;

            return $data;
        }

        if ($method === 'internal') {
            $items = colby_block_article_grid_fetch_internal_items($data);

            $data['initial_items'] = $items;
            $data['initial_visible_count'] = 12;
            $data['hydrated_from_server'] = !empty($items);
            $data['should_client_refresh'] = false;

            return $data;
        }

        return $data;
    }
}