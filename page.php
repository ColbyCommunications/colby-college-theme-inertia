<?php
use BoxyBird\Inertia\Inertia;

require_once('helpers/prepare_data.php');

global $post;

$filtered_blocks = array_filter( parse_blocks($post->post_content), function( $block ) {
    return ! is_null( $block['blockName'] );
});

// dd($filtered_blocks);

$blocks = prepare_data($filtered_blocks);



Inertia::render('Page/Show', [
  'id'     => $post->ID,
  'title'  => get_the_title($post->ID),
  'layout' => 'default',
  'blocks' => $blocks,
]);
