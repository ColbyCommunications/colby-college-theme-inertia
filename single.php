<?php
use BoxyBird\Inertia\Inertia;

global $post;

if (!$post) {
    return; 
}

function get_structured_block_data($block, $index = 0) {

  if ($block['blockName'] === 'core/heading' ) {
    return ['heading' => str_replace(array("\r", "\n"), '', $block['innerHTML'])];
  }

  $meta_id = !empty($block['attrs']['id'])
      ? 'block_' . $block['attrs']['id']
      : 'block_' . $index . '_' . md5(wp_json_encode($block['attrs']['data'] ?? []));
  

  acf_setup_meta($block['attrs']['data'] ?? [], $meta_id, true);
  $fields = get_fields($meta_id);
  acf_reset_meta($meta_id);

  return $fields ?: [];
}

$acf_data = [];

if ($post->post_type === 'people') {

  $people_menu = wp_get_nav_menu_items('People Menu');

  $people_menu_items = array_map(function ($item) {
      return [
          'title' => $item->title,
          'url'   => $item->url,
      ];
  }, $people_menu ?: []);


  $acf_data = [
      'phone' => get_field('phone', $post->ID),
      'email'        => get_field('email', $post->ID),
      'pronouns'     => get_field('pronouns', $post->ID),
      'title'     => get_field('title', $post->ID),
      'department'     => get_field('department', $post->ID),
      'curriculum_vitae'     => get_field('curriculum_vitae', $post->ID),
      'building'     => get_field('building', $post->ID),
      'office_hours'     => get_field('office_hours', $post->ID),
      'mailing_address'     => get_field('mailing_address', $post->ID),
      'fax'     => get_field('fax', $post->ID),
      'bio'     => get_field('bio', $post->ID),
      

      'hide_pronouns'     => (int) get_field('hide_pronouns', $post->ID),
      'hide_phone_number'     => (int) get_field('hide_phone_number', $post->ID),
      'hide_phone_number'     => (int) get_field('hide_phone_number', $post->ID),
      'hide_fax'     => (int) get_field('hide_fax', $post->ID),
      'hide_cv'     => (int) get_field('hide_cv', $post->ID),
      'hide_department'     => (int) get_field('hide_department', $post->ID),
      'hide_office_hours'     => (int) get_field('hide_office_hours', $post->ID),
      'hide_bio'     => (int) get_field('hide_bio', $post->ID),
      'hide_location'     => (int) get_field('hide_location', $post->ID),
      'hide_photo'     => (int) get_field('hide_photo', $post->ID),
      'hide_email'     => (int) get_field('hide_email', $post->ID),
      'hide_courses'     => (int) get_field('hide_courses', $post->ID),
  ];

  $current_courses = json_decode(stripslashes(get_field('current_courses', $post->ID)));

  $acf_data['current_courses'] = array_map(function($i) {
    return [
        'title'   => $i->title,
        'columns' => [
            [
                'link_or_text' => 'text',
                'column' => $i->crs,
            ],
            [
                'link_or_text' => 'text',
                'column' => $i->sec,
            ],
        ]
    ];
  }, $current_courses);


  return Inertia::render('Person/Show', [
      'id'      => $post->ID,
      'title'   => get_the_title($post->ID),
      'content' => $content,
      'image'   => get_the_post_thumbnail_url($post->ID, 'Square'),
      'date'    => get_the_date('', $post->ID),
      'author'  => get_the_author_meta('display_name', $post->post_author),
      'acf'     => $acf_data,
      'peopleMenu' => [
          'heading' => 'People',
          'items'   => $people_menu_items,
      ],
  ]);
} else {

  $filtered_blocks = array_values(array_filter(
    parse_blocks($post->post_content),
    function ($block) {
        return !is_null($block['blockName'] ?? null);
    }
  ));

  foreach ($filtered_blocks as $index => &$block) {
      $block['attrs']['data'] = get_structured_block_data($block, $index);
  }
  unset($block);

  $thumbnail_id = get_post_thumbnail_id($post->ID);
  $thumbnail_url = get_the_post_thumbnail_url($post->ID, "Rectangle");
  $thumbnail_caption = get_the_post_thumbnail_caption($post->ID);

  $image = ['src' => $thumbnail_url, 'caption' => $thumbnail_caption, 'alt' => get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true)];


  // Post Template ACFs
  $post_fields = get_fields($post->ID);

  // dd($post_fields);

  Inertia::render('Post/Show', [
    'id'      => $post->ID,
    'title'   => get_the_title($post->ID),
    'image'   => $image,
    'date'    => get_the_date('', $post->ID),
    'author'  => get_the_author_meta('display_name', $post->post_author),
    'acf'     => $acf,
    'excerpt' => get_the_excerpt($post->ID),
    'blocks' => $filtered_blocks,
    'use_post_date' => $post_fields['use_post_date'],
  ]);
}
