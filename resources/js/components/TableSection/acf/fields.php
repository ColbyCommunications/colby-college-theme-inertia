<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

  acf_add_local_field_group(
		array(
			'key'                   => 'group_646cd575c6433',
			'title'                 => 'Table Section',
			'fields'                => array(
				array(
					'key'               => 'field_646cd57667829',
					'label'             => 'Table',
					'name'              => 'table',
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
						0 => 'group_632cb9bac13b2',
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
						'value'    => 'acf/table-section',
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