<?php
use BoxyBird\Inertia\Inertia;

require_once('helpers/prepare_data.php');

/**
 * Recursively replace media ID fields with their URLs.
 *
 * @param mixed $node Array|object|scalar – the data to walk (by reference).
 * @param array $targetKeys                 – exact field names to replace.
 * @return void
 */
function replace_media_ids_with_urls(&$node, array $targetKeys = ['image','video','post_image']): void
{
    // Only recurse into arrays/objects
    if (is_array($node) || is_object($node)) {
        foreach ($node as $key => &$value) {
            // If the key is one we care about and the value is an integer (or numeric string)…
            if (in_array($key, $targetKeys, true) && is_media_id($value)) {
                $url = wp_get_attachment_url((int) $value);
                if ($url) {
                    $value = $url; // replace ID with URL
                }
            } else {
                // Recurse into children
                replace_media_ids_with_urls($value, $targetKeys);
            }
        }
        // Important: unset reference to avoid accidental reuse
        unset($value);
    }
}

/**
 * Treat ints or numeric strings (e.g., "55745") as attachment IDs.
 */
function is_media_id($v): bool
{
    if (is_int($v)) return true;
    if (is_string($v) && ctype_digit($v)) return true;
    return false;
}


global $post;
$blocks = prepare_data(parse_blocks( $post->post_content ));
replace_media_ids_with_urls($blocks, ['image','video','post_image']);
// die(var_dump(wp_get_attachment_url( 55745 )));

Inertia::render('Page/Show', [
  'id'      => $post->ID,
  'title'   => get_the_title($post->ID),
  'blocks' => $blocks,
]);
