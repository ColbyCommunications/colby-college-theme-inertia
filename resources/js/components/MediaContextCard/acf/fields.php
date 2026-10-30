<?php

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group( array(
  'key' => 'group_component_media_context_card',
  'title' => 'Component: Media Context Card',
  'fields' => array(
    array(
      'key' => 'field_mcc_media_type',
      'label' => 'Media Type',
      'name' => 'media_type',
      'type' => 'radio',
      'wrapper' => array( 'width' => '33' ),
      'choices' => array(
        'image' => 'Image',
        'video' => 'Looping Video',
      ),
      'default_value' => 'image',
      'layout' => 'horizontal',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_mcc_ratio',
      'label' => 'Shape / Aspect Ratio',
      'name' => 'ratio',
      'type' => 'select',
      'wrapper' => array( 'width' => '33' ),
      'choices' => array(
        'original'  => 'Original (Full Media)',
        'portrait'  => 'Portrait (3:4)',
        'square'    => 'Square (1:1)',
        'landscape' => 'Landscape (4:3)',
      ),
      'default_value' => 'original',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_mcc_reveal_style',
      'label' => 'Overlay / Reveal Style',
      'name' => 'reveal_style',
      'type' => 'select',
      'wrapper' => array( 'width' => '34' ),
      'choices' => array(
        'static'     => 'Static (Always Visible)',
        'peek'       => 'Peek (Heading Visible, Hover Reveals Body)',
        'slide-up'   => 'Slide Up from Bottom',
        'slide-left' => 'Slide In from Side',
        'fade'       => 'Fade In',
      ),
      'default_value' => 'peek',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_mcc_context_bg',
      'label' => 'Context Background Color',
      'name' => 'context_bg',
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
      'key' => 'field_mcc_gradient',
      'label' => 'Initial Gradient',
      'name' => 'gradient',
      'type' => 'select',
      'wrapper' => array( 'width' => '50' ),
      'conditional_logic' => array(
        array(
          array(
            'field'    => 'field_mcc_reveal_style',
            'operator' => '==',
            'value'    => 'peek',
          ),
        ),
      ),
      'choices' => array(
        'none'    => 'None',
        'partial' => 'Partial (Over Heading & Superheading Only)',
      ),
      'default_value' => 'partial',
      'return_format' => 'value',
    ),
    array(
      'key' => 'field_mcc_image',
      'label' => 'Image',
      'name' => 'image',
      'type' => 'image',
      'required' => 1,
      'conditional_logic' => array(
        array(
          array(
            'field'    => 'field_mcc_media_type',
            'operator' => '==',
            'value'    => 'image',
          ),
        ),
      ),
      'return_format' => 'array',
      'preview_size' => 'medium',
    ),
    array(
      'key' => 'field_mcc_video',
      'label' => 'Looping Video',
      'name' => 'video',
      'type' => 'file',
      'instructions' => 'Upload an MP4 or WebM file. Plays muted on a continuous loop.',
      'required' => 1,
      'conditional_logic' => array(
        array(
          array(
            'field'    => 'field_mcc_media_type',
            'operator' => '==',
            'value'    => 'video',
          ),
        ),
      ),
      'return_format' => 'array',
      'library' => 'all',
      'mime_types' => 'mp4, webm, mov',
    ),
    array(
      'key' => 'field_mcc_context',
      'label' => 'Context (Optional)',
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