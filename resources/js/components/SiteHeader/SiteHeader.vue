<!-- resources/js/components/SiteHeader.vue -->
<template>
  <div class="header__inner flex w-full max-w-screen-2xl justify-between px-5">
    <!-- Left -->
    <div
      class="header__left flex w-full items-center justify-between md:w-auto"
    >
      <colbyLogo :url="url" fillColor="indigo" />

      <!-- Action menu (mobile) -->
      <ActionMenu :class="actionMenuMobileBreakpoints" />

      <!-- Hamburger -->
      <div
        class="header__hamburger-group flex items-center space-x-4 lg:hidden"
      >
        <label
          class="header__hamburger-label font-body text-20 font-normal text-indigo-800"
          >Menu</label
        >

        <button
          class="header__hamburger flex h-[52px] w-[56px] items-center justify-center rounded-sm bg-indigo-100 text-[0]"
          @click="toggleActive"
          aria-label="Toggle menu"
          :aria-expanded="active ? 'true' : 'false'"
          :aria-controls="'header-menus'"
        >
          <span
            class="relative block h-0.5 w-6 bg-indigo transition-all duration-200 ease-in-out"
            :class="{ 'bg-transparent': active }"
          >
            <span
              class="absolute top-[-6px] left-0 h-full w-full origin-center bg-indigo transition-all duration-200 ease-in-out"
              :class="{ '!top-0 rotate-45': active }"
            ></span>
            <span
              class="absolute top-[6px] left-0 h-full w-full origin-center bg-indigo transition-all duration-200 ease-in-out"
              :class="{ '!top-0 rotate-[-45deg]': active }"
            ></span>
          </span>
          Menu Button
        </button>
      </div>
    </div>

    <!-- Menus (wrapper) -->
    <div id="header-menus" class="header__menus">
      <!-- Mobile column -->
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

        <!-- Mobile utility -->
        <div class="w-full bg-indigo-100 p-5 pb-20">
          <ul
            class="grid w-full grid-cols-3 grid-rows-2 gap-2 md:inline-flex md:w-auto md:grid-cols-none md:grid-rows-none md:gap-0 md:space-x-6"
          >
            <li
              v-for="u in menus.utility"
              :key="u.id || u.url || u.title"
              class="font-body text-16 leading-110 font-normal md:text-10"
            >
              <a
                class="block py-2 text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline"
                :href="u.url"
              >
                {{ u.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Desktop column -->
      <div class="hidden w-0 md:visible md:block md:w-full">
        <nav
          class="header__utility flex h-[118px] bg-indigo-100 px-5 pt-4 md:block md:h-auto md:pt-0"
          aria-label="Utility menu"
        >
          <ul
            class="grid w-full grid-cols-3 grid-rows-2 gap-x-5 md:inline-flex md:w-auto md:grid-cols-none md:grid-rows-none md:gap-0 md:space-x-6"
          >
            <li
              v-for="u in menus.utility"
              :key="u.id || u.url || u.title"
              class="list-none font-body text-16 leading-110 font-normal md:text-10"
            >
              <a
                class="block py-2 text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline"
                :href="u.url"
              >
                {{ u.title }}
              </a>
            </li>
          </ul>

          <!-- Action menu (desktop) -->
          <ActionMenu :class="actionMenuDesktopBreakpoints" />
        </nav>

        <ul
          class="header__main flex h-[calc(100%_-_170px)] w-full flex-col justify-center space-y-6 overflow-y-auto pl-24 md:h-auto md:flex-row md:justify-end md:space-y-0 md:space-x-12 md:px-4 md:px-6"
          aria-label="Main menu"
        >
          <li
            v-for="item in menus.main"
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ActionMenu from "../ActionMenu/ActionMenu.vue";
import colbyLogo from "../Logos/colbyLogo.vue";

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

// Optional presentation props
const actionMenuMobileBreakpoints = "flex md:hidden";
const actionMenuDesktopBreakpoints = "hidden md:block float-right";

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
