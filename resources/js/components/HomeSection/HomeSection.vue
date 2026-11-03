<template>
  <div class="background-section relative py-12 bg-marble__pattern bg-cover full-bleed">
    <div class="background-section___inner relative z-10 px-4">
      <div class="my-10">
        <ContextArticleGrid
          :render-api="true"
          display_posts_method="api"
          api="Alumni"
          :per-page="3"
          :subheading="news.subheading"
          :heading="news.heading"
          :paragraph="news.paragraph"
          :initial_items="news.items || []"
          :hydrated_from_server="news.hydrated_from_server || false"
          :should_client_refresh="false"
          :fromApi="true"
        />
      </div>
      <div class="my-6">
        <ContextSection
          size="medium"
          align="center"
          :subheading="events.subheading"
          :heading="events.heading"
          :paragraph="events.paragraph"
          :buttons="events.buttons"
        />
    </div>
      <div class="max-w-screen-2xl w-full px-5 mx-auto mb-16">
        <ArticleGrid
          display_posts_method="manual"
          :columns="3"
          image_orientation="rectangle"
          :items="events.items"
        />
      </div>
      <div class="max-w-screen-2xl w-full px-5 mx-auto">
        <OverlayWideImage
          :subheading="cta.subheading"
          :heading="cta.heading"
          :paragraph="cta.paragraph"
          :buttons="cta.buttons"
          :image="cta.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ContextArticleGrid from "@/js/components/ContextArticleGrid/ContextArticleGrid.vue";
import ContextSection from "@/js/components/ContextSection/ContextSection.vue";
import ArticleGrid from "@/js/components/ArticleGrid/ArticleGrid.vue";
import OverlayWideImage from "@/js/components/OverlayWideImage/OverlayWideImage.vue";

const props = defineProps({
  news: { type: Object, default: () => ({}) },
  events: { type: Object, default: () => ({}) },
  cta: { type: Object, default: () => ({}) },
});
</script>
