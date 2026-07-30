<?php
if ( ! session_id() && ! headers_sent() ) {
    session_start();
}

require_once( 'lib/simplesamlphp/src/_autoload.php' );
add_action( 'template_redirect', 'directory_auth_check' );

function directory_auth_check() {
  if ( is_page( 'directory-profile-update-form' ) ) {
    $as = new \SimpleSAML\Auth\Simple( 'default-sp' );

    if ( ! $as->isAuthenticated() ) {

      if ( array_key_exists( 'person', $_SESSION ) ) {
        unset( $_SESSION['person'] );
      }

      if ( isset( $_SERVER['HTTP_X_INERTIA'] ) ) {
        header( 'X-Inertia-Location: ' . $as->getLoginURL() );
        header( 'HTTP/1.1 409 Conflict' );
        exit;
      }

      $as->requireAuth();

    } else {

      $attributes = $as->getAttributes();
      $e_id       = $attributes['WorkdayID'][0];

      $args            = array(
        'post_type'  => 'people',
        'meta_query' => array(
          array(
            'key'     => 'employee_id',
            'value'   => $e_id,
            'compare' => '=',
          ),
        ),
      );
      $person_post     = get_posts( $args );
      
      if ( ! empty( $person_post ) ) {
          $id              = $person_post[0]->ID;
          $person_metadata = get_post_meta( $id );
    
          $_SESSION['colby_directory_id'] = $e_id;
          $_SESSION['person']             = $person_metadata;
      }
    };

  }
}

/* Gravity Forms Prepopulation Functions */

// Workday Email
add_filter( 'gform_field_value_directory_email', 'email_prepopulation' );
function email_prepopulation( $value ) {
  return $_SESSION['person']['email'][0];
}

// First Name
add_filter( 'gform_field_value_directory_first_name', 'first_name_prepopulation' );
function first_name_prepopulation( $value ) {
  return $_SESSION['person']['first_name'][0];
}

// Last Name
add_filter( 'gform_field_value_directory_last_name', 'last_name_prepopulation' );
function last_name_prepopulation( $value ) {
  return $_SESSION['person']['last_name'][0];
}

// Hide Pronouns
add_filter( 'gform_field_value_directory_hide_pronouns', 'hide_pronouns_prepopulation' );
function hide_pronouns_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_pronouns'][0] ) || $_SESSION['person']['hide_pronouns'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Hide Office Phone Number
add_filter( 'gform_field_value_directory_hide_phone', 'hide_phone_prepopulation' );
function hide_phone_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_phone_number'][0] ) || $_SESSION['person']['hide_phone_number'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Hide Fax Number
add_filter( 'gform_field_value_directory_hide_fax', 'hide_fax_prepopulation' );
function hide_fax_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_fax'][0] ) || $_SESSION['person']['hide_fax'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Hide Location
add_filter( 'gform_field_value_directory_hide_location', 'hide_location_prepopulation' );
function hide_location_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_location'][0] ) || $_SESSION['person']['hide_location'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Unsync Department Selection
add_filter( 'gform_field_value_directory_unsync_department', 'unsync_department_prepopulation' );
function unsync_department_prepopulation( $value ) {
  if ( ! empty( $_SESSION['person']['unsync_department'] ) && $_SESSION['person']['unsync_department'][0] == 1 ) {
    return 'yes';
  }
  return '';
}

// Department
add_filter( 'gform_field_value_directory_department', 'department_prepopulation' );
function department_prepopulation( $value ) {
  if ( ! empty( $_SESSION['person']['department'][0] ) ) {
    return $_SESSION['person']['department'][0];
  }
}

// Hide Department
add_filter( 'gform_field_value_directory_hide_department', 'hide_department_prepopulation' );
function hide_department_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_department'][0] ) || $_SESSION['person']['hide_department'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Curriculum Vitae
add_filter( 'gform_field_value_directory_cv', 'cv_prepopulation' );
function cv_prepopulation( $value ) {
  if ( ! empty( $_SESSION['person']['curriculum_vitae'][0] ) ) {
    return $_SESSION['person']['curriculum_vitae'][0];
  }
}

// Hide Curriculum Vitae
add_filter( 'gform_field_value_directory_hide_cv', 'hide_cv_prepopulation' );
function hide_cv_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_cv'][0] ) || $_SESSION['person']['hide_cv'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Office Hours
add_filter( 'gform_field_value_directory_office_hours', 'office_hours_prepopulation' );
function office_hours_prepopulation( $value ) {
  if ( ! empty( $_SESSION['person']['office_hours'][0] ) ) {
    return $_SESSION['person']['office_hours'][0];
  }
}

// Hide Office Hours
add_filter( 'gform_field_value_directory_hide_office_hours', 'hide_office_hours_prepopulation' );
function hide_office_hours_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_office_hours'][0] ) || $_SESSION['person']['hide_office_hours'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Hide Profile Photo
add_filter( 'gform_field_value_directory_hide_photo', 'hide_photo_prepopulation' );
function hide_photo_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_photo'][0] ) || $_SESSION['person']['hide_photo'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Bio
add_filter( 'gform_field_value_directory_bio', 'bio_prepopulation' );
function bio_prepopulation( $value ) {
  if ( ! empty( $_SESSION['person']['bio'][0] ) ) {
    return $_SESSION['person']['bio'][0];
  }
}

// Hide Bio
add_filter( 'gform_field_value_directory_hide_bio', 'hide_bio_prepopulation' );
function hide_bio_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_bio'][0] ) || $_SESSION['person']['hide_bio'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Hide Email
add_filter( 'gform_field_value_directory_hide_email', 'hide_email_prepopulation' );
function hide_email_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_email'][0] ) || $_SESSION['person']['hide_email'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

// Hide Courses
add_filter( 'gform_field_value_directory_hide_courses', 'hide_courses_prepopulation' );
function hide_courses_prepopulation( $value ) {
  if ( empty( $_SESSION['person']['hide_courses'][0] ) || $_SESSION['person']['hide_courses'][0] == 0 ) {
    return '';
  }
  return 'yes';
}

add_action( 'gform_after_submission_12', 'update_directory_profile', 10, 2 );
function update_directory_profile( $entry, $form ) {

  // get attributes from SimpleSAML session
  $as         = new \SimpleSAML\Auth\Simple( 'default-sp' );
  $attributes = $as->getAttributes();
  $e_id       = $attributes['WorkdayID'][0];

  // Accessing values with fallbacks to .1 subfields for checkboxes
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

  // get person post by employee ID
  $args = array(
    'post_type'  => 'people',
    'meta_query' => array(
      array(
        'key'     => 'employee_id',
        'value'   => $e_id,
        'compare' => '=',
      ),
    ),
  );

  $person_post     = get_posts( $args );
  $id              = $person_post[0]->ID;
  $person_metadata = get_post_meta( $id );

  // update post
  $meta_values = array(
    'department'        => $unsync_department === 'yes' ? $department : ($person_metadata['department'][0] ?? ''),
    'curriculum_vitae'  => $curriculum_vitae,
    'office_hours'      => $office_hours,
    'bio'               => $bio,

    // remove/hide fields
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
      'ID'         => $person_post[0]->ID,
      'post_title' => $person_metadata['first_name'][0] . ' ' . $person_metadata['last_name'][0],
      'meta_input' => $meta_values,
    )
  );

}