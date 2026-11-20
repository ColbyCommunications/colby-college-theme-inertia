<template>
    <AppLayout>
      <div
        class="
          page__main
          px-[10px]
          [&>div+div]:mt-20
          md:[&>div+div]:mt-[100px]
          [&>.article-grid]:px-5
          [&>.overlay-wide-image]:px-5
          [&>.media-aside]:px-5
          [&>.media-context]:px-5
          [&>.list-context]:px-5
          [&>.image-grid]:px-5
          [&>.pagination]:px-5
        "
      >
        <ContextSection
          :hero="hero.hero"
          :size="hero.size"
          :heading="hero.heading"
          :align="hero.align"
        />
  
        <SectionNav
          v-if="eventsMenu.items.length"
          :title="eventsMenu.heading"
          :items="eventsMenu.items"
        />
  
        <ArticleGrid
          display_posts_method="manual"
          :columns="3"
          image_orientation="rectangle"
          :items="events"
        />
      </div>
    </AppLayout>
  </template>
  
  <script setup>
  import AppLayout from "@/js/pages/Layouts/App.vue";
  
  import ContextSection from "@/js/components/ContextSection/ContextSection.vue";
  import SectionNav from "@/js/components/SectionNav/SectionNav.vue";
  import ArticleGrid from "@/js/components/ArticleGrid/ArticleGrid.vue";
  
  defineProps({
    hero: {
      type: Object,
      default: () => ({
        hero: true,
        size: "large",
        heading: "Event Calendar",
        align: "center",
      }),
    },
  
    eventsMenu: {
      type: Object,
      default: () => ({
        heading: "Events",
        items: [],
      }),
    },
  
    events: {
      type: Array,
      default: () => [],
    },
  });
  </script>