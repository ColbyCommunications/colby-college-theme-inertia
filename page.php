<?php
use BoxyBird\Inertia\Inertia;

require_once('helpers/prepare_data.php');

global $post;

$blocks = prepare_data(parse_blocks($post->post_content));

Inertia::render('Page/Show', [
  'id'     => $post->ID,
  'title'  => get_the_title($post->ID),
  'blocks' => $blocks,
]);
