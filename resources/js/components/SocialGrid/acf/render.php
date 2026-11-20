<?php
$alignment        = get_field( 'alignment' ) ?: 'center';
$size             = get_field( 'size' ) ?: 'medium';
$header           = get_field( 'header' );
$subheading       = get_field( 'subheading' );
$paragraph        = get_field( 'paragraph' );
$background_style = get_field( 'background_style' ) ?: 'none';
$icons            = get_field( 'icons' );

$align_class = $alignment === 'center' ? 'text-center justify-center' : 'text-left justify-start';
?>

<div class="social-grid-preview p-6 border border-gray-200 rounded" style="text-align: <?php echo esc_attr( $alignment ); ?>;">
  <?php if ( $subheading ) : ?>
    <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; opacity: 0.7;">
      <?php echo esc_html( $subheading ); ?>
    </p>
  <?php endif; ?>

  <?php if ( $header ) : ?>
    <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">
      <?php echo esc_html( $header ); ?>
    </h3>
  <?php endif; ?>

  <?php if ( $paragraph ) : ?>
    <p style="font-size: 14px; margin-bottom: 16px;">
      <?php echo nl2br( esc_html( $paragraph ) ); ?>
    </p>
  <?php endif; ?>

  <?php if ( $icons ) : ?>
    <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: <?php echo $alignment === 'center' ? 'center' : 'flex-start'; ?>;">
      <?php foreach ( $icons as $item ) : 
        $bg_color    = $background_style !== 'none' ? ( $item['background_color'] ?: '#002878' ) : 'transparent';
        $icon_color  = $item['icon_color'] ?: '#FFFFFF';
        $label_color = ! empty( $item['label_color'] ) ? $item['label_color'] : '#002878';
        $radius      = $background_style === 'circle' ? '9999px' : ( $background_style === 'square' ? '8px' : '0' );
        $box_size    = $size === 'small' ? '32px' : ( $size === 'large' ? '64px' : '48px' );
      ?>
        <div style="display: inline-flex; flex-direction: column; align-items: center; gap: 6px; width: 80px; text-align: center;">
          <div style="
            width: <?php echo $box_size; ?>;
            height: <?php echo $box_size; ?>;
            background-color: <?php echo esc_attr( $bg_color ); ?>;
            color: <?php echo esc_attr( $icon_color ); ?>;
            border-radius: <?php echo $radius; ?>;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: bold;
            text-transform: uppercase;
            border: <?php echo $background_style === 'none' ? '1px dashed #ccc' : 'none'; ?>;
          ">
            <?php echo esc_html( $item['icon'] ); ?>
          </div>

          <?php if ( ! empty( $item['label'] ) ) : ?>
            <span style="font-size: 12px; color: <?php echo esc_attr( $label_color ); ?>; word-break: break-word;">
              <?php echo esc_html( $item['label'] ); ?>
            </span>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>
    </div>
  <?php elseif ( $is_preview ) : ?>
    <p style="opacity: 0.5; font-style: italic;">Add social icons in the sidebar to preview this block.</p>
  <?php endif; ?>
</div>