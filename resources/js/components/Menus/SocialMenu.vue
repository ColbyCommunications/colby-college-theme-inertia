<template>
  <ul class="grid w-full max-w-[200px] grid-cols-6 gap-2 sm:ml-4 sm:px-4">
    <li v-for="item in menu" :key="item.id" class="flex items-center text-[0]">
      <a
        :href="item.url"
        class="inline-flex min-h-[44px] w-8 w-full min-w-[44px] items-center justify-center"
      >
        <Icon
          :name="item.title"
          class="max-h-4 w-full max-w-5 fill-[#f9fbff] transition-all duration-200 ease-in-out hover:fill-[#b7c2d5] md:max-h-3.5 md:max-w-4"
        />
        <span class="sr-only">{{ item.title }}</span>
      </a>
    </li>
  </ul>
</template>
<script setup>
import Icon from "@/js/components/Icon/Icon.vue";
const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
});
</script>
