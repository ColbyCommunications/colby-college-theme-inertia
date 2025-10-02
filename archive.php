<?php
use BoxyBird\Inertia\Inertia;

global $wp_query;
$items = array_map(function ($p) {
  return [
    'id'    => $p->ID,
    'title' => get_the_title($p->ID),
    'link'  => get_permalink($p->ID),
    'date'  => get_the_date('', $p->ID),
  ];
}, $wp_query->posts);

Inertia::render('Archive/Index', [
  'title' => get_the_archive_title(),
  'items' => $items,
]);
