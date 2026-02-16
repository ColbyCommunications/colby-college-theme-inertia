<template>
  <div class="related-content space-y-20">
    <div class="related-content__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto">
      <h2 class="md:col-span-12 font-extended font-bold text-18 leading-120 text-indigo tracking-8 uppercase text-center">
        {{ heading }}
      </h2>
    </div>
    <div class="related-content__inner max-w-screen-2xl w-full px-5 mx-auto">
      <ArticleGrid
        display_posts_method="manual"
        :columns="4"
        :items="items"
      />
    </div>
  </div>
</template>

<script setup>
import ArticleGrid from "@/js/components/ArticleGrid/ArticleGrid.vue";

defineProps({
  heading: { type: String, default: "" },
  items: { type: Array, default: () => [] },
});
</script>
