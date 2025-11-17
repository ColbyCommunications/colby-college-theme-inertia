<?php
use BoxyBird\Inertia\Inertia;

include __DIR__ . '/acf_fields.php';

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
  require_once __DIR__ . '/vendor/autoload.php';
}

add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('google-font-libre-franklin', 'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap', [], null);
    wp_enqueue_style('typekit', 'https://use.typekit.net/ven5cit.css', [], null);
    wp_enqueue_style('material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons+Sharp', [], null);
});

// Register ACF blocks from block.json files in components directory
add_action('init', function () {
    $components = glob(get_theme_file_path('resources/js/components/*/block.json'));

    foreach ($components as $json) {
        register_block_type(dirname($json));
    }
});


function my_acf_init() {

  // check function exists
  if ( function_exists( 'acf_register_block' ) ) {

    // register a accordion block
    acf_register_block(
      array(
        'name'            => 'accordion',
        'title'           => __( 'Accordion' ),
        'description'     => __( 'A custom accordion block.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'accordion', 'panels' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register an advanced accordion block (parent)
    register_block_type( __DIR__ . '/src/twig/components/advanced-accordion', array( 'icon' => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' )));
    register_block_type( __DIR__ . '/src/twig/components/advanced-accordion-panel', array( 'icon' => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' )));

    // register a home hero
    acf_register_block(
      array(
        'name'            => 'home-hero',
        'title'           => __( 'Home Hero' ),
        'description'     => __( 'Large hero component, supporting both video and basic images.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'hero', 'video', 'image', 'home', 'loop' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a carousel
    acf_register_block(
      array(
        'name'            => 'carousel',
        'title'           => __( 'Carousel' ),
        'description'     => __( 'Standard carousel component section.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'carousel', 'slider', 'image', 'news' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a featured post
    acf_register_block(
      array(
        'name'            => 'featured-post',
        'title'           => __( 'Featured Post' ),
        'description'     => __( 'Large image layout for featuring important content.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'featured', 'content', 'image', 'news', 'events', 'post' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register dark interstitial
    acf_register_block(
      array(
        'name'            => 'dark-interstitial',
        'title'           => __( 'Dark Interstitial' ),
        'description'     => __( 'Navy colored divider component, typically utilized to highlight facts and figures or breakup page monotony.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'featured', 'content', 'image', 'divider', 'dark' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register facts and figures
    acf_register_block(
      array(
        'name'            => 'facts-figures',
        'title'           => __( 'Facts & Figures' ),
        'description'     => __( 'Informational section supporting both an image and supplementary factoids.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'featured', 'facts', 'figures', 'numbers', 'image' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register testimonial carousel
    acf_register_block(
      array(
        'name'            => 'testimonial-carousel',
        'title'           => __( 'Testimonial Carousel' ),
        'description'     => __( 'Testimonial section with carousel functionality and image support.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'featured', 'testimonial', 'quote', 'carousel', 'image' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register full bleed image
    acf_register_block(
      array(
        'name'            => 'full-bleed-image',
        'title'           => __( 'Full Bleed Image' ),
        'description'     => __( 'Large image section with caption for full width pages.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'image', 'large', 'full' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register related content
    acf_register_block(
      array(
        'name'            => 'related-content',
        'title'           => __( 'Related Content' ),
        'description'     => __( 'Section typically found at the bottom of full-width page styles for links to supplementary pages.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'related', 'content' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register hero
    acf_register_block(
      array(
        'name'            => 'hero',
        'title'           => __( 'Hero' ),
        'description'     => __( 'Traditional hero component typically deployed on all first-level landing pages.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'hero', 'image', 'heading' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register overlay hero
    acf_register_block(
      array(
        'name'            => 'overlay-hero',
        'title'           => __( 'Overlay Hero' ),
        'description'     => __( 'Dynamic hero component typically deployed on all first-level landing pages, featuring text overlay.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'hero', 'image', 'heading', 'landscape' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register section nav
    acf_register_block(
      array(
        'name'            => 'section-nav',
        'title'           => __( 'Section Navigation' ),
        'description'     => __( 'Top level landing page subnavigation, typically found below the hero. Used for navigation within a site subdivision.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'list', 'section', 'sub', 'navigation' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register people grid
    acf_register_block(
      array(
        'name'            => 'people-grid',
        'title'           => __( 'People Grid' ),
        'description'     => __( 'Layout dedicated to displaying people posts for academic department and office pages.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'people', 'layout', 'article', 'grid', 'image' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register bordered article row
    acf_register_block(
      array(
        'name'            => 'bordered-article-row',
        'title'           => __( 'Bordered Article Row' ),
        'description'     => __( 'Special article grid layout featuring borders.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'layout', 'bordered', 'article', 'row' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register article section
    acf_register_block(
      array(
        'name'            => 'article-section',
        'title'           => __( 'Article Section' ),
        'description'     => __( 'Layout dedicated to article display. Features several variants including a carousel.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'layout', 'article', 'section', 'carousel' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register media context
    acf_register_block(
      array(
        'name'            => 'media-context',
        'title'           => __( 'Media Context' ),
        'description'     => __( 'Traditional side-by-side layout for any style of media with cooresponding context.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'media', 'image', 'context', 'layout' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register hw image section
    acf_register_block(
      array(
        'name'            => 'hw-image-section',
        'title'           => __( 'Half-Width Image Section' ),
        'description'     => __( 'Traditional side-by-side layout for any style of media with cooresponding context but in a nearly full-width display.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'media', 'image', 'context', 'layout', 'half', 'width' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // list section
    acf_register_block(
      array(
        'name'            => 'list-section',
        'title'           => __( 'List Section' ),
        'description'     => __( 'Basic layout and section dedicated for the display of groups of lists.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'list', 'section', 'unordered', 'layout' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register table
    acf_register_block(
      array(
        'name'            => 'table',
        'title'           => __( 'Table' ),
        'description'     => __( 'Standard table layout with Colby API integrations for several data types.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'table', 'row', 'column', 'layout' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register image grid
    acf_register_block(
      array(
        'name'            => 'image-grid',
        'title'           => __( 'Image Grid' ),
        'description'     => __( 'Layout dedicated to a bevy of image layout styles. Supports captions.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'image', 'row', 'column', 'layout', 'grid', 'caption' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register list context
    acf_register_block(
      array(
        'name'            => 'list-context',
        'title'           => __( 'List Context' ),
        'description'     => __( 'Standard context component with accompanying large list.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'layout', 'list', 'context' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register overlay wide image
    acf_register_block(
      array(
        'name'            => 'overlay-wide-image',
        'title'           => __( 'Overlay Wide Image' ),
        'description'     => __( 'Landscape image layout with context overlayed on a dimmed background.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'layout', 'image', 'overlay', 'landscape' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register context article grid
    acf_register_block(
      array(
        'name'            => 'context-article-grid',
        'title'           => __( 'Context Article Grid' ),
        'description'     => __( 'Article Grid accompanied by context, with the ability to pull posts directly.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'layout', 'context', 'article', 'grid' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register stat group
    acf_register_block(
      array(
        'name'            => 'stat-group',
        'title'           => __( 'Stat Group' ),
        'description'     => __( 'Display style component for a group of statistics with optional context.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'layout', 'context', 'stat', 'grid', 'group' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    acf_register_block(
      array(
        'name'            => 'paragraph',
        'title'           => __( 'Paragraph' ),
        'description'     => __( 'A custom paragraph block.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'paragraph', 'body' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    acf_register_block(
      array(
        'name'            => 'image-text',
        'title'           => __( 'Image with Text' ),
        'description'     => __( 'A custom image with text block.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'paragraph', 'body', 'image' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    acf_register_block(
      array(
        'name'            => 'image',
        'title'           => __( 'Image' ),
        'description'     => __( 'A custom image  block.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'image' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register embed
    acf_register_block(
      array(
        'name'            => 'embed',
        'title'           => __( 'Embed' ),
        'description'     => __( 'A custom block that supports embed code.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'layout', 'context', 'embed' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register block quote
    acf_register_block(
      array(
        'name'            => 'block-quote',
        'title'           => __( 'Block Quote' ),
        'description'     => __( 'Large interstitial text to facilitate body copy quotes.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'layout', 'context', 'paragraph', 'quote' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a media aside
    acf_register_block(
      array(
        'name'            => 'media-aside',
        'title'           => __( 'Media Aside' ),
        'description'     => __( 'Large image with small context. Supports carousel functionality.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'media', 'context', 'aside', 'carousel' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a context section
    acf_register_block(
      array(
        'name'            => 'context-section',
        'title'           => __( 'Context Section' ),
        'description'     => __( 'Dedicated section component for context outside of the confines of a typical component.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'context', 'section', 'heading', 'subheading', 'paragraph' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register table section
    acf_register_block(
      array(
        'name'            => 'table-section',
        'title'           => __( 'Table Section' ),
        'description'     => __( 'Dedicated section for full-width inset pages.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'table', 'row', 'column', 'layout', 'section' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a intro context
    acf_register_block(
      array(
        'name'            => 'intro-context',
        'title'           => __( 'Intro Context' ),
        'description'     => __( 'Two column context section component typically deployed as an alternative aesthetic for introductory context' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'introductory', 'context', 'section' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a full bleed hero
    acf_register_block(
      array(
        'name'            => 'full-bleed-hero',
        'title'           => __( 'Full Bleed Hero' ),
        'description'     => __( 'Hero with inset image, context, and full width background image' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'hero', 'media', 'image', 'context', 'background' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a inset widget
    acf_register_block(
      array(
        'name'            => 'inset-widget',
        'title'           => __( 'Inset Widget' ),
        'description'     => __( 'Decorative interstitial block' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'widget', 'inset', 'context' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a featured events
    acf_register_block(
      array(
        'name'            => 'featured-events',
        'title'           => __( 'Featured Events' ),
        'description'     => __( 'Exclusive featured events component for ColbyArts' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'featured', 'events', 'media', 'context' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a endpoint filter
    acf_register_block(
      array(
        'name'            => 'endpoint-filter',
        'title'           => __( 'Endpoint Filter' ),
        'description'     => __( 'Exclusive filter component for ColbyArts' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'filter', 'events', 'context' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a media context section
    acf_register_block(
      array(
        'name'            => 'media-context-section',
        'title'           => __( 'Media Context Section' ),
        'description'     => __( 'Section component dedicated to grouping media context with a decorative background' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'media', 'context', 'section' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a collage section
    acf_register_block(
      array(
        'name'            => 'collage-section',
        'title'           => __( 'Collage Section' ),
        'description'     => __( 'Decorative section with curated image group and context' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'collage', 'context', 'media', 'section', 'image' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a related section
    acf_register_block(
      array(
        'name'            => 'related-section',
        'title'           => __( 'Related Section' ),
        'description'     => __( 'Component typically found at the bottom of post style pages.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'media', 'context', 'section', 'related' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a icon section
    acf_register_block(
      array(
        'name'            => 'icon-section',
        'title'           => __( 'Icon Section' ),
        'description'     => __( 'Section dedicated to grouping svg assets or transparent pngs.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'icon', 'context', 'section' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a list block grid
    acf_register_block(
      array(
        'name'            => 'list-block-grid',
        'title'           => __( 'List Block Grid' ),
        'description'     => __( 'Dedicated grid for list blocks' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'list', 'block', 'grid' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a bg inset media context
    acf_register_block(
      array(
        'name'            => 'bg-inset-media-context',
        'title'           => __( 'Background Inset Media Context' ),
        'description'     => __( 'Container component for the media context supporting background textures.' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'media', 'context', 'background', 'inset' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );

    // register a home section
    acf_register_block(
      array(
        'name'            => 'home-section',
        'title'           => __( 'Home Section' ),
        'description'     => __( 'Advancement site exclusive block for rendering latest events and alumni news from the Colby News site' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'layout',
        'icon'            => file_get_contents( get_template_directory() . '/resources/images/svg/c.svg' ),
        'keywords'        => array( 'home', 'context', 'section', 'news', 'events' ),
        'mode'            => 'edit',
        'supports'        => array(
          'align' => false,
        ),
      )
    );
  }
}
add_action( 'acf/init', 'my_acf_init' );

add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', ['script', 'style', 'search-form', 'gallery', 'caption']);
  register_nav_menus([
    'main' => __('Main Menu', 'colby'),
    'footer'  => __('Footer Menu', 'colby'),
    'utility'  => __('Utility Menu', 'colby'),
    'action'  => __('Action Menu', 'colby'),
    'people'  => __('People Menu', 'colby'),
    'social'  => __('Social Menu', 'colby'),
  ]);
});

add_action('init', function () {
  Inertia::setRootView('app.php');
});

add_action('init', function () {
  Inertia::share([
    'site_data' => [
      'name'        => get_bloginfo('name'),
      'description' => get_bloginfo('description'),
      'url'         => home_url('/'),
      'alert'  => get_field('alert', 'options'),
      'address' => get_field('address', 'options'),
      'phone'   => get_field('phone', 'options'),
    ],
    'menus' => [
      'main' => colby_get_menu('main'),
      'utility' => colby_get_menu('utility'),
      'footer'  => colby_get_menu('footer'),
      'action'  => colby_get_menu('action'),
      'people'  => colby_get_menu('people'),
      'social'  => colby_get_menu('social'),
    ],
  ]);

  Inertia::share('auth', function () {
    if (is_user_logged_in()) {
      $u = wp_get_current_user();
      return [
        'user' => [
          'id'    => $u->ID,
          'name'  => $u->display_name,
          'email' => $u->user_email,
          'roles' => $u->roles,
        ]
      ];
    }
    return null;
  });
});

function colby_get_menu($location) {
  
  $locations = get_nav_menu_locations();
  if (!isset($locations[$location])) return [];
  $menu = wp_get_nav_menu_object($locations[$location]);
  
  if (!$menu) return [];
  $items = wp_get_nav_menu_items($menu->term_id) ?: [];
  return array_map(function ($item) {
    return [
      'id'    => $item->ID,
      'title' => $item->title,
      'url'   => $item->url,
      'parent'=> (int) $item->menu_item_parent,
      'order' => (int) $item->menu_order,
    ];
  }, $items);
}

// Enqueue scripts.
add_action('wp_enqueue_scripts', function () {
  $vite_internal = 'http://node:5173';
  $res = wp_remote_get("$vite_internal/vite/@vite/client", ['timeout' => 0.5]);
  $vite_running = !is_wp_error($res) && (int) wp_remote_retrieve_response_code($res) === 200;

  if ($vite_running) {
    $vite_public = home_url('/vite'); // e.g., https://colby.lndo.site/vite

    wp_enqueue_script_module('vite-client', "$vite_public/@vite/client", [], null, true);
    // wp_script_add_data('vite-client', 'type', 'module');

    wp_enqueue_script_module('colby-app', "$vite_public/resources/js/app.js", [], null, true);
    // wp_script_add_data('colby-app', 'type', 'module');

  } else {
    // PROD: load built assets via manifest
    $manifest_path = get_stylesheet_directory() . '/dist/.vite/manifest.json';
    if (file_exists($manifest_path)) {
      $manifest = json_decode(file_get_contents($manifest_path), true);
      $entry    = $manifest['resources/js/app.js'] ?? null;
      if ($entry) {
        wp_enqueue_script_module('colby-app', get_stylesheet_directory_uri() . '/dist/' . $entry['file'], [], null, true);
        if (!empty($entry['css'])) {
          foreach ($entry['css'] as $css) {
            wp_enqueue_style('colby-app', get_stylesheet_directory_uri() . '/dist/' . $css, [], null);
          }
        }
      }
    }
  }
}, 20);

add_action( 'after_setup_theme', 'theme_supports'  );

function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
		add_theme_support( 'title-tag' );

		/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
		add_theme_support( 'post-thumbnails' );

		/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		* Enable support for Post Formats.
		*
		* See: https://codex.wordpress.org/Post_Formats
		*/
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support( 'menus' );

		add_image_size( 'Square', 800, 800, true );
		add_image_size( 'Square_mobile', 300, 300, true );
		add_image_size( 'Rectangle', 760, 430, true );
		add_image_size( 'Rectangle_mobile', 410, 290, true );
		add_image_size( 'Landscape', 860, 400, true );
		add_image_size( 'Landscape_mobile', 430, 200, true );
		add_image_size( 'Portrait', 380, 580, true );
		add_image_size( 'Portrait_mobile', 190, 290, true );
		add_image_size( 'Hero', 2400, 1320, true );

		if ( function_exists( 'acf_add_options_page' ) ) {
			acf_add_options_page(
				array(
					'page_title' => 'Global Settings',
					'menu_title' => 'Global Settings',
					'menu_slug'  => 'global-settings',
					'capability' => 'edit_colbyedu_global_settings',
					'redirect'   => false,
				)
			);
		}
	}
