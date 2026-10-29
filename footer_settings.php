<?php
/**
 * Footer Customizer Settings and Data Builder
 */

if ( ! function_exists( 'mytheme_sanitize_checkbox' ) ) {
    function mytheme_sanitize_checkbox( $checked ) {
        return ( ( isset( $checked ) && true ==$checked ) ? true : false );
    }
}

/**
 * Build Footer site_data keys (including footer_config) for Inertia.
 *
 * @param array $default_action_menu Fallback action menu items.
 * @return array
 */
function colby_get_footer_site_data( array $default_action_menu = [] ): array {$data = [];

    $footer_logo_id            = get_theme_mod( 'footer_logo' );
    $footer_logo_desktop_width = get_theme_mod( 'footer_logo_desktop_width' );$footer_logo_mobile_width  = get_theme_mod( 'footer_logo_mobile_width' );

    $footer_logo_styles = [
        'desktop' => $footer_logo_desktop_width,
        'mobile'  => $footer_logo_mobile_width,
    ];

    $footerlogo = wp_get_attachment_image_src($footer_logo_id, 'full' );
    if ( $footerlogo ) {
        $data['footerlogo']        = esc_url($footerlogo[0] );
        $data['footerlogo_styles'] =$footer_logo_styles;
    }

    $data['display_athletics_logo'] = get_theme_mod( 'display_athletics_logo', true );$data['footer_style']           = get_theme_mod( 'footer_style', 'colby.edu' );

    $col_1_menu_id        = absint( get_theme_mod( 'footer_right_col_1_menu', 0 ) );$col_2_menu_id        = absint( get_theme_mod( 'footer_right_col_2_menu', 0 ) );
    $col_3_menu_id        = absint( get_theme_mod( 'footer_right_col_3_menu', 0 ) );$col_4_menu_id        = absint( get_theme_mod( 'footer_right_col_4_menu', 0 ) );
    $action_left_menu_id  = absint( get_theme_mod( 'footer_bottom_action_left_menu', 0 ) );$action_right_menu_id = absint( get_theme_mod( 'footer_bottom_action_right_menu', 0 ) );

    $data['footer_config'] = [
        'show_top'              => (bool) get_theme_mod( 'footer_show_top', true ),
        'show_logo'             => (bool) get_theme_mod( 'footer_top_show_logo', true ),
        'show_mission'          => (bool) get_theme_mod( 'footer_top_show_mission', false ),
        'mission'               => get_theme_mod( 'footer_mission', '' ),
        'show_address'          => (bool) get_theme_mod( 'footer_top_show_address', true ),
        'show_athletics'        => (bool) get_theme_mod( 'display_athletics_logo', true ),
        'show_vertical_divider' => (bool) get_theme_mod( 'footer_top_vertical_divider', true ),
        'show_bottom_divider'   => (bool) get_theme_mod( 'footer_top_bottom_divider', false ),
        'right_variant'         => get_theme_mod( 'footer_top_right_variant', 'colby' ),
        'col_1_heading'         => get_theme_mod( 'footer_right_col_1_heading', '' ),
        'col_1_items'           => colby_get_menu_by_id_cached( $col_1_menu_id ), 'col_2_heading'         => get_theme_mod( 'footer_right_col_2_heading', '' ), 'col_2_items'           => colby_get_menu_by_id_cached($col_2_menu_id ),
        'col_3_heading'         => get_theme_mod( 'footer_right_col_3_heading', '' ),
        'col_3_items'           => colby_get_menu_by_id_cached( $col_3_menu_id ), 'col_4_heading'         => get_theme_mod( 'footer_right_col_4_heading', '' ), 'col_4_items'           => colby_get_menu_by_id_cached($col_4_menu_id ),
        'show_bottom'           => (bool) get_theme_mod( 'footer_show_bottom', true ),
        'show_action_left'      => (bool) get_theme_mod( 'footer_bottom_show_action_left', true ),
        'action_left_style'     => get_theme_mod( 'footer_bottom_action_left_style', 'link' ),
        'action_left_items'     => $action_left_menu_id
            ? colby_get_menu_by_id_cached( $action_left_menu_id )
            : $default_action_menu,
        'show_action_right'     => (bool) get_theme_mod( 'footer_bottom_show_action_right', false ),
        'action_right_style'    => get_theme_mod( 'footer_bottom_action_right_style', 'filled' ),
        'action_right_items'    => colby_get_menu_by_id_cached( $action_right_menu_id ),
        'show_social'           => (bool) get_theme_mod( 'footer_bottom_show_social', true ),
        'social_size'           => get_theme_mod( 'footer_bottom_social_size', 'small' ),
        'show_policy'           => (bool) get_theme_mod( 'footer_show_nondiscrimination', false ),
        'policy_heading'        => get_theme_mod(
            'footer_nondiscrimination_heading',
            'NOTICE OF NONDISCRIMINATORY POLICY AS TO STUDENTS'
        ),
        'policy_body'           => get_theme_mod(
            'footer_nondiscrimination_body',
            'Colby College admits students of any race, color, national and ethnic origin to all the rights, privileges, programs, and activities generally accorded or made available to students at the school. It does not discriminate on the basis of race, color, national and ethnic origin in administration of its educational policies, admissions policies, scholarship and loan programs, and athletic and other school-administered programs. See <a href="https://afa.colby.edu/nondiscrimination-policy/" target="_blank" class="text-indigo italic underline hover:text-coal hover:no-underline">Colby\'s Nondiscrimination Policy and Compliance Information.</a>'
        ),
    ];

    return $data;
}

/**
 * Register Footer Settings in the WordPress Customizer.
 */
add_action( 'customize_register', function( $wp_customize ) {

    // Ensure Colby Theme Settings Panel exists
    if ( ! $wp_customize->get_panel( 'colby_theme_settings_panel' ) ) {
        $wp_customize->add_panel( 'colby_theme_settings_panel', array(
            'title'       => __( 'Colby Theme Settings', 'mytheme' ),
            'description' => __( 'Manage your website header settings, including logo and styles.', 'mytheme' ),
            'priority'    => 25,
        ) );
    }

    // Footer Logo Section
    $wp_customize->add_section( 'footer_settings_section', array(
        'title'    => __( 'Footer Settings', 'mytheme' ),
        'panel'    => 'colby_theme_settings_panel',
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

    // 1. Footer Logo Desktop Width
    $wp_customize->add_setting( 'footer_logo_desktop_width', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_logo_desktop_width', array(
        'label'       => __( 'Footer Logo Width (Desktop)', 'mytheme' ),
        'section'     => 'footer_settings_section',
        'settings'    => 'footer_logo_desktop_width',
        'type'        => 'text',
        'description' => __( 'Enter footer logo pixel width for desktop (e.g., "150px" or "width: 150px;").', 'mytheme' ),
    ) );

    // 2. Footer Logo Mobile Width
    $wp_customize->add_setting( 'footer_logo_mobile_width', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_logo_mobile_width', array(
        'label'       => __( 'Footer Logo Width (Mobile)', 'mytheme' ),
        'section'     => 'footer_settings_section',
        'settings'    => 'footer_logo_mobile_width',
        'type'        => 'text',
        'description' => __( 'Enter footer logo pixel width for mobile (e.g., "120px" or "width: 120px;").', 'mytheme' ),
    ) );

    // =========================================================================
    // 1. TOP SECTION
    // =========================================================================
    $wp_customize->add_setting( 'footer_show_top', array(
        'default'           => 1,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_show_top', array(
        'label'    => __( 'Show Top Section', 'mytheme' ),
        'section'  => 'footer_settings_section',
        'settings' => 'footer_show_top',
        'type'     => 'checkbox',
    ) );

    // --- Top Left: Show Site Logo ---
    $wp_customize->add_setting( 'footer_top_show_logo', array(
        'default'           => 1,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_top_show_logo', array(
        'label'           => __( 'Top Left: Show Site Logo', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_top_show_logo',
        'type'            => 'checkbox',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 );
        },
    ) );

    // --- Top Left: Show Mission Statement ---
    $wp_customize->add_setting( 'footer_top_show_mission', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_top_show_mission', array(
        'label'           => __( 'Top Left: Show Mission Statement', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_top_show_mission',
        'type'            => 'checkbox',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 );
        },
    ) );

    // --- Top Left: Mission Text Input ---
    $wp_customize->add_setting( 'footer_mission', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'wp_kses_post',
    ) );

    $wp_customize->add_control( 'footer_mission', array(
        'label'           => __( 'Mission Statement Text', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_mission',
        'type'            => 'textarea',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 )
                && (bool) get_theme_mod( 'footer_top_show_mission', 0 );
        },
    ) );

    // --- Top Left: Show Address & Phone ---
    $wp_customize->add_setting( 'footer_top_show_address', array(
        'default'           => 1,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_top_show_address', array(
        'label'           => __( 'Top Left: Show Address & Phone', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_top_show_address',
        'type'            => 'checkbox',
        'description'     => __( 'Displays the Address and Phone from Global Settings.', 'mytheme' ),
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 );
        },
    ) );

    // --- Top Left: Display Athletics Logo ---
    $wp_customize->add_setting( 'display_athletics_logo', array(
        'default'           => 1,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'display_athletics_logo', array(
        'label'           => __( 'Top Left: Display Athletics Logo', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'display_athletics_logo',
        'type'            => 'checkbox',
        'description'     => __( 'Check to display the athletics logo in the footer.', 'mytheme' ),
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 );
        },
    ) );

    // --- Top: Right Side Variant ---
    $wp_customize->add_setting( 'footer_top_right_variant', array(
        'default'           => 'colby',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_top_right_variant', array(
        'label'           => __( 'Top Right Side: Style', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_top_right_variant',
        'type'            => 'select',
        'choices'         => array(
            'unsorted'      => __( 'Unsorted', 'mytheme' ),
            'single_col' => __( 'Single Column', 'mytheme' ),
            'two_col'    => __( 'Two Column', 'mytheme' ),
            'three_col'  => __( 'Three Column', 'mytheme' ),
            'four_col'   => __( 'Four Column', 'mytheme' ),
        ),
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 );
        },
    ) );

    // Build choices array of all available WordPress menus
    $nav_menus        = wp_get_nav_menus();
    $nav_menu_choices = array( 0 => __( '— Select a Menu —', 'mytheme' ) );
    foreach ( $nav_menus as $nav_menu ) {
        $nav_menu_choices[ $nav_menu->term_id ] = $nav_menu->name;
    }

    // --- Column 1 Heading & Menu (Shown for Single, Two, Three, or Four Column) ---
    $wp_customize->add_setting( 'footer_right_col_1_heading', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_right_col_1_heading', array(
        'label'           => __( 'Column 1 Heading', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_right_col_1_heading',
        'type'            => 'text',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 )
                && in_array( get_theme_mod( 'footer_top_right_variant', 'colby' ), array( 'single_col', 'two_col', 'three_col', 'four_col' ), true );
        },
    ) );

    $wp_customize->add_setting( 'footer_right_col_1_menu', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'absint',
    ) );

    $wp_customize->add_control( 'footer_right_col_1_menu', array(
        'label'           => __( 'Column 1 Menu', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_right_col_1_menu',
        'type'            => 'select',
        'choices'         => $nav_menu_choices,
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 )
                && in_array( get_theme_mod( 'footer_top_right_variant', 'colby' ), array( 'single_col', 'two_col', 'three_col', 'four_col' ), true );
        },
    ) );

    // --- Column 2 Heading & Menu (Shown for Two, Three, or Four Column) ---
    $wp_customize->add_setting( 'footer_right_col_2_heading', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_right_col_2_heading', array(
        'label'           => __( 'Column 2 Heading', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_right_col_2_heading',
        'type'            => 'text',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 )
                && in_array( get_theme_mod( 'footer_top_right_variant', 'colby' ), array( 'two_col', 'three_col', 'four_col' ), true );
        },
    ) );

    $wp_customize->add_setting( 'footer_right_col_2_menu', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'absint',
    ) );

    $wp_customize->add_control( 'footer_right_col_2_menu', array(
        'label'           => __( 'Column 2 Menu', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_right_col_2_menu',
        'type'            => 'select',
        'choices'         => $nav_menu_choices,
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 )
                && in_array( get_theme_mod( 'footer_top_right_variant', 'colby' ), array( 'two_col', 'three_col', 'four_col' ), true );
        },
    ) );

    // --- Column 3 Heading & Menu (Shown for Three or Four Column) ---
    $wp_customize->add_setting( 'footer_right_col_3_heading', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_right_col_3_heading', array(
        'label'           => __( 'Column 3 Heading', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_right_col_3_heading',
        'type'            => 'text',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 )
                && in_array( get_theme_mod( 'footer_top_right_variant', 'colby' ), array( 'three_col', 'four_col' ), true );
        },
    ) );

    $wp_customize->add_setting( 'footer_right_col_3_menu', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'absint',
    ) );

    $wp_customize->add_control( 'footer_right_col_3_menu', array(
        'label'           => __( 'Column 3 Menu', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_right_col_3_menu',
        'type'            => 'select',
        'choices'         => $nav_menu_choices,
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 )
                && in_array( get_theme_mod( 'footer_top_right_variant', 'colby' ), array( 'three_col', 'four_col' ), true );
        },
    ) );

    // --- Column 4 Heading & Menu (Shown for Four Column) ---
    $wp_customize->add_setting( 'footer_right_col_4_heading', array(
        'default'           => '',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_right_col_4_heading', array(
        'label'           => __( 'Column 4 Heading', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_right_col_4_heading',
        'type'            => 'text',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 )
                && get_theme_mod( 'footer_top_right_variant', 'colby' ) === 'four_col';
        },
    ) );

    $wp_customize->add_setting( 'footer_right_col_4_menu', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'absint',
    ) );

    $wp_customize->add_control( 'footer_right_col_4_menu', array(
        'label'           => __( 'Column 4 Menu', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_right_col_4_menu',
        'type'            => 'select',
        'choices'         => $nav_menu_choices,
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 )
                && get_theme_mod( 'footer_top_right_variant', 'colby' ) === 'four_col';
        },
    ) );

    // --- Top: Show Vertical Divider (Between Left & Right) ---
    $wp_customize->add_setting( 'footer_top_vertical_divider', array(
        'default'           => 1,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_top_vertical_divider', array(
        'label'           => __( 'Top: Show Vertical Divider', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_top_vertical_divider',
        'type'            => 'checkbox',
        'description'     => __( 'Displays a vertical line between the Left and Right sections.', 'mytheme' ),
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 );
        },
    ) );

    // --- Top: Show Horizontal Bottom Divider (Below Top Section) ---
    $wp_customize->add_setting( 'footer_top_bottom_divider', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_top_bottom_divider', array(
        'label'           => __( 'Top: Show Bottom Divider', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_top_bottom_divider',
        'type'            => 'checkbox',
        'description'     => __( 'Displays a horizontal line below the Top section.', 'mytheme' ),
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_top', 1 );
        },
    ) );

    // =========================================================================
    // 2. BOTTOM SECTION
    // =========================================================================
    $wp_customize->add_setting( 'footer_show_bottom', array(
        'default'           => 1,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_show_bottom', array(
        'label'    => __( 'Show Bottom Section', 'mytheme' ),
        'section'  => 'footer_settings_section',
        'settings' => 'footer_show_bottom',
        'type'     => 'checkbox',
    ) );

    // --- Bottom: Action Menu Left Toggle ---
    $wp_customize->add_setting( 'footer_bottom_show_action_left', array(
        'default'           => 1,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_bottom_show_action_left', array(
        'label'           => __( 'Bottom: Show Action Menu Left', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_bottom_show_action_left',
        'type'            => 'checkbox',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_bottom', 1 );
        },
    ) );

    // --- Bottom: Action Menu Left Select ---
    $wp_customize->add_setting( 'footer_bottom_action_left_menu', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'absint',
    ) );

    $wp_customize->add_control( 'footer_bottom_action_left_menu', array(
        'label'           => __( 'Action Menu Left: Menu', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_bottom_action_left_menu',
        'type'            => 'select',
        'choices'         => $nav_menu_choices,
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_bottom', 1 )
                && (bool) get_theme_mod( 'footer_bottom_show_action_left', 1 );
        },
    ) );

    // --- Bottom: Action Menu Left Button Style ---
    $wp_customize->add_setting( 'footer_bottom_action_left_style', array(
        'default'           => 'link',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_bottom_action_left_style', array(
        'label'           => __( 'Action Menu Left: Button Style', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_bottom_action_left_style',
        'type'            => 'select',
        'choices'         => array(
            'link'    => __( 'Link Style', 'mytheme' ),
            'outline' => __( 'Outline', 'mytheme' ),
            'filled'  => __( 'Filled', 'mytheme' ),
        ),
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_bottom', 1 )
                && (bool) get_theme_mod( 'footer_bottom_show_action_left', 1 );
        },
    ) );

    // --- Bottom: Action Menu Right Toggle ---
    $wp_customize->add_setting( 'footer_bottom_show_action_right', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_bottom_show_action_right', array(
        'label'           => __( 'Bottom: Show Action Menu Right', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_bottom_show_action_right',
        'type'            => 'checkbox',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_bottom', 1 );
        },
    ) );

    // --- Bottom: Action Menu Right Select ---
    $wp_customize->add_setting( 'footer_bottom_action_right_menu', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'absint',
    ) );

    $wp_customize->add_control( 'footer_bottom_action_right_menu', array(
        'label'           => __( 'Action Menu Right: Menu', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_bottom_action_right_menu',
        'type'            => 'select',
        'choices'         => $nav_menu_choices,
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_bottom', 1 )
                && (bool) get_theme_mod( 'footer_bottom_show_action_right', 0 );
        },
    ) );

    // --- Bottom: Action Menu Right Button Style ---
    $wp_customize->add_setting( 'footer_bottom_action_right_style', array(
        'default'           => 'filled',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_bottom_action_right_style', array(
        'label'           => __( 'Action Menu Right: Button Style', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_bottom_action_right_style',
        'type'            => 'select',
        'choices'         => array(
            'link'    => __( 'Link Style', 'mytheme' ),
            'outline' => __( 'Outline', 'mytheme' ),
            'filled'  => __( 'Filled', 'mytheme' ),
        ),
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_bottom', 1 )
                && (bool) get_theme_mod( 'footer_bottom_show_action_right', 0 );
        },
    ) );

    // --- Bottom: Social Menu Toggle ---
    $wp_customize->add_setting( 'footer_bottom_show_social', array(
        'default'           => 1,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_bottom_show_social', array(
        'label'           => __( 'Bottom: Show Social Menu', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_bottom_show_social',
        'type'            => 'checkbox',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_bottom', 1 );
        },
    ) );

    // --- Bottom: Social Icon Size ---
    $wp_customize->add_setting( 'footer_bottom_social_size', array(
        'default'           => 'small',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_bottom_social_size', array(
        'label'           => __( 'Social Icon Size', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_bottom_social_size',
        'type'            => 'radio',
        'choices'         => array(
            'small' => __( 'Small', 'mytheme' ),
            'large' => __( 'Large', 'mytheme' ),
        ),
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_bottom', 1 )
                && (bool) get_theme_mod( 'footer_bottom_show_social', 1 );
        },
    ) );

    // =========================================================================
    // 3. NONDISCRIMINATION POLICY SECTION
    // =========================================================================
    $wp_customize->add_setting( 'footer_show_nondiscrimination', array(
        'default'           => 0,
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'mytheme_sanitize_checkbox',
    ) );

    $wp_customize->add_control( 'footer_show_nondiscrimination', array(
        'label'    => __( 'Show Nondiscrimination Policy', 'mytheme' ),
        'section'  => 'footer_settings_section',
        'settings' => 'footer_show_nondiscrimination',
        'type'     => 'checkbox',
    ) );

    // --- Policy Heading ---
    $wp_customize->add_setting( 'footer_nondiscrimination_heading', array(
        'default'           => 'NOTICE OF NONDISCRIMINATORY POLICY AS TO STUDENTS',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'footer_nondiscrimination_heading', array(
        'label'           => __( 'Nondiscrimination Policy Heading', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_nondiscrimination_heading',
        'type'            => 'text',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_nondiscrimination', 0 );
        },
    ) );

    // --- Policy Body ---
    $wp_customize->add_setting( 'footer_nondiscrimination_body', array(
        'default'           => 'Colby College admits students of any race, color, national and ethnic origin to all the rights, privileges, programs, and activities generally accorded or made available to students at the school. It does not discriminate on the basis of race, color, national and ethnic origin in administration of its educational policies, admissions policies, scholarship and loan programs, and athletic and other school-administered programs. See <a href="https://afa.colby.edu/nondiscrimination-policy/" target="_blank" class="text-indigo italic underline hover:text-coal hover:no-underline">Colby\'s Nondiscrimination Policy and Compliance Information.</a>',
        'type'              => 'theme_mod',
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'wp_kses_post',
    ) );

    $wp_customize->add_control( 'footer_nondiscrimination_body', array(
        'label'           => __( 'Nondiscrimination Policy Body (HTML allowed)', 'mytheme' ),
        'section'         => 'footer_settings_section',
        'settings'        => 'footer_nondiscrimination_body',
        'type'            => 'textarea',
        'active_callback' => function() {
            return (bool) get_theme_mod( 'footer_show_nondiscrimination', 0 );
        },
    ) );
} );