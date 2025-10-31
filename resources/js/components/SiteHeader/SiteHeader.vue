<template>
  <header class="flex justify-center">
    <div
      class="header__inner flex w-full max-w-screen-2xl flex-col items-end justify-between gap-y-10 px-5 md:flex-row"
    >
      <!-- Header Left -->
      <div
        class="header__left hidden h-full md:flex md:items-center md:justify-center"
      >
        <div class="flex flex-col">
          <ColbyLogo :url="url" fillColor="--color-indigo" />
        </div>
      </div>
      <!-- Header Right -->
      <div class="header__right flex flex-col items-end">
        <UtilityMenu :menu="menus.utility" />
        <MainMenu :menu="menus.main" :isCurrent="isCurrent" />
      </div>
      <!-- Mobile -->
      <div class="flex w-full justify-between md:hidden">
        <ColbyLogo :url="url" fillColor="--color-indigo" />
        <Hamburger @update:active="active = $event" />
      </div>
      <MobileMenu v-show="active" :menus="menus" :isCurrent="isCurrent" />
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import ColbyLogo from "../Logos/ColbyLogo.vue";
import Hamburger from "../Hamburger/Hamburger.vue";
import UtilityMenu from "../Menus/UtilityMenu.vue";
import MainMenu from "../Menus/MainMenu.vue";
import MobileMenu from "../Menus/MobileMenu.vue";

const props = defineProps({
  menus: {
    type: Object,
    default: () => ({ main: [], utility: [] }),
  },
  url: { type: String, default: "" },
});

// Reactive toggle for mobile menu
const active = ref(false);
const toggleActive = () => {
  active.value = !active.value;
};

// Current page detection for active menu items
const isCurrent = (item) => {
  try {
    const here = new URL(window.location.href);
    const there = new URL(item.url, window.location.origin);
    return (
      here.pathname.replace(/\/+$/, "") === there.pathname.replace(/\/+$/, "")
    );
  } catch {
    return false;
  }
};
</script>
