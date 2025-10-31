<template>
  <div
    class="flex h-[calc(100vh_-_145px)] w-full flex-col justify-between md:hidden md:w-0"
  >
    <div class="overflow-auto py-12">
      <ul
        class="header__main flex w-full flex-col justify-center space-y-6 overflow-y-auto pl-16 md:h-auto md:w-auto md:flex-row md:justify-end md:space-y-0 md:space-x-12 md:px-4 md:px-6"
      >
        <li
          v-for="item in menus.main"
          :key="item.id || item.url || item.title"
          class="!ml-8 font-extended text-20 leading-110 font-normal md:text-14 lg:!ml-12 md:[&:first-child]:!ml-0"
        >
          <a
            class="block border-transparent text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo-1000 md:py-7 md:outline-0 md:hover:border-azure md:focus:border-canary"
            :class="{ '!text-indigo md:border-azure': isCurrent(item) }"
            :href="item.url"
            :target="item.target || undefined"
            >{{ item.title }}</a
          >
        </li>
      </ul>
    </div>
    <div class="w-full bg-indigo-100 p-5 pb-20">
      <ul
        class="grid w-full grid-cols-3 grid-rows-2 gap-2 md:inline-flex md:w-auto md:grid-cols-none md:grid-rows-none md:gap-0 md:space-x-6"
      >
        <li
          v-for="item in menus.utility"
          :key="item.id || item.url || item.title"
          class="font-body text-16 leading-110 font-normal md:text-10"
        >
          <a
            class="block py-2 text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline"
            :href="item.url"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  menus: {
    type: Object,
    default: () => ({ main: [], utility: [] }),
  },
  isCurrent: {
    type: Function,
    default: () => false,
  },
});
</script>
