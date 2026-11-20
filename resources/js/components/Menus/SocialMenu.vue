<!-- SocialMenu.vue -->
<template>
  <ul
    v-if="menu && menu.length"
    class="flex flex-wrap items-center justify-start md:justify-end"
    :class="
      isLarge
        ? '-ml-[10px] md:-mr-[10px] md:ml-0'
        : '-ml-[12px] md:-mr-[14px] md:ml-0'
    "
  >
    <li
      v-for="item in menu"
      :key="item.id || item.url || item.title"
      class="flex items-center text-[0]"
    >
      <a
        :href="item.url"
        class="inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors duration-200 ease-in-out"
      >
        <Icon
          :name="(item.title || '').toLowerCase()"
          class="w-full fill-[#f9fbff] transition-all duration-200 ease-in-out hover:fill-[#b7c2d5]"
          :class="
            isLarge
              ? 'max-h-6 max-w-6'
              : 'max-h-4 max-w-5 md:max-h-3.5 md:max-w-4'
          "
        />
        <span class="sr-only">{{ item.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import Icon from "@/js/components/Icon/Icon.vue";

const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: "small",
  },
  footerStyle: {
    type: String,
    default: "",
  },
});

const isLarge = computed(
  () => props.size === "large" || props.footerStyle === "child_site",
);
</script>
