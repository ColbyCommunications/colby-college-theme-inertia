<template>
  <ul class="ml-4 grid grid-cols-6 px-4">
    <li v-for="item in menu" :key="item.id" class="text-[0]">
      <a :href="item.url" class="flex w-8">
        <Icon :name="item.title" class="h-6 w-6 text-blue-500" />
        <span class="sr-only">{{ item.title }}</span>
      </a>
    </li>
  </ul>
</template>
<script setup>
import { icons } from "@/images/svg/icons/index.js";
import Icon from "@/js/components/Icon/Icon.vue";
const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
});

console.log(icons);
</script>
