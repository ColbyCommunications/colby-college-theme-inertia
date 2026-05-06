<template>
  <div class="related-content space-y-20">
    <div
      class="related-content__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 px-5 md:grid-cols-12"
    >
      <h2
        class="text-center font-extended text-18 leading-120 font-bold tracking-8 text-indigo uppercase md:col-span-12"
      >
        {{ heading }}
      </h2>
    </div>
    <div class="related-content__inner mx-auto w-full max-w-screen-2xl px-5">
      <ArticleGrid display_posts_method="manual" :columns="4" :items="items" />
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
