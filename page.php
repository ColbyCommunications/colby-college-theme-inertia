<?php
use BoxyBird\Inertia\Inertia;

require_once('helpers/prepare_data.php');

global $post;

$filtered_blocks = array_filter( parse_blocks($post->post_content), function( $block ) {
    return ! is_null( $block['blockName'] );
});

// dd($filtered_blocks);

$blocks = prepare_data($filtered_blocks);

function colby_build_home_hero_preload_data(array $blocks): ?array {
  foreach ($blocks as $block) {
      if (
          !is_array($block) ||
          empty($block['blockName']) ||
          $block['blockName'] !== 'acf/home-hero'
      ) {
          continue;
      }

      $data = $block['attrs']['data'] ?? [];
      $image = $data['image'] ?? null;

      if (!$image || empty($image['src'])) {
          return null;
      }

      $original = $image['src'];

      $build_cdn_url = function ($width, $quality = 60) use ($original) {
          return 'https://colby.edu/cdn-cgi/image/width=' . intval($width) . ',quality=' . intval($quality) . '/' . ltrim($original, '/');
      };

      return [
          'href' => $build_cdn_url(1280, 60),
          'imagesrcset' => implode(', ', [
              $build_cdn_url(320, 60) . ' 320w',
              $build_cdn_url(640, 60) . ' 640w',
              $build_cdn_url(960, 60) . ' 960w',
              $build_cdn_url(1280, 60) . ' 1280w',
          ]),
          'imagesizes' => '100vw',
          'fetchpriority' => 'high',
      ];
  }

  return null;
}

$home_hero_preload = colby_build_home_hero_preload_data($blocks);


Inertia::render('Page/Show', [
  'id'     => $post->ID,
  'title'  => get_the_title($post->ID),
  'layout' => 'default',
  'blocks' => $blocks,
  'head' => [
    'preloadImage' => $home_hero_preload,
  ],
]);
