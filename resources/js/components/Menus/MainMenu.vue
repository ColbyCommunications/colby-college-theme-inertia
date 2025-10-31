<template>
  <nav aria-label="Main menu" class="hidden w-0 md:visible md:block md:w-full">
    <ul class="flex w-full">
      <li
        v-for="item in menu"
        :key="item.id || item.url || item.title"
        class="!ml-6 list-none font-extended text-24 leading-110 font-normal md:text-14 lg:!ml-12 md:[&:first-child]:!ml-0"
      >
        <a
          class="block text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo-1000 md:py-7 md:outline-0 md:hover:border-canary md:focus:border-azure"
          :class="{ '!text-indigo md:border-azure': isCurrent(item) }"
          :href="item.url"
          :target="item.target || undefined"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </nav>
</template>
<script setup>
const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
  isCurrent: Function,
});
</script>
<style scoped></style>
