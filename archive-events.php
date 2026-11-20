<?php

use BoxyBird\Inertia\Inertia;

/*
 * --------------------------------------------------------------------------
 * Events
 * --------------------------------------------------------------------------
 */

$query = new WP_Query([
    'post_type'      => 'events',
    'post_status'    => 'publish',
    'posts_per_page' => 6,
    'meta_key'       => 'event_date', // The custom field key for the start date
    'orderby'        => 'meta_value',       // Order by the meta field value
    'order'          => 'ASC',              // Show closest upcoming events first
    'meta_query'     => array(
        array(
            'key'     => 'event_date',
            'value'   => date('Y-m-d'),
            'compare' => '>=',              // Greater than or equal to today
            'type'    => 'DATE',            // Tells WordPress to treat values as dates
        ),
    ),
]);



$events = array_map(function ($post) {
    $post_id = $post->ID;

    /*
     * Event date.
     *
     * This assumes event_date is stored as post meta / ACF.
     */
    $event_date = get_post_meta(
        $post_id,
        'event_date',
        true
    );

    /*
     * Featured image.
     */
    $thumbnail_id = get_post_thumbnail_id($post_id);

    $image = null;

    if ($thumbnail_id) {
        $image_url = wp_get_attachment_image_url(
            $thumbnail_id,
            'Landscape'
        );

        $image_alt = get_post_meta(
            $thumbnail_id,
            '_wp_attachment_image_alt',
            true
        );

        if ($image_url) {
            $image = [
                'src' => $image_url,
                'url' => $image_url,
                'alt' => $image_alt ?: get_the_title($post_id),
            ];
        }
    }

    /*
     * ArticleGrid-friendly normalized item.
     */
    return [
        'id' => $post_id,

        'event_date' => $event_date,

        'subheading' => $event_date
            ? date_i18n(
                'F j, Y',
                strtotime($event_date)
            )
            : '',

        'heading' => get_the_title($post_id),

        'paragraph' => has_excerpt($post_id)
            ? get_the_excerpt($post_id)
            : '',

        'image' => $image,

        'buttons' => [
            [
                'button' => [
                    'title' => 'View Event',
                    'url' => get_permalink($post_id),
                    'target' => '',
                ],
            ],
        ],
    ];
}, $query->posts);



wp_reset_postdata();



/*
 * --------------------------------------------------------------------------
 * Events Menu
 * --------------------------------------------------------------------------
 */

$events_menu = wp_get_nav_menu_items('Events Menu');

$events_menu_items = array_map(
    function ($item) {
        return [
            'id' => $item->ID,
            
            'link' => [ 'url' => $item->url, 'title' => $item->title,],
        ];
    },
    $events_menu ?: []
);


/*
 * --------------------------------------------------------------------------
 * Inertia
 * --------------------------------------------------------------------------
 */

Inertia::render('Events/Show', [
    'hero' => [
        'hero' => true,
        'size' => 'large',
        'heading' => 'Event Calendar',
        'align' => 'center',
    ],

    'eventsMenu' => [
        'heading' => 'Events',
        'items' => $events_menu_items,
    ],

    'events' => $events,
]);