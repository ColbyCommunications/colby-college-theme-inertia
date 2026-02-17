<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group(
		array(
			'key'                   => 'group_645abe404a801',
			'title'                 => 'Full Bleed Hero',
			'fields'                => array(
				array(
					'key'               => 'field_645ac6c4ae0da',
					'label'             => 'Type',
					'name'              => 'type',
					'aria-label'        => '',
					'type'              => 'radio',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'choices'           => array(
						'dark'  => 'Dark',
						'light' => 'Light',
					),
					'default_value'     => '',
					'return_format'     => 'value',
					'allow_null'        => 0,
					'other_choice'      => 0,
					'save_other_choice' => 0,
					'layout'            => 'horizontal',
				),
				array(
					'key'               => 'field_645abe3ab2063',
					'label'             => 'Context',
					'name'              => 'context',
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
						0 => 'group_62eff83a5aa1e',
					),
					'display'           => 'seamless',
					'layout'            => 'block',
					'prefix_label'      => 0,
					'prefix_name'       => 0,
				),
				array(
					'key'               => 'field_645abe99b2064',
					'label'             => 'Image',
					'name'              => 'image',
					'aria-label'        => '',
					'type'              => 'image',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'return_format'     => 'array',
					'library'           => 'all',
					'min_width'         => '',
					'min_height'        => '',
					'min_size'          => '',
					'max_width'         => '',
					'max_height'        => '',
					'max_size'          => '',
					'mime_types'        => '',
					'preview_size'      => 'medium',
				),
			),
			'location'              => array(
				array(
					array(
						'param'    => 'block',
						'operator' => '==',
						'value'    => 'acf/full-bleed-hero',
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