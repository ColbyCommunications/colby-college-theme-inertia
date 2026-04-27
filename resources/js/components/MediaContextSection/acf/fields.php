<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

  acf_add_local_field_group(array(
		'key' => 'group_6458fb6b7cd5d',
		'title' => 'Media Context Section',
		'fields' => array(
			array(
				'key' => 'field_6458fb6787f97',
				'label' => 'Items',
				'name' => 'items',
				'aria-label' => '',
				'type' => 'repeater',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'layout' => 'row',
				'pagination' => 0,
				'min' => 0,
				'max' => 0,
				'collapsed' => '',
				'button_label' => 'Add Item',
				'rows_per_page' => 20,
				'sub_fields' => array(
					array(
						'key' => 'field_6459012a87f98',
						'label' => 'Item',
						'name' => 'item',
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
						'parent_repeater' => 'field_6458fb6787f97',
					),
				),
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'block',
					'operator' => '==',
					'value' => 'acf/media-context-section',
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