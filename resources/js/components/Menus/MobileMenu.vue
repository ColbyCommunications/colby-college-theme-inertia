<template>
  <div
    class="fixed top-[145px] right-0 bottom-0 left-0 z-40 flex flex-col justify-between bg-white md:hidden"
  >
    <!-- Main menu -->
    <div class="overflow-auto py-12">
      <ul
        class="header__main flex w-full flex-col justify-center space-y-6 overflow-y-auto pl-16 md:h-auto md:w-auto md:flex-row md:justify-end md:space-y-0 md:space-x-12 md:px-6"
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
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Utility menu -->
    <div class="w-full bg-[#f9fbff] p-5 pb-20">
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

<style lang="scss" scoped>
.mobile-menu-enter-from {
  transform: translateX(-100%);
}

.mobile-menu-enter-to {
  transform: translateX(0);
}

.mobile-menu-enter-active {
  transition: transform 0.3s ease;
}

.mobile-menu-leave-from {
  transform: translateX(0);
}

.mobile-menu-leave-to {
  transform: translateX(-100%);
}

.mobile-menu-leave-active {
  transition: transform 0.3s ease;
}
</style>
