<template>
  <ul
    class="mb-12 flex flex-wrap gap-x-4 gap-y-3 md:col-span-4 md:mb-0 md:gap-x-2"
  >
    <li
      v-for="item in menu"
      :key="item.id || item.url || item.title"
      class="flex-shrink-0 font-body text-18 leading-140 font-bold text-[#eef4ff] md:px-4 md:text-10"
    >
      <a
        :href="item.url"
        class="flex min-h-[44px] min-w-[44px] items-center text-[#eef4ff] transition-all duration-200 ease-in-out hover:text-white hover:underline"
      >
        <Icon
          :name="item.title"
          class="mr-2 h-4 w-4 fill-gold md:mr-1 md:h-3 md:w-3"
        />
        {{ item.title }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import Icon from "@/js/components/Icon/Icon.vue";
defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
});
</script>
