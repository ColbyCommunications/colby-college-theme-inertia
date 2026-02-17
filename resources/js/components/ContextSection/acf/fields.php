<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group(
	array(
		'key'                   => 'group_645ba9d4c16e6',
		'title'                 => 'Context Section',
		'fields'                => array(
			array(
				'key'               => 'field_64643806f5f6c',
				'label'             => 'Hero',
				'name'              => 'hero',
				'aria-label'        => '',
				'type'              => 'true_false',
				'instructions'      => '',
				'required'          => 0,
				'conditional_logic' => 0,
				'wrapper'           => array(
					'width' => '',
					'class' => '',
					'id'    => '',
				),
				'message'           => '',
				'default_value'     => 0,
				'ui'                => 0,
				'ui_on_text'        => '',
				'ui_off_text'       => '',
			),
			array(
				'key'               => 'field_648a0143a77f0',
				'label'             => 'Align',
				'name'              => 'align',
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
					'left'   => 'Left',
					'center' => 'Center',
				),
				'default_value'     => '',
				'return_format'     => 'value',
				'allow_null'        => 0,
				'other_choice'      => 0,
				'layout'            => 'vertical',
				'save_other_choice' => 0,
			),
			array(
				'key'               => 'field_645baad094cfd',
				'label'             => 'Size',
				'name'              => 'size',
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
					'medium' => 'Medium',
					'large'  => 'Large',
				),
				'default_value'     => '',
				'return_format'     => 'value',
				'allow_null'        => 0,
				'other_choice'      => 0,
				'save_other_choice' => 0,
				'layout'            => 'horizontal',
			),
			array(
				'key'               => 'field_645ba9cd08ea0',
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
		),
		'location'              => array(
			array(
				array(
					'param'    => 'block',
					'operator' => '==',
					'value'    => 'acf/context-section',
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