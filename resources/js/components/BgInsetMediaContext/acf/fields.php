<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group(array(
	'key' => 'group_645c686bcf844',
	'title' => 'Background Inset Media Context',
	'fields' => array(
		array(
			'key' => 'field_64b94b75ca42a',
			'label' => 'Type',
			'name' => 'type',
			'aria-label' => '',
			'type' => 'radio',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'choices' => array(
				'dark' => 'Dark',
				'light' => 'Light',
			),
			'default_value' => '',
			'return_format' => 'value',
			'allow_null' => 0,
			'other_choice' => 0,
			'layout' => 'horizontal',
			'save_other_choice' => 0,
		),
		array(
			'key' => 'field_645c686c97b00',
			'label' => 'Context',
			'name' => 'context',
			'aria-label' => '',
			'type' => 'clone',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'clone' => array(
				0 => 'group_632351b6b550d',
			),
			'display' => 'seamless',
			'layout' => 'block',
			'prefix_label' => 0,
			'prefix_name' => 0,
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'block',
				'operator' => '==',
				'value' => 'acf/bg-inset-media-context',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
));

endif;