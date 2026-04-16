export const blockRegistry = {
  "acf/advanced-accordion": () =>
    import("./components/AdvancedAccordion/AdvancedAccordion.vue"),
  "acf/article-grid": () =>
    import("./components/ArticleGrid/ArticleGrid.vue"),
  "acf/article-section": () =>
    import("./components/ArticleSection/ArticleSection.vue"),
  "acf/carousel": () => import("./components/Carousel/Carousel.vue"),
  "acf/dark-interstitial": () =>
    import("./components/DarkInterstitial/DarkInterstitial.vue"),
  "acf/facts-figures": () =>
    import("./components/FactsFigures/FactsFigures.vue"),
  "acf/hero": () => import("./components/Hero/Hero.vue"),
  "acf/home-hero": () => import("./components/HomeHero/HomeHero.vue"),
  "acf/overlay-hero": () =>
    import("./components/OverlayHero/OverlayHero.vue"),
  "acf/section-nav": () =>
    import("./components/SectionNav/SectionNav.vue"),
  "acf/featured-post": () =>
    import("./components/FeaturedPost/FeaturedPost.vue"),
  "acf/testimonial-carousel": () =>
    import("./components/TestimonialCarousel/TestimonialCarousel.vue"),
  "acf/full-bleed-image": () =>
    import("./components/FullBleedImage/FullBleedImage.vue"),
  "acf/related-content": () =>
    import("./components/RelatedContent/RelatedContent.vue"),
  "acf/hw-image-section": () =>
    import("./components/HwImageSection/HwImageSection.vue"),
  "acf/list-section": () =>
    import("./components/ListSection/ListSection.vue"),
  "acf/list-context": () =>
    import("./components/ListContext/ListContext.vue"),
  "acf/stat-group": () =>
    import("./components/StatGroup/StatGroup.vue"),
  "acf/media-context": () =>
    import("./components/MediaContext/MediaContext.vue"),
  "acf/context-article-grid": () =>
    import("./components/ContextArticleGrid/ContextArticleGrid.vue"),
  "core/heading": () => import("./components/Heading/Heading.vue"),
  "acf/table": () => import("./components/Table/Table.vue"),
  "core/group": () => import("./components/Group/Group.vue"),
  "acf/paragraph": () => import("./components/Paragraph/Paragraph.vue"),
  "acf/accordion": () => import("./components/Accordion/Accordion.vue"),
  "acf/people-grid": () =>
    import("./components/PeopleGrid/PeopleGrid.vue"),
  "acf/embed": () => import("./components/Embed/Embed.vue"),
};

export function blockNameToAcfSlug(name = "") {
  return name.replace(/^acf\//, "");
}
