<template>
  <div class="people-grid">
    <ArticleGrid
      display_posts_method="manual"
      :columns="4"
      :items="people"
      image_orientation="portrait"
    />
  </div>
</template>

<script setup>
import ArticleGrid from "@/js/components/ArticleGrid/ArticleGrid.vue";

const props = defineProps({
  people: { type: Array, default: () => [] },
});
console.log(props);
</script>
