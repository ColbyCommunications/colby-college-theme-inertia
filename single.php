<?php
use BoxyBird\Inertia\Inertia;

global $post;

$content = apply_filters('the_content', get_the_content(null, false, $post->ID));
$acf = function_exists('get_fields') ? (get_fields($post->ID) ?: []) : [];

Inertia::render('Post/Show', [
  'id'      => $post->ID,
  'title'   => get_the_title($post->ID),
  'content' => $content,
  'image'   => get_the_post_thumbnail_url($post->ID, 'full'),
  'date'    => get_the_date('', $post->ID),
  'author'  => get_the_author_meta('display_name', $post->post_author),
  'acf'     => $acf,
]);
