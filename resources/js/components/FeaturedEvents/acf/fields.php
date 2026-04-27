<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group(
		array(
			'key'                   => 'group_649cec434b76d',
			'title'                 => 'Featured Events',
			'fields'                => array(
				array(
					'key'               => 'field_64e75f797ad8a',
					'label'             => 'Carousel',
					'name'              => 'carousel',
					'aria-label'        => '',
					'type'              => 'clone',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'clone'             => array(
						0 => 'group_62effc36df09e',
					),
					'display'           => 'seamless',
					'layout'            => 'block',
					'prefix_label'      => 0,
					'prefix_name'       => 0,
				),
			),
			'location'              => array(
				array(
					array(
						'param'    => 'block',
						'operator' => '==',
						'value'    => 'acf/featured-events',
					),
				),
			),
			'menu_order'            => 0,
			'position'              => 'normal',
			'style'                 => 'default',
			'label_placement'       => 'top',
			'instruction_placement' => 'label',
			'hide_on_screen'        => '',
			'active'                => true,
			'description'           => '',
			'show_in_rest'          => 0,
		)
	);

  endif;