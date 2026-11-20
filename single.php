<?php

use BoxyBird\Inertia\Inertia;

global $post;

if (!$post) {
    return;
}


/*
 * --------------------------------------------------------------------------
 * Block preprocessing
 * --------------------------------------------------------------------------
 *
 * Convert unwrapped Classic content returned by parse_blocks() into a
 * recognizable block so ComponentRouter can handle it.
 */

function colby_single_parse_blocks(string $content): array
{
    $parsed_blocks = array_map(
        function ($block) {
            if (
                empty($block['blockName'])
                && !empty(trim($block['innerHTML'] ?? ''))
            ) {
                $block['blockName'] = 'core/classic';
            }

            return $block;
        },
        parse_blocks($content)
    );

    return array_values(
        array_filter(
            $parsed_blocks,
            function ($block) {
                return !empty($block['blockName']);
            }
        )
    );
}


/*
 * --------------------------------------------------------------------------
 * Group helpers
 * --------------------------------------------------------------------------
 */

function colby_flatten_group_descendants(array $blocks): array
{
    $flattened = [];

    foreach ($blocks as $block) {
        $block_name = $block['blockName'] ?? null;

        if ($block_name === 'core/group') {
            $flattened = array_merge(
                $flattened,
                colby_flatten_group_descendants(
                    $block['innerBlocks'] ?? []
                )
            );

            continue;
        }

        if (!is_null($block_name)) {
            $flattened[] = $block;
        }
    }

    return $flattened;
}


/*
 * --------------------------------------------------------------------------
 * ACF block hydration
 * --------------------------------------------------------------------------
 */

function get_structured_block_data(
    array $block,
    $index = 0
): array {

    if (($block['blockName'] ?? '') === 'core/heading') {
        return [
            'heading' => str_replace(
                ["\r", "\n"],
                '',
                $block['innerHTML'] ?? ''
            ),
        ];
    }

    $meta_id = !empty($block['attrs']['id'])
        ? 'block_' . $block['attrs']['id']
        : 'block_' . $index . '_' . md5(
            wp_json_encode(
                $block['attrs']['data'] ?? []
            )
        );

    acf_setup_meta(
        $block['attrs']['data'] ?? [],
        $meta_id,
        true
    );

    $fields = get_fields($meta_id);

    acf_reset_meta($meta_id);

    return $fields ?: [];
}


/*
 * --------------------------------------------------------------------------
 * Per-block get_remote_data.php support
 * --------------------------------------------------------------------------
 */

function colby_block_slug_from_name(
    string $block_name
): string {
    $parts = explode(
        '/',
        $block_name,
        2
    );

    return $parts[1] ?? '';
}


function colby_block_folder_from_slug(
    string $slug
): string {
    $parts = preg_split(
        '/[-_]/',
        $slug
    );

    $parts = array_map(
        function ($part) {
            return ucfirst($part);
        },
        $parts
    );

    return implode('', $parts);
}


function colby_block_function_suffix_from_slug(
    string $slug
): string {
    return str_replace(
        '-',
        '_',
        strtolower($slug)
    );
}


function colby_block_helper_file_path(
    string $block_name
): string {
    $slug = colby_block_slug_from_name(
        $block_name
    );

    $folder = colby_block_folder_from_slug(
        $slug
    );

    return get_template_directory()
        . '/resources/js/components/'
        . $folder
        . '/acf/get_remote_data.php';
}


function colby_block_remote_data_function_name(
    string $block_name
): string {
    $slug = colby_block_slug_from_name(
        $block_name
    );

    $suffix =
        colby_block_function_suffix_from_slug(
            $slug
        );

    return 'colby_block_'
        . $suffix
        . '_get_remote_data';
}


function enrich_block_data(
    array $block,
    int $index
): array {

    $block_name =
        $block['blockName'] ?? '';

    if (!$block_name) {
        return $block;
    }

    /*
     * get_remote_data.php is an ACF block convention.
     *
     * Avoid collisions with plugin blocks such as:
     *
     * acf/table
     * tablepress/table
     */
    if (
        strpos(
            $block_name,
            'acf/'
        ) !== 0
    ) {
        return $block;
    }

    $data =
        $block['attrs']['data'] ?? [];

    $helper_file =
        colby_block_helper_file_path(
            $block_name
        );

    if (!file_exists($helper_file)) {
        return $block;
    }

    require_once $helper_file;

    $function_name =
        colby_block_remote_data_function_name(
            $block_name
        );

    if (is_callable($function_name)) {
        $block['attrs']['data'] =
            $function_name(
                $data,
                $index,
                $block
            );
    }

    return $block;
}


/*
 * --------------------------------------------------------------------------
 * Advanced Accordion
 * --------------------------------------------------------------------------
 */

function colby_prepare_advanced_accordion_block(
    array $block,
    string $block_path
): array {

    $block['attrs'] =
        isset($block['attrs'])
        && is_array($block['attrs'])
            ? $block['attrs']
            : [];

    $block['attrs']['data'] =
        isset($block['attrs']['data'])
        && is_array($block['attrs']['data'])
            ? $block['attrs']['data']
            : [];

    $accordion_blocks = [];

    foreach (
        array_values(
            $block['innerBlocks'] ?? []
        ) as $panel_index => $panel_block
    ) {
        if (
            is_null(
                $panel_block['blockName']
                ?? null
            )
        ) {
            continue;
        }

        $panel_block['attrs'] =
            isset($panel_block['attrs'])
            && is_array($panel_block['attrs'])
                ? $panel_block['attrs']
                : [];

        $panel_block['attrs']['data'] =
            isset($panel_block['attrs']['data'])
            && is_array(
                $panel_block['attrs']['data']
            )
                ? $panel_block['attrs']['data']
                : [];

        /*
         * Hydrate the panel's own ACF fields.
         */
        $panel_block['attrs']['data'] =
            array_merge(
                $panel_block['attrs']['data'],
                get_structured_block_data(
                    $panel_block,
                    $block_path
                        . '_accordion_panel_'
                        . $panel_index
                )
            );

        $panel_children =
            $panel_block['innerBlocks']
            ?? [];

        $panel_block['attrs']['data']['blocks'] =
            colby_process_blocks(
                colby_flatten_group_descendants(
                    $panel_children
                ),
                $block_path
                    . '_accordion_'
                    . $panel_index
            );

        $accordion_blocks[] =
            $panel_block;
    }

    $block['attrs']['data']['blocks'] =
        $accordion_blocks;

    return $block;
}


/*
 * --------------------------------------------------------------------------
 * Pop Open Section
 * --------------------------------------------------------------------------
 */

function colby_prepare_pop_open_section_block(
    array $block,
    string $block_path
): array {

    $block['attrs'] =
        isset($block['attrs'])
        && is_array($block['attrs'])
            ? $block['attrs']
            : [];

    $block['attrs']['data'] =
        isset($block['attrs']['data'])
        && is_array($block['attrs']['data'])
            ? $block['attrs']['data']
            : [];

    $inner_blocks =
        $block['innerBlocks'] ?? [];

    $block['attrs']['data']['blocks'] =
        colby_process_blocks(
            colby_flatten_group_descendants(
                $inner_blocks
            ),
            $block_path . '_pop_open'
        );

    return $block;
}


/*
 * --------------------------------------------------------------------------
 * Individual block processing
 * --------------------------------------------------------------------------
 */

function colby_process_single_block(
    array $block,
    int $index = 0,
    string $path = 'root'
): array {

    $block_name =
        $block['blockName'] ?? null;

    $block_path =
        $path . '_' . $index;

    /*
     * Normalize attrs.
     */
    $block['attrs'] =
        isset($block['attrs'])
        && is_array($block['attrs'])
            ? $block['attrs']
            : [];


    /*
     * ----------------------------------------------------------------------
     * Plugin-native blocks
     * ----------------------------------------------------------------------
     *
     * Do not run these through ACF.
     */

    if (
        $block_name === 'gravityforms/form'
        || $block_name === 'tablepress/table'
    ) {
        return $block;
    }


    /*
     * ----------------------------------------------------------------------
     * Core HTML / Classic
     * ----------------------------------------------------------------------
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
     * ----------------------------------------------------------------------
     * Core Heading
     * ----------------------------------------------------------------------
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
     * ----------------------------------------------------------------------
     * Core Embed
     * ----------------------------------------------------------------------
     */

    if ($block_name === 'core/embed') {
        $block['attrs']['data'] =
            isset($block['attrs']['data'])
            && is_array(
                $block['attrs']['data']
            )
                ? $block['attrs']['data']
                : [];

        $raw_html =
            $block['innerHTML'] ?? '';

        $url =
            $block['attrs']['url']
            ?? '';

        if ($url) {
            $iframe =
                wp_oembed_get($url);

            if ($iframe) {
                $raw_html =
                    preg_replace(
                        '/(<div[^>]*class="[^"]*wp-block-embed__wrapper[^"]*"[^>]*>).*?(<\/div>)/is',
                        '$1'
                            . $iframe
                            . '$2',
                        $raw_html
                    );
            }
        }

        $block['attrs']['data']['embed'] =
            $raw_html;

        $block['innerHTML'] =
            $raw_html;

        return $block;
    }


    /*
     * ----------------------------------------------------------------------
     * Core Group
     * ----------------------------------------------------------------------
     */

    if ($block_name === 'core/group') {
        $block['attrs']['data'] =
            isset($block['attrs']['data'])
            && is_array(
                $block['attrs']['data']
            )
                ? $block['attrs']['data']
                : [];

        /*
         * Flatten nested groups exactly like the page
         * controllers do.
         */
        $group_blocks =
            colby_flatten_group_descendants(
                $block['innerBlocks']
                ?? []
            );

        /*
         * Then fully hydrate/process every child.
         */
        $block['attrs']['data']['blocks'] =
            colby_process_blocks(
                $group_blocks,
                $block_path . '_group'
            );

        return $block;
    }


    /*
     * ----------------------------------------------------------------------
     * ACF blocks
     * ----------------------------------------------------------------------
     */

    if (
        is_string($block_name)
        && strpos(
            $block_name,
            'acf/'
        ) === 0
    ) {
        /*
         * Hydrate this block's ACF fields.
         */
        $block['attrs']['data'] =
            get_structured_block_data(
                $block,
                $block_path
            );


        /*
         * Advanced Accordion owns nested blocks.
         */
        if (
            $block_name
            === 'acf/advanced-accordion'
        ) {
            $block =
                colby_prepare_advanced_accordion_block(
                    $block,
                    $block_path
                );
        }


        /*
         * Pop Open Section owns nested blocks.
         */
        if (
            $block_name
            === 'acf/pop-open-section'
        ) {
            $block =
                colby_prepare_pop_open_section_block(
                    $block,
                    $block_path
                );
        }


        /*
         * Optional block-specific server-side
         * enrichment.
         */
        $block =
            enrich_block_data(
                $block,
                $index
            );

        return $block;
    }


    /*
     * Any other Core or third-party block remains
     * exactly as parse_blocks() provided it.
     */
    return $block;
}


/*
 * --------------------------------------------------------------------------
 * Recursive block processing
 * --------------------------------------------------------------------------
 */

function colby_process_blocks(
    array $blocks,
    string $path = 'root'
): array {

    $processed = [];

    foreach (
        array_values($blocks)
        as $index => $block
    ) {
        $processed[] =
            colby_process_single_block(
                $block,
                $index,
                $path
            );
    }

    return $processed;
}


/*
 * --------------------------------------------------------------------------
 * Menu helper
 * --------------------------------------------------------------------------
 */

function colby_get_single_menu_items(
    string $menu_name
): array {

    $menu =
        wp_get_nav_menu_items(
            $menu_name
        );

    return array_map(
        function ($item) {
            return [ "link" => [
                'id'     => $item->ID,
                'title'  => $item->title,
                'url'    => $item->url,
                'target' => $item->target ?: '',
            ]];
        },
        $menu ?: []
    );
}


/*
 * ==========================================================================
 * PEOPLE
 * ==========================================================================
 */

if ($post->post_type === 'people') {

    $people_menu_items =
        colby_get_single_menu_items(
            'People Menu'
        );

    $acf_data = [
        'phone' =>
            get_field(
                'phone',
                $post->ID
            ),

        'email' =>
            get_field(
                'email',
                $post->ID
            ),

        'pronouns' =>
            get_field(
                'pronouns',
                $post->ID
            ),

        'title' =>
            get_field(
                'title',
                $post->ID
            ),

        'department' =>
            get_field(
                'department',
                $post->ID
            ),

        'curriculum_vitae' =>
            get_field(
                'curriculum_vitae',
                $post->ID
            ),

        'building' =>
            get_field(
                'building',
                $post->ID
            ),

        'office_hours' =>
            get_field(
                'office_hours',
                $post->ID
            ),

        'mailing_address' =>
            get_field(
                'mailing_address',
                $post->ID
            ),

        'fax' =>
            get_field(
                'fax',
                $post->ID
            ),

        'bio' =>
            get_field(
                'bio',
                $post->ID
            ),

        'hide_pronouns' =>
            (int) get_field(
                'hide_pronouns',
                $post->ID
            ),

        'hide_phone_number' =>
            (int) get_field(
                'hide_phone_number',
                $post->ID
            ),

        'hide_fax' =>
            (int) get_field(
                'hide_fax',
                $post->ID
            ),

        'hide_cv' =>
            (int) get_field(
                'hide_cv',
                $post->ID
            ),

        'hide_department' =>
            (int) get_field(
                'hide_department',
                $post->ID
            ),

        'hide_office_hours' =>
            (int) get_field(
                'hide_office_hours',
                $post->ID
            ),

        'hide_bio' =>
            (int) get_field(
                'hide_bio',
                $post->ID
            ),

        'hide_location' =>
            (int) get_field(
                'hide_location',
                $post->ID
            ),

        'hide_photo' =>
            (int) get_field(
                'hide_photo',
                $post->ID
            ),

        'hide_email' =>
            (int) get_field(
                'hide_email',
                $post->ID
            ),

        'hide_courses' =>
            (int) get_field(
                'hide_courses',
                $post->ID
            ),
    ];


    /*
     * Courses
     */

    $current_courses =
        json_decode(
            stripslashes(
                get_field(
                    'current_courses',
                    $post->ID
                )
            )
        );

    if (is_array($current_courses)) {
        $acf_data['current_courses'] =
            array_map(
                function ($i) {
                    return [
                        'title' =>
                            $i->title,

                        'columns' => [
                            [
                                'link_or_text' =>
                                    'text',

                                'column' =>
                                    $i->crs,
                            ],
                            [
                                'link_or_text' =>
                                    'text',

                                'column' =>
                                    $i->sec,
                            ],
                        ],
                    ];
                },
                $current_courses
            );
    } else {
        $acf_data['current_courses'] =
            [];
    }


    return Inertia::render(
        'Person/Show',
        [
            'id' =>
                $post->ID,

            'title' =>
                get_the_title(
                    $post->ID
                ),

            'image' =>
                get_the_post_thumbnail_url(
                    $post->ID,
                    'Square'
                ),

            'date' =>
                get_the_date(
                    '',
                    $post->ID
                ),

            'author' =>
                get_the_author_meta(
                    'display_name',
                    $post->post_author
                ),

            'acf' =>
                $acf_data,

            'peopleMenu' => [
                'heading' =>
                    'People',

                'items' =>
                    $people_menu_items,
            ],
        ]
    );
}


/*
 * ==========================================================================
 * NORMAL POSTS + EVENTS + OTHER SINGLE CPTs
 * ==========================================================================
 */

$is_event =
    $post->post_type === 'events';


/*
 * --------------------------------------------------------------------------
 * Fully process Gutenberg content
 * --------------------------------------------------------------------------
 */

$filtered_blocks =
    colby_single_parse_blocks(
        $post->post_content
    );

$filtered_blocks =
    colby_process_blocks(
        $filtered_blocks
    );


/*
 * --------------------------------------------------------------------------
 * Post-level ACF fields
 * --------------------------------------------------------------------------
 */

$post_fields =
    get_fields(
        $post->ID
    ) ?: [];


/*
 * --------------------------------------------------------------------------
 * Event date
 * --------------------------------------------------------------------------
 */

$event_date = '';

if ($is_event) {
    $event_date =
        get_field(
            'event_date',
            $post->ID
        );

    if (!$event_date) {
        $event_date =
            get_post_meta(
                $post->ID,
                'event_date',
                true
            );
    }
}


/*
 * --------------------------------------------------------------------------
 * Featured image
 * --------------------------------------------------------------------------
 */

$thumbnail_id =
    get_post_thumbnail_id(
        $post->ID
    );

$image = null;

if ($thumbnail_id) {
    $hero_url =
        get_the_post_thumbnail_url(
            $post->ID,
            'Hero'
        );

    $rectangle_url =
        get_the_post_thumbnail_url(
            $post->ID,
            'Rectangle'
        );

    $image = [
        'src' =>
            $rectangle_url
            ?: $hero_url,

        'url' =>
            $rectangle_url
            ?: $hero_url,

        'sizes' => [
            'Hero' =>
                $hero_url,

            'Rectangle' =>
                $rectangle_url,
        ],

        'alt' =>
            get_post_meta(
                $thumbnail_id,
                '_wp_attachment_image_alt',
                true
            ),

        'caption' =>
            get_the_post_thumbnail_caption(
                $post->ID
            ),
    ];
}


/*
 * --------------------------------------------------------------------------
 * Hero
 * --------------------------------------------------------------------------
 */

$template_subheading =
    $is_event
        ? $event_date
        : '';

$template_heading =
    get_the_title(
        $post->ID
    );

$template_paragraph =
    has_excerpt(
        $post->ID
    )
        ? get_the_excerpt(
            $post->ID
        )
        : null;

$hero = [
    'type' =>
        'light',

    'subheading' =>
        $template_subheading,

    'heading' =>
        $template_heading,

    'paragraph' =>
        $template_paragraph,

    'image' =>
        $image,

    'hero' =>
        true,

    'date' =>
        true,
];


/*
 * --------------------------------------------------------------------------
 * Section navigation
 * --------------------------------------------------------------------------
 */

$section_menu_name =
    $is_event
        ? 'Events Menu'
        : 'Colby Impact Menu';

$section_menu_items =
    colby_get_single_menu_items(
        $section_menu_name
    );

$section_menu = [
    'heading' =>
        $is_event
            ? 'Events'
            : 'Colby Impact',

    'items' =>
        $section_menu_items,
];


/*
 * --------------------------------------------------------------------------
 * Inertia
 * --------------------------------------------------------------------------
 */

Inertia::render(
    'Post/Show',
    [
        'id' =>
            $post->ID,

        'title' =>
            get_the_title(
                $post->ID
            ),

        'image' =>
            $image,

        'date' =>
            get_the_date(
                '',
                $post->ID
            ),

        'author' =>
            get_the_author_meta(
                'display_name',
                $post->post_author
            ),

        'acf' =>
            $post_fields,

        'excerpt' =>
            get_the_excerpt(
                $post->ID
            ),

        'blocks' =>
            $filtered_blocks,

        'use_post_date' =>
            $post_fields[
                'use_post_date'
            ] ?? false,

        /*
         * Normalized single-post data
         */
        'hero' =>
            $hero,

        'sectionMenu' =>
            $section_menu,

        'isEvent' =>
            $is_event,

        'eventDate' =>
            $event_date,

        'showSubmitStory' =>
            !$is_event,
    ]
);