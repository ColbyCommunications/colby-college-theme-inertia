<?php
$block_id = ! empty( $block['anchor'] ) ? esc_attr( $block['anchor'] ) : 'panel-' . wp_generate_uuid4();
$heading = get_field('heading') ?: 'Panel';

$allowed_blocks = [
    'acf/paragraph',
    'acf/image',
    'acf/image-text',
    'acf/heading',
    'acf/table',
    'acf/embed',
    'core/embed'
];
?>

<?php if ( $is_preview ) : ?>
    <div class="acf-block-fields acf-fields">
        <div class="acf-field">
            <div class="acf-label"><label>Accordion Panel: <?php echo esc_html($heading); ?></label></div>
            <div style="border: dotted 1px #ccc; padding: 10px;">
                <InnerBlocks allowedBlocks="<?php echo esc_attr( wp_json_encode( $allowed_blocks ) ); ?>" />
            </div>
        </div>
    </div>
<?php else : ?>
    <article id="<?php echo $block_id; ?>" class="advanced-accordion__panel border-t border-gray-300">
        <div class="advanced-accordion__header">
            <button class="advanced-accordion__button flex w-full items-center justify-between gap-x-3 !px-0 !py-6 text-left">
                <h3 class="!text-18 leading-120 text-indigo">
                    <?php echo esc_html( $heading ); ?>
                </h3>
                <div class="flex h-9 w-11 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100">
                    <div class="icon-container transition-all duration-200 ease-in-out -rotate-90">
                        <svg class="w-1.5 fill-azure" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                    </div>
                </div>
            </button>
        </div>

        <div class="advanced-accordion__window overflow-hidden transition-all duration-250 ease-in-out" style="height: 0px; visibility: hidden;">
            <div class="advanced-accordion__content pb-6 font-body text-coal">
                <InnerBlocks allowedBlocks="<?php echo esc_attr( wp_json_encode( $allowed_blocks ) ); ?>" />
            </div>
        </div>
    </article>
<?php endif; ?>