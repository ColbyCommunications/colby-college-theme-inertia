<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

if ( ! function_exists( 'colby_mosaic_span_subfields' ) ) {
  function colby_mosaic_span_subfields( string $prefix ): array {
    return array(
      array(
        'key' => "field_mosaic_{$prefix}_col_span_2",
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
        'choices' => array( '1' => '1 Column', '2' => '2 Columns' ),
        'default_value' => '1',
      ),
      array(
        'key' => "field_mosaic_{$prefix}_col_span_3",
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
        'choices' => array( '1' => '1 Column', '2' => '2 Columns', '3' => '3 Columns' ),
        'default_value' => '1',
      ),
      array(
        'key' => "field_mosaic_{$prefix}_col_span_4",
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
      ),
    );
  }
}

acf_add_local_field_group( array(
  'key' => 'group_mosaic_block',
  'title' => 'Mosaic',
  'fields' => array(
    array(
      'key' => 'field_mosaic_columns',
      'label' => 'Columns (Desktop)',
      'name' => 'columns',
      'type' => 'radio',
      'wrapper' => array( 'width' => '33' ),
      'choices' => array(
        '2' => '2 Columns',
        '3' => '3 Columns',
        '4' => '4 Columns',
      ),
      'default_value' => '3',
      'layout' => 'horizontal',
    ),
    array(
      'key' => 'field_mosaic_min_columns',
      'label' => 'Minimum Columns (Mobile)',
      'name' => 'min_columns',
      'type' => 'radio',
      'wrapper' => array( 'width' => '33' ),
      'choices' => array(
        '1' => '1 Column',
        '2' => '2 Columns',
        '3' => '3 Columns',
      ),
      'default_value' => '1',
      'layout' => 'horizontal',
    ),
    array(
      'key' => 'field_mosaic_gap',
      'label' => 'Spacing',
      'name' => 'gap',
      'type' => 'radio',
      'wrapper' => array( 'width' => '34' ),
      'choices' => array(
        'small' => 'Small',
        'medium' => 'Medium',
        'large' => 'Large',
      ),
      'default_value' => 'medium',
      'layout' => 'horizontal',
    ),
    array(
      'key' => 'field_mosaic_items',
      'label' => 'Items',
      'name' => 'items',
      'type' => 'flexible_content',
      'button_label' => 'Add Item',
      'layouts' => array(
        // Clones group_component_media_item
        'layout_mosaic_media' => array(
          'key' => 'layout_mosaic_media',
          'name' => 'media_item',
          'label' => 'Image',
          'display' => 'block',
          'sub_fields' => array_merge(
            colby_mosaic_span_subfields( 'media' ),
            array(
              array(
                'key' => 'field_mosaic_clone_media',
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
        // Clones group_component_cta_card
        'layout_mosaic_cta' => array(
          'key' => 'layout_mosaic_cta',
          'name' => 'cta_card',
          'label' => 'CTA Card',
          'display' => 'block',
          'sub_fields' => array_merge(
            colby_mosaic_span_subfields( 'cta' ),
            array(
              array(
                'key' => 'field_mosaic_clone_cta',
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
        // Clones your existing BlockQuote (group_6419fb841b5da)
        'layout_mosaic_quote' => array(
          'key' => 'layout_mosaic_quote',
          'name' => 'block_quote',
          'label' => 'Block Quote',
          'display' => 'block',
          'sub_fields' => array_merge(
            colby_mosaic_span_subfields( 'quote' ),
            array(
              array(
                'key' => 'field_mosaic_clone_quote',
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
        'layout_mosaic_media_context' => array(
          'key' => 'layout_mosaic_media_context',
          'name' => 'media_context_card',
          'label' => 'Media Context Card',
          'display' => 'block',
          'sub_fields' => array_merge(
            colby_mosaic_span_subfields( 'media_context' ),
            array(
              array(
                'key' => 'field_mosaic_clone_media_context',
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
        'value' => 'acf/mosaic',
      ),
    ),
  ),
  'active' => true,
) );

endif;