<template>
  <nav
    aria-label="Main menu"
    class="hidden w-0 pl-6 md:visible md:block md:w-full"
  >
    <ul class="flex w-full">
      <li
        v-for="item in menu"
        :key="item.id || item.url || item.title"
        class="font-extended !ml-6 list-none text-24 leading-110 font-normal font-stretch-semi-expanded md:!ml-4 md:text-14 lg:!ml-12 lg:text-16 md:[&:first-child]:!ml-0"
      >
        <a
          class="inline-flex h-full min-h-[44px] min-w-[44px] items-center justify-center border-b-2 border-solid border-transparent text-indigo transition-all duration-200 ease-in-out hover:text-indigo md:py-7 md:outline-0 md:hover:border-indigo md:focus:border-indigo"
          :class="{ '!text-indigo md:border-indigo': isCurrent(item) }"
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
