<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group( array(
	'key' => 'group_pdf_embed',
	'title' => 'PDF Embed',
	'fields' => array(
		array(
			'key' => 'field_pdf_embed_pdf_url',
			'label' => 'PDF',
			'name' => 'pdf_url',
			'aria-label' => '',
			'type' => 'file',
			'instructions' => 'Select the PDF file to display.',
			'required' => 1,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'url',
			'library' => 'all',
			'min_size' => '',
			'max_size' => '',
			'mime_types' => 'pdf',
		),
		array(
			'key' => 'field_pdf_embed_page_spread',
			'label' => 'Page Spread',
			'name' => 'page_spread',
			'aria-label' => '',
			'type' => 'radio',
			'instructions' => 'Choose whether the PDF viewer displays one page or a two-page spread.',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'choices' => array(
				'single' => 'Single Page',
				'two' => 'Two Page Spread',
			),
			'default_value' => 'single',
			'return_format' => 'value',
			'allow_null' => 0,
			'other_choice' => 0,
			'save_other_choice' => 0,
			'layout' => 'horizontal',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'block',
				'operator' => '==',
				'value' => 'acf/pdf-embed',
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