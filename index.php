<?php
use BoxyBird\Inertia\Inertia;

global $wp_query;

$posts = array_map(function ($p) {
  return [
    'id'      => $p->ID,
    'title'   => get_the_title($p->ID),
    'link'    => get_permalink($p->ID),
    'image'   => get_the_post_thumbnail_url($p->ID, 'large'),
    'excerpt' => get_the_excerpt($p->ID),
    'date'    => get_the_date('', $p->ID),
  ];
}, $wp_query->posts);

$pagination = [
  'current' => max(1, get_query_var('paged')),
  'total'   => (int) $wp_query->max_num_pages,
];

Inertia::render('Posts/Index', [
  'posts'      => $posts,
  'pagination' => $pagination,
]);
