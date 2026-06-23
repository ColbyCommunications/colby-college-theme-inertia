<?php
$block_id = ! empty( $block['anchor'] ) ? esc_attr( $block['anchor'] ) : 'accordion-' . wp_generate_uuid4();
$class_name = 'advanced-accordion max-w-screen-2xl w-full mx-auto';

if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}

$single = get_field('single') ? '1' : '0';
$allowed_blocks = ['acf/advanced-accordion-panel'];
?>

<div id="<?php echo $block_id; ?>" class="<?php echo esc_attr( $class_name ); ?>" data-single="<?php echo esc_attr( $single ); ?>">
    <?php if ( $is_preview ) : ?>
        <div class="acf-block-fields acf-fields">
            <div class="acf-field">
                <div class="acf-label"><label>Advanced Accordion</label></div>
                <div style="border: 2px dashed #ccc; padding: 20px;">
                    <InnerBlocks allowedBlocks="<?php echo esc_attr( wp_json_encode( $allowed_blocks ) ); ?>" />
                </div>
            </div>
        </div>
    <?php else : ?>
        <div class="colby-advanced-accordion-block border-b border-gray-300">
            <InnerBlocks allowedBlocks="<?php echo esc_attr( wp_json_encode( $allowed_blocks ) ); ?>" />
        </div>
    <?php endif; ?>
</div>