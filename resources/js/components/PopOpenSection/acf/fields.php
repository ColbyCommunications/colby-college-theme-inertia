<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group( array(
	'key' => 'group_pop_open_section',
	'title' => 'Pop Open Section',
	'fields' => array(
		array(
			'key' => 'field_pop_open_section_subheading',
			'label' => 'Subheading',
			'name' => 'subheading',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'maxlength' => '',
			'allow_in_bindings' => 0,
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),

		array(
			'key' => 'field_pop_open_section_heading',
			'label' => 'Heading',
			'name' => 'heading',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => '',
			'required' => 1,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'maxlength' => '',
			'allow_in_bindings' => 0,
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),

		array(
			'key' => 'field_pop_open_section_paragraph',
			'label' => 'Paragraph',
			'name' => 'paragraph',
			'aria-label' => '',
			'type' => 'wysiwyg',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'tabs' => 'all',
			'toolbar' => 'basic',
			'media_upload' => 0,
			'delay' => 0,
		),

		array(
			'key' => 'field_pop_open_section_button_text',
			'label' => 'Button Text',
			'name' => 'button_text',
			'aria-label' => '',
			'type' => 'text',
			'instructions' => 'Text displayed on the button that opens the additional content.',
			'required' => 1,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '50',
				'class' => '',
				'id' => '',
			),
			'default_value' => 'Learn More',
			'maxlength' => '',
			'allow_in_bindings' => 0,
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
		),

		array(
			'key' => 'field_pop_open_section_display_mode',
			'label' => 'Open As',
			'name' => 'display_mode',
			'aria-label' => '',
			'type' => 'radio',
			'instructions' => 'Choose how the additional content should be displayed.',
			'required' => 1,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '50',
				'class' => '',
				'id' => '',
			),
			'choices' => array(
				'modal' => 'Modal',
				'drawer' => 'Side Drawer',
			),
			'default_value' => 'modal',
			'return_format' => 'value',
			'allow_null' => 0,
			'other_choice' => 0,
			'save_other_choice' => 0,
			'layout' => 'horizontal',
			'allow_in_bindings' => 0,
		),

		array(
			'key' => 'field_pop_open_section_drawer_side',
			'label' => 'Drawer Side',
			'name' => 'drawer_side',
			'aria-label' => '',
			'type' => 'radio',
			'instructions' => 'Choose which side of the screen the drawer opens from.',
			'required' => 0,
			'conditional_logic' => array(
				array(
					array(
						'field' => 'field_pop_open_section_display_mode',
						'operator' => '==',
						'value' => 'drawer',
					),
				),
			),
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'choices' => array(
				'left' => 'Left',
				'right' => 'Right',
			),
			'default_value' => 'right',
			'return_format' => 'value',
			'allow_null' => 0,
			'other_choice' => 0,
			'save_other_choice' => 0,
			'layout' => 'horizontal',
			'allow_in_bindings' => 0,
		),
	),

	'location' => array(
		array(
			array(
				'param' => 'block',
				'operator' => '==',
				'value' => 'acf/pop-open-section',
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
) );

endif;