<?php
use BoxyBird\Inertia\Inertia;

global $post;

$filtered_blocks = array_values(array_filter(
    parse_blocks($post->post_content),
    function ($block) {
        return !is_null($block['blockName'] ?? null);
    }
));

foreach ($filtered_blocks as $index => &$block) {
    $block = colby_prepare_block_props($block, $index, $index);
}
unset($block);

// dd($filtered_blocks);

// last block on the HP
// dd($filtered_blocks[10]['innerBlocks'][0]['innerBlocks']);

Inertia::render('Page/Show', [
    'id'     => $post->ID,
    'title'  => get_the_title($post->ID),
    'layout' => 'default',
    'blocks' => $filtered_blocks,
]);
