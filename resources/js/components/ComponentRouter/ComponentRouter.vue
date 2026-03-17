<template>
  <div>
    <LazyBlock
      v-for="(item, index) in components"
      :key="getBlockKey(item, index)"
      :loader="getLoader(item.blockName)"
      :component-props="item.attrs?.data || {}"
      :eager="isEager(item, index)"
      :root-margin="getRootMargin(item, index)"
      :placeholder-min-height="getPlaceholderHeight(item)"
      @loaded="preloadNext(index + 1)"
    />
    <!-- <FactsFigures
      v-if="item.blockName == 'acf/facts-figures'"
      v-bind="item.attrs.data"
    />
    <Hero v-if="item.blockName == 'acf/hero'" v-bind="item.attrs.data" />
    <HomeHero
      v-if="item.blockName == 'acf/home-hero'"
      v-bind="item.attrs.data"
    /> -->
  </div>
</template>

<script setup>
import LazyBlock from "../LazyBlockWrapper/LazyBlockWrapper.vue";

const props = defineProps({
  components: {
    type: Array,
    default: () => [],
  },
});

const blockRegistry = {
  "acf/article-grid": () => import("../ArticleGrid/ArticleGrid.vue"),
  "acf/article-section": () => import("../ArticleSection/ArticleSection.vue"),
  "acf/carousel": () => import("../Carousel/Carousel.vue"),
  "acf/dark-interstitial": () => import("../DarkInterstitial/DarkInterstitial.vue"),
  "acf/facts-figures": () => import("../FactsFigures/FactsFigures.vue"),
  "acf/hero": () => import("../Hero/Hero.vue"),
  "acf/home-hero": () => import("../HomeHero/HomeHero.vue"),
};

function getLoader(blockName) {
  return blockRegistry[blockName] || (() => Promise.resolve({ default: null }));
}

function getBlockKey(item, index) {
  return item?.attrs?.id || item?.id || `${item.blockName}-${index}`;
}

function isEager(item, index) {
  if (index === 0) return true;

  return [
    "acf/hero",
    "acf/home-hero",
  ].includes(item.blockName);
}

function getRootMargin(item, index) {
  if (isEager(item, index)) {
    return "0px";
  }

  return "100px 0px";
}

/**
 * Optional: helps reduce layout shift a little.
 * You can tune these values per block type.
 */
function getPlaceholderHeight(item) {
  const heights = {
    "acf/article-grid": 500,
    "acf/article-section": 300,
    "acf/carousel": 450,
    "acf/dark-interstitial": 250,
    "acf/facts-figures": 300,
    "acf/hero": 0,
    "acf/home-hero": 0,
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