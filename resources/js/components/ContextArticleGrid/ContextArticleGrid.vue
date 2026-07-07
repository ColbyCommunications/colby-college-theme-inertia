<template>
  <div class="context-article-grid space-y-10 md:space-y-20">
    <div
      v-if="subheading || heading || paragraph"
      class="context-article-grid__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="mb-6 md:col-span-8 md:col-start-3">
        <Context
          size="medium"
          align="center"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons || [] }"
        />
      </div>
    </div>

    <ArticleGrid v-bind="articleGridProps" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import ArticleGrid from "@/js/components/ArticleGrid/ArticleGrid.vue";

const props = defineProps({
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  api: { type: String, default: "" },
  per_page: { type: [Number, String], default: 6 },
  render_api: { type: Boolean, default: false },

  // Inherited ArticleGrid props (via ACF clone)
  display_posts_method: { type: String, default: "internal" },
  api_source: { type: String, default: "" },
  external_media_api: { type: String, default: "" },
  range: { type: [Number, String], default: 6 },
  post_limit: { type: [Number, String], default: -1 },
  image_orientation: { type: String, default: "rectangle" },
  columns: { type: Number, default: 3 },
  border: { type: [Boolean, Number, String], default: false },
  render_posts_category: { type: Number, default: 1 },
  cta: { type: String, default: "Read Story" },
  accordion_style: { type: String, default: "default" },
  items: { type: Array, default: () => [] },
  carousel: { type: Boolean, default: false },
  initial_items: { type: Array, default: () => [] },
  initial_visible_count: { type: [Number, String], default: 12 },
  hydrated_from_server: { type: Boolean, default: false },
  should_client_refresh: { type: Boolean, default: false },
});

const articleGridProps = computed(() => {
  if (props.render_api && props.api !== "manual") {
    return {
      ...props,
      display_posts_method: "manual",
      items: props.initial_items || [],
    };
  }
  return { ...props };
});
</script>
