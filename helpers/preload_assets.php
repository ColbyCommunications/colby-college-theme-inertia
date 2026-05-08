<?php

if (!function_exists('colby_preload_cdn_image_url')) {
  function colby_preload_cdn_image_url(string $source_url, int $width, int $quality): string
  {
    return sprintf(
      'https://www.colby.edu/cdn-cgi/image/width=%d,format=auto,quality=%d/%s',
      $width,
      $quality,
      $source_url
    );
  }
}

if (!function_exists('colby_preload_primary_domain')) {
  function colby_preload_primary_domain(): string
  {
    if (defined('PRIMARY_DOMAIN') && PRIMARY_DOMAIN) {
      return PRIMARY_DOMAIN;
    }

    if ('ON' === getenv('LANDO')) {
      return 'www.colby.edu';
    }

    return wp_parse_url(home_url(), PHP_URL_HOST) ?: '';
  }
}

if (!function_exists('colby_preload_normalize_image_source')) {
  function colby_preload_normalize_image_source($image): string
  {
    if (!is_array($image)) {
      return '';
    }

    $source = (string) ($image['url'] ?? $image['src'] ?? '');
    if ($source === '') {
      return '';
    }

    $primary_domain = colby_preload_primary_domain();
    if ('ON' === getenv('LANDO') && $primary_domain !== '') {
      $parts = wp_parse_url($source);

      if (is_array($parts) && !empty($parts['path'])) {
        return 'https://' . $primary_domain . $parts['path'];
      }
    }

    return $source;
  }
}

if (!function_exists('colby_preload_normalize_poster_source')) {
  function colby_preload_normalize_poster_source($image): string
  {
    if (!is_array($image)) {
      return '';
    }

    $source = (string) ($image['sizes']['Hero'] ?? $image['url'] ?? $image['src'] ?? '');
    if ($source === '') {
      return '';
    }

    $primary_domain = colby_preload_primary_domain();
    if ('ON' === getenv('LANDO') && $primary_domain !== '') {
      $parts = wp_parse_url($source);

      if (is_array($parts) && !empty($parts['path'])) {
        return 'https://' . $primary_domain . $parts['path'];
      }
    }

    return $source;
  }
}

if (!function_exists('colby_preload_responsive_image_resource')) {
  function colby_preload_responsive_image_resource($image, string $sizes = '(max-width: 767px) 100vw, 50vw'): ?array
  {
    $source = colby_preload_normalize_image_source($image);
    if ($source === '') {
      return null;
    }

    $srcset = [
      colby_preload_cdn_image_url($source, 320, 60) . ' 320w',
      colby_preload_cdn_image_url($source, 640, 60) . ' 640w',
      colby_preload_cdn_image_url($source, 960, 60) . ' 960w',
      colby_preload_cdn_image_url($source, 1280, 60) . ' 1280w',
    ];

    return [
      'href' => colby_preload_cdn_image_url($source, 320, 50),
      'as' => 'image',
      'imagesrcset' => implode(', ', $srcset),
      'imagesizes' => $sizes,
      'fetchpriority' => 'high',
    ];
  }
}

if (!function_exists('colby_preload_poster_image_resource')) {
  function colby_preload_poster_image_resource($image): ?array
  {
    $source = colby_preload_normalize_poster_source($image);
    if ($source === '') {
      return null;
    }

    $srcset = [
      colby_preload_cdn_image_url($source, 320, 60) . ' 320w',
      colby_preload_cdn_image_url($source, 640, 60) . ' 640w',
      colby_preload_cdn_image_url($source, 960, 60) . ' 960w',
      colby_preload_cdn_image_url($source, 1280, 60) . ' 1280w',
      colby_preload_cdn_image_url($source, 1920, 60) . ' 1920w',
    ];

    return [
      'href' => colby_preload_cdn_image_url($source, 640, 60),
      'as' => 'image',
      'imagesrcset' => implode(', ', $srcset),
      'imagesizes' => '100vw',
      'fetchpriority' => 'high',
    ];
  }
}

if (!function_exists('colby_preload_filter_resources')) {
  function colby_preload_filter_resources(array $resources): array
  {
    return array_values(array_filter($resources, function ($resource) {
      return is_array($resource) && !empty($resource['href']) && !empty($resource['as']);
    }));
  }
}

if (!function_exists('colby_preload_get_block_fields')) {
  function colby_preload_get_block_fields(array $block, string $path): array
  {
    $raw_data = $block['attrs']['data'] ?? [];
    if (!is_array($raw_data)) {
      return [];
    }

    if (
      !function_exists('acf_setup_meta')
      || !function_exists('get_fields')
      || !function_exists('acf_reset_meta')
    ) {
      return $raw_data;
    }

    $meta_id = !empty($block['attrs']['id'])
      ? 'block_' . $block['attrs']['id']
      : 'colby_preload_' . $path . '_' . md5(wp_json_encode($raw_data));

    acf_setup_meta($raw_data, $meta_id, true);
    $fields = get_fields($meta_id);
    acf_reset_meta($meta_id);

    return is_array($fields) ? $fields : [];
  }
}

if (!function_exists('colby_preload_resources_from_hero_block')) {
  function colby_preload_resources_from_hero_block(string $block_name, array $fields): array
  {
    if ($block_name === 'acf/home-hero') {
      $image = $fields['image'] ?? null;
      $video = $fields['video'] ?? '';

      if (!empty($video)) {
        return colby_preload_filter_resources([
          colby_preload_poster_image_resource($image),
        ]);
      }

      return colby_preload_filter_resources([
        colby_preload_responsive_image_resource($image, '100vw'),
      ]);
    }

    if ($block_name === 'acf/overlay-hero') {
      $image = $fields['image'] ?? null;
      $video_loop = $fields['videoLoop'] ?? $fields['video_loop'] ?? '';

      if ($video_loop !== '') {
        return colby_preload_filter_resources([
          colby_preload_poster_image_resource($image),
        ]);
      }

      return colby_preload_filter_resources([
        colby_preload_responsive_image_resource($image, '100vw'),
      ]);
    }

    if ($block_name === 'acf/hero') {
      if (!empty($fields['image']) && is_array($fields['image'])) {
        return colby_preload_filter_resources([
          colby_preload_responsive_image_resource(
            $fields['image'],
            '(max-width: 767px) 100vw, 50vw'
          ),
        ]);
      }

      $images = $fields['images'] ?? [];
      if (is_array($images) && !empty($images[0]['image'])) {
        $columns = (int) ($fields['columns'] ?? 3);
        $desktop_width = $columns === 4 ? '25vw' : '33vw';

        return colby_preload_filter_resources([
          colby_preload_responsive_image_resource(
            $images[0]['image'],
            '(max-width: 767px) 100vw, ' . $desktop_width
          ),
        ]);
      }
    }

    return [];
  }
}

if (!function_exists('colby_preload_find_block_resources')) {
  function colby_preload_find_block_resources(array $blocks, string $path = 'root'): array
  {
    $hero_blocks = [
      'acf/hero',
      'acf/home-hero',
      'acf/overlay-hero',
    ];

    foreach (array_values($blocks) as $index => $block) {
      if (!is_array($block)) {
        continue;
      }

      $block_name = $block['blockName'] ?? '';
      $block_path = $path . '_' . $index;

      if (in_array($block_name, $hero_blocks, true)) {
        $fields = colby_preload_get_block_fields($block, $block_path);
        $resources = colby_preload_resources_from_hero_block($block_name, $fields);

        if ($resources !== []) {
          return $resources;
        }
      }

      if (!empty($block['innerBlocks']) && is_array($block['innerBlocks'])) {
        $resources = colby_preload_find_block_resources($block['innerBlocks'], $block_path);

        if ($resources !== []) {
          return $resources;
        }
      }
    }

    return [];
  }
}

if (!function_exists('colby_preload_template_hero_resources')) {
  function colby_preload_template_hero_resources(int $post_id): array
  {
    if (!function_exists('get_field')) {
      return [];
    }

    if (get_page_template_slug($post_id) !== 'page_with-sidebar.php') {
      return [];
    }

    $hero_type = get_field('hero_type', $post_id) ?: 'default';
    if ($hero_type === 'none') {
      return [];
    }

    $image = get_field('image', $post_id);
    $sizes = $hero_type === 'overlay'
      ? '100vw'
      : '(max-width: 767px) 100vw, 50vw';

    return colby_preload_filter_resources([
      colby_preload_responsive_image_resource($image, $sizes),
    ]);
  }
}

if (!function_exists('colby_preload_current_hero_resources')) {
  function colby_preload_current_hero_resources(): array
  {
    if (is_admin() || !is_singular()) {
      return [];
    }

    $post = get_queried_object();
    if (!$post instanceof WP_Post) {
      return [];
    }

    $template_resources = colby_preload_template_hero_resources((int) $post->ID);
    if ($template_resources !== []) {
      return $template_resources;
    }

    $blocks = parse_blocks($post->post_content);
    if (!is_array($blocks)) {
      return [];
    }

    return colby_preload_find_block_resources($blocks);
  }
}

if (!function_exists('colby_preload_resource_exists')) {
  function colby_preload_resource_exists(array $preload_resources, string $href): bool
  {
    foreach ($preload_resources as $resource) {
      if (is_array($resource) && ($resource['href'] ?? '') === $href) {
        return true;
      }
    }

    return false;
  }
}

if (!function_exists('colby_preload_hero_assets')) {
  function colby_preload_hero_assets(array $preload_resources): array
  {
    $resources = colby_preload_current_hero_resources();
    if ($resources === []) {
      return $preload_resources;
    }

    foreach ($resources as $resource) {
      if (colby_preload_resource_exists($preload_resources, $resource['href'])) {
        continue;
      }

      $preload_resources[] = $resource;
    }

    return $preload_resources;
  }
}
