<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group( array(
  'key' => 'group_component_cta_card',
  'title' => 'Component: CTA Card',
  'fields' => array(
    array(
      'key' => 'field_cta_card_theme',
      'label' => 'Background Color',
      'name' => 'theme',
      'type' => 'select',
      'wrapper' => array( 'width' => '50' ),
      'choices' => array(
        'indigo' => 'Indigo',
        'gold'   => 'Gold',
        'azure'  => 'Azure',
        'snow'   => 'Snow',
        'cloud'  => 'Cloud',
        'stone'  => 'Stone',
        'slate'  => 'Slate',
        'coal'   => 'Coal',
      ),
      'default_value' => 'indigo',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_cta_card_alignment',
      'label' => 'Alignment',
      'name' => 'alignment',
      'type' => 'radio',
      'wrapper' => array( 'width' => '50' ),
      'conditional_logic' => array(
        array(
          array(
            'field' => 'field_mosaic_columns',
            'operator' => '==',
            'value' => '2',
          ),
          array(
            'field' => 'field_mosaic_cta_col_span_2',
            'operator' => '!=',
            'value' => '1',
          ),
        ),
        array(
          array(
            'field' => 'field_mosaic_columns',
            'operator' => '==',
            'value' => '3',
          ),
          array(
            'field' => 'field_mosaic_cta_col_span_3',
            'operator' => '!=',
            'value' => '1',
          ),
        ),
        array(
          array(
            'field' => 'field_mosaic_columns',
            'operator' => '==',
            'value' => '4',
          ),
          array(
            'field' => 'field_mosaic_cta_col_span_4',
            'operator' => '!=',
            'value' => '1',
          ),
        ),
      ),
      'choices' => array(
        'left'   => 'Left',
        'center' => 'Center',
        'right'  => 'Right',
      ),
      'default_value' => 'left',
      'layout' => 'horizontal',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_cta_card_context',
      'label' => 'Context',
      'name' => 'context',
      'type' => 'clone',
      'clone' => array(
        0 => 'group_62eff83a5aa1e',
      ),
      'display' => 'seamless',
      'layout' => 'block',
      'prefix_label' => 0,
      'prefix_name' => 0,
    ),
  ),
  'location' => array(),
  'active' => false,
) );

endif;