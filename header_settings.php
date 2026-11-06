<?php
/**
 * Header & Algolia Customizer Settings and Data Builder
 */

/**
 * Build Header and Algolia site_data keys for Inertia.
 *
 * @return array
 */
function colby_get_header_site_data(): array {
    $data = [];

    $header_logo_id            = get_theme_mod( 'header_logo' );
    $header_logo_desktop_width = get_theme_mod( 'header_logo_desktop_width' );$header_logo_mobile_width  = get_theme_mod( 'header_logo_mobile_width' );

    $header_logo_styles = [
        'desktop' => $header_logo_desktop_width,
        'mobile'  => $header_logo_mobile_width,
    ];

    $headerlogo = wp_get_attachment_image_src($header_logo_id, 'full' );
    if ( $headerlogo ) {
        $data['headerlogo']        = esc_url($headerlogo[0] );
        $data['headerlogo_styles'] =$header_logo_styles;
    }

    $data['algolia_index']    = trim( (string) get_theme_mod( 'algolia_index', 'prod_colbyedu_aggregated' ) ) ?: 'prod_colbyedu_aggregated';
    $data['algolia_qs_index'] = trim( (string) get_theme_mod( 'algolia_qs_index', 'prod_colbyedu_aggregated_query_suggestions' ) ) ?: 'prod_colbyedu_aggregated_query_suggestions';
    $data['utility_button_text'] = get_theme_mod( 'utility_menu_button_text', '' );$data['utility_button_url']  = get_theme_mod( 'utility_menu_button_url', '' );

    return $data;
}

/**
 * Register Header & Algolia Settings in the WordPress Customizer.
 */
add_action( 'customize_register', function( $wp_customize ) {

    // Ensure Colby Theme Settings Panel exists
    if ( ! $wp_customize->get_panel( 'colby_theme_settings_panel' ) ) {$wp_customize->add_panel( 'colby_theme_settings_panel', array(
            'title'       => __( 'Colby Theme Settings', 'mytheme' ),
            'description' => __( 'Manage your website header settings, including logo and styles.', 'mytheme' ),
            'priority'    => 25,
        ) );
    }

    // Header Logo Section
    $wp_customize->add_section( 'header_settings_section', array(
        'title'    => __( 'Header Settings', 'mytheme' ),
        'panel'    => 'colby_theme_settings_panel',
        'priority' => 10,
    ) );

    // Header Logo Setting (Media Select)
    $wp_customize->add_setting( 'header_logo', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'absint',
    ) );

    // Header Logo Control (Media Upload)
    $wp_customize->add_control( new WP_Customize_Media_Control($wp_customize, 'header_logo', array(
        'label'       => __( 'Upload Header Logo', 'mytheme' ),
        'section'     => 'header_settings_section',
        'settings'    => 'header_logo',
        'mime_type'   => 'image',
        'description' => __( 'Select an image for your website header logo.', 'mytheme' ),
    ) ) );

    // Header Logo Styles Setting (Text Field)
    $wp_customize->add_setting( 'header_logo_styles', array(
        'default'    => '',
        'type'       => 'theme_mod',
        'capability' => 'edit_theme_options',
    ) );

    // 1. Header Logo Desktop Width
    $wp_customize->add_setting( 'header_logo_desktop_width', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'header_logo_desktop_width', array(
        'label'       => __( 'Header Logo Width (Desktop)', 'mytheme' ),
        'section'     => 'header_settings_section',
        'settings'    => 'header_logo_desktop_width',
        'type'        => 'text',
        'description' => __( 'Enter header logo pixel width for desktop (e.g., "150px" or "width: 150px;").', 'mytheme' ),
    ) );

    // 2. Header Logo Mobile Width
    $wp_customize->add_setting( 'header_logo_mobile_width', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'header_logo_mobile_width', array(
        'label'       => __( 'Header Logo Width (Mobile)', 'mytheme' ),
        'section'     => 'header_settings_section',
        'settings'    => 'header_logo_mobile_width',
        'type'        => 'text',
        'description' => __( 'Enter header logo pixel width for mobile (e.g., "120px" or "width: 120px;").', 'mytheme' ),
    ) );

    // Utility Menu Style
    $wp_customize->add_setting( 'utility_menu_style', array(
        'default'    => 'colby.edu',
        'type'       => 'theme_mod',
        'capability' => 'edit_theme_options',
    ) );

    $wp_customize->add_control( 'utility_menu_style', array(
        'label'       => __( 'Utility Menu Style', 'mytheme' ),
        'section'     => 'header_settings_section',
        'settings'    => 'utility_menu_style',
        'type'        => 'select',
        'choices'     => array(
            'colby.edu'  => __( 'colby.edu', 'mytheme' ),
            'child_site' => __( 'Child Site', 'mytheme' ),
        ),
        'description' => __( 'Choose the desired style for the website utility menu.', 'mytheme' ),
    ) );

    // Utility Menu Button Text
    $wp_customize->add_setting( 'utility_menu_button_text', array(
        'default'    => '',
        'type'       => 'theme_mod',
        'capability' => 'edit_theme_options',
    ) );

    $wp_customize->add_control( 'utility_menu_button_text', array(
        'label'       => __( 'Utility Menu Button Text', 'mytheme' ),
        'section'     => 'header_settings_section',
        'type'        => 'text',
        'description' => __( 'Enter text for utility menu button.', 'mytheme' ),
    ) );

    // Utility Menu Button URL
    $wp_customize->add_setting( 'utility_menu_button_url', array(
        'default'    => '',
        'type'       => 'theme_mod',
        'capability' => 'edit_theme_options',
    ) );

    $wp_customize->add_control( 'utility_menu_button_url', array(
        'label'       => __( 'Utility Menu Button URL', 'mytheme' ),
        'section'     => 'header_settings_section',
        'type'        => 'text',
        'description' => __( 'Enter the URL for utility menu button.', 'mytheme' ),
    ) );

    // Algolia Section
    $wp_customize->add_section( 'algolia_settings_section', array(
        'title'    => __( 'Algolia Settings', 'mytheme' ),
        'panel'    => 'colby_theme_settings_panel',
        'priority' => 10,
    ) );

    // Algolia Index
    $wp_customize->add_setting( 'algolia_index', array(
        'default'    => '',
        'type'       => 'theme_mod',
        'capability' => 'edit_theme_options',
    ) );

    $wp_customize->add_control( 'algolia_index', array(
        'label'    => __( 'Algoia Index', 'mytheme' ),
        'section'  => 'algolia_settings_section',
        'settings' => 'algolia_index',
        'type'     => 'text',
    ) );

    // Algolia Query Suggestion Index
    $wp_customize->add_setting( 'algolia_qs_index', array(
        'default'    => '',
        'type'       => 'theme_mod',
        'capability' => 'edit_theme_options',
    ) );

    $wp_customize->add_control( 'algolia_qs_index', array(
        'label'    => __( 'Algoia Query Suggestion Index', 'mytheme' ),
        'section'  => 'algolia_settings_section',
        'settings' => 'algolia_qs_index',
        'type'     => 'text',
    ) );
} );