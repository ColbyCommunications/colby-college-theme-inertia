<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

$build_progress_metric_section = function($section_key, $section_label ) {$sub_fields = array();

  for ( $i = 1; $i <= 2; $i++ ) {
    // Row 1 (3 fields): Metric, Format, Metric Color
    $sub_fields[] = array(
      'key' => "field_pb_{$section_key}_line_{$i}_metric",
      'label' => "Line {$i}: Metric",
      'name' => "line_{$i}_metric",
      'type' => 'number',
      'step' => 'any',
      'wrapper' => array( 'width' => '34' ),
    );
    $sub_fields[] = array(
      'key' => "field_pb_{$section_key}_line_{$i}_format",
      'label' => "Line {$i}: Format",
      'name' => "line_{$i}_format",
      'type' => 'select',
      'choices' => array(
        'number'     => 'Number',
        'percentage' => 'Percentage (%)',
        'currency'   => 'Currency ($)',
      ),
      'default_value' => 'number',
      'return_format' => 'value',
      'wrapper' => array( 'width' => '33' ),
    );
    $sub_fields[] = array(
      'key' => "field_pb_{$section_key}_line_{$i}_metric_color",
      'label' => "Line {$i}: Metric Color",
      'name' => "line_{$i}_metric_color",
      'type' => 'color_picker',
      'default_value' => '#012169',
      'enable_opacity' => 0,
      'return_format' => 'string',
      'wrapper' => array( 'width' => '33' ),
    );

    // Row 2 (3 fields): Text, Text Color, Size
    $sub_fields[] = array(
      'key' => "field_pb_{$section_key}_line_{$i}_text",
      'label' => "Line {$i}: Text",
      'name' => "line_{$i}_text",
      'type' => 'text',
      'wrapper' => array( 'width' => '34' ),
    );
    $sub_fields[] = array(
      'key' => "field_pb_{$section_key}_line_{$i}_color",
      'label' => "Line {$i}: Text Color",
      'name' => "line_{$i}_color",
      'type' => 'color_picker',
      'default_value' => '#012169',
      'enable_opacity' => 0,
      'return_format' => 'string',
      'wrapper' => array( 'width' => '33' ),
    );
    $sub_fields[] = array(
      'key' => "field_pb_{$section_key}_line_{$i}_size",
      'label' => "Line {$i}: Size",
      'name' => "line_{$i}_size",
      'type' => 'select',
      'choices' => array(
        'small'  => 'Small',
        'medium' => 'Medium',
        'large'  => 'Large',
        'xl'     => 'XL',
      ),
      'default_value' => 'medium',
      'return_format' => 'value',
      'wrapper' => array( 'width' => '33' ),
    );
  }

  return array(
    'key' => "field_pb_group_{$section_key}",
    'label' => $section_label,
    'name' => $section_key,
    'type' => 'group',
    'layout' => 'block',
    'sub_fields' => $sub_fields,
  );
};

acf_add_local_field_group( array(
  'key' => 'group_progress_bar',
  'title' => 'Progress Bar',
  'fields' => array(
    // 1. Optional Heading, Size, Text Alignment & Paragraph
    array(
      'key' => 'field_progress_bar_heading',
      'label' => 'Heading',
      'name' => 'heading',
      'type' => 'text',
      'required' => 0,
      'wrapper' => array( 'width' => '50' ),
    ),
    array(
      'key' => 'field_progress_bar_size',
      'label' => 'Size',
      'name' => 'size',
      'aria-label' => '',
      'type' => 'radio',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '25',
        'class' => '',
        'id'    => '',
      ),
      'choices' => array(
        'medium' => 'Medium',
        'large'  => 'Large',
      ),
      'default_value' => 'medium',
      'return_format' => 'value',
      'allow_null' => 0,
      'other_choice' => 0,
      'save_other_choice' => 0,
      'layout' => 'horizontal',
    ),
    array(
      'key' => 'field_progress_bar_text_align',
      'label' => 'Text Alignment',
      'name' => 'text_align',
      'type' => 'select',
      'required' => 0,
      'choices' => array(
        'left'   => 'Left',
        'center' => 'Center',
      ),
      'default_value' => 'left',
      'return_format' => 'value',
      'wrapper' => array( 'width' => '25' ),
    ),
    array(
      'key' => 'field_progress_bar_paragraph',
      'label' => 'Paragraph',
      'name' => 'paragraph',
      'type' => 'textarea',
      'rows' => 3,
      'new_lines' => 'br',
      'required' => 0,
    ),

    // 2. Progress Percentage
    array(
      'key' => 'field_progress_bar_value',
      'label' => 'Bar Fill Percentage (0 - 100)',
      'name' => 'value',
      'type' => 'number',
      'instructions' => 'How far the progress bar should fill (0 to 100%).',
      'required' => 0,
      'default_value' => 0,
      'min' => 0,
      'max' => 100,
      'step' => 'any',
      'append' => '%',
    ),

    // 3. Metrics Section (Parallel Left/Right + Top/Bottom Toggle)
    array(
      'key' => 'field_progress_bar_metrics_accordion',
      'label' => 'Metrics (Parallel Left & Parallel Right)',
      'name' => '',
      'type' => 'accordion',
      'open' => 1,
      'multi_expand' => 1,
    ),
    array(
      'key' => 'field_progress_bar_parallel_position',
      'label' => 'Parallel Metrics Position',
      'name' => 'parallel_position',
      'type' => 'true_false',
      'instructions' => 'Assign Parallel Left and Parallel Right metrics to either the top or bottom of the bar.',
      'default_value' => 1,
      'ui' => 1,
      'ui_on_text' => 'Top',
      'ui_off_text' => 'Bottom',
    ),
    $build_progress_metric_section( 'parallel_left', 'Parallel Left' ),$build_progress_metric_section( 'parallel_right', 'Parallel Right' ),
    array(
      'key' => 'field_progress_bar_metrics_accordion_endpoint',
      'label' => 'Metrics Endpoint',
      'name' => '',
      'type' => 'accordion',
      'endpoint' => 1,
    ),

    // 4. Bar Dimensions, Color & Animation
    array(
      'key' => 'field_progress_bar_height',
      'label' => 'Bar Height',
      'name' => 'bar_height',
      'type' => 'radio',
      'choices' => array(
        'small'  => 'Small',
        'medium' => 'Medium',
        'large'  => 'Large',
        'xl'     => 'XL',
      ),
      'default_value' => 'medium',
      'layout' => 'horizontal',
      'return_format' => 'value',
      'wrapper' => array( 'width' => '50' ),
    ),
    array(
      'key' => 'field_progress_bar_width',
      'label' => 'Bar Width',
      'name' => 'bar_width',
      'type' => 'radio',
      'choices' => array(
        'small'  => 'Small',
        'medium' => 'Medium',
        'large'  => 'Large',
        'xl'     => 'XL',
      ),
      'default_value' => 'large',
      'layout' => 'horizontal',
      'return_format' => 'value',
      'wrapper' => array( 'width' => '50' ),
    ),
    array(
      'key' => 'field_progress_bar_color',
      'label' => 'Bar Color',
      'name' => 'bar_color',
      'type' => 'color_picker',
      'default_value' => '#012169',
      'enable_opacity' => 0,
      'return_format' => 'string',
      'wrapper' => array( 'width' => '50' ),
    ),
    array(
      'key' => 'field_progress_bar_animate_metrics',
      'label' => 'Animate Metrics',
      'name' => 'animate_metrics',
      'type' => 'true_false',
      'message' => 'Animate bar and numbers on scroll',
      'default_value' => 1,
      'ui' => 1,
      'wrapper' => array( 'width' => '50' ),
    ),

    // 5. Buttons Section
    array(
      'key' => 'field_progress_bar_align_buttons',
      'label' => 'Align Buttons',
      'name' => 'align_buttons',
      'type' => 'true_false',
      'default_value' => 0,
      'ui' => 1,
      'ui_on_text' => 'Right',
      'ui_off_text' => 'Left',
    ),
    array(
      'key' => 'field_progress_bar_buttons',
      'label' => 'Buttons',
      'name' => 'buttons',
      'type' => 'repeater',
      'layout' => 'table',
      'button_label' => 'Add Button',
      'sub_fields' => array(
        array(
          'key' => 'field_progress_bar_button_link',
          'label' => 'Button',
          'name' => 'button',
          'type' => 'link',
          'return_format' => 'array',
        ),
      ),
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'block',
        'operator' => '==',
        'value' => 'acf/progress-bar',
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'active' => true,
) );

endif;