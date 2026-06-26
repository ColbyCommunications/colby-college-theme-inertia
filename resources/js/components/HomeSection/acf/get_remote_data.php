<?php

if (!function_exists('colby_block_home_section_is_truthy')) {
    function colby_block_home_section_is_truthy($value): bool
    {
        return in_array($value, [true, 1, '1', 'true'], true);
    }
}

if (!function_exists('colby_block_home_section_get_cached_remote_json')) {
    function colby_block_home_section_get_cached_remote_json(string $cache_key, string $url, int $ttl = 300): array
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

if (!function_exists('colby_block_home_section_get_news_endpoint')) {
    function colby_block_home_section_get_news_endpoint(array $data): string
    {
        $per_page = (int) ($data['per_page'] ?? $data['perPage'] ?? 3);

        if ($per_page <= 0) {
            $per_page = 3;
        }

        switch ($data['api'] ?? '') {
            case 'Arts':
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=' . $per_page . '&categories=8&_embed=1';

            case 'Alumni':
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=' . $per_page . '&categories=6&_embed=1';

            case 'AI':
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=' . $per_page . '&categories=9&_embed=1';

            case 'people':
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=' . $per_page . '&tags=569&_embed=1';

            default:
                return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=' . $per_page . '&categories=6&_embed=1';
        }
    }
}

if (!function_exists('colby_block_home_section_decode')) {
    function colby_block_home_section_decode(?string $value): string
    {
        return html_entity_decode((string) $value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
}

if (!function_exists('colby_block_home_section_normalize_news_items')) {
    function colby_block_home_section_normalize_news_items(array $items, array $data): array
    {
        $cta = $data['cta'] ?? 'Read Story';

        return array_map(function ($item) use ($cta) {
            $og_image = $item['yoast_head_json']['og_image'][0] ?? [];
            $og_image_url = $og_image['url'] ?? '';
            $og_description = $item['yoast_head_json']['og_description'] ?? '';

            return [
                'id' => $item['id'] ?? null,
                'image' => $og_image_url
                    ? [
                        'src' => $og_image_url,
                        'alt' => $og_description,
                        'height' => $og_image['height'] ?? null,
                        'width' => $og_image['width'] ?? null,
                    ]
                    : null,
                'subheading' => $item['post-meta-fields']['primary_category'] ?? '',
                'heading' => colby_block_home_section_decode($item['title']['rendered'] ?? ''),
                'paragraph' => colby_block_home_section_decode($item['post-meta-fields']['summary'][0] ?? ''),
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

if (!function_exists('colby_block_home_section_get_news_items')) {
    function colby_block_home_section_get_news_items(array $news): array
    {
        $news['api'] = $news['api'] ?? 'Alumni';
        $news['per_page'] = $news['per_page'] ?? $news['perPage'] ?? 3;

        $per_page = (int) $news['per_page'];

        if ($per_page <= 0) {
            $per_page = 3;
        }

        $endpoint = colby_block_home_section_get_news_endpoint($news);

        if ($endpoint === '') {
            return [];
        }

        $cache_key = 'colby_block_home_section_news_' . md5($endpoint);
        $items = colby_block_home_section_get_cached_remote_json($cache_key, $endpoint, 300);

        $items = array_slice($items, 0, $per_page);

        return colby_block_home_section_normalize_news_items($items, $news);
    }
}

if (!function_exists('colby_block_home_section_get_image')) {
    function colby_block_home_section_get_image(int $post_id): ?array
    {
        $thumbnail_id = get_post_thumbnail_id($post_id);

        if (!$thumbnail_id) {
            return null;
        }

        return [
            'id' => $thumbnail_id,
            'src' => get_the_post_thumbnail_url($post_id, 'Rectangle'),
            'url' => get_the_post_thumbnail_url($post_id, 'Rectangle'),
            'alt' => get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true) ?: get_the_title($post_id),
            'sizes' => [
                'desktop' => get_the_post_thumbnail_url($post_id, 'Rectangle'),
                'mobile' => get_the_post_thumbnail_url($post_id, 'Rectangle_mobile'),
                'Rectangle' => get_the_post_thumbnail_url($post_id, 'Rectangle'),
                'Rectangle_mobile' => get_the_post_thumbnail_url($post_id, 'Rectangle_mobile'),
            ],
        ];
    }
}

if (!function_exists('colby_block_home_section_normalize_event')) {
    function colby_block_home_section_normalize_event(WP_Post $post): array
    {
        $post_id = $post->ID;

        $start_date = function_exists('get_field')
            ? get_field('start_date', $post_id)
            : '';

        $end_date = function_exists('get_field')
            ? get_field('end_date', $post_id)
            : '';

        $date_label = $start_date ?: get_the_date('M j, Y', $post_id);

        return [
            'id' => $post_id,
            'post' => [
                'ID' => $post_id,
                'post_title' => get_the_title($post_id),
                'post_name' => $post->post_name,
                'post_type' => $post->post_type,
                'post_date' => $post->post_date,
            ],
            'image' => colby_block_home_section_get_image($post_id),
            'subheading' => $date_label,
            'heading' => get_the_title($post_id),
            'paragraph' => get_the_excerpt($post_id),
            'url' => get_permalink($post_id),
            'buttons' => [
                [
                    'button' => [
                        'url' => get_permalink($post_id),
                        'title' => 'Learn More',
                        'target' => '',
                        'type' => 'light',
                        'size' => 'small',
                    ],
                ],
            ],
            'start_date' => $start_date,
            'end_date' => $end_date,
        ];
    }
}

if (!function_exists('colby_block_home_section_get_recent_events')) {
    function colby_block_home_section_get_recent_events(int $limit = 3): array
    {
        $cache_key = 'colby_block_home_section_recent_events_' . $limit;

        $cached = get_transient($cache_key);

        if ($cached !== false && is_array($cached)) {
            return $cached;
        }

        $posts = get_posts([
            'post_type' => 'events',
            'posts_per_page' => $limit,
            'post_status' => 'publish',
            'orderby' => 'date',
            'order' => 'DESC',
            'no_found_rows' => true,
        ]);

        $items = array_map(
            'colby_block_home_section_normalize_event',
            $posts
        );

        set_transient($cache_key, $items, 15 * MINUTE_IN_SECONDS);

        return $items;
    }
}

if (!function_exists('colby_block_home_section_get_remote_data')) {
    function colby_block_home_section_get_remote_data(array $data, int $index, array $block = []): array
    {
        /*
         * Hydrate nested ContextArticleGrid news.
         *
         * Twig equivalent:
         * {% include contextArticleGrid with {
         *   render_api: true,
         *   api: 'Alumni',
         *   per_page: 3,
         * } %}
         */
        $data['news'] = isset($data['news']) && is_array($data['news'])
            ? $data['news']
            : [];

        $news_render_api = $data['news']['render_api']
            ?? $data['news']['renderApi']
            ?? true;

        if (colby_block_home_section_is_truthy($news_render_api)) {
            $data['news']['api'] = $data['news']['api'] ?? 'Alumni';
            $data['news']['per_page'] = $data['news']['per_page']
                ?? $data['news']['perPage']
                ?? 3;

            $data['news']['items'] = colby_block_home_section_get_news_items($data['news']);
            $data['news']['hydrated_from_server'] = !empty($data['news']['items']);
            $data['news']['should_client_refresh'] = false;
        }

        /*
         * Hydrate nested ArticleGrid events when HomeSection type is Recent Events.
         *
         * Twig equivalent:
         * {% if type == 'Recent Events' %}
         *   Timber::get_posts({ post_type: 'events', posts_per_page: 3 })
         * {% else %}
         *   events.items
         * {% endif %}
         */
        $data['events'] = isset($data['events']) && is_array($data['events'])
            ? $data['events']
            : [];

        $type = $data['type'] ?? '';

        if ($type === 'Recent Events') {
            $limit = (int) (
                $data['events']['posts_per_page']
                ?? $data['events']['per_page']
                ?? $data['events']['perPage']
                ?? 3
            );

            if ($limit <= 0) {
                $limit = 3;
            }

            $data['events']['items'] = colby_block_home_section_get_recent_events($limit);
            $data['events']['hydrated_from_server'] = !empty($data['events']['items']);
            $data['events']['should_client_refresh'] = false;
        }

        return $data;
    }
}