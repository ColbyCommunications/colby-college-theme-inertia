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
          <ColbyLogo v-if="!logo" :url="url" fillColor="--color-indigo" />
          <a v-else :href="url || '/'" class="inline-block">
            <img
              :src="logo"
              :style="desktopWidthStyle"
              class="block h-auto"
              alt="Site Logo"
            />
          </a>
        </div>
      </div>
      <!-- Header Right -->
      <div class="header__right flex flex-col items-end">
        <UtilityMenu
          :menu="menus.utility"
          :utilityMenuStyle="utilityMenuStyle"
          :utilityMenuButton="utilityMenuButton"
        />
        <MainMenu :menu="menus.main" :isCurrent="isCurrent" />
      </div>
      <!-- Mobile -->
      <div
        class="flex w-full items-center justify-between pt-3 md:hidden md:pt-0"
      >
        <ColbyLogo v-if="!logo" :url="url" fillColor="--color-indigo" />
        <a v-else :href="url || '/'" class="inline-block">
          <img
            :src="logo"
            :style="mobileWidthStyle"
            class="block h-auto"
            alt="Site Logo"
          />
        </a>
        <Hamburger @update:active="active = $event" />
      </div>
      <Transition name="mobile-menu">
        <MobileMenu v-if="active" :menus="menus" :isCurrent="isCurrent" />
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
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
  logoStyle: {
    type: [Object, String],
    default: () => ({ desktop: "", mobile: "" }),
  },
  utilityMenuStyle: { type: String, default: "" },
  utilityMenuButton: { type: Object, default: () => ({ text: "", url: "" }) },
});

// Normalizes width input whether the user types "150", "150px", or "width: 150px;"
const parseWidth = (val) => {
  if (!val || typeof val !== "string") return undefined;
  const cleaned = val
    .replace(/width\s*:/i, "")
    .replace(/;/g, "")
    .trim();
  if (!cleaned) return undefined;
  return /^\d+$/.test(cleaned) ? `${cleaned}px` : cleaned;
};

const desktopWidthStyle = computed(() => {
  if (typeof props.logoStyle === "string") return props.logoStyle;
  const w = parseWidth(props.logoStyle?.desktop);
  return w ? { width: w } : {};
});

const mobileWidthStyle = computed(() => {
  if (typeof props.logoStyle === "string") return props.logoStyle;
  const w = parseWidth(props.logoStyle?.mobile || props.logoStyle?.desktop);
  return w ? { width: w } : {};
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
