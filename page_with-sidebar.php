<?php
/**
 * Template Name: Page with Sidebar
 */

use BoxyBird\Inertia\Inertia;

require_once __DIR__ . '/helpers/sidebar_data.php';

global $post;

// get block information ------------------

$filtered_blocks = array_values(array_filter(
    parse_blocks($post->post_content),
    function ($block) {
        return !is_null($block['blockName'] ?? null);
    }
));

/**
 * Recursively collect all non-group descendant blocks from a block tree.
 *
 * - If a child is core/group, recurse into its innerBlocks.
 * - Otherwise, keep the block as-is.
 */
function colby_flatten_group_descendants(array $blocks): array
{
    $flattened = [];

    foreach ($blocks as $block) {
        $block_name = $block['blockName'] ?? null;

        if ($block_name === 'core/group') {
            $flattened = array_merge(
                $flattened,
                colby_flatten_group_descendants($block['innerBlocks'] ?? [])
            );
            continue;
        }

        if (!is_null($block_name)) {
            $flattened[] = $block;
        }
    }

    return $flattened;
}

function get_structured_block_data($block, $index = 0) {

  if ($block['blockName'] === 'core/heading' ) {
    return ['heading' => str_replace(array("\r", "\n"), '', $block['innerHTML'])];
  }

  $meta_id = !empty($block['attrs']['id'])
      ? 'block_' . $block['attrs']['id']
      : 'block_' . $index . '_' . md5(wp_json_encode($block['attrs']['data'] ?? []));
  

  acf_setup_meta($block['attrs']['data'] ?? [], $meta_id, true);
  $fields = get_fields($meta_id);
  acf_reset_meta($meta_id);

  return $fields ?: [];
}

// foreach ($filtered_blocks as $index => &$block) {
//   $block['attrs']['data'] = get_structured_block_data($block, $index);
//   if (($block['blockName'] ?? null) === 'core/group') {
//       $block = colby_prepare_group_block($block);
//   }
//   // $block = enrich_block_data($block, $index);
// }
unset($block);


function colby_process_single_block(array $block, int $index = 0, string $path = 'root'): array
{
    $block_path = $path . '_' . $index;

    $block['attrs']['data'] = get_structured_block_data($block, $block_path);

    if (($block['blockName'] ?? null) === 'core/group') {
        $block['attrs'] = isset($block['attrs']) && is_array($block['attrs'])
            ? $block['attrs']
            : [];

        $block['attrs']['data'] = isset($block['attrs']['data']) && is_array($block['attrs']['data'])
            ? $block['attrs']['data']
            : [];

        $block['attrs']['data']['blocks'] = colby_flatten_group_descendants(
            $block['innerBlocks'] ?? []
        );

        $block['attrs']['data']['blocks'] = colby_process_blocks(
            $block['attrs']['data']['blocks'],
            $block_path . '_group'
        );
    }

    // $block = enrich_block_data($block, $index);

    return $block;
}


function colby_process_blocks(array $blocks, string $path = 'root'): array
{
    $processed = [];

    foreach (array_values($blocks) as $index => $block) {
        $processed[] = colby_process_single_block($block, $index, $path);
    }

    return $processed;
}

$filtered_blocks = colby_process_blocks($filtered_blocks);
// dd($filtered_blocks);

// get hero information ------------------
$is_post = get_post_type($post) === 'post';

if ($is_post) {
  $template_subheading = get_the_date('M d, Y', $post->ID);
  $template_heading = get_the_title($post->ID);
  $template_paragraph = has_excerpt($post->ID) ? get_the_excerpt($post->ID) : null;
  $template_date_bool = true;
} else {
  $template_subheading = get_the_title($post->ID);
  $template_heading = function_exists('get_field') ? (get_field('heading', $post->ID) ?: '') : '';
  $template_paragraph = function_exists('get_field') ? (get_field('paragraph', $post->ID) ?: '') : '';
  $template_date_bool = false;
}

$hero_type = function_exists('get_field') ? (get_field('hero_type', $post->ID) ?: 'default') : 'default';
$image = function_exists('get_field') ? get_field('image', $post->ID) : null;
$buttons = function_exists('get_field') ? (get_field('buttons', $post->ID) ?: []) : [];
$align = function_exists('get_field') ? (get_field('align', $post->ID) ?: 'default') : 'default';
$image_orientation = function_exists('get_field') ? (get_field('image_orientation', $post->ID) ?: 'square') : 'square';

$hero = null;
if ($hero_type === 'overlay') {
  $hero = [
    'type' => 'overlay',
    'props' => [
      'size' => 'medium',
      'subheading' => $template_subheading,
      'heading' => $template_heading,
      'paragraph' => $template_paragraph,
      'image' => $image,
      'buttons' => $buttons,
      'fromPage' => true,
    ],
  ];
} elseif ($hero_type !== 'none') {
  $hero = [
    'type' => 'default',
    'props' => [
      'subheading' => $template_subheading,
      'heading' => $template_heading,
      'paragraph' => $template_paragraph,
      'date' => $template_date_bool,
      'align' => $align,
      'image' => $image,
      'buttons' => $buttons,
      'imageOrientation' => $image_orientation === 'portrait' ? 'portrait' : 'landscape',
    ],
  ];
}

$sidebar = $is_post ? null : colby_sidebar_build_data($post);


Inertia::render('PageWithSidebar/Show', [
  'id' => $post->ID,
  'title' => get_the_title($post->ID),
  'layout' => 'with-sidebar',
  'sidebar' => $sidebar,
  'isPost' => $is_post,
  'blocks' => $filtered_blocks,
  'hero' => $hero
]);
