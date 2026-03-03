<?php

if (!function_exists('colby_sidebar_resolve_parent_id')) {
  /**
   * Resolve the sidebar parent id using the legacy page-with-sidebar rules.
   */
  function colby_sidebar_resolve_parent_id($post): int
  {
    if (!$post) {
      return 0;
    }

    if (has_term(['department', 'office', 'site'], 'page-categories', $post)) {
      return (int) $post->ID;
    }

    if (!empty($post->post_parent)) {
      $ancestors = get_post_ancestors($post->ID);
      $ancestor_found = false;
      $parent = 0;

      foreach ($ancestors as $ancestor) {
        if (has_term(['department', 'office', 'site'], 'page-categories', $ancestor)) {
          $parent = (int) $ancestor;
          $ancestor_found = true;
          break;
        }
      }

      if (!$ancestor_found && !empty($ancestors)) {
        $root_index = count($ancestors) - 1;
        $parent = (int) $ancestors[$root_index];
      }

      if ($parent > 0) {
        return $parent;
      }
    }

    return (int) $post->ID;
  }
}

if (!function_exists('colby_sidebar_is_people_section')) {
  /**
   * Check whether the direct parent page is the people section.
   */
  function colby_sidebar_is_people_section($post): bool
  {
    if (!$post || empty($post->post_parent)) {
      return false;
    }

    $direct_parent = get_post($post->post_parent);
    if (!$direct_parent) {
      return false;
    }

    return $direct_parent->post_name === 'people';
  }
}

if (!function_exists('colby_sidebar_normalize_url')) {
  function colby_sidebar_normalize_url(string $url): string
  {
    if ($url === '') {
      return '';
    }

    $parts = wp_parse_url($url);
    if (is_array($parts) && isset($parts['path'])) {
      return untrailingslashit($parts['path']);
    }

    return untrailingslashit($url);
  }
}

if (!function_exists('colby_sidebar_is_active_url')) {
  function colby_sidebar_is_active_url(string $item_url, string $current_url): bool
  {
    return colby_sidebar_normalize_url($item_url) === colby_sidebar_normalize_url($current_url);
  }
}

if (!function_exists('colby_sidebar_build_nav')) {
  /**
   * Build sidebar navigation data expected by SubpageNav.vue.
   */
  function colby_sidebar_build_nav($post, int $parent_id): array
  {
    $current_url = get_permalink($post->ID);
    $items = [];

    if (colby_sidebar_is_people_section($post)) {
      $menu_items = wp_get_nav_menu_items('People Menu') ?: [];

      foreach ($menu_items as $item) {
        $url = $item->url ?? '';
        $items[] = [
          'title' => (string) ($item->title ?? ''),
          'url' => $url,
          'active' => colby_sidebar_is_active_url($url, $current_url),
        ];
      }
    } else {
      $child_pages = get_pages([
        'parent' => $parent_id,
        'sort_column' => 'menu_order',
      ]);

      foreach ($child_pages as $item) {
        $url = get_page_link($item->ID);
        $items[] = [
          'title' => get_the_title($item->ID),
          'url' => $url,
          'active' => colby_sidebar_is_active_url($url, $current_url),
        ];
      }
    }

    return [
      'heading' => get_the_title($parent_id),
      'parentPermalink' => get_permalink($parent_id),
      'items' => $items,
    ];
  }
}

if (!function_exists('colby_sidebar_normalize_widgets')) {
  /**
   * Normalize sidebar widgets for Widget.vue.
   */
  function colby_sidebar_normalize_widgets($widgets): array
  {
    if (!is_array($widgets)) {
      return [];
    }

    $normalized = [];

    foreach ($widgets as $widget) {
      $raw_buttons = [];
      if (isset($widget['buttons']) && is_array($widget['buttons'])) {
        $raw_buttons = $widget['buttons'];
      } elseif (isset($widget['button']) && is_array($widget['button'])) {
        $raw_buttons = [['button' => $widget['button']]];
      }

      $buttons = [];
      foreach ($raw_buttons as $button_row) {
        $button = [];
        if (is_array($button_row) && isset($button_row['button']) && is_array($button_row['button'])) {
          $button = $button_row['button'];
        } elseif (is_array($button_row)) {
          $button = $button_row;
        }

        $title = (string) ($button['title'] ?? '');
        $url = (string) ($button['url'] ?? '');
        $target = (string) ($button['target'] ?? '');

        if ($title === '' && $url === '') {
          continue;
        }

        $buttons[] = [
          'title' => $title,
          'url' => $url,
          'target' => $target,
        ];
      }

      $normalized[] = [
        'heading' => (string) ($widget['heading'] ?? ''),
        'text' => (string) ($widget['text'] ?? ''),
        'buttons' => $buttons,
      ];
    }

    return $normalized;
  }
}

if (!function_exists('colby_sidebar_build_data')) {
  /**
   * Build sidebar payload for the Page/Show inertia view.
   */
  function colby_sidebar_build_data($post): array
  {
    $parent_id = colby_sidebar_resolve_parent_id($post);
    if ($parent_id <= 0) {
      return [
        'nav' => [
          'heading' => '',
          'parentPermalink' => '',
          'items' => [],
        ],
        'widgets' => [],
      ];
    }

    return [
      'nav' => colby_sidebar_build_nav($post, $parent_id),
      'widgets' => colby_sidebar_normalize_widgets(
        function_exists('get_field') ? get_field('widgets', $post->ID) : []
      ),
    ];
  }
}
