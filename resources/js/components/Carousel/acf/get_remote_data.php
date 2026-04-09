<?php

function should_server_hydrate_carousel(array $data, int $index): bool {
    $render_api = $data['render_api'] ?? false;
    $is_api = in_array($render_api, [true, 1, '1', 'true'], true);

    if (!$is_api) {
        return false;
    }

    return $data['render_api'];
}
  
function get_carousel_api_url(array $data): ?string {
    switch ($data['api'] ?? '') {
        case 'Latest News':
            return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&tags=561&_embed=1';
        case 'Academic News':
            return 'https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&categories=8,12,14,15&_embed=1';
        case 'Faculty Accomplishments':
            return 'https://news.colby.edu/wp-json/wp/v2/external_post?story_type_slug=faculty-accomplishments&per_page=5&_embed=1';
        default:
            return null;
    }
}
  
function get_cached_remote_json(string $cache_key, string $url, int $ttl = 300): array {
    $cached = get_transient($cache_key);

    if ($cached !== false) {
        return $cached;
    }

    $response = wp_remote_get($url, [
        'timeout' => 5,
        'headers' => [
            'Accept' => 'application/json',
        ],
    ]);

    // dd($response);

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
  
function normalize_faculty_carousel_items(array $items): array {
    return array_map(function ($item) {
        $title = wp_strip_all_tags($item['title']['rendered'] ?? '', true);
        $content = wp_strip_all_tags($item['content']['rendered'] ?? '', true);
        $summary = mb_substr(trim($content), 0, 120);
        if ($summary !== '') {
            $summary .= '...';
        }

        return [
            'yoast_head_json' => [
                'og_image' => [
                    ['url' => ''],
                ],
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

function enrich_remote_data(array $data, int $index): array {
    if (!should_server_hydrate_carousel($data, $index)) {
        return $data;
    }

    $url = get_carousel_api_url($data);

    if (!$url) {
        return $data;
    }

    $items = get_cached_remote_json('carousel_' . md5($url), $url, 300);

    if (($data['api'] ?? '') === 'Faculty Accomplishments') {
        $items = normalize_faculty_carousel_items($items);
    }

    $data['initial_items'] = $items;
    $data['hydrated_from_server'] = !empty($items);
    $data['should_client_refresh'] = false;
    return $data;
}



if (!function_exists('colby_block_carousel_get_remote_data')) {
    function colby_block_carousel_get_remote_data(array $block_data, int $index, array $block = []): array
    {
        $data = enrich_remote_data($block_data, $index);
        return $data;
    }
}
