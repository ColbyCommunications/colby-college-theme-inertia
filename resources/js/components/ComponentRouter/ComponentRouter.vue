<template>
  <div v-for="item in props.components">
    <ArticleGrid
      v-if="item.blockName == 'acf/article-grid'"
      v-bind="item.attrs.data"
    />
    <ArticleSection
      v-if="item.blockName == 'acf/article-section'"
      v-bind="item.attrs.data"
    />
    <Carousel
      v-if="item.blockName == 'acf/carousel'"
      v-bind="item.attrs.data"
    />
    <DarkInterstitial
      v-if="item.blockName == 'acf/dark-interstitial'"
      v-bind="item.attrs.data"
    />
    <FactsFigures
      v-if="item.blockName == 'acf/facts-figures'"
      v-bind="item.attrs.data"
    />
    <Hero v-if="item.blockName == 'acf/hero'" v-bind="item.attrs.data" />
    <HomeHero
      v-if="item.blockName == 'acf/home-hero'"
      v-bind="item.attrs.data"
    />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

// We use a dynamic import with defineAsyncComponent:
const Hero = defineAsyncComponent(() => import("../Hero/Hero.vue"));
const HomeHero = defineAsyncComponent(() => import("../HomeHero/HomeHero.vue"));
const Carousel = defineAsyncComponent(() => import("../Carousel/Carousel.vue"));
const ArticleGrid = defineAsyncComponent(
  () => import("../ArticleGrid/ArticleGrid.vue"),
);
const FactsFigures = defineAsyncComponent(
  () => import("../FactsFigures/FactsFigures.vue"),
);
const ArticleSection = defineAsyncComponent(
  () => import("../ArticleSection/ArticleSection.vue"),
);
const DarkInterstitial = defineAsyncComponent(
  () => import("../DarkInterstitial/DarkInterstitial.vue"),
);

const props = defineProps(["components"]);
</script>

<style></style>
