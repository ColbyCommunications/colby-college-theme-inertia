<?php
use BoxyBird\Inertia\Inertia;

require_once('helpers/prepare_data.php');

global $post;

$filtered_blocks = array_filter( parse_blocks($post->post_content), function( $block ) {
    return ! is_null( $block['blockName'] );
});

function get_structured_block_data($block) {
  // 1. Setup temporary metadata so ACF functions work
  acf_setup_meta($block['attrs']['data'], $block['attrs']['id'] ?? 'block_temp', true);
  
  // 2. Use get_fields() to get the fully hydrated, nested tree
  $fields = get_fields(); // This now returns repeaters as proper arrays of objects
  
  // 3. Clean up
  acf_reset_meta($block['attrs']['id'] ?? 'block_temp');
  
  return $fields;
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
