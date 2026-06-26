<template>
  <div class="background-section relative py-24 bg-marble__pattern bg-cover full-bleed">
    <div class="background-section___inner relative z-10 space-y-24">
      <ContextArticleGrid
        :render-api="false"
        api="manual"
        :per-page="3"
        :subheading="news.subheading"
        :heading="news.heading"
        :paragraph="news.paragraph"
        :items="news.items || []"
        :initial_items="news.items || []"
        :hydrated_from_server="news.hydrated_from_server || false"
        :should_client_refresh="false"
        :fromApi="true"
      />
      <ContextSection
        size="medium"
        align="center"
        :subheading="events.subheading"
        :heading="events.heading"
        :paragraph="events.paragraph"
        :buttons="events.buttons"
      />
      <div class="max-w-screen-2xl w-full px-5 mx-auto">
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

defineProps({
  news: { type: Object, default: () => ({}) },
  events: { type: Object, default: () => ({}) },
  cta: { type: Object, default: () => ({}) },
});
</script>
