<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group( array(
  'key' => 'group_mosaic_block',
  'title' => 'Mosaic',
  'fields' => array(
    array(
      'key' => 'field_mosaic_columns',
      'label' => 'Columns (Desktop)',
      'name' => 'columns',
      'type' => 'radio',
      'wrapper' => array(
        'width' => '33',
      ),
      'choices' => array(
        '2' => '2 Columns',
        '3' => '3 Columns',
        '4' => '4 Columns',
      ),
      'default_value' => '3',
      'layout' => 'horizontal',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_mosaic_min_columns',
      'label' => 'Minimum Columns (Mobile)',
      'name' => 'min_columns',
      'type' => 'radio',
      'wrapper' => array(
        'width' => '33',
      ),
      'choices' => array(
        '1' => '1 Column',
        '2' => '2 Columns',
        '3' => '3 Columns',
      ),
      'default_value' => '1',
      'layout' => 'horizontal',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_mosaic_gap',
      'label' => 'Spacing',
      'name' => 'gap',
      'type' => 'radio',
      'wrapper' => array(
        'width' => '34',
      ),
      'choices' => array(
        'small' => 'Small',
        'medium' => 'Medium',
        'large' => 'Large',
      ),
      'default_value' => 'medium',
      'layout' => 'horizontal',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_mosaic_items',
      'label' => 'Images',
      'name' => 'items',
      'type' => 'repeater',
      'layout' => 'table',
      'button_label' => 'Add Image',
      'sub_fields' => array(
        array(
          'key' => 'field_mosaic_item_image',
          'label' => 'Image',
          'name' => 'image',
          'type' => 'image',
          'required' => 1,
          'return_format' => 'array',
          'preview_size' => 'medium',
        ),
        array(
          'key' => 'field_mosaic_item_url',
          'label' => 'URL (Optional)',
          'name' => 'url',
          'type' => 'url',
        ),
        array(
          'key' => 'field_mosaic_item_target',
          'label' => 'Open in New Tab',
          'name' => 'new_tab',
          'type' => 'true_false',
          'ui' => 1,
          'default_value' => 0,
          'conditional_logic' => array(
            array(
              array(
                'field' => 'field_mosaic_item_url',
                'operator' => '!=empty',
              ),
            ),
          ),
        ),
        // Shown ONLY when Columns (Desktop) == 2
        array(
          'key' => 'field_mosaic_item_col_span_2',
          'label' => 'Max Column Span',
          'name' => 'col_span_2',
          'type' => 'select',
          'conditional_logic' => array(
            array(
              array(
                'field' => 'field_mosaic_columns',
                'operator' => '==',
                'value' => '2',
              ),
            ),
          ),
          'choices' => array(
            '1' => '1 Column',
            '2' => '2 Columns',
          ),
          'default_value' => '1',
          'return_format' => 'value',
        ),
        // Shown ONLY when Columns (Desktop) == 3
        array(
          'key' => 'field_mosaic_item_col_span_3',
          'label' => 'Max Column Span',
          'name' => 'col_span_3',
          'type' => 'select',
          'conditional_logic' => array(
            array(
              array(
                'field' => 'field_mosaic_columns',
                'operator' => '==',
                'value' => '3',
              ),
            ),
          ),
          'choices' => array(
            '1' => '1 Column',
            '2' => '2 Columns',
            '3' => '3 Columns',
          ),
          'default_value' => '1',
          'return_format' => 'value',
        ),
        // Shown ONLY when Columns (Desktop) == 4
        array(
          'key' => 'field_mosaic_item_col_span_4',
          'label' => 'Max Column Span',
          'name' => 'col_span_4',
          'type' => 'select',
          'conditional_logic' => array(
            array(
              array(
                'field' => 'field_mosaic_columns',
                'operator' => '==',
                'value' => '4',
              ),
            ),
          ),
          'choices' => array(
            '1' => '1 Column',
            '2' => '2 Columns',
            '3' => '3 Columns',
            '4' => '4 Columns',
          ),
          'default_value' => '1',
          'return_format' => 'value',
        ),
        array(
          'key' => 'field_mosaic_item_ratio',
          'label' => 'Shape / Aspect Ratio',
          'name' => 'ratio',
          'type' => 'select',
          'instructions' => 'Use "Original" to show the full uncropped image. Choose a shape if all uploaded images are identical and you want to stagger their heights.',
          'choices' => array(
            'original' => 'Original (Full Image)',
            'portrait' => 'Portrait (3:4)',
            'square' => 'Square (1:1)',
            'landscape' => 'Landscape (4:3)',
          ),
          'default_value' => 'original',
          'return_format' => 'value',
        ),
      ),
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'block',
        'operator' => '==',
        'value' => 'acf/mosaic',
      ),
    ),
  ),
  'style' => 'default',
  'active' => true,
) );

endif;