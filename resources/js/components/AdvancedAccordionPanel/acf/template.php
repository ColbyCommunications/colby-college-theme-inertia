<?php

$block_id = ! empty( $block['anchor'] )
    ? esc_attr( $block['anchor'] )
    : '';

$class_name = 'advanced-accordion-panel';

if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}

$allowed_blocks = [
    'acf/paragraph',
    'acf/image',
    'acf/image-text',
    'core/heading',
    'acf/table',
    'acf/embed',
    'core/embed',
];

$inner_blocks_template = [
    [
        'acf/paragraph',
        [],
    ],
];

$wrapper_attributes = get_block_wrapper_attributes([
    'id'    => $block_id,
    'class' => esc_attr( $class_name ),
]);

$heading = get_field( 'heading' );
?>

<div <?php echo wp_kses_data( $wrapper_attributes ); ?>>
    <div class="acf-block-fields acf-fields">
        <div class="acf-field">
            <div class="acf-label">
                <label>Accordion Panel</label>
            </div>

            <?php if ( ! empty( $heading ) ) : ?>
                <h3 style="margin: 0 0 12px;">
                    <?php echo esc_html( $heading ); ?>
                </h3>
            <?php endif; ?>

            <div class="acf-input" style="border: dotted 1px #ccc; padding: 10px;">
                <InnerBlocks
                    allowedBlocks="<?php echo esc_attr( wp_json_encode( $allowed_blocks ) ); ?>"
                    template="<?php echo esc_attr( wp_json_encode( $inner_blocks_template ) ); ?>"
                />
            </div>
        </div>
    </div>
</div>