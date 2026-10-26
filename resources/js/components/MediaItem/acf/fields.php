<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group( array(
  'key' => 'group_component_media_item',
  'title' => 'Component: Media Item',
  'fields' => array(
    array(
      'key' => 'field_media_item_ratio',
      'label' => 'Shape / Aspect Ratio',
      'name' => 'ratio',
      'type' => 'select',
      'choices' => array(
        'original' => 'Original (Full Image)',
        'portrait' => 'Portrait (3:4)',
        'square' => 'Square (1:1)',
        'landscape' => 'Landscape (4:3)',
      ),
      'default_value' => 'original',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_media_item_image',
      'label' => 'Image',
      'name' => 'image',
      'type' => 'image',
      'required' => 1,
      'return_format' => 'array',
      'preview_size' => 'medium',
    ),
    array(
      'key' => 'field_media_item_url',
      'label' => 'URL (Optional)',
      'name' => 'url',
      'type' => 'url',
      'wrapper' => array( 'width' => '70' ),
    ),
    array(
      'key' => 'field_media_item_target',
      'label' => 'Open in New Tab',
      'name' => 'new_tab',
      'type' => 'true_false',
      'ui' => 1,
      'wrapper' => array( 'width' => '30' ),
      'conditional_logic' => array(
        array(
          array(
            'field' => 'field_media_item_url',
            'operator' => '!=empty',
          ),
        ),
      ),
    ),
  ),
  'location' => array(),
  'active' => false,
) );

endif;