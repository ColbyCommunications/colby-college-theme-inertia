<?php
/**
 * Template Name: Page with Sidebar
 */

use BoxyBird\Inertia\Inertia;

require_once __DIR__ . '/helpers/sidebar_data.php';

global $post;

// get block information ------------------
// pre process for classic blocks
$parsed_blocks = array_map(function ($block) {

    if (
        empty($block['blockName'])
        && !empty(trim($block['innerHTML'] ?? ''))
    ) {
        $block['blockName'] = 'core/classic';
    }

    return $block;

}, parse_blocks($post->post_content));

$filtered_blocks = array_values(array_filter(
    $parsed_blocks,
    function ($block) {
        return !empty($block['blockName']);
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


function colby_block_slug_from_name(string $block_name): string
{
    $parts = explode('/', $block_name, 2);
    return $parts[1] ?? '';
}

function colby_block_folder_from_slug(string $slug): string
{
    $parts = preg_split('/[-_]/', $slug);

    $parts = array_map(function ($part) {
        return ucfirst($part);
    }, $parts);

    return implode('', $parts);
}

function colby_block_function_suffix_from_slug(string $slug): string
{
    return str_replace('-', '_', strtolower($slug));
}

function colby_block_helper_file_path(string $block_name): string
{
    $slug = colby_block_slug_from_name($block_name);
    $folder = colby_block_folder_from_slug($slug);

    return get_template_directory() . '/resources/js/components/' . $folder . '/acf/get_remote_data.php';
}

function colby_block_remote_data_function_name(string $block_name): string
{
    $slug = colby_block_slug_from_name($block_name);
    $suffix = colby_block_function_suffix_from_slug($slug);

    return 'colby_block_' . $suffix . '_get_remote_data';
}

function enrich_block_data(array $block, int $index): array
{
    $block_name = $block['blockName'] ?? '';

    if (!$block_name) {
        return $block;
    }

    /*
     * get_remote_data.php is exclusively an ACF-block convention.
     *
     * This also prevents namespace collisions such as:
     *
     *     acf/table
     *     tablepress/table
     */
    if (strpos($block_name, 'acf/') !== 0) {
        return $block;
    }

    $data = $block['attrs']['data'] ?? [];

    $helper_file = colby_block_helper_file_path($block_name);

    if (!file_exists($helper_file)) {
        return $block;
    }

    require_once $helper_file;

    $function_name =
        colby_block_remote_data_function_name($block_name);

    if (is_callable($function_name)) {
        $block['attrs']['data'] =
            $function_name($data, $index, $block);
    }

    return $block;
}

function get_people_posts_by_department($segment3) {

	// Handle cases where departments have commas in their name
	switch ($segment3) {
		case 'performance theater and dance':
			$segment3 = "performance, theater, and dance";
			break;
		case 'science technology and society':
			$segment3 = "science, technology, and society";
			break;
		case 'womens gender and sexuality studies':
			$segment3 = "women's, gender, and sexuality studies";
			break;
	}
    // Define query arguments
    $args = array(
    'post_type'      => 'people',       // Specify the post type
    'posts_per_page' => -1,             // Retrieve all posts
    'post_status'    => 'publish',      // Retrieve only published posts
    'meta_query'     => array(
        'relation' => 'AND',            // Ensure both conditions must be true
        array(
            'key'     => 'department',  // Custom field key
            'value'   => $segment3,     // Value to match
            'compare' => '=',           // Match exactly
        ),
        array(
            'key'     => 'is_retiree',  // Custom field key for retirees
            'value'   => '1',           // Exclude people with '1' for is_retiree
            'compare' => '!=',          // Exclude if the value is 1
        ),
    ),
	);

    // Instantiate WP_Query
    $query = new WP_Query($args);

    // Initialize an array to hold the posts
    $posts = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $post = get_post();
            if ($post) { // Check if get_post() returns a valid post object
                $posts[] = ['post' => $post];
            }
        }
        wp_reset_postdata();
    }

    return $posts;
}

function get_people($segment1, $segment2, $segment3) {
    switch ($segment1) {
        case 'academics':
            switch ($segment2) {
                case 'departments-and-programs':
                    if ($segment3 !== '') {
                        return get_people_posts_by_department($segment3);
                    }
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

function colby_prepare_advanced_accordion_block(array $block, string $block_path): array
{
    $block['attrs'] = isset($block['attrs']) && is_array($block['attrs'])
        ? $block['attrs']
        : [];

    $block['attrs']['data'] = isset($block['attrs']['data']) && is_array($block['attrs']['data'])
        ? $block['attrs']['data']
        : [];

    $accordion_blocks = [];

    foreach (array_values($block['innerBlocks'] ?? []) as $panel_index => $panel_block) {
        if (is_null($panel_block['blockName'] ?? null)) {
            continue;
        }

        $panel_block['attrs'] = isset($panel_block['attrs']) && is_array($panel_block['attrs'])
            ? $panel_block['attrs']
            : [];

        $panel_block['attrs']['data'] = isset($panel_block['attrs']['data']) && is_array($panel_block['attrs']['data'])
            ? $panel_block['attrs']['data']
            : [];

        $panel_children = $panel_block['innerBlocks'] ?? [];

        $panel_block['attrs']['data']['blocks'] = colby_process_blocks(
            colby_flatten_group_descendants($panel_children),
            $block_path . '_accordion_' . $panel_index
        );

        $accordion_blocks[] = $panel_block;
    }

    $block['attrs']['data']['blocks'] = $accordion_blocks;

    return $block;
}


function colby_process_single_block(
    array $block,
    int $index = 0,
    string $path = 'root'
): array {
    $block_name = $block['blockName'] ?? null;
    $block_path = $path . '_' . $index;

    /*
     * Normalize attrs so subsequent code can safely use it.
     */
    $block['attrs'] =
        isset($block['attrs'])
        && is_array($block['attrs'])
            ? $block['attrs']
            : [];

    /*
     * ---------------------------------------------------------
     * Plugin-native blocks
     * ---------------------------------------------------------
     *
     * Do NOT run these through ACF.
     *
     * Preserve the native attributes supplied by the plugin:
     *
     * Gravity Forms:
     *   attrs.formId
     *
     * TablePress:
     *   attrs.id
     *   attrs.parameters
     */
    if (
        $block_name === 'gravityforms/form'
        || $block_name === 'tablepress/table'
    ) {
        return $block;
    }

    /*
     * ---------------------------------------------------------
     * Core HTML / Classic
     * ---------------------------------------------------------
     */
    if (
        $block_name === 'core/html'
        || $block_name === 'core/classic'
    ) {
        $block['attrs']['data'] = [
            'html' => wp_kses_post(
                $block['innerHTML'] ?? ''
            ),
        ];

        return $block;
    }

    /*
     * ---------------------------------------------------------
     * Core Heading
     * ---------------------------------------------------------
     */
    if ($block_name === 'core/heading') {
        $block['attrs']['data'] =
            get_structured_block_data(
                $block,
                $block_path
            );

        return $block;
    }

    /*
     * ---------------------------------------------------------
     * Core Group
     * ---------------------------------------------------------
     */
    if ($block_name === 'core/group') {
        $block['attrs']['data'] =
            isset($block['attrs']['data'])
            && is_array($block['attrs']['data'])
                ? $block['attrs']['data']
                : [];

        $block['attrs']['data']['blocks'] =
            colby_flatten_group_descendants(
                $block['innerBlocks'] ?? []
            );

        $block['attrs']['data']['blocks'] =
            colby_process_blocks(
                $block['attrs']['data']['blocks'],
                $block_path . '_group'
            );

        return $block;
    }

    /*
     * ---------------------------------------------------------
     * ACF blocks
     * ---------------------------------------------------------
     *
     * Only ACF blocks should go through:
     *
     *   acf_setup_meta()
     *   get_fields()
     *   acf_reset_meta()
     */
    if (
        is_string($block_name)
        && strpos($block_name, 'acf/') === 0
    ) {
        $block['attrs']['data'] =
            get_structured_block_data(
                $block,
                $block_path
            );

        /*
         * Advanced Accordion recursively processes its
         * inner blocks.
         */
        if ($block_name === 'acf/advanced-accordion') {
            $block =
                colby_prepare_advanced_accordion_block(
                    $block,
                    $block_path
                );
        }

        /*
         * People Grid has additional page-specific population logic.
         */
        if ($block_name === 'acf/people-grid') {
            // Split the URL path into segments.
            $url_segments = explode(
                '/',
                trim($_SERVER['REQUEST_URI'], '/')
            );

            $segment1 = $url_segments[0] ?? '';
            $segment2 = $url_segments[1] ?? '';
            $segment3 = $url_segments[2] ?? '';

            // Replace dashes in third URL segment with spaces.
            $segment3 = strtolower(
                str_replace(
                    '-',
                    ' ',
                    trim($segment3)
                )
            );

            // Handle auto populate if enabled.
            $is_enabled_auto_populate =
                $block['attrs']['data']['auto_populate']
                ?? false;

            $people_posts =
                $is_enabled_auto_populate
                    ? get_people(
                        $segment1,
                        $segment2,
                        $segment3
                    )
                    : [];

            $acf_items =
                $block['attrs']['data']['items']
                ?? [];

            /*
             * Merge manually selected ACF people with
             * automatically populated people.
             */
            $merged_items = array_merge(
                is_array($acf_items)
                    ? $acf_items
                    : [],
                is_array($people_posts)
                    ? $people_posts
                    : []
            );

            // Get people exclusions.
            $people_exclusions =
                get_field('exclude_from_listings');

            $final_people_items = [];

            /*
             * Process/obtain the final list of people.
             */
            if ($people_exclusions) {
                foreach ($merged_items as $person) {
                    if (
                        !in_array(
                            $person,
                            $people_exclusions
                        )
                    ) {
                        $final_people_items[] =
                            $person;
                    }
                }
            } else {
                $final_people_items =
                    $merged_items;
            }

            foreach ($final_people_items as &$item) {
                if (!isset($item['post'])) {
                    continue;
                }

                $post_id = $item['post']->ID;

                if (!$post_id) {
                    continue;
                }

                $item['last_name'] = strtolower(
                    get_post_meta(
                        $post_id,
                        'last_name',
                        true
                    )
                );

                $item['heading'] =
                    $item['post']->post_title;

                $item['paragraph'] =
                    get_post_meta(
                        $post_id,
                        'title',
                        true
                    );

                $feat_image_id =
                    get_post_thumbnail_id(
                        $post_id
                    );

                $feat_image_array =
                    wp_get_attachment_image_src(
                        $feat_image_id,
                        'Square'
                    );

                $feat_image_url = '';

                if (
                    $feat_image_array
                    && $feat_image_array[1] >= 300
                    && $feat_image_array[2] >= 300
                ) {
                    $feat_image_url =
                        get_the_post_thumbnail_url(
                            $post_id,
                            'Square'
                        );
                } else {
                    $feat_image_url =
                        'https://www.colby.edu/'
                        . 'wp-content/uploads/2022/11/'
                        . 'directory-placeholder_'
                        . 'E4E8F0_90_100-380x430_square.jpg';
                }

                $item['image'] = [
                    'url' => $feat_image_url,
                    'alt' =>
                        'Image of '
                        . $item['post']->post_title,
                ];

                $item['buttons'][] = [
                    'button' => [
                        'title' => 'Read Bio',
                        'url' =>
                            '/people/people-directory/'
                            . str_replace(
                                ' ',
                                '-',
                                remove_accents(
                                    strtolower(
                                        $item['post']
                                            ->post_title
                                    )
                                )
                            )
                            . '/',
                    ],
                ];
            }

            unset($item);

            /*
             * Sort alphabetically by last name.
             */
            usort(
                $final_people_items,
                function ($a, $b) {
                    return strcmp(
                        strtolower(
                            $a['last_name']
                            ?? ''
                        ),
                        strtolower(
                            $b['last_name']
                            ?? ''
                        )
                    );
                }
            );

            $block['attrs']['data']['acf_items'] =
                $acf_items;

            $block['attrs']['data']['people_posts'] =
                $people_posts;

            $block['attrs']['data']['people'] =
                $final_people_items;
        }

        /*
         * Run optional block-specific
         * acf/get_remote_data.php.
         */
        $block = enrich_block_data(
            $block,
            $index
        );

        return $block;
    }

    /*
     * Any other Core or third-party plugin block that we don't
     * explicitly support should remain exactly as parse_blocks()
     * provided it.
     */
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

// strip "-scaled"
$image['url'] = preg_replace('/-scaled(\.[a-zA-Z0-9]+)$/', '$1', $image['url']);

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

$terms = get_the_terms($post->ID, 'page-categories');

$args = [
    'id' => $post->ID,
    'title' => get_the_title($post->ID),
    'layout' => 'with-sidebar',
    'sidebar' => $sidebar,
    'isPost' => $is_post,
    'blocks' => $filtered_blocks,
    'hero' => $hero,
    'page_categories' => $terms,
    'primary_category' => ''
];

$primary_cat_id = get_post_meta($post->ID, '_yoast_wpseo_primary_page-categories')[0];
$primary_category = '';

// dd($primary_cat_id);
if ($primary_cat_id) {
    // Get the full term object (name, slug, link, etc.)
    $category = get_term($primary_cat_id);
    $primary_category = $category->name;
    
    if ($primary_category === 'Office') {
        $primary_category = 'Office';
        $args['address'] = get_post_meta($post->ID, 'address')[0];
        $args['phone'] = get_post_meta($post->ID, 'phone')[0];
        $args['email'] = get_post_meta($post->ID, 'email')[0];
        $args['fax'] = get_post_meta($post->ID, 'fax')[0];
        $args['location'] = get_post_meta($post->ID, 'location')[0];
        $args['image']   = get_the_post_thumbnail_url($post->ID, 'Square');
    } else if ($primary_category === 'Site') {
        $primary_category = 'Site';
    } else if ($primary_category === 'Department') {
        $primary_category = 'Department';
    }
} 

$args['primary_category'] = $primary_category;

// dd($filtered_blocks);

if ( post_password_required( $post->ID ) ) {
	Inertia::render('Password/Show', [
        'password_form' => get_the_password_form($post->ID),
    ]);
} else {
    Inertia::render('PageWithSidebar/Show', $args);
}
