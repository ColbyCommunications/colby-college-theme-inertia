<template>
  <ul class="ml-4 grid w-200 grid-cols-6 px-4">
    <li v-for="item in menu" :key="item.id" class="flex items-center text-[0]">
      <a :href="item.url" class="inline-flex items-center justify-center w-8 min-w-[44px] min-h-[44px] w-full">
        <Icon
          :name="item.title"
          class="max-h-4 w-full max-w-5 fill-[#f9fbff] transition-all duration-200 ease-in-out hover:fill-[#b7c2d5] md:max-h-3.5 md:max-w-4 "
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
