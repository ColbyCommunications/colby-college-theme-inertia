<?php
use BoxyBird\Inertia\Inertia;

global $wp_query;
$q = get_search_query();
$results = array_map(function ($p) {
  return [
    'id'    => $p->ID,
    'title' => get_the_title($p->ID),
    'link'  => get_permalink($p->ID),
    'type'  => get_post_type($p->ID),
  ];
}, $wp_query->posts);

Inertia::render('Search/Index', [
  'query'   => $q,
  'results' => $results,
]);
