<?php
use BoxyBird\Inertia\Inertia;

// require_once('helpers/prepare_data.php');

global $post;

$filtered_blocks = array_filter( parse_blocks($post->post_content), function( $block ) {
    return ! is_null( $block['blockName'] );
});

function get_structured_block_data($block, $index = 0) {

  $meta_id = !empty($block['attrs']['id'])
  ? 'block_' . $block['attrs']['id']
  : 'block_' . $index . '_' . md5(wp_json_encode($block['attrs']['data'] ?? []));

  acf_setup_meta($block['attrs']['data'] ?? [], $meta_id, true);

  $fields = get_fields($meta_id);

  acf_reset_meta($meta_id);

  return $fields ?: [];
}

function should_server_hydrate_carousel(array $data, int $index): bool {

  
  // $render_api = $data['render_api'] ?? false;
  // $is_api = in_array($render_api, [true, 1, '1', 'true'], true);
  // dd( $index <= 1);
  // if (!$is_api) {
  //     return false;
  // }

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

function enrich_carousel_block(array $data, int $index): array {
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
  // dd($data);
  return $data;
}

function enrich_block_with_initial_data(array $block, int $index): array {
  $block_name = $block['blockName'] ?? '';
  $data = $block['attrs']['data'] ?? [];

  if ($block_name === 'acf/carousel' || $block_name === 'acf/article-section') {
      $block['attrs']['data'] = enrich_carousel_block($data, $index);
  }

  return $block;
}

foreach ($filtered_blocks as $index => &$block) {
  $block['attrs']['data'] = get_structured_block_data($block);
  $block = enrich_block_with_initial_data($block, $index);
}

unset($block);

// dd($filtered_blocks);

Inertia::render('Page/Show', [
  'id'     => $post->ID,
  'title'  => get_the_title($post->ID),
  'layout' => 'default',
  'blocks' => $filtered_blocks,
]);
