<?php
use BoxyBird\Inertia\Inertia;

require_once('helpers/prepare_data.php');

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

foreach ($filtered_blocks as &$block) {
  $block['attrs']['data'] = get_structured_block_data($block);
}

// dd($filtered_blocks);

Inertia::render('Page/Show', [
  'id'     => $post->ID,
  'title'  => get_the_title($post->ID),
  'layout' => 'default',
  'blocks' => $filtered_blocks,
]);
