<?php
use BoxyBird\Inertia\Inertia;

include __DIR__ . '/inc/block-validation.php';
require_once __DIR__ . '/helpers/preload_assets.php';

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
  require_once __DIR__ . '/vendor/autoload.php';
}

require_once __DIR__ . '/directory_sync.php';
require_once __DIR__ . '/directory_form_auth.php';

add_filter('wp_preload_resources', 'colby_preload_hero_assets');

function colby_preload_critical_assets() {
  echo '<link rel="preload" href="/wp-content/themes/colby-college-theme-inertia/dist/assets/libre-franklin-latin-wght-normal-CLTz0ja0.woff2" as="font" type="font/woff2" crossorigin="anonymous">' . "\n";
echo '<link rel="preload" href="/wp-content/themes/colby-college-theme-inertia/dist/assets/noto-sans-cyrillic-ext-wght-normal-DSNfmdVt.woff2" as="font" type="font/woff2" crossorigin="anonymous">' . "\n";

  $manifest_path = get_stylesheet_directory() . '/dist/.vite/manifest.json';

  if (!file_exists($manifest_path)) {
    return;
  }

  $manifest = json_decode(file_get_contents($manifest_path), true);
  $entry = $manifest['resources/js/app.js'] ?? null;

  if (empty($entry['css'])) {
    return;
  }

  foreach ($entry['css'] as $css) {
    $css_url = get_stylesheet_directory_uri() . '/dist/' . $css;

    echo '<link rel="preload" href="' . esc_url($css_url) . '" as="style">' . "\n";
  }

}
add_action('wp_head', 'colby_preload_critical_assets', 1);

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

    register_post_type(
			'people',
			array(
				'labels'            => array(
					'name'               => __( 'People' ),
					'singular_name'      => __( 'Person' ),
					'add_new_item'       => __( 'Add Person' ),
					'edit_item'          => __( 'Edit Person' ),
					'new_item'           => __( 'New Person' ),
					'view_item'          => __( 'View Person' ),
					'search_items'       => __( 'Search People' ),
					'not_found'          => __( 'Person not found.' ),
					'not_found_in_trash' => __( 'No Person found in trash.' ),
				),
				'rewrite'           => array( 'slug' => 'people/people-directory' ),
				'public'            => true,
				'has_archive'       => true,
				'show_in_rest'      => false,
				'menu_icon'         => 'dashicons-id-alt',
				'show_in_nav_menus' => true,
				'supports'          => array( 'title', 'revisions', 'excerpt', 'thumbnail' ),
			)
		);


    // taxonomies
    register_taxonomy(
			'page-categories',
			'page',
			array(
				'hierarchical'      => true,
				'show_ui'           => true,
				'show_in_rest'      => true,
				'show_admin_column' => true,
				'query_var'         => true,
				'public'            => true,
				'show_tagcloud'     => false,
				'capabilities'      => array(
					'manage_terms' => 'manage_options',
					'edit_terms'   => 'manage_options',
					'delete_terms' => 'manage_options',
					'assign_terms' => 'manage_options',
				),
				'rewrite'           => array(
					'slug' => 'page-categories',
				),
				'labels'            => array(
					'name'          => __( 'Categories' ),
					'singular_name' => __( 'Category' ),
					'add_new_item'  => __( 'Add New Category' ),
					'menu_name'     => __( 'Categories' ),
				),
			)
		);
});

add_action('init', function () {
  Inertia::setRootView('app.php');
});

function colby_get_breadcrumbs_cached(): array {
  if (is_front_page()) {
      return [];
  }

  global $post;

  $object_id = is_object($post) ? $post->ID : 0;
  $cache_key = 'colby_breadcrumbs_' . md5(
      implode('|', [
          is_archive() ? 'archive' : '',
          is_page() ? 'page' : '',
          is_single() ? 'single' : '',
          $object_id,
          $_SERVER['REQUEST_URI'] ?? '',
      ])
  );

  $cached = get_transient($cache_key);

  if ($cached !== false && is_array($cached)) {
      return $cached;
  }

  $breadcrumbs = [];

  if (is_archive()) {
      $breadcrumbs[] = [
          'title' => 'People',
          'url'   => '/people/',
      ];
  } elseif (is_page() && $object_id) {
      $ancestors = array_reverse(get_post_ancestors($object_id));

      foreach ($ancestors as $ancestor_id) {
          $breadcrumbs[] = [
              'title' => get_the_title($ancestor_id),
              'url'   => get_permalink($ancestor_id),
          ];
      }

      $breadcrumbs[] = [
          'title' => get_the_title($object_id),
          'url'   => get_permalink($object_id),
      ];
  } elseif (is_single() && $object_id) {
      $categories = get_the_category($object_id);

      if (!empty($categories)) {
          $primary_category = $categories[0];
          $category_ancestors = array_reverse(
              get_ancestors($primary_category->term_id, 'category')
          );

          foreach ($category_ancestors as $ancestor_id) {
              $ancestor = get_category($ancestor_id);
              $category_link = get_category_link($ancestor->term_id);

              $breadcrumbs[] = [
                  'title' => $ancestor->name,
                  'url'   => preg_replace('/\/category\//', '/', $category_link, 1),
              ];
          }

          $primary_category_link = get_category_link($primary_category->term_id);

          $breadcrumbs[] = [
              'title' => $primary_category->name,
              'url'   => preg_replace('/\/category\//', '/', $primary_category_link, 1),
          ];
      }

      $current_url = $_SERVER['REQUEST_URI'] ?? '';
      $news_url = rtrim(
          str_replace(trailingslashit($post->post_name), '', $current_url),
          '/'
      );

      $breadcrumbs[] = [
          'title' => 'News',
          'url'   => $news_url . '/',
      ];

      $breadcrumbs[] = [
          'title' => get_the_title($object_id),
          'url'   => get_permalink($object_id),
      ];
  }

  set_transient($cache_key, $breadcrumbs, HOUR_IN_SECONDS * 12);

  return $breadcrumbs;
}

function colby_get_menu_cached(string $location): array {
  $cache_key = 'colby_menu_' . sanitize_key($location);

  $cached = get_transient($cache_key);

  if ($cached !== false && is_array($cached)) {
      return $cached;
  }

  $menu = colby_get_menu($location);

  set_transient($cache_key, $menu, HOUR_IN_SECONDS * 12);

  return $menu;
}

add_action('template_redirect', function () {
  $global_site_data = [
    'site_data' => [
      'name'        => get_bloginfo('name'),
      'description' => get_bloginfo('description'),
      'url'         => home_url('/'),
      'alert'  => get_field('alert', 'options'),
      'address' => get_field('address', 'options'),
      'phone'   => get_field('phone', 'options'),
    ],
    'menus' => [
      'main'    => colby_get_menu_cached('main'),
      'utility' => colby_get_menu_cached('utility'),
      'footer'  => colby_get_menu_cached('footer'),
      'action'  => colby_get_menu_cached('action'),
      'people'  => colby_get_menu_cached('people'),
      'social'  => colby_get_menu_cached('social'),
    ],
  ];

  $header_logo_id = get_theme_mod( 'header_logo' );
  $header_logo_styles = get_theme_mod( 'header_logo_styles' );

  $headerlogo = wp_get_attachment_image_src( $header_logo_id , 'full' );
  if($headerlogo) {
    $global_site_data['site_data']['headerlogo'] = esc_url( $headerlogo[0] );
    $global_site_data['site_data']['headerlogo_styles'] = $header_logo_styles;
  }
		
  $footer_logo_id = get_theme_mod( 'footer_logo' );
  $footer_logo_styles = get_theme_mod( 'footer_logo_styles' );

  $footerlogo = wp_get_attachment_image_src( $footer_logo_id , 'full' );
  if($footerlogo) {
    $global_site_data['site_data']['footerlogo'] = esc_url( $footerlogo[0] );
    $global_site_data['site_data']['footerlogo_styles'] = $footer_logo_styles;
  }
  
  $display_athletics_logo = get_theme_mod( 'display_athletics_logo', true );
  $global_site_data['site_data']['display_athletics_logo'] = $display_athletics_logo;
  
  $footer_style = get_theme_mod( 'footer_style', 'colby.edu' ); 
  $global_site_data['site_data']['footer_style'] = $footer_style;
  
  $algolia_index = get_theme_mod( 'algolia_index'); 
  $global_site_data['site_data']['algolia_index'] = $algolia_index;
  
  $algolia_qs_index = get_theme_mod( 'algolia_qs_index'); 
  $global_site_data['site_data']['algolia_qs_index'] = $algolia_qs_index;

  $utility_menu_style = get_theme_mod( 'utility_menu_style', 'colby.edu' ); 
  $global_site_data['site_data']['utility_menu_style'] = $utility_menu_style;
  
  $utility_button_text = get_theme_mod( 'utility_menu_button_text', '' ); 
  $global_site_data['site_data']['utility_button_text'] = $utility_button_text;
  $utility_button_url = get_theme_mod( 'utility_menu_button_url', '' ); 
  $global_site_data['site_data']['utility_button_url'] = $utility_button_url;

  $global_site_data['site_data']['breadcrumbs_menu'] = colby_get_breadcrumbs_cached();


  // dd($global_site_data);


  Inertia::share($global_site_data);

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

// purge breadcrumb transients
function colby_delete_breadcrumb_transients(): void {
  global $wpdb;

  $wpdb->query(
      "DELETE FROM {$wpdb->options}
       WHERE option_name LIKE '_transient_colby_breadcrumbs_%'
       OR option_name LIKE '_transient_timeout_colby_breadcrumbs_%'"
  );
}

add_action('save_post', 'colby_delete_breadcrumb_transients');
add_action('edited_category', 'colby_delete_breadcrumb_transients');
add_action('created_category', 'colby_delete_breadcrumb_transients');
add_action('delete_category', 'colby_delete_breadcrumb_transients');

// purge menu transients
function colby_delete_menu_transients(): void {
  global $wpdb;

  $wpdb->query(
      "DELETE FROM {$wpdb->options}
       WHERE option_name LIKE '_transient_colby_menu_%'
       OR option_name LIKE '_transient_timeout_colby_menu_%'"
  );
}

add_action('wp_update_nav_menu', 'colby_delete_menu_transients');
add_action('customize_save_after', 'colby_delete_menu_transients');

// Enqueue scripts.
add_action('wp_enqueue_scripts', function () {
if (isset($_GET['gf_iframe_id'])) {
      return;
  }

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
        wp_enqueue_script_module('colby-app', get_stylesheet_directory_uri() . '/dist/' . $entry['file'], [], null,  array( 'in_footer' => true, 'fetchpriority' => 'high' ));
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

    add_theme_support('html5', ['script', 'style', 'search-form', 'gallery', 'caption']);
    register_nav_menus([
      'main' => __('Main Menu', 'colby'),
      'footer'  => __('Footer Menu', 'colby'),
      'utility'  => __('Utility Menu', 'colby'),
      'action'  => __('Action Menu', 'colby'),
      'people'  => __('People Menu', 'colby'),
      'social'  => __('Social Menu', 'colby'),
    ]);

    add_theme_support( 'responsive-embeds' );
	}

  add_filter('acf/fields/wysiwyg/toolbars', function( $toolbars ) {
    $limited_toolbar = array('bold', 'italic', 'underline', 'link', 'unlink', 'bullist', 'numlist', 'undo', 'redo', 'removeformat');
    $full_toolbar = array('formatselect', 'bold', 'italic', 'underline', 'bullist', 'numlist', 'blockquote', 'alignleft', 'aligncenter', 'alignright', 'link', 'unlink', 'undo', 'redo', 'removeformat');

    $toolbars['Basic'] = array();
    $toolbars['Basic'][1] = $limited_toolbar;

    $toolbars['limited'] = array();
    $toolbars['limited'][1] = $limited_toolbar;

    $toolbars['Full'] = array();
    $toolbars['Full'][1] = $full_toolbar;

    $toolbars['full'] = array();
    $toolbars['full'][1] = $full_toolbar;

    return $toolbars;
});

add_action('enqueue_block_editor_assets', function () {
  $script_path = get_theme_file_path('resources/js/admin/acf-wysiwyg-paste-policy.js');

  if (!file_exists($script_path)) {
    return;
  }

  wp_enqueue_script(
    'colby-acf-wysiwyg-paste-policy',
    get_theme_file_uri('resources/js/admin/acf-wysiwyg-paste-policy.js'),
    array('acf-input'),
    filemtime($script_path),
    true
  );
});

add_action('wp_head', function() {
  $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? '';
  $bots = [
      'Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider', 
      'YandexBot', 'facebot', 'ia_archiver', 'Siteimprove'
  ];

  $is_bot = false;
  foreach ($bots as $bot) {
      if (stripos($user_agent, $bot) !== false) {
          $is_bot = true;
          break;
      }
  }

  // Output a small script to the head
  $primary_domain = defined('PRIMARY_DOMAIN')
    ? PRIMARY_DOMAIN
    : ('ON' === getenv('LANDO') ? 'www.colby.edu' : (wp_parse_url(home_url(), PHP_URL_HOST) ?: ''));

  echo '<script type="text/javascript">window.colby = window.colby || {}; window.colby.DISABLE_ANIMATIONS = ' . ($is_bot ? 'true' : 'false') . ';window.colby.PRIMARY_DOMAIN = "' . esc_js($primary_domain) . '";window.colby.isLocal = ' . ('ON' === getenv( 'LANDO' ) ? 'true' : 'false') .'</script>';
}, 1);

if (!function_exists('dump')) {
  function dump(...$args) {
      foreach ($args as $arg) {
          VarDumper\VarDumper::dump($arg);
      }
  }
}

if (!function_exists('dd')) {
  function dd(...$args) {
      dump(...$args);
      die();
  }
}


function mytheme_add_customizer_panels( $wp_customize ) {

  // --- Header Settings Panel ---
  $wp_customize->add_panel( 'colby_theme_settings_panel', array(
      'title'       => __( 'Colby Theme Settings', 'mytheme' ),
      'description' => __( 'Manage your website header settings, including logo and styles.', 'mytheme' ),
      'priority'    => 25, // Placed after Site Identity (priority 20)
  ) );

  // Header Logo Section
  $wp_customize->add_section( 'header_settings_section', array(
      'title'    => __( 'Header Settings', 'mytheme' ),
      'panel'    => 'colby_theme_settings_panel', // Associate with Header Settings panel
      'priority' => 10,
  ) );

  // Header Logo Setting (Media Select)
  $wp_customize->add_setting( 'header_logo', array(
      'default'           => '', // No default logo
      'type'              => 'theme_mod', // Stores in theme_mod options
      'capability'        => 'edit_theme_options',
      'sanitize_callback' => 'absint', // Sanitize as absolute integer (attachment ID)
  ) );

  // Header Logo Control (Media Upload)
  $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'header_logo', array(
      'label'       => __( 'Upload Header Logo', 'mytheme' ),
      'section'     => 'header_settings_section',
      'settings'    => 'header_logo',
      'mime_type'   => 'image', // Only allow image uploads
      'description' => __( 'Select an image for your website header logo.', 'mytheme' ),
  ) ) );

  // Header Logo Styles Setting (Text Field)
  $wp_customize->add_setting( 'header_logo_styles', array(
      'default'           => '',
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
  ) );

  // Header Logo Styles Control (Text Input)
  $wp_customize->add_control( 'header_logo_styles', array(
      'label'       => __( 'Header Logo Styles (CSS)', 'mytheme' ),
      'section'     => 'header_settings_section',
      'settings'    => 'header_logo_styles',
      'type'        => 'text',
      'description' => __( 'Enter custom CSS styles for the header logo (e.g., "width: 150px;").', 'mytheme' ),
  ) );

$wp_customize->add_setting( 'utility_menu_style', array(
      'default'           => 'colby.edu', // Default option
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
  ) );

  $wp_customize->add_control( 'utility_menu_style', array(
      'label'       => __( 'Utility Menu Style', 'mytheme' ),
      'section'     => 'header_settings_section',
      'settings'    => 'utility_menu_style',
      'type'        => 'select', // Specifies a dropdown
      'choices'     => array(
          'colby.edu'  => __( 'colby.edu', 'mytheme' ),
          'child_site' => __( 'Child Site', 'mytheme' ), // Using 'child_site' as value for consistency
      ),
      'description' => __( 'Choose the desired style for the website utility menu.', 'mytheme' ),
  ) );

  $wp_customize->add_setting( 'utility_menu_button_text', array(
      'default'           => '', // Default option
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
  ) );

  $wp_customize->add_control( 'utility_menu_button_text', array(
      'label'       => __( 'Utility Menu Button Text', 'mytheme' ),
      'section'     => 'header_settings_section',
      'type'        => 'text',
      'description' => __( 'Enter text for utility menu button.', 'mytheme' ),
  ) );

  $wp_customize->add_setting( 'utility_menu_button_url', array(
      'default'           => '', // Default option
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
  ) );

  $wp_customize->add_control( 'utility_menu_button_url', array(
      'label'       => __( 'Utility Menu Button URL', 'mytheme' ),
      'section'     => 'header_settings_section',
      'type'        => 'text',
      'description' => __( 'Enter the URL for utility menu button.', 'mytheme' ),
  ) );


// Algolia
  $wp_customize->add_section( 'algolia_settings_section', array(
      'title'    => __( 'Algolia Settings', 'mytheme' ),
      'panel'    => 'colby_theme_settings_panel', // Associate with Header Settings panel
      'priority' => 10,
  ) );

// Algolia Index (Text Field)
  $wp_customize->add_setting( 'algolia_index', array(
      'default'           => '',
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
  ) );

  // Algolia Index Control (Text Input)
  $wp_customize->add_control( 'algolia_index', array(
      'label'       => __( 'Algoia Index', 'mytheme' ),
      'section'     => 'algolia_settings_section',
      'settings'    => 'algolia_index',
      'type'        => 'text',
  ) );

// Algolia Query Suggestion Index (Text Field)
  $wp_customize->add_setting( 'algolia_qs_index', array(
      'default'           => '',
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
  ) );

  // Algolia Query Suggestion Index Control (Text Input)
  $wp_customize->add_control( 'algolia_qs_index', array(
      'label'       => __( 'Algoia Query Suggestion Index', 'mytheme' ),
      'section'     => 'algolia_settings_section',
      'settings'    => 'algolia_qs_index',
      'type'        => 'text',
  ) );

  // Footer Logo Section
  $wp_customize->add_section( 'footer_settings_section', array(
      'title'    => __( 'Footer Settings', 'mytheme' ),
      'panel'    => 'colby_theme_settings_panel', // Associate with Footer Settings panel
      'priority' => 10,
  ) );

  // Footer Logo Setting (Media Select)
  $wp_customize->add_setting( 'footer_logo', array(
      'default'           => '',
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
      'sanitize_callback' => 'absint',
  ) );

  // Footer Logo Control (Media Upload)
  $wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'footer_logo', array(
      'label'       => __( 'Upload Footer Logo', 'mytheme' ),
      'section'     => 'footer_settings_section',
      'settings'    => 'footer_logo',
      'mime_type'   => 'image',
      'description' => __( 'Select an image for your website footer logo.', 'mytheme' ),
  ) ) );

  // Footer Logo Styles Setting (Text Field)
  $wp_customize->add_setting( 'footer_logo_styles', array(
      'default'           => '',
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
  ) );

  // Footer Logo Styles Control (Text Input)
  $wp_customize->add_control( 'footer_logo_styles', array(
      'label'       => __( 'Footer Logo Styles (CSS)', 'mytheme' ),
      'section'     => 'footer_settings_section',
      'settings'    => 'footer_logo_styles',
      'type'        => 'text',
      'description' => __( 'Enter custom CSS styles for the footer logo (e.g., "width: 100px;").', 'mytheme' ),
  ) );

// Display Athletics Logo Checkbox Setting
  $wp_customize->add_setting( 'display_athletics_logo', array(
      'default'           => 1, // Default to not displayed
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
      'sanitize_callback' => 'mytheme_sanitize_checkbox', // Custom sanitize function
  ) );

  // Display Athletics Logo Checkbox Control
  $wp_customize->add_control( 'display_athletics_logo', array(
      'label'       => __( 'Display Athletics Logo', 'mytheme' ),
      'section'     => 'footer_settings_section',
      'settings'    => 'display_athletics_logo',
      'type'        => 'checkbox',
      'description' => __( 'Check to display a separate athletics logo in the footer.', 'mytheme' ),
  ) );

$wp_customize->add_setting( 'footer_style', array(
      'default'           => 'colby.edu', // Default option
      'type'              => 'theme_mod',
      'capability'        => 'edit_theme_options',
  ) );

  $wp_customize->add_control( 'footer_style', array(
      'label'       => __( 'Footer Style', 'mytheme' ),
      'section'     => 'footer_settings_section',
      'settings'    => 'footer_style',
      'type'        => 'select', // Specifies a dropdown
      'choices'     => array(
          'colby.edu'  => __( 'colby.edu', 'mytheme' ),
          'child_site' => __( 'Child Site', 'mytheme' ), // Using 'child_site' as value for consistency
      ),
      'description' => __( 'Choose the desired style for the website footer.', 'mytheme' ),
  ) );
}
add_action( 'customize_register', 'mytheme_add_customizer_panels' );

function mytheme_sanitize_checkbox( $checked ) {
  return ( ( isset( $checked ) && true == $checked ) ? true : false );
}

function disable_h1_heading_level() {
    ?>
    <script>
    wp.domReady(function() {
        wp.blocks.registerBlockVariation = function() {};
        
        const settings = wp.blocks.getBlockType('core/heading');

        if (settings && settings.attributes.levelOptions) {
            settings.attributes.levelOptions.default = [2,3,4,5,6];
        }
    });
    </script>
    <?php
}
add_action('admin_footer', 'disable_h1_heading_level');

function force_tinymce_underline_tags($init) {
    $init['formats'] = json_encode([
        'underline' => [
            'inline' => 'u',
            'exact'  => true
        ]
    ]);

    $init['extended_valid_elements'] = 'u';

    return $init;
}
add_filter('tiny_mce_before_init', 'force_tinymce_underline_tags');

function custom_quicktags_buttons($qtInit, $editor_id) {
    $qtInit['buttons'] = 'strong,em,ul,link,ul,ol,li';
    return $qtInit;
}
add_filter('quicktags_settings', 'custom_quicktags_buttons', 10, 2);

/**
 * Whether the current request is the isolated Gravity Forms iframe document.
 */
function colby_is_gravity_forms_iframe_request(): bool {
    return isset($_GET['gf_iframe_id']) && absint(wp_unslash($_GET['gf_iframe_id'])) > 0;
}

/**
 * Render a Gravity Form inside a small, same-origin HTML document.
 *
 * The form is rendered before wp_head() so Gravity Forms and any wp_editor()
 * instances can register all of their scripts, styles, and footer callbacks
 * before WordPress starts printing assets.
 */
function colby_render_gravity_forms_iframe(): void {
    if (!colby_is_gravity_forms_iframe_request()) {
        return;
    }

    $form_id = absint(wp_unslash($_GET['gf_iframe_id']));

    if (!function_exists('gravity_form') || !function_exists('gravity_form_enqueue_scripts')) {
        status_header(503);
        wp_die(
            esc_html__('The form service is currently unavailable.', 'colby'),
            esc_html__('Form unavailable', 'colby'),
            array('response' => 503)
        );
    }

    add_filter('show_admin_bar', '__return_false');
    add_filter('gform_allow_html_formatter', '__return_true');

    // Gravity Forms 2.5+ expects initialization scripts in the footer.
    // Keeping them there guarantees that the gform runtime is defined first.
    add_filter('gform_init_scripts_footer', '__return_true');

    nocache_headers();

    /*
     * The outer document is already an iframe, so use a normal postback inside
     * it instead of creating Gravity Forms' legacy nested AJAX iframe.
     */
    $use_gravity_forms_ajax = false;

    // Register the form's base and conditional assets before wp_head().
    gravity_form_enqueue_scripts($form_id, $use_gravity_forms_ajax);

    // Rendering now also registers the real field-specific TinyMCE settings.
    $form_html = gravity_form(
        $form_id,
        false, // Display title.
        false, // Display description.
        false, // Force display inactive form.
        null,  // Dynamic population values.
        $use_gravity_forms_ajax,
        0,     // Let the browser determine tabindex order.
        false  // Return markup instead of echoing it.
    );

    if (!is_string($form_html) || trim($form_html) === '') {
        status_header(404);
        wp_die(
            esc_html__('The requested form could not be found.', 'colby'),
            esc_html__('Form not found', 'colby'),
            array('response' => 404)
        );
    }

    ?>
    <!doctype html>
    <html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head(); ?>
        <style>
            html,
            body {
                background: transparent !important;
                margin: 0;
                padding: 0;
            }

            body {
                padding: 5px;
                color: #1a1a1a;
                font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 16px;
            }

            .gform_wrapper input:not([type="file"]):not([type="submit"]),
            .gform_wrapper textarea {
                border: 1px solid #b7c2d5;
                border-radius: 3px;
            }

            .gform_wrapper select {
                border: 1px solid #b7c2d5;
                border-radius: 3px;
                padding: 5px;
            }

            .gform_wrapper input[type="submit"] {
                border: 2px solid #002878;
                border-radius: 4px;
                background-color: #002878;
                color: #fff;
                cursor: pointer;
                padding: 5px 12px;
            }

            .gform_wrapper input[type="submit"]:hover,
            .gform_wrapper input[type="submit"]:focus {
                border-color: #002878;
                background-color: #fff;
                color: #003878;
                text-decoration: underline;
            }

            .gform_wrapper .remove-field {
                margin-bottom: 2rem;
            }

            .gform_wrapper .remove-field label,
            .gform_wrapper .gchoice label {
                margin-left: 0.5rem;
            }

            .post-password-form input[type="password"] {
                border: 1px solid #ccc;
            }

            .post-password-form input[type="submit"] {
                border: 1px solid #002878;
                background-color: #002878;
                color: #fff;
                padding: 1px 10px;
            }
        </style>
    </head>
    <body>
        <?php echo $form_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>

        <?php wp_footer(); ?>

        <script>
          (() => {
              const parentOrigin = window.location.origin;

              let resizeFrame = 0;
              let confirmationSent = false;

              const getDocumentHeight = () => {
                  return Math.max(
                      document.body?.scrollHeight || 0,
                      document.documentElement?.scrollHeight || 0
                  );
              };

              const sendHeight = () => {
                  window.cancelAnimationFrame(resizeFrame);

                  resizeFrame = window.requestAnimationFrame(() => {
                      window.parent.postMessage(
                          {
                              type: 'gf_iframe_resize',
                              height: getDocumentHeight(),
                          },
                          parentOrigin
                      );
                  });
              };

              const sendConfirmation = () => {
                  if (confirmationSent) {
                      return;
                  }

                  const confirmation = document.querySelector(
                      '[id^="gform_confirmation_wrapper_"], ' +
                      '.gform_confirmation_message'
                  );

                  if (!confirmation) {
                      return;
                  }

                  confirmationSent = true;

                  /*
                  * Move keyboard/screen-reader focus to the confirmation without
                  * attempting to scroll the iframe's own document.
                  */
                  if (!confirmation.hasAttribute('tabindex')) {
                      confirmation.setAttribute('tabindex', '-1');
                  }

                  try {
                      confirmation.focus({
                          preventScroll: true,
                      });
                  } catch (error) {
                      confirmation.focus();
                  }

                  /*
                  * Tell the parent Vue application that submission completed.
                  * Include the final confirmation-document height so the parent can
                  * resize before scrolling.
                  */
                  window.parent.postMessage(
                      {
                          type: 'gf_iframe_confirmation',
                          height: getDocumentHeight(),
                      },
                      parentOrigin
                  );
              };

              const handleDocumentChange = () => {
                  sendHeight();
                  sendConfirmation();
              };

              document.addEventListener(
                  'DOMContentLoaded',
                  handleDocumentChange
              );

              window.addEventListener(
                  'load',
                  handleDocumentChange
              );

              if ('ResizeObserver' in window) {
                  const resizeObserver = new ResizeObserver(sendHeight);

                  resizeObserver.observe(document.documentElement);
                  resizeObserver.observe(document.body);
              }

              const mutationObserver = new MutationObserver(
                  handleDocumentChange
              );

              mutationObserver.observe(document.body, {
                  childList: true,
                  subtree: true,
                  attributes: true,
              });

              /*
              * These support AJAX forms, multipage forms, and other Gravity Forms
              * rendering changes. The DOM check above still handles non-AJAX
              * confirmation postbacks.
              */
              if (window.jQuery) {
                  window.jQuery(document).on(
                      'gform_post_render ' +
                      'gform_page_loaded ' +
                      'gform_confirmation_loaded',
                      handleDocumentChange
                  );
              }
          })();
        </script>
    </body>
    </html>
    <?php
    exit;
}
add_action('template_redirect', 'colby_render_gravity_forms_iframe', 1);

function gravity_forms_buttons() {
	return array(
		'formatselect',
		'bold',
		'italic',
		'bullist',
		'underline',
		'numlist',
		'undo',
		'redo',
		'link',
		'unlink',
		'sub',
		'sup',
		'justifyleft',
		'justifycenter',
		'justifyright',
		'justifyfull',
		'hr',
	);
}

add_filter('gform_rich_text_editor_buttons', 'gravity_forms_buttons', 1, 1);

add_filter( 'manage_pages_columns', 'wpse248405_columns', 25, 1 );
function wpse248405_columns( $cols ) {
	$user = wp_get_current_user();
	if ( ! in_array( 'administrator', $user->roles ) && in_array( 'editor', $user->roles ) ) {
		// remove title column
		unset( $cols['title'] );
		unset( $cols['taxonomy-page-categories'] );
		// add custom column in second place
		$cols = array(
			'foo'    => __( 'Title', 'textdomain' ),
			'parent' => __( 'Parent Page', 'textdomain' ),
		) + $cols;
		// return columns

	}
	return $cols;
}

add_action( 'manage_pages_custom_column', 'wpse248405_custom_column', 10, 2 );
function wpse248405_custom_column( $col, $post_id ) {
	$user = wp_get_current_user();
	if ( ! in_array( 'administrator', $user->roles ) && in_array( 'editor', $user->roles ) ) {

		global $mode;
		if ( $col === 'foo' ) {

			$current_level = 0;
			$post          = get_post( $post_id );
			// Sent current_level 0 by accident, by default, or because we don't know the actual level.
			$find_main_page = (int) $post->post_parent;

			while ( $find_main_page > 0 ) {
				$parent = get_post( $find_main_page );

				if ( is_null( $parent ) ) {
					break;
				}

				$current_level++;
				$find_main_page = (int) $parent->post_parent;

				if ( ! isset( $parent_name ) ) {
					/** This filter is documented in wp-includes/post-template.php */
					$parent_name = apply_filters( 'the_title', $parent->post_title, $parent->ID );
				}
			}

			$can_edit_post = current_user_can( 'edit_post', $post->ID );

			if ( $can_edit_post && 'trash' !== $post->post_status ) {
				$lock_holder = wp_check_post_lock( $post->ID );

				if ( $lock_holder ) {
					$lock_holder   = get_userdata( $lock_holder );
					$locked_avatar = get_avatar( $lock_holder->ID, 18 );
					/* translators: %s: User's display name. */
					$locked_text = esc_html( sprintf( __( '%s is currently editing' ), $lock_holder->display_name ) );
				} else {
					$locked_avatar = '';
					$locked_text   = '';
				}

				echo '<div class="locked-info"><span class="locked-avatar">' . $locked_avatar . '</span> <span class="locked-text">' . $locked_text . "</span></div>\n";
			}

			$pad = '';
			echo '<strong>';

			$title = _draft_or_post_title();

			if ( $can_edit_post && 'trash' !== $post->post_status ) {
				printf(
					'<a class="row-title" href="%s" aria-label="%s">%s%s</a>',
					get_edit_post_link( $post->ID ),
					/* translators: %s: Post title. */
					esc_attr( sprintf( __( '&#8220;%s&#8221; (Edit)' ), $title ) ),
					$pad,
					$title
				);
			} else {
				printf(
					'<span>%s%s</span>',
					$pad,
					$title
				);
			}

			// _post_states( $post );
			if ( isset( $parent_name ) ) {
				if ( html_entity_decode( $parent_name ) === html_entity_decode( 'Departments & Programs' ) ) {
					echo ' - Department Homepage';
				}

				if ( $parent_name === 'Offices Directory' ) {
					echo ' - Office Homepage';
				}
			}

			echo "</strong>\n";

			if ( 'excerpt' === $mode
				&& ! is_post_type_hierarchical( $post->post_type )
				&& current_user_can( 'read_post', $post->ID )
			) {
				if ( post_password_required( $post ) ) {
					echo '<span class="protected-post-excerpt">' . esc_html( get_the_excerpt() ) . '</span>';
				} else {
					echo esc_html( get_the_excerpt() );
				}
			}

			get_inline_data( $post );
		}

		if ( $col === 'parent' ) {

			$current_level = 0;
			$post          = get_post( $post_id );
			// Sent current_level 0 by accident, by default, or because we don't know the actual level.
			$find_main_page = (int) $post->post_parent;

			while ( $find_main_page > 0 ) {
				$parent = get_post( $find_main_page );

				if ( is_null( $parent ) ) {
					break;
				}

				$current_level++;
				$find_main_page = (int) $parent->post_parent;

				if ( ! isset( $parent_name ) ) {
					/** This filter is documented in wp-includes/post-template.php */
					$pid         = $parent->ID;
					$parent_name = apply_filters( 'the_title', $parent->post_title, $parent->ID );
				}
			}
			// echo $parent_name;
			if ( isset( $parent_name ) ) {
				printf(
					'<a href="%s" aria-label="%s">%s</a>',
					get_edit_post_link( $pid ),
					$parent_name,
					$parent_name
				);
			}
		}
	}
}

add_filter( 'manage_edit-post_columns', 'yoast_seo_admin_remove_columns', 10, 1 );
add_filter( 'manage_edit-page_columns', 'yoast_seo_admin_remove_columns', 10, 1 );

function yoast_seo_admin_remove_columns( $columns ) {
	$user = wp_get_current_user();
	if ( ! in_array( 'administrator', $user->roles ) && in_array( 'editor', $user->roles ) ) {

		unset( $columns['wpseo-score'] );
		unset( $columns['wpseo-score-readability'] );
		unset( $columns['wpseo-title'] );
		unset( $columns['wpseo-metadesc'] );
		unset( $columns['wpseo-focuskw'] );
		unset( $columns['wpseo-links'] );
		unset( $columns['wpseo-linked'] );
		unset( $columns['editor'] );

	}
	return $columns;
}

add_filter( 'admin_body_class', 'admin_body_classes' );
function admin_body_classes( $classes ) {
	if ( is_user_logged_in() ) {
		$user     = wp_get_current_user();
		$roles    = $user->roles;
		$classes .= ' user-role-' . $roles[0] . ' ';
	}
	return $classes;
}

add_action( 'admin_head', 'custom_admin_css' );

function custom_admin_css() {
	echo '<style>
    .user-role-editor.post-type-page .fixed .column-parent,
    .user-role-editor.post-type-page .fixed .column-author,
    .user-role-editor.post-type-page .fixed .column-date {
      width: auto;
    } 
    .user-role-editor.post-type-page .fixed .column-foo {
        width: 40%;
    }
  </style>';
}

add_filter( 'ajax_query_attachments_args', 'hide_directory_attachments' );

function hide_directory_attachments( $query = array() ) {
	$user = wp_get_current_user();
	if ( in_array( 'editor', $user->roles ) ) {
		$posts = get_posts(
			array(
				'post_type'   => 'people',
				'post_status' => 'publish',
				'numberposts' => -1,
			)
		);

		$query['post_parent__not_in'] = array_column( $posts, 'ID' );
	}
	// comment
	return $query;
}

function custom_meta_description( $description ) {
	// Check if the meta description is empty or not set
	if ( empty( $description ) ) {
			// Get the current post ID and its content
		$post_id      = get_the_ID();
		$post_content = get_post_field( 'post_content', $post_id );

				// Extract the content from the first block (paragraph or image-text)
		preg_match( '/<!--\s+wp:acf\/(paragraph|image-text).+?{"paragraph_text":"(.*?)"/s', $post_content, $matches );

				// Check if a match is found and extract the content from the block
		$match = isset( $matches[2] ) ? json_decode( '"' . $matches[2] . '"' ) : null;

				// Decode Unicode escape sequences in the extracted text
		$decoded_match = isset( $match ) ? html_entity_decode( $match ) : null;

				// Remove unwanted characters from the extracted text except hyphens
		$clean_match = isset( $decoded_match ) ? preg_replace( '/[\x00-\x1F\x7F-\xFF\xA0]/u', ' ', $decoded_match ) : null;

				// Trim the description to 40 words if it exists
		$description = isset( $clean_match ) ? wp_trim_words( $clean_match, 40, '' ) : 'Colby College is an intellectual community working to solve the world’s most complex challenges.';
	}

	return $description;
}
add_filter( 'wpseo_metadesc', 'custom_meta_description' );

add_filter( 'auto_core_update_send_email', '__return_false' );

add_filter(
	'wpseo_title',
	function ( $title ) {
		if ( get_query_var( 'post_type' ) === 'people' && is_post_type_archive( 'people' ) ) {
			$title = 'People Directory | Colby College';
		}
		return  $title;
	}
);

function _purgeCF() {
	$cf_api_email = get_option( 'cloudflare_api_email' );
	$cf_api_key   = get_option( 'cloudflare_api_key' );
	$data         = array(
		// get host from database
		'hosts' => array( wp_parse_url(home_url())['host'] ),
	);

	$json = json_encode( $data );

	$ch = curl_init();

	// Set options
	curl_setopt( $ch, CURLOPT_URL, 'https://api.cloudflare.com/client/v4/zones/bcccb3fcba241fabbe73cd335f7507bc/purge_cache' );
	curl_setopt( $ch, CURLOPT_POST, 1 );
	curl_setopt(
		$ch,
		CURLOPT_HTTPHEADER,
		array(
			'Content-Type: application/json',
			'X-Auth-Email: ' . $cf_api_email,
			'X-Auth-Key:' . $cf_api_key,
		)
	);
	curl_setopt(
		$ch,
		CURLOPT_POSTFIELDS,
		$json
	);

	// Receive server response ...
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );

	// execute cURL
	$server_output = curl_exec( $ch );

	curl_close( $ch );
}

add_action( 'acf/options_page/save', 'general_settings_onsave', 10, 2 );
function general_settings_onsave( $post_id, $menu_slug ) {
	if ( 'global-settings' === $menu_slug ) {
		_purgeCF();
		return;
	}
}

function on_save_post( $post_id ) {

	// Find parent post_id.
	if ( $post_parent_id = wp_get_post_parent_id( $post_id ) ) {
		$post_id = $post_parent_id;
	}

	$post = get_post($post_id);

	if ($post->post_title === "Colby College Updates") {
		_purgeCF();
	}
}
add_action( 'save_post', 'on_save_post' );

add_filter( 'ppp_nonce_life', 'public_post_preview_time_window' );
function public_post_preview_time_window() {
	// one year
	return 31539456;
}

// Handles 404 for trying to visit category pages in the url, such as colby.edu/academics/news
function return_404_for_category_archives() {
    if (is_category()) {
        global $wp_query;
        $wp_query->set_404();
        status_header(404);
        nocache_headers();
        include(get_query_template('404'));
        exit();
    }
}
add_action('template_redirect', 'return_404_for_category_archives');

function exclude_specific_posts_from_algolia_index( $should_index, $post ) {
    // Array of post IDs to exclude
    $excluded_post_ids = array(7443, 7441); // Replace these IDs with the IDs of the posts you want to exclude

    if ( in_array( $post->ID, $excluded_post_ids ) ) {
        return false;
    }

    return $should_index;
}
add_filter( 'algolia_should_index_searchable_post', 'exclude_specific_posts_from_algolia_index', 10, 2 );

function filter_image_pre_upload($file)
{
    $allowed_types = ['image/jpeg', 'image/png'];

    // 1 MB.
    $max_allowed_size = 1000 * 1024;

    if (in_array($file['type'], $allowed_types)) {
        if ($file['size'] > $max_allowed_size) {
            $file['error'] = 'Please reduce the size of your image to 1 MB or less before uploading it. Despite the maximum file upload size of the server, files less than 1MB are much more SEO and accessibility friendly.';
        }
    }

    return $file;
}

add_filter('wp_handle_upload_prefilter', 'filter_image_pre_upload', 20);

// Replace OpenGraph image with placeholder image if hide_photo is enabled.
function alter_opengraph_image_for_person( $image ) {
	if ( is_singular( 'people' ) ) {
		$post_id = get_queried_object_id();
		$hide_photo = get_post_meta( $post_id, 'hide_photo', true );
		if ( $hide_photo == '1' ) {
			$fallback_image_id = 11432;
			$image_src = wp_get_attachment_image_src( $fallback_image_id, 'full' );
			if ( $image_src && ! empty( $image_src[0] ) ) {
				return $image_src[0];
			}
		}
	}
	return $image;
}
add_filter( 'wpseo_opengraph_image', 'alter_opengraph_image_for_person', 99 );

// Remove ImageObject and thumbnailUrl from Yoast schema if hide_photo is enabled.
add_filter( 'wpseo_schema_graph', function( $graph ) {
	if ( is_singular( 'people' ) ) {
		$post_id = get_queried_object_id();
		$hide_photo = get_post_meta( $post_id, 'hide_photo', true );

		if ( $hide_photo == '1' ) {
			$graph = array_filter( $graph, function( $piece ) {
				// Remove ImageObject types
				return !( isset( $piece['@type'] ) && $piece['@type'] === 'ImageObject' );
			} );

			// Remove image references in WebPage
			foreach ( $graph as &$piece ) {
				if ( isset( $piece['@type'] ) && $piece['@type'] === 'WebPage' ) {
					unset( $piece['thumbnailUrl'] );
					unset( $piece['primaryImageOfPage'] );
					unset( $piece['image'] );
				}
			}
			unset( $piece );
		}
	}
	return $graph;
}, 11 );

add_filter('map_meta_cap', function ($caps, $cap, $user_id, $args) {

	/*
 	* This requires adding edit permissions for each of the parent pages up to the
    * department, office, or section HP
	*/
	
    // Which primitive caps are we going to block?
    $caps_to_block = ['edit_post'];

    if (!in_array($cap, $caps_to_block, true)) {
        return $caps;
    }

    // Safety: ensure we have a post ID
    $post_id = isset($args[0]) ? intval($args[0]) : 0;
    if (!$post_id) {
        return $caps;
    }

    // Only target PAGES (not posts or CPTs). Remove this check if you want posts/CPTs too.
    if (get_post_type($post_id) !== 'page') {
        return $caps;
    }

    // === CONFIGURE HERE ===
    // Page IDs to protect
    $protected_page_ids = [7436, 7441, 7443, 7439]; // <-- replace with your page IDs

    // Roles to block from editing those pages
    $blocked_roles = ['editor']; // e.g., block Editors and below
    // ======================

    if (!in_array($post_id, $protected_page_ids, true)) {
        return $caps; // not a protected page
    }

    $user = get_userdata($user_id);
    if (!$user || empty($user->roles)) {
        return $caps;
    }

    // If the user has ANY of the blocked roles, deny
    if (array_intersect($blocked_roles, (array) $user->roles)) {
        // 'do_not_allow' ensures WP hard-stops the action with a permissions error
        return ['do_not_allow'];
    }

    return $caps;
}, 10, 4);

add_filter('tiny_mce_before_init', function($init){
    // Make sure advlist is enabled so custom styles are respected
    if (empty($init['plugins']) || strpos($init['plugins'], 'advlist') === false) {
        $init['plugins'] .= ' advlist';
    }

    // Allowed bullet styles (only the normal disc bullet)
    $init['advlist_bullet_styles'] = 'default';

    // Allowed number styles (decimal + roman numerals)
    $init['advlist_number_styles'] = 'default,lower-roman,upper-roman';

    return $init;
}, 20);
