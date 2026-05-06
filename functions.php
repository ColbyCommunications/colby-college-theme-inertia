<?php
use BoxyBird\Inertia\Inertia;

// include __DIR__ . '/acf_fields.php';
include __DIR__ . '/inc/block-validation.php';

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
  require_once __DIR__ . '/vendor/autoload.php';
}

function custom_preload_fonts() {
  // Keep for now
  echo '<link rel="preload" as="image" href="https://www.colby.edu/cdn-cgi/image/width=1280,quality=60/wp-content/uploads/2025/09/Untitled-2025-09-09T120218.701.jpeg" fetchpriority="high" />';
  echo '<link rel="preload" href="/wp-content/themes/colby-college-theme-inertia/dist/assets/libre-franklin-latin-wght-normal-CLTz0ja0.woff2" as="font" type="font/woff2" crossorigin>';
  echo '<link rel="preload" href="/wp-content/themes/colby-college-theme-inertia/dist/assets/noto-sans-cyrillic-ext-wght-normal-DSNfmdVt.woff2" as="font" type="font/woff2" crossorigin>';

}
add_action('wp_head', 'custom_preload_fonts', 1);

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
	}

  add_filter('acf/fields/wysiwyg/toolbars', function( $toolbars ) {
    $toolbars['limited'] = array();
    $toolbars['limited'][1] = array('bold', 'italic', 'underline', 'link', 'unlink', 'bullist', 'numlist');

    $toolbars['full'] = array();
    $toolbars['full'][1] = array('formatselect', 'bold', 'italic', 'underline', 'bullist', 'numlist', 'blockquote', 'alignleft', 'aligncenter', 'alignright', 'link', 'unlink', 'undo', 'redo', 'removeformat');

    return $toolbars;
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
  echo '<script type="text/javascript">window.colby = window.colby || {}; window.colby.DISABLE_ANIMATIONS = ' . ($is_bot ? 'true' : 'false') . ';window.colby.PRIMARY_DOMAIN = "' . PRIMARY_DOMAIN . '";window.colby.isLocal = ' . ('ON' === getenv( 'LANDO' ) ? 'true' : 'false') .'</script>';
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