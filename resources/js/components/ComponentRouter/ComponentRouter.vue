<template>
  <div>
    <LazyBlock
      v-for="(item, index) in components"
      :key="getBlockKey(item, index)"
      :loader="getLoader(item.blockName)"
      :component-props="getComponentProps(item, index)"
      :eager="isEager(item, index)"
      :root-margin="getRootMargin(item, index)"
      :placeholder-min-height="getPlaceholderHeight(item)"
      @loaded="preloadNext(index + 1)"
      :blockName="item.blockName"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import LazyBlock from "../LazyBlockWrapper/LazyBlockWrapper.vue";
import Hero from "../Hero/Hero.vue";
import HomeHero from "../HomeHero/HomeHero.vue";
import OverlayHero from "../OverlayHero/OverlayHero.vue";

const props = defineProps({
  components: {
    type: Array,
    default: () => [],
  },
});

const isMobile = ref(false);
let mediaQuery = null;

function updateIsMobile() {
  isMobile.value = mediaQuery?.matches ?? false;
}

onMounted(() => {
  mediaQuery = window.matchMedia("(max-width: 767px)");
  updateIsMobile();
  mediaQuery.addEventListener("change", updateIsMobile);
});

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener("change", updateIsMobile);
});

const blockRegistry = {
  "acf/advanced-accordion": () =>
    import("../AdvancedAccordion/AdvancedAccordion.vue"),
  "acf/article-grid": () => import("../ArticleGrid/ArticleGrid.vue"),
  "acf/article-section": () => import("../ArticleSection/ArticleSection.vue"),
  "acf/carousel": () => import("../Carousel/Carousel.vue"),
  "acf/dark-interstitial": () =>
    import("../DarkInterstitial/DarkInterstitial.vue"),
  "acf/facts-figures": () => import("../FactsFigures/FactsFigures.vue"),
  "acf/hero": () => Promise.resolve({ default: Hero }),
  "acf/home-hero": () => Promise.resolve({ default: HomeHero }),
  "acf/overlay-hero": () => Promise.resolve({ default: OverlayHero }),
  "acf/section-nav": () => import("../SectionNav/SectionNav.vue"),
  "acf/featured-post": () => import("../FeaturedPost/FeaturedPost.vue"),
  "acf/testimonial-carousel": () =>
    import("../TestimonialCarousel/TestimonialCarousel.vue"),
  "acf/full-bleed-image": () => import("../FullBleedImage/FullBleedImage.vue"),
  "acf/related-content": () => import("../RelatedContent/RelatedContent.vue"),
  "acf/hw-image-section": () => import("../HwImageSection/HwImageSection.vue"),
  "acf/list-section": () => import("../ListSection/ListSection.vue"),
  "acf/list-context": () => import("../ListContext/ListContext.vue"),
  "acf/stat-group": () => import("../StatGroup/StatGroup.vue"),
  "acf/media-context": () => import("../MediaContext/MediaContext.vue"),
  "acf/context-article-grid": () =>
    import("../ContextArticleGrid/ContextArticleGrid.vue"),
  "acf/table": () => import("../Table/Table.vue"),
  "acf/paragraph": () => import("../Paragraph/Paragraph.vue"),
  "acf/accordion": () => import("../Accordion/Accordion.vue"),
  "acf/people-grid": () => import("../PeopleGrid/PeopleGrid.vue"),
  "acf/embed": () => import("../Embed/Embed.vue"),
  "acf/image": () => import("../Image/Image.vue"),
  "acf/image-text": () => import("../ImageText/ImageText.vue"),
  "acf/overlay-wide-image": () => import("../OverlayWideImage/OverlayWideImage.vue"),
  "acf/block-quote": () => import("../BlockQuote/BlockQuote.vue"),
  "acf/bordered-article-row": () => import("../BorderedArticleRow/BorderedArticleRow.vue"),
  "acf/collage-section": () => import("../CollageSection/CollageSection.vue"),

  "core/heading": () => import("../Heading/Heading.vue"),
  "core/group": () => import("../Group/Group.vue"),
  "core/html": () => import("../Html/Html.vue"),
  "core/classic": () => import("../Classic/Classic.vue"),
};

function getLoader(blockName) {
  return blockRegistry[blockName] || (() => Promise.resolve({ default: null }));
}

function getBlockKey(item, index) {
  return item?.attrs?.id || item?.id || `${item.blockName}-${index}`;
}

function isHeroMediaBlock(blockName) {
  return ["acf/hero", "acf/home-hero", "acf/overlay-hero"].includes(blockName);
}

function getFirstHeroMediaBlockIndex() {
  return props.components.findIndex((item) => isHeroMediaBlock(item?.blockName));
}

function isPriorityMediaBlock(item, index) {
  return isHeroMediaBlock(item?.blockName) && index === getFirstHeroMediaBlockIndex();
}

function getComponentProps(item, index) {
  return {
    ...(item.attrs?.data || {}),
    priority: isPriorityMediaBlock(item, index),
  };
}

function isEager(item, index) {
  const blockName = item.blockName;

  if (index === 0) return true;

  if (["acf/hero", "acf/home-hero", "acf/overlay-hero"].includes(blockName)) {
    return true;
  }

  // Desktop: allow high homepage carousel to load eagerly.
  // Mobile: keep carousel lazy because home hero occupies the first viewport.
  if (blockName === "acf/carousel" && index === 1) {
    return !isMobile.value;
  }

  return [
    "acf/section-nav",
    "acf/subpage-nav",
  ].includes(blockName);
}

function getRootMargin(item, index) {
  if (isEager(item, index)) {
    return "0px";
  }

  if (isMobile.value) {
    return "200px 0px";
  }

  return "600px 0px";
}

/**
 * Optional: helps reduce layout shift a little.
 * You can tune these values per block type.
 */
function getPlaceholderHeight(item) {
  const heights = {
    "acf/article-grid": 700,
    "acf/article-section": 650,
    "acf/carousel": 800,
    "acf/dark-interstitial": 250,
    "acf/facts-figures": 400,
    "acf/featured-post": 250,
    "acf/testimonial-carousel": 250,
    "acf/full-bleed-image": 250,
    "acf/hw-image-section": 250,
    "acf/related-content": 250,
    "acf/list-section": 250,
    "acf/stat-group": 250,
    "acf/media-context": 250,
    "acf/hero": 0,
    "acf/home-hero": 0,
    "acf/overlay-hero": 0,
    "acf/context-article-grid": 300,
    "acf/table": 600,
    "acf/people-grid": 350,
    "acf/accordion": 350,
    "acf/paragraph": 350,
    "acf/block-quote": 350,
    "acf/bordered-article-row": 350,
    "acf/embed": 200,
    "acf/image": 200,
    "acf/image-text": 200,
    "acf/advanced-accordion": 500,
    "acf/overlay-wide-image": 500,
    "acf/collage-section": 500,

    "core/heading": 0,
    "core/group": 600,
    "core/html": 500,
    "core/classic": 500,
  };

  return heights[item.blockName] ?? 0;
}

/**
 * Optional micro-optimization:
 * after a block loads, warm the next one in idle time.
 */
function preloadNext(nextIndex) {
  const nextItem = props.components[nextIndex];

  if (!nextItem) return;

  const loader = getLoader(nextItem.blockName);

  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    window.requestIdleCallback(() => {
      loader().catch(() => {});
    });
  } else {
    setTimeout(() => {
      loader().catch(() => {});
    }, 200);
  }
}
</script>
