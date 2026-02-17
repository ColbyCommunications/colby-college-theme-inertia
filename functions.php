<?php
use BoxyBird\Inertia\Inertia;

include __DIR__ . '/acf_fields.php';

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
  require_once __DIR__ . '/vendor/autoload.php';
}

add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('google-font-libre-franklin', 'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap', [], null);
    wp_enqueue_style('typekit', 'https://use.typekit.net/ven5cit.css', [], null);
    wp_enqueue_style('material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons+Sharp', [], null);
});

// Register all ACF blocks in component folders from ACF directories
add_action('init', function () {

    // Get all component ACF directories
    $acf_dirs = glob(
        get_theme_file_path('resources/js/components/*/acf'),
        GLOB_ONLYDIR
    );

    foreach ($acf_dirs as $acf_dir) {

        $block_json  = $acf_dir . '/block.json';
        $fields_file = $acf_dir . '/fields.php';

        // Register block if block.json exists
        if ( file_exists($block_json) ) {
            register_block_type($acf_dir);
        }

        // Include ACF fields if fields.php exists
        if ( file_exists($fields_file) ) {
            include_once $fields_file;
        }
    }
});

add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', ['script', 'style', 'search-form', 'gallery', 'caption']);
  register_nav_menus([
    'main' => __('Main Menu', 'colby'),
    'footer'  => __('Footer Menu', 'colby'),
    'utility'  => __('Utility Menu', 'colby'),
    'action'  => __('Action Menu', 'colby'),
    'people'  => __('People Menu', 'colby'),
    'social'  => __('Social Menu', 'colby'),
  ]);
});

add_action('init', function () {
  Inertia::setRootView('app.php');
});

add_action('init', function () {
  Inertia::share([
    'site_data' => [
      'name'        => get_bloginfo('name'),
      'description' => get_bloginfo('description'),
      'url'         => home_url('/'),
      'alert'  => get_field('alert', 'options'),
      'address' => get_field('address', 'options'),
      'phone'   => get_field('phone', 'options'),
    ],
    'menus' => [
      'main' => colby_get_menu('main'),
      'utility' => colby_get_menu('utility'),
      'footer'  => colby_get_menu('footer'),
      'action'  => colby_get_menu('action'),
      'people'  => colby_get_menu('people'),
      'social'  => colby_get_menu('social'),
    ],
  ]);

  Inertia::share('auth', function () {
    if (is_user_logged_in()) {
      $u = wp_get_current_user();
      return [
        'user' => [
          'id'    => $u->ID,
          'name'  => $u->display_name,
          'email' => $u->user_email,
          'roles' => $u->roles,
        ]
      ];
    }
    return null;
  });
});

function colby_get_menu($location) {
  
  $locations = get_nav_menu_locations();
  if (!isset($locations[$location])) return [];
  $menu = wp_get_nav_menu_object($locations[$location]);
  
  if (!$menu) return [];
  $items = wp_get_nav_menu_items($menu->term_id) ?: [];
  return array_map(function ($item) {
    return [
      'id'    => $item->ID,
      'title' => $item->title,
      'url'   => $item->url,
      'parent'=> (int) $item->menu_item_parent,
      'order' => (int) $item->menu_order,
    ];
  }, $items);
}

// Enqueue scripts.
add_action('wp_enqueue_scripts', function () {
  $vite_internal = 'http://node:5173';
  $res = wp_remote_get("$vite_internal/vite/@vite/client", ['timeout' => 0.5]);
  $vite_running = !is_wp_error($res) && (int) wp_remote_retrieve_response_code($res) === 200;

  if ($vite_running) {
    $vite_public = home_url('/vite'); // e.g., https://colby.lndo.site/vite

    wp_enqueue_script_module('vite-client', "$vite_public/@vite/client", [], null, true);
    // wp_script_add_data('vite-client', 'type', 'module');

    wp_enqueue_script_module('colby-app', "$vite_public/resources/js/app.js", [], null, true);
    // wp_script_add_data('colby-app', 'type', 'module');

  } else {
    // PROD: load built assets via manifest
    $manifest_path = get_stylesheet_directory() . '/dist/.vite/manifest.json';
    if (file_exists($manifest_path)) {
      $manifest = json_decode(file_get_contents($manifest_path), true);
      $entry    = $manifest['resources/js/app.js'] ?? null;
      if ($entry) {
        wp_enqueue_script_module('colby-app', get_stylesheet_directory_uri() . '/dist/' . $entry['file'], [], null, true);
        if (!empty($entry['css'])) {
          foreach ($entry['css'] as $css) {
            wp_enqueue_style('colby-app', get_stylesheet_directory_uri() . '/dist/' . $css, [], null);
          }
        }
      }
    }
  }
}, 20);

add_action( 'after_setup_theme', 'theme_supports'  );

function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
		add_theme_support( 'title-tag' );

		/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
		add_theme_support( 'post-thumbnails' );

		/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		* Enable support for Post Formats.
		*
		* See: https://codex.wordpress.org/Post_Formats
		*/
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support( 'menus' );

		add_image_size( 'Square', 800, 800, true );
		add_image_size( 'Square_mobile', 300, 300, true );
		add_image_size( 'Rectangle', 760, 430, true );
		add_image_size( 'Rectangle_mobile', 410, 290, true );
		add_image_size( 'Landscape', 860, 400, true );
		add_image_size( 'Landscape_mobile', 430, 200, true );
		add_image_size( 'Portrait', 380, 580, true );
		add_image_size( 'Portrait_mobile', 190, 290, true );
		add_image_size( 'Hero', 2400, 1320, true );

		if ( function_exists( 'acf_add_options_page' ) ) {
			acf_add_options_page(
				array(
					'page_title' => 'Global Settings',
					'menu_title' => 'Global Settings',
					'menu_slug'  => 'global-settings',
					'capability' => 'edit_colbyedu_global_settings',
					'redirect'   => false,
				)
			);
		}
	}

  add_filter('acf/fields/wysiwyg/toolbars', function( $toolbars ) {
    $toolbars['limited'] = array();
    $toolbars['limited'][1] = array('bold', 'italic', 'underline', 'link', 'unlink', 'bullist', 'numlist');

    $toolbars['full'] = array();
    $toolbars['full'][1] = array('formatselect', 'bold', 'italic', 'underline', 'bullist', 'numlist', 'blockquote', 'alignleft', 'aligncenter', 'alignright', 'link', 'unlink', 'undo', 'redo', 'removeformat');

    return $toolbars;
});
