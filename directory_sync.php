<?php

function updateStaffDirectory() {
	if ( ! is_admin() ) {
		$directory_data = json_decode( file_get_contents( WP_CONTENT_DIR . '/directory_data/Colby_Directory_Webservice_Output.json' ), true )['Report_Entry'];
		$directory_course_data = json_decode( file_get_contents( WP_CONTENT_DIR . '/directory_data/Colby_Directory_FacCrs_Webservice_Output.json' ), true )['Report_Entry'];
		// $directory_data = json_decode(file_get_contents(WP_CONTENT_DIR . "/directory_data/Colby_Directory_Webservice_Output.json"), true)['Report_Entry'];
		deletePeople( $directory_data );
		getNewPeople( $directory_data, $directory_course_data );
	}
}

function deletePeople( $directory_data ) {
	$args = array(
		'numberposts' => -1,
		'post_type'   => 'people',
		'post_status' => 'publish',
	);

	$all_posts   = get_posts( $args );
	$total_posts = count( $all_posts );

	if ( $total_posts > 0 ) {
		foreach ( $all_posts as $post ) {
			// Get the employee_id meta value using the post ID
			$employee_id = get_post_meta( $post->ID, 'employee_id', true );

			// Check if the employee id in the DB exists in the WD file
			$match = false;

			foreach ( $directory_data as $WDPerson ) {
				$WDEmployeeID = str_pad( $WDPerson['employeeID'], 7, '0', STR_PAD_LEFT );
				if ( $employee_id === $WDEmployeeID ) {
					$match = true;
					break;
				}
			}

			// If record is missing from WD, delete the record in the DB
			if ( $match !== true ) {
				$thumb_id = get_post_thumbnail_id( $post->ID );
				wp_delete_attachment( $thumb_id, true );
				wp_delete_post( $post->ID, true );
			}
		}
	}
}

// use phpseclib3\Crypt\RSA;
use phpseclib3\Net\SFTP;

require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/image.php';

function getNewPeople( $directory_data, $course_data ) {

	$sftp = new SFTP( 'colby0.colby.edu' );
	$sftp->login( PLATFORM_VARIABLES['sftp_username'], PLATFORM_VARIABLES['sftp_pw'] );

	// Loop through the WD array
	foreach ( $directory_data as $WDPerson ) {
		// Assign variables to desired WD fields
		$WDEmployeeID    = $WDPerson['employeeID'];
		$WDPrefFirstName = $WDPerson['preferredFirstName'];
		$WDPrefLastName  = $WDPerson['preferredLastName'];

		// Skip person if no email associated
		if ( ! $WDPerson['primaryWorkEmail'] ) {
			continue;
		}

		$WDEmail = strtolower( $WDPerson['primaryWorkEmail'] );
		$WDTitle = $WDPerson['businessTitle'];

		$WDPhone = '';
		if ( isset( $WDPerson['primaryWorkPhone'] ) ) {
			$WDPhone = $WDPerson['primaryWorkPhone'];
		}

		$wd_pronouns = '';
		if ( isset( $WDPerson['pronouns'] ) ) {
			$wd_pronouns = stripcslashes( $WDPerson['pronouns'] );
		}

		$WDBuilding = '';
		if ( isset( $WDPerson['workSpaceLocation'] ) ) {
			$WDBuilding = $WDPerson['workSpaceLocation'];
		}

		$WDFax = '';
		if ( isset( $WDPerson['faxPhoneNumber'] ) && $WDPerson['faxPhoneNumber'] ) {
			$WDFax = $WDPerson['faxPhoneNumber'];
		}

		$emailSlug = strtolower( substr( $WDEmail, 0, strpos( $WDEmail, '@' ) ) );

		/* Academic unit for faculty, Superior org for staff (department metadata) */

		$WDAcademicUnit = $WDPerson['Academic_Units'];
		$WDSupOrg       = $WDPerson['supervisoryOrganization'];
		$WDSOH          = $WDPerson['supervisoryOrgHierarchy'];
		$WDOrgsManaged  = $WDPerson['organizationsManaged'];
		$supOrgRegex    = '/.+?(?=[-|(])/';

		$orgResult = '';

		if ( $WDSupOrg ) {
			preg_match( $supOrgRegex, $WDSupOrg, $deptResult );
			$orgResult = $deptResult[0];
		}

		if ( $WDSOH && ( count( explode( '>', $WDSOH ) ) === 2 || count( explode( '>', $WDSOH ) ) === 3 ) ) {
			if ( preg_match( $supOrgRegex, $WDOrgsManaged ) ) {
				preg_match( $supOrgRegex, $WDOrgsManaged, $matches );
				$orgResult = $matches[0];
			}
		}

		$WDDepartment = $WDAcademicUnit;
		if ( is_null( $WDAcademicUnit ) ) {
			$WDDepartment = $orgResult;
		}

		$WDIsRetiree = 0;
		if (!is_null($WDPerson['Is_Retiree'])) {
			$WDIsRetiree = 1;
		}

		// [{"crs":"AY257","sec":"A","title":"Anthropology of Slowness"}]

		$WDCourses = '';

		$filteredCourses = array_filter($course_data, function($course) use ($WDEmployeeID) {
    
			// Loop through the instgroup (in case there are multiple instructors)
			foreach ($course['instgroup'] as $instructor) {
				// Check if this instructor matches our target
				if ($instructor && $instructor['employeeID'] === $WDEmployeeID) {
					return true; // Keep this course
				}
			}
			
			return false; // No match found, discard this course
		});

		// a list of courses grouped by unique title
		$massagedCourses = [];

		if ((count($filteredCourses) > 0)) {
			$filteredCourses = array_values($filteredCourses);

			foreach ($filteredCourses as $crs) {
				$matched_crs_index = array_key_exists($crs['sectionTitle'], $massagedCourses);
		
				if ($matched_crs_index) {
					array_push($massagedCourses[$crs['sectionTitle']]['crs'],  str_replace(' ', '', $crs['courseNumber']));
					array_push($massagedCourses[$crs['sectionTitle']]['sec'], $crs['sectionNumber']);
				} else {
					$massagedCourses[$crs['sectionTitle']] = ['crs' => [str_replace(' ', '', $crs['courseNumber'])], 'title' => $crs['sectionTitle'], 'sec' => [$crs['sectionNumber']]];
				}
			}

			// $WDCourses = array_map(function($course) {
			// 	return [
			// 		// "AA 125" -> "AA125" (Removing space to match your 'AY257' example format)
			// 		'crs'   => str_replace(' ', '', $course['courseNumber']),
					
			// 		// "A" -> "A"
			// 		'sec'   => $course['sectionNumber'],
					
			// 		// "Introduction to..." -> "Introduction to..."
			// 		'title' => $course['sectionTitle']
			// 	];
			// }, $filteredCourses);
		}


		$WDMailing = $WDPerson['boxNumber'] . " Mayflower Hill \nWaterville, Maine 04901-8853";

		$args = array(
			'numberposts' => -1,
			'post_type'   => 'people',
			'post_status' => array('publish', 'draft'),
			'meta_query'  => array(
				array(
					'key'     => 'employee_id',
					'value'   => $WDEmployeeID,
					'compare' => '=',
				),
			),
		);

		// Combine fields from WD and CX
		$post = array(
			'post_title'   => $WDPrefFirstName . ' ' . $WDPrefLastName,
			'post_content' => '',
			'post_type'    => 'people',
			'post_status'  => 'publish',
			'meta_input'   => array(
				'employee_id'      => $WDEmployeeID,
				'first_name'       => $WDPrefFirstName,
				'last_name'        => $WDPrefLastName,
				'pronouns'         => $wd_pronouns,
				'title'            => $WDTitle,
				'department'       => $WDDepartment,
				'phone'            => $WDPhone,
				'email'            => $WDEmail,
				'building'         => $WDBuilding,
				'curriculum_vitae' => '',
				'current_courses'  => json_encode( array_values($massagedCourses) ),
				'fax'              => $WDFax,
				'mailing_address'  => $WDMailing,
				'is_retiree'	=> $WDIsRetiree
			),
		);

		$DBMatchingPost = get_posts( $args );

		$photosWithDates = array_filter(
			$sftp->nlist( '/web/staticweb/college/WorkdayPhotos/v2/MD5' ),
			function ( $item ) {
				return strpos( $item, '.jpg' ) !== false;
			}
		);

		$matchingPhoto = false;
		if ( ( ! $DBMatchingPost ) ) {
			$ID = wp_insert_post( $post );

			foreach ( $photosWithDates as $photo ) {
				if ( strpos( $photo, md5( $WDEmployeeID ) ) !== false ) {
					$matchingPhoto = $photo;
					break;
				}
			}

			if ( $matchingPhoto ) {
				$imageURL = 'https://colby.edu/college/WorkdayPhotos/v2/MD5/' . $matchingPhoto;
				$desc     = $WDPrefFirstName . ' ' . $WDPrefLastName;
				$image    = media_sideload_image( $imageURL, $ID, $desc, 'id' );
				set_post_thumbnail( $ID, $image );
			}
		} else {
			$post            = $DBMatchingPost[0];
			$ID              = $DBMatchingPost[0]->ID;
			$person_metadata = get_post_meta( $ID );

			// Update title metadata with latest title from WD
			update_post_meta( $ID, 'title', $WDTitle );

			// Update courses metadata with latest courses from CX
			if ( $massagedCourses ) {
				update_post_meta( $ID, 'current_courses', json_encode( array_values($massagedCourses) ) );
			} else {
				update_post_meta( $ID, 'current_courses', json_encode( array() ) );
			}

			// Update metadata for fields not changed in Gravity Forms with latest WD data

			update_post_meta( $ID, 'first_name', $WDPrefFirstName );
			update_post_meta( $ID, 'last_name', $WDPrefLastName );

			if ( $post->post_title !== $WDPrefFirstName . ' ' . $WDPrefLastName ) {
				wp_update_post(
					array(
						'ID'         => $ID,
						'post_title' => $WDPrefFirstName . ' ' . $WDPrefLastName,
						'post_name'  => sanitize_title( $WDPrefFirstName . ' ' . $WDPrefLastName ),
					)
				);
			}

			update_post_meta( $ID, 'email', $WDEmail );
			update_post_meta( $ID, 'phone', $WDPhone );
			update_post_meta( $ID, 'building', $WDBuilding );
			update_post_meta( $ID, 'fax', $WDFax );
			update_post_meta( $ID, 'mailing_address', $WDMailing );
			update_post_meta( $ID, 'pronouns', $wd_pronouns );
			update_post_meta( $ID, 'is_retiree', $WDIsRetiree );

			if ( empty( $person_metadata['unsync_department'][0] ) ) {
				update_post_meta( $ID, 'department', $WDDepartment );
			}

			foreach ( $photosWithDates as $photo ) {
				if ( strpos( $photo, md5( $WDEmployeeID ) ) !== false ) {
					$matchingPhoto = $photo;
					break;
				}
			}

			if ( $matchingPhoto ) {
				$img_parts   = explode( '_', $matchingPhoto );
				$date        = substr( $img_parts[1], 0, 8 );
				$imageURL    = 'https://colby.edu/college/WorkdayPhotos/v2/MD5/' . $matchingPhoto;
				$desc        = $WDPrefFirstName . ' ' . $WDPrefLastName;
				$DBImageName = get_the_post_thumbnail_url( $ID );
				if ( $DBImageName ) {
					if ( strpos( $DBImageName, '_' ) !== false ) {
						$DB_img_parts = explode( '_', $DBImageName );
						$DB_date      = substr( $DB_img_parts[1], 0, 8 );

						if ( $date !== $DB_date ) {
							$thumb_id = get_post_thumbnail_id( $ID );
							wp_delete_attachment( $thumb_id, true );
							$image = media_sideload_image( $imageURL, $ID, $desc, 'id' );
							set_post_thumbnail( $ID, $image );
						}
					}
				} else {
					$image = media_sideload_image( $imageURL, $ID, $desc, 'id' );
					set_post_thumbnail( $ID, $image );
				}
			}
		}
	}
}

add_action( 'directory_sync', 'updateStaffDirectory' );

if ( ! wp_next_scheduled( 'directory_sync' ) ) {
	$time = strtotime( 'today' );
	wp_schedule_event( $time, 'daily', 'directory_sync' );
}