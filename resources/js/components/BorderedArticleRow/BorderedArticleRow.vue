<template>
  <div
    class="bordered-article-row w-full max-w-screen-2xl grid-cols-9 gap-10 space-y-16 md:grid md:space-y-0"
  >
    <div
      v-for="(item, index) in items"
      :key="item.id || index"
      class="article-grid__item border-t-2 border-solid border-indigo-600 pt-3 md:col-span-3"
    >
      <Article v-bind="item" align="column" />
    </div>
  </div>
</template>

<script setup>
import Article from "@/js/components/Article/Article.vue";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
