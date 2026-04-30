<?php

$block_id = ! empty( $block['anchor'] )
    ? esc_attr( $block['anchor'] )
    : '';

$class_name = 'advanced-accordion';

if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}

$allowed_blocks = [
    'acf/advanced-accordion-panel',
];

$inner_blocks_template = [
    [
        'acf/advanced-accordion-panel',
        [],
    ],
];

$wrapper_attributes = get_block_wrapper_attributes([
    'id'    => $block_id,
    'class' => esc_attr( $class_name ),
]);
?>

<div <?php echo wp_kses_data( $wrapper_attributes ); ?>>
    <div class="acf-block-fields acf-fields">
        <div class="acf-field">
            <div class="acf-label">
                <label>Advanced Accordion</label>
            </div>

            <div class="acf-input" style="border: 1px solid #ccc; padding: 20px;">
                <InnerBlocks
                    allowedBlocks="<?php echo esc_attr( wp_json_encode( $allowed_blocks ) ); ?>"
                    template="<?php echo esc_attr( wp_json_encode( $inner_blocks_template ) ); ?>"
                />
            </div>
        </div>
    </div>
</div>