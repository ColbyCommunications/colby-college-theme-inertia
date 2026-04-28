<template>
  <header
    class="header relative z-50 flex h-[145px] justify-center md:h-auto md:pt-0"
  >
    <div
      class="header__inner flex-column w-full max-w-screen-2xl justify-between gap-y-10 px-5 md:flex"
    >
      <!-- Header Left -->
      <div
        class="header__left hidden h-full md:flex md:items-center md:justify-center"
      >
        <div class="flex flex-col">
          <ColbyLogo
            v-if="logo.length == 0"
            :url="url"
            fillColor="--color-indigo"
          />
          <img v-else :src="logo" :style="logoStyle" />
        </div>
      </div>
      <!-- Header Right -->
      <Transition name="slide-right">
        <div v-if="showMenus" class="header__right flex flex-col items-end">
          <UtilityMenu
            :menu="menus.utility"
            :utilityMenuStyle="utilityMenuStyle"
            :utilityMenuButton="utilityMenuButton"
          />
          <MainMenu :menu="menus.main" :isCurrent="isCurrent" />
        </div>
      </Transition>
      <!-- Mobile -->
      <div class="flex w-full justify-between pt-3 md:hidden md:pt-0">
        <ColbyLogo :url="url" fillColor="--color-indigo" />
        <Hamburger @update:active="active = $event" />
      </div>
      <Transition name="mobile-menu">
        <MobileMenu v-if="active" :menus="menus" :isCurrent="isCurrent" />
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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
  logo: { type: String, default: "" },
  logoStyle: { type: String, default: "" },
  utilityMenuStyle: { type: String, default: "" },
  utilityMenuButton: { type: Object, default: () => ({ text: "", url: "" }) },
});

const isMobile = ref(false);
const showMenus = ref(false);

const updateBreakpoint = () => {
  isMobile.value = window.matchMedia("(max-width: 767px)").matches;
};

let lastState = null;

const handleResize = () => {
  const current = window.matchMedia("(max-width: 767px)").matches;

  if (current !== lastState) {
    showMenus.value = false;

    requestAnimationFrame(() => {
      showMenus.value = true;
    });

    lastState = current;
  }

  isMobile.value = current;
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);

  requestAnimationFrame(() => {
    showMenus.value = true;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

// Reactive toggle for mobile menu
const active = ref(false);
const toggleActive = () => {
  active.value = !active.value;
};

// Current page detection for active menu items
const isCurrent = (item) => {
  try {
    const there = new URL(item.url, window.location.origin);

    // Only mark as current if it's on the same origin
    if (there.origin !== window.location.origin) return false;

    const herePath = window.location.pathname.replace(/\/+$/, "") || "/";
    const therePath = there.pathname.replace(/\/+$/, "") || "/";

    return herePath === therePath;
  } catch {
    return false;
  }
};
</script>
<style lang="scss" scoped>
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-right-enter-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
</style>
