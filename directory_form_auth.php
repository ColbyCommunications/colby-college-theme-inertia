<?php

require_once( 'lib/simplesamlphp/src/_autoload.php' );

/**
 * Helper function to retrieve and cache person meta during the request.
 * This avoids race conditions with $_SESSION.
 */
function get_current_directory_person() {
    static $person_meta = null;

    // Return cached meta if already fetched during this request
    if ( $person_meta !== null ) {
        return $person_meta;
    }

    // Default to empty array if session data isn't set yet
    if ( ! empty( $_SESSION['person'] ) ) {
        $person_meta = $_SESSION['person'];
        return $person_meta;
    }

    // Fallback: If $_SESSION isn't ready, inspect SimpleSAML directly
    try {
        $as = new \SimpleSAML\Auth\Simple( 'default-sp' );

        if ( $as->isAuthenticated() ) {
            $attributes = $as->getAttributes();
            $e_id       = $attributes['WorkdayID'][0] ?? null;

            if ( $e_id ) {
                $args = array(
                    'post_type'      => 'people',
                    'posts_per_page' => 1,
                    'meta_query'     => array(
                        array(
                            'key'     => 'employee_id',
                            'value'   => $e_id,
                            'compare' => '=',
                        ),
                    ),
                );

                $person_post = get_posts( $args );

                if ( ! empty( $person_post ) ) {
                    $id          = $person_post[0]->ID;
                    $person_meta = get_post_meta( $id );
                    
                    // Keep session updated
                    if ( session_status() === PHP_SESSION_ACTIVE ) {
                        $_SESSION['colby_directory_id'] = $e_id;
                        $_SESSION['person']             = $person_meta;
                    }

                    return $person_meta;
                }
            }
        }
    } catch ( \Exception $e ) {
        error_log( '[DIRECTORY ERROR] SimpleSAML Exception: ' . $e->getMessage() );
    }

    $person_meta = [];
    return $person_meta;
}

/**
 * Authentication Check Hook
 */
add_action( 'wp', 'directory_auth_check' );

function directory_auth_check() {
    if ( is_page( 'directory-profile-update-form' ) ) {

        if ( session_status() !== PHP_SESSION_ACTIVE && ! headers_sent() ) {
            session_start();
        }

        $as = new \SimpleSAML\Auth\Simple( 'default-sp' );

        if ( ! $as->isAuthenticated() ) {

            if ( isset( $_SESSION['person'] ) ) {
                unset( $_SESSION['person'] );
            }

            if ( isset( $_SERVER['HTTP_X_INERTIA'] ) ) {
                header( 'X-Inertia-Location: ' . $as->getLoginURL() );
                header( 'HTTP/1.1 409 Conflict' );
                exit;
            }

            $as->requireAuth();

        } else {
            // Trigger fetch and cache
            get_current_directory_person();
        }
    }
}

/* -------------------------------------------------------------------------- */
/* Gravity Forms Prepopulation Filters                                        */
/* -------------------------------------------------------------------------- */

// Helper to pull specific key safely
function get_directory_field_value( $key ) {
    $person = get_current_directory_person();
    return $person[ $key ][0] ?? '';
}

// Workday Email
add_filter( 'gform_field_value_directory_email', function( $value ) {
    return get_directory_field_value( 'email' );
});

// First Name
add_filter( 'gform_field_value_directory_first_name', function( $value ) {
    return get_directory_field_value( 'first_name' );
});

// Last Name
add_filter( 'gform_field_value_directory_last_name', function( $value ) {
    return get_directory_field_value( 'last_name' );
});

// Hide Pronouns
add_filter( 'gform_field_value_directory_hide_pronouns', function( $value ) {
    $val = get_directory_field_value( 'hide_pronouns' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Hide Office Phone Number
add_filter( 'gform_field_value_directory_hide_phone', function( $value ) {
    $val = get_directory_field_value( 'hide_phone_number' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Hide Fax Number
add_filter( 'gform_field_value_directory_hide_fax', function( $value ) {
    $val = get_directory_field_value( 'hide_fax' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Hide Location
add_filter( 'gform_field_value_directory_hide_location', function( $value ) {
    $val = get_directory_field_value( 'hide_location' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Unsync Department Selection
add_filter( 'gform_field_value_directory_unsync_department', function( $value ) {
    $val = get_directory_field_value( 'unsync_department' );
    return ( ! empty( $val ) && $val == 1 ) ? 'yes' : '';
});

// Department
add_filter( 'gform_field_value_directory_department', function( $value ) {
    return get_directory_field_value( 'department' );
});

// Hide Department
add_filter( 'gform_field_value_directory_hide_department', function( $value ) {
    $val = get_directory_field_value( 'hide_department' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Curriculum Vitae
add_filter( 'gform_field_value_directory_cv', function( $value ) {
    return get_directory_field_value( 'curriculum_vitae' );
});

// Hide Curriculum Vitae
add_filter( 'gform_field_value_directory_hide_cv', function( $value ) {
    $val = get_directory_field_value( 'hide_cv' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Office Hours
add_filter( 'gform_field_value_directory_office_hours', function( $value ) {
    return get_directory_field_value( 'office_hours' );
});

// Hide Office Hours
add_filter( 'gform_field_value_directory_hide_office_hours', function( $value ) {
    $val = get_directory_field_value( 'hide_office_hours' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Hide Profile Photo
add_filter( 'gform_field_value_directory_hide_photo', function( $value ) {
    $val = get_directory_field_value( 'hide_photo' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Bio
add_filter( 'gform_field_value_directory_bio', function( $value ) {
    return get_directory_field_value( 'bio' );
});

// Hide Bio
add_filter( 'gform_field_value_directory_hide_bio', function( $value ) {
    $val = get_directory_field_value( 'hide_bio' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Hide Email
add_filter( 'gform_field_value_directory_hide_email', function( $value ) {
    $val = get_directory_field_value( 'hide_email' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

// Hide Courses
add_filter( 'gform_field_value_directory_hide_courses', function( $value ) {
    $val = get_directory_field_value( 'hide_courses' );
    return ( empty( $val ) || $val == 0 ) ? '' : 'yes';
});

/* -------------------------------------------------------------------------- */
/* Gravity Form Submission Handler                                            */
/* -------------------------------------------------------------------------- */

add_action( 'gform_after_submission_12', 'update_directory_profile', 10, 2 );
function update_directory_profile( $entry, $form ) {

    $as         = new \SimpleSAML\Auth\Simple( 'default-sp' );
    $attributes = $as->getAttributes();
    $e_id       = $attributes['WorkdayID'][0] ?? null;

    if ( ! $e_id ) {
        return;
    }

    $department        = $entry[5] ?? '';
    $curriculum_vitae  = $entry[9] ?? '';
    $office_hours      = $entry[15] ?? '';
    $bio               = $entry[1] ?? '';

    $hide_pronouns     = $entry['34.1'] ?? $entry[34] ?? '';
    $hide_phone_number = $entry['35.1'] ?? $entry[35] ?? '';
    $hide_fax          = $entry['36.1'] ?? $entry[36] ?? '';
    $hide_location     = $entry['37.1'] ?? $entry[37] ?? '';
    $hide_department   = $entry['38.1'] ?? $entry[38] ?? '';
    $hide_cv           = $entry['39.1'] ?? $entry[39] ?? '';
    $hide_office_hours = $entry['40.1'] ?? $entry[40] ?? '';
    $hide_bio          = $entry['41.1'] ?? $entry[41] ?? '';
    $unsync_department = $entry['43.1'] ?? $entry[43] ?? '';
    $hide_photo        = $entry['44.1'] ?? $entry[44] ?? '';
    $hide_email        = $entry['51.1'] ?? $entry[51] ?? '';
    $hide_courses      = $entry['52.1'] ?? $entry[52] ?? '';

    $args = array(
        'post_type'      => 'people',
        'posts_per_page' => 1,
        'meta_query'     => array(
            array(
                'key'     => 'employee_id',
                'value'   => $e_id,
                'compare' => '=',
            ),
        ),
    );

    $person_post = get_posts( $args );

    if ( ! empty( $person_post ) ) {
        $id              = $person_post[0]->ID;
        $person_metadata = get_post_meta( $id );

        $meta_values = array(
            'department'        => $unsync_department === 'yes' ? $department : ($person_metadata['department'][0] ?? ''),
            'curriculum_vitae'  => $curriculum_vitae,
            'office_hours'      => $office_hours,
            'bio'               => $bio,

            'hide_pronouns'     => $hide_pronouns === 'yes' ? 1 : 0,
            'hide_phone_number' => $hide_phone_number === 'yes' ? 1 : 0,
            'hide_fax'          => $hide_fax === 'yes' ? 1 : 0,
            'hide_location'     => $hide_location === 'yes' ? 1 : 0,
            'hide_department'   => $hide_department === 'yes' ? 1 : 0,
            'hide_cv'           => $hide_cv === 'yes' ? 1 : 0,
            'hide_office_hours' => $hide_office_hours === 'yes' ? 1 : 0,
            'hide_bio'          => $hide_bio === 'yes' ? 1 : 0,
            'hide_photo'        => $hide_photo === 'yes' ? 1 : 0,
            'hide_email'        => $hide_email === 'yes' ? 1 : 0,
            'hide_courses'      => $hide_courses === 'yes' ? 1 : 0,
            'unsync_department' => $unsync_department === 'yes' ? 1 : 0,
        );

        wp_update_post(
            array(
                'ID'         => $id,
                'post_title' => ( $person_metadata['first_name'][0] ?? '' ) . ' ' . ( $person_metadata['last_name'][0] ?? '' ),
                'meta_input' => $meta_values,
            )
        );
    }
}