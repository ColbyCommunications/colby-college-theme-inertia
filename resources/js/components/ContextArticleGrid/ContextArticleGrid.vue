<template>
  <div class="context-article-grid space-y-20">
    <div
      v-if="subheading || heading || paragraph"
      class="context-article-grid__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="md:col-span-8 md:col-start-3">
        <Context
          size="medium"
          align="center"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
        />
      </div>
    </div>

    <div
      class="context-article-grid__inner mx-auto mt-10 w-full max-w-screen-2xl gap-x-10 px-5"
    >
      <div class="article-grid grid w-full max-w-screen-2xl grid-cols-9 gap-10">
        <template v-if="api === 'manual' && items.length">
          <div
            v-for="(item, index) in normalizedApiItems"
            :key="index"
            class="article-grid__item col-span-9 md:col-span-3"
          >
            <Article
              size="small"
              :image="item.image"
              :subheading="item.subheading"
              :heading="item.heading"
              :paragraph="item.paragraph"
              :buttons="item.buttons"
              :fromApi="false"
            />
          </div>
        </template>
        <template>
          <div
            v-for="(item, index) in normalizedApiItems"
            :key="item.id || index"
            class="article-grid__item col-span-9 md:col-span-3"
          >
            <Article
              size="small"
              :image="item.image"
              :subheading="item.subheading"
              :heading="item.heading"
              :paragraph="item.paragraph"
              :buttons="item.buttons"
              :fromApi="true"
            />
          </div>
        </template>

       
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import Context from "@/js/components/Context/Context.vue";
import Article from "@/js/components/Article/Article.vue";

const props = defineProps({
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  cta: { type: String, default: "Read Story" },
  api: { type: String, default: "" },
  perPage: { type: Number, default: 3 },
  items: {
    type: Array,
    default: () => [],
  },

  initial_items: { type: Array, default: () => [] },
  hydrated_from_server: { type: Boolean, default: false },
  should_client_refresh: { type: Boolean, default: false },
});
function normalizeImage(image) {
  if (!image || typeof image !== "object") {
    return image;
  }

  return {
    ...image,
    src: image.src || image.url || "",
  };
}

/**
 * Normalize a single item object:
 * - item.image.src guaranteed if image exists
 */
function normalizeItem(item) {
  if (!item || typeof item !== "object") {
    return item;
  }

  return {
    ...item,
    image: item.image ? normalizeImage(item.image) : item.image,
  };
}

/**
 * Normalize any items array
 */
function normalizeItems(items = []) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.map(normalizeItem);
}

// Normalize API data into Article-compatible shape
const normalizedApiItems = computed(() => props.api === 'manual' ? normalizeItems(props.items) : normalizeItems(props.initial_items));

</script>
