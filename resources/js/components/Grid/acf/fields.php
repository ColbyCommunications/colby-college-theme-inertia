<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

if ( ! function_exists( 'colby_grid_span_subfields' ) ) {
  function colby_grid_span_subfields( string $prefix ): array {
    $fields = array();

    for ( $max_cols = 2; $max_cols <= 8; $max_cols++ ) {
      $choices = array();
      for ( $i = 1; $i <= $max_cols; $i++ ) {
        $choices[ (string) $i ] = $i === 1 ? '1 Column' : "{$i} Columns";
      }

      $fields[] = array(
        'key' => "field_grid_{$prefix}_col_span_{$max_cols}",
        'label' => 'Column Span',
        'name' => "col_span_{$max_cols}",
        'type' => 'select',
        'wrapper' => array( 'width' => '50' ),
        'conditional_logic' => array(
          array(
            array(
              'field' => 'field_grid_columns',
              'operator' => '==',
              'value' => (string) $max_cols,
            ),
          ),
        ),
        'choices' => $choices,
        'default_value' => '1',
        'return_format' => 'value',
      );
    }

    return $fields;
  }
}

acf_add_local_field_group( array(
  'key' => 'group_grid_block',
  'title' => 'Grid',
  'fields' => array(
    array(
      'key' => 'field_grid_columns',
      'label' => 'Columns (Desktop)',
      'name' => 'columns',
      'type' => 'select',
      'wrapper' => array( 'width' => '25' ),
      'choices' => array(
        '2' => '2 Columns',
        '3' => '3 Columns',
        '4' => '4 Columns',
        '5' => '5 Columns',
        '6' => '6 Columns',
        '7' => '7 Columns',
        '8' => '8 Columns',
      ),
      'default_value' => '4',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_grid_min_columns',
      'label' => 'Minimum Columns (Mobile)',
      'name' => 'min_columns',
      'type' => 'radio',
      'wrapper' => array( 'width' => '25' ),
      'choices' => array(
        '1' => '1 Column',
        '2' => '2 Columns',
        '3' => '3 Columns',
        '4' => '4 Columns',
      ),
      'default_value' => '1',
      'layout' => 'horizontal',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_grid_gap',
      'label' => 'Spacing',
      'name' => 'gap',
      'type' => 'radio',
      'wrapper' => array( 'width' => '25' ),
      'choices' => array(
        'none'   => 'None',
        'small'  => 'Small',
        'medium' => 'Medium',
        'large'  => 'Large',
      ),
      'default_value' => 'medium',
      'layout' => 'horizontal',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_grid_row_style',
      'label' => 'Row Height',
      'name' => 'row_style',
      'type' => 'select',
      'wrapper' => array( 'width' => '25' ),
      'choices' => array(
        'stretch'   => 'Match Tallest in Row',
        'square'    => 'Uniform Square (1:1)',
        'landscape' => 'Uniform Landscape (4:3)',
        'portrait'  => 'Uniform Portrait (3:4)',
      ),
      'default_value' => 'stretch',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_grid_items',
      'label' => 'Grid Items',
      'name' => 'items',
      'type' => 'flexible_content',
      'button_label' => 'Add Grid Item',
      'layouts' => array(
        'layout_grid_media' => array(
          'key' => 'layout_grid_media',
          'name' => 'media_item',
          'label' => 'Image',
          'display' => 'block',
          'sub_fields' => array_merge(
            colby_grid_span_subfields( 'media' ),
            array(
              array(
                'key' => 'field_grid_clone_media',
                'label' => 'Media',
                'name' => 'media',
                'type' => 'clone',
                'clone' => array( 0 => 'group_component_media_item' ),
                'display' => 'seamless',
                'prefix_label' => 0,
                'prefix_name' => 0,
              ),
            )
          ),
        ),
        'layout_grid_cta' => array(
          'key' => 'layout_grid_cta',
          'name' => 'cta_card',
          'label' => 'CTA Card',
          'display' => 'block',
          'sub_fields' => array_merge(
            colby_grid_span_subfields( 'cta' ),
            array(
              array(
                'key' => 'field_grid_clone_cta',
                'label' => 'CTA',
                'name' => 'cta',
                'type' => 'clone',
                'clone' => array( 0 => 'group_component_cta_card' ),
                'display' => 'seamless',
                'prefix_label' => 0,
                'prefix_name' => 0,
              ),
            )
          ),
        ),
        'layout_grid_quote' => array(
          'key' => 'layout_grid_quote',
          'name' => 'block_quote',
          'label' => 'Block Quote',
          'display' => 'block',
          'sub_fields' => array_merge(
            colby_grid_span_subfields( 'quote' ),
            array(
              array(
                'key' => 'field_grid_clone_quote',
                'label' => 'Quote',
                'name' => 'quote_clone',
                'type' => 'clone',
                'clone' => array( 0 => 'group_6419fb841b5da' ),
                'display' => 'seamless',
                'prefix_label' => 0,
                'prefix_name' => 0,
              ),
            )
          ),
        ),
        'layout_grid_media_context' => array(
          'key' => 'layout_grid_media_context',
          'name' => 'media_context_card',
          'label' => 'Media Context Card',
          'display' => 'block',
          'sub_fields' => array_merge(
            colby_grid_span_subfields( 'media_context' ),
            array(
              array(
                'key' => 'field_grid_clone_media_context',
                'label' => 'Media Context Card',
                'name' => 'media_context',
                'type' => 'clone',
                'clone' => array( 0 => 'group_component_media_context_card' ),
                'display' => 'seamless',
                'prefix_label' => 0,
                'prefix_name' => 0,
              ),
            )
          ),
        ),
      ),
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'block',
        'operator' => '==',
        'value' => 'acf/grid',
      ),
    ),
  ),
  'active' => true,
) );

endif;