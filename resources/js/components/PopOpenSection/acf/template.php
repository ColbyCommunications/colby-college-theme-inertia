<?php

$heading = get_field( 'heading' );
$subheading = get_field( 'subheading' );
$paragraph = get_field( 'paragraph' );
$button_text = get_field( 'button_text' );
$display_mode = get_field( 'display_mode' );

$allowed_blocks = array(
	'acf/paragraph',
	'acf/image',
	'acf/image-text',
	'acf/table',
	'acf/embed',
	'core/heading',
	'core/embed',
	'core/list',
);

$template = array(
	array(
		'acf/paragraph',
	),
);

?>

<div class="pop-open-section-editor">
	<?php if ( $subheading ) : ?>
		<p>
			<strong><?php echo esc_html( $subheading ); ?></strong>
		</p>
	<?php endif; ?>

	<?php if ( $heading ) : ?>
		<h2>
			<?php echo esc_html( $heading ); ?>
		</h2>
	<?php endif; ?>

	<?php if ( $paragraph ) : ?>
		<div>
			<?php echo wp_kses_post( $paragraph ); ?>
		</div>
	<?php endif; ?>

	<?php if ( $button_text ) : ?>
		<p>
			<strong>
				<?php echo esc_html( $button_text ); ?>
			</strong>

			<?php if ( $display_mode ) : ?>
				<small>
					(<?php echo esc_html( ucfirst( $display_mode ) ); ?>)
				</small>
			<?php endif; ?>
		</p>
	<?php endif; ?>

	<hr>

	<p>
		<strong>Pop-open content</strong>
	</p>

	<InnerBlocks
		allowedBlocks="<?php echo esc_attr( wp_json_encode( $allowed_blocks ) ); ?>"
		template="<?php echo esc_attr( wp_json_encode( $template ) ); ?>"
	/>
</div>