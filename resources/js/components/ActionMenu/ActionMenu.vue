<template>
  <ul
    class="mb-12 flex w-full justify-start md:col-span-4 md:mb-0 md:grid md:w-64 md:grid-cols-2"
  >
    <li
      v-for="item in menu"
      :key="item.id || item.url || item.title"
      class="w-48 font-body text-18 leading-140 font-bold text-indigo-200 md:col-span-1 md:px-4 md:text-10"
    >
      <a
        :href="item.url"
        class="mr-10 flex text-indigo-200 transition-all duration-200 ease-in-out hover:text-white hover:underline md:items-center"
      >
        <Icon
          :name="item.title"
          class="mr-2 h-4 w-4 fill-canary md:mr-1 md:h-3 md:w-3"
        />
        {{ item.title }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import Icon from "@/js/components/Icon/Icon.vue";

defineProps({
  menu: { type: Array, default: () => [] },
});
</script>
