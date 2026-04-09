<template>
  <Carousel
    v-if="render_api"
    class="article-section"
    :perView="perView"
    :gap="gap"
    :render_api="render_api"
    :api="api"
    :heading="heading"
    :subheading="subheading"
    :paragraph="paragraph"
    :buttons="buttons"
    :initial_items="initial_items"
    :hydrated_from_server="hydrated_from_server"
    :should_client_refresh="should_client_refresh"
  />

  <div
    v-else
    class="article-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto space-y-16 md:space-y-0"
  >
    <div class="article-section__intro md:col-span-4 lg:col-span-3 space-y-10">
      <Context
        size="small"
        :type="type"
        :arrow="true"
        :reverse="true"
        :heading="heading"
        :subheading="subheading"
        :paragraph="paragraph"
        :buttons="{ items: buttons }"
      />
      <ArrowControls v-if="carousel" size="large" type="light" />
    </div>

    <div class="article-section__grid md:col-start-5 md:col-span-8">
      <ArticleGrid v-bind="props" :columns="perView" :api_source="api" />
    </div>
  </div>
</template>

<script setup>
import Carousel from "../Carousel/Carousel.vue";
import Context from "../Context/Context.vue";
import ArrowControls from "../ArrowControls/ArrowControls.vue";
import ArticleGrid from "../ArticleGrid/ArticleGrid.vue";

const props = defineProps({
  perView: { type: Number, default: 2 },
  gap: { type: Number, default: 20 },

  render_api: { type: [Boolean, Number, String], default: false },
  api: { type: String, default: "" },

  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  subheading: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },

  carousel: { type: Boolean, default: false },

  gridProps: { type: Object, default: () => ({}) },

  display_posts_method: { type: String, default: "" },
  items: { type: Array, default: () => [] },

  type: { type: String, default: "dark" },

  // NEW
  initial_items: { type: Array, default: () => [] },
  hydrated_from_server: { type: Boolean, default: false },
  should_client_refresh: { type: Boolean, default: false },
});
</script>