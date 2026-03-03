<?php
/**
 * Template Name: Page with Sidebar
 */

use BoxyBird\Inertia\Inertia;

require_once __DIR__ . '/helpers/sidebar_data.php';

global $post;

$is_post = get_post_type($post) === 'post';

if ($is_post) {
  $template_subheading = get_the_date('M d, Y', $post->ID);
  $template_heading = get_the_title($post->ID);
  $template_paragraph = has_excerpt($post->ID) ? get_the_excerpt($post->ID) : null;
  $template_date_bool = true;
} else {
  $template_subheading = get_the_title($post->ID);
  $template_heading = function_exists('get_field') ? (get_field('heading', $post->ID) ?: '') : '';
  $template_paragraph = function_exists('get_field') ? (get_field('paragraph', $post->ID) ?: '') : '';
  $template_date_bool = false;
}

$hero_type = function_exists('get_field') ? (get_field('hero_type', $post->ID) ?: 'default') : 'default';
$image = function_exists('get_field') ? get_field('image', $post->ID) : null;
$buttons = function_exists('get_field') ? (get_field('buttons', $post->ID) ?: []) : [];
$align = function_exists('get_field') ? (get_field('align', $post->ID) ?: 'default') : 'default';
$image_orientation = function_exists('get_field') ? (get_field('image_orientation', $post->ID) ?: 'square') : 'square';

$hero = null;
if ($hero_type === 'overlay') {
  $hero = [
    'type' => 'overlay',
    'props' => [
      'size' => 'medium',
      'subheading' => $template_subheading,
      'heading' => $template_heading,
      'paragraph' => $template_paragraph,
      'image' => $image,
      'buttons' => $buttons,
      'fromPage' => true,
    ],
  ];
} elseif ($hero_type !== 'none') {
  $hero = [
    'type' => 'default',
    'props' => [
      'subheading' => $template_subheading,
      'heading' => $template_heading,
      'paragraph' => $template_paragraph,
      'date' => $template_date_bool,
      'align' => $align,
      'image' => $image,
      'buttons' => $buttons,
      'imageOrientation' => $image_orientation === 'portrait' ? 'portrait' : 'landscape',
    ],
  ];
}

$sidebar = $is_post ? null : colby_sidebar_build_data($post);
$content = apply_filters('the_content', get_the_content(null, false, $post->ID));

Inertia::render('Page/Show', [
  'id' => $post->ID,
  'title' => get_the_title($post->ID),
  'layout' => 'with-sidebar',
  'hero' => $hero,
  'sidebar' => $sidebar,
  'content' => $content,
  'isPost' => $is_post,
]);
