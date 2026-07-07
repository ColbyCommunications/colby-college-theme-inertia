<template>
  <div class="related-content space-y-20">
    <div
      class="related-content__inner mx-auto mb-4 grid w-full max-w-screen-2xl gap-x-10 px-5 md:grid-cols-12"
    >
      <h2
        class="text-center font-extended text-18 leading-120 font-bold tracking-8 text-indigo uppercase md:col-span-12"
      >
        {{ heading }}
      </h2>
    </div>
    <div class="related-content__inner mx-auto w-full max-w-screen-2xl px-5">
      <ArticleGrid display_posts_method="manual" :columns="4" :items="normalizedItems" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ArticleGrid from "@/js/components/ArticleGrid/ArticleGrid.vue";

const props = defineProps({
  heading: { type: String, default: "" },
  items: { type: Array, default: () => [] },
});

function normalizeImage(image) {
  if (!image || typeof image !== "object") {
    return image;
  }

  const landscapeUrl = image.sizes?.Landscape || image.src || image.url || "";

  return {
    ...image,
    src: landscapeUrl,
    url: landscapeUrl,
  };
}

function normalizeItem(item) {
  if (!item || typeof item !== "object") {
    return item;
  }

  return {
    ...item,
    image: normalizeImage(item.image),
  };
}

const normalizedItems = computed(() => {
  return props.items.map(normalizeItem);
});

console.log(props.items);
</script>
