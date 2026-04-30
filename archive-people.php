<?php

use BoxyBird\Inertia\Inertia;

$query = new WP_Query([
    'post_type'      => 'people',
    'posts_per_page' => -1,
    'orderby'        => 'title',
    'order'          => 'ASC',
    'post_status'    => 'publish',
]);

$people = array_map(function ($post) {
    $thumbnail_id = get_post_thumbnail_id($post->ID);
    $thumbnail = $thumbnail_id
        ? wp_get_attachment_image_url($thumbnail_id, 'Square_mobile')
        : '';

    return [
        'id'             => $post->ID,
        'thumbnail'      => $thumbnail,
        'post_title'     => get_the_title($post->ID),
        'post_name'      => $post->post_name,
        'business_title' => get_post_meta($post->ID, 'business_title', true),
        'department'     => get_post_meta($post->ID, 'department', true),
    ];
}, $query->posts);

wp_reset_postdata();

$people_menu = wp_get_nav_menu_items('People Menu');

$people_menu_items = array_map(function ($item) {
    return [
        'title' => $item->title,
        'url'   => $item->url,
    ];
}, $people_menu ?: []);


Inertia::render('People/Show', [
    'hero' => [
        'subheading' => 'People Directory',
        'heading'    => 'Together, We Are Creating the Future',
        'paragraph'  => 'The Colby community is comprised of scholars, entrepreneurs, and innovators that shape the world.',
    ],
    'people' => $people,
    'peopleMenu' => [
        'heading' => 'People',
        'items'   => $people_menu_items,
    ],
]);