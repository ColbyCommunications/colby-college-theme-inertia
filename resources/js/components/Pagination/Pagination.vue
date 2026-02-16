<template>
  <div class="pagination flex items-center justify-between">
    <span
      class="pagination__text font-body font-normal text-12 leading-140 text-indigo-800"
    >
      {{ text }}
    </span>

    <div
      class="inline-flex items-center h-8 px-5 py-0.5 bg-gray-100 rounded-md space-x-1"
    >
      <a
        v-if="prevUrl"
        :href="prevUrl"
        class="block p-2 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-indigo-200 transition-all duration-200 ease-in-out"
      >
        <Icon name="small-arrow" class="w-1 fill-indigo-800" />
      </a>

      <ul class="pagination__container inline-flex space-x-1">
        <li
          v-for="(page, index) in pages"
          :key="index"
          class="pagination__item"
        >
          <a
            class="block p-2 py-1 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-indigo-200 transition-all duration-200 ease-in-out"
            :class="{ 'bg-indigo-200 text-indigo font-medium': page.active }"
            :href="page.url"
          >
            {{ page.label }}
          </a>
        </li>
      </ul>

      <a
        v-if="nextUrl"
        :href="nextUrl"
        class="block p-2 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-indigo-200 transition-all duration-200 ease-in-out"
      >
        <Icon name="small-arrow" class="w-1 fill-indigo-800 rotate-180" />
      </a>
    </div>
  </div>
</template>

<script setup>
import Icon from "@/js/components/Icon/Icon.vue";

defineProps({
  text: { type: String, default: "" },
  pages: { type: Array, default: () => [] },
  prevUrl: { type: String, default: "" },
  nextUrl: { type: String, default: "" },
});
</script>
