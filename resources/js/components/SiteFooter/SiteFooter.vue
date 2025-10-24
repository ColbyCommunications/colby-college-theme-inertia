<!-- Footer.vue -->
<template>
  <footer class="footer space-y-14 bg-indigo py-14">
    <div
      class="footer__inner mx-auto my-0 w-full max-w-screen-2xl space-y-8 gap-x-10 px-5 md:grid md:grid-cols-12 md:space-y-0"
    >
      <div
        class="footer__left flex items-start justify-between border-solid border-indigo-900 md:col-span-5 md:justify-start md:space-x-8 md:border-r lg:space-x-12"
      >
        <div>
          <colbyLogo :url="url" fillColor="white" />
          <athleticsLogo />
        </div>

        <address
          class="footer__address w-[225px] space-y-2 font-body text-20 leading-140 font-normal text-indigo-500 not-italic md:w-[120px] md:text-12"
        >
          <div v-html="address.text"></div>
          <a
            class="block transition-all duration-200 ease-in-out hover:text-white hover:underline"
            href="tel:{{ phone }}"
            >{{ phone }}</a
          >
        </address>
        <!-- Athletics logo (desktop / lg+) -->
        <athleticsLogo />
      </div>
      <div class="footer__right md:col-span-6 lg:col-start-7">
        <ul
          class="footer__links space-between flex flex-wrap border-y border-solid border-indigo-900 pt-8 pb-4 md:border-y-0 md:pt-0 md:pb-0"
        >
          <li
            v-for="(item, index) in menu"
            :key="index"
            class="mb-4 basis-1/2 list-none flex-col font-body text-16 leading-130 font-normal text-indigo-500 md:basis-1/2 md:text-14 lg:basis-1/4"
          >
            <a
              :href="item.url"
              class="text-indigo-500 transition-all duration-200 ease-in-out hover:text-white hover:underline"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import colbyLogo from "../Logos/colbyLogo.vue";
import athleticsLogo from "../Logos/athleticsLogo.vue";

const props = defineProps({
  menu: { type: Array, default: () => [] },
  url: { type: String, default: "" },
  address: { type: Object, default: () => ({}) },
  phone: { type: String, default: "" },
});
</script>
