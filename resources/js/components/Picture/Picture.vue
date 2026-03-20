<template>
  <picture v-if="!isPercy">
    <source media="(min-width:768px)" :srcset="
      'https://colby.edu/cdn-cgi/image/width=320,quality=60/' +
      sizeDesktop +
      ' 320w,' +
      'https://colby.edu/cdn-cgi/image/width=640,quality=60/' +
      sizeDesktop +
      ' 640w,' +
      'https://colby.edu/cdn-cgi/image/width=960,quality=60/' +
      sizeDesktop +
      ' 960w,' +
      'https://colby.edu/cdn-cgi/image/width=1280,quality=60/' +
      sizeDesktop +
      ' 1280w,'
    "/>
    <img :class="class" :src="'https://colby.edu/cdn-cgi/image/width=320,quality=50/' +
      sizeDesktop" :alt="alt" :loading="loading" :sizes="'(max-width: 767px) 100vw, 50vw'" :fetchpriority="loading === 'eager' ? 'high' : 'low'" />
  </picture>
  <picture v-else>
    <img :class="class" :src="sizeDesktop" :alt="alt" :loading="loading" :sizes="'(max-width: 767px) 100vw, 50vw'" :fetchpriority="loading === 'eager' ? 'high' : 'low'" />
  </picture>
</template>

<script setup>

// 1. Define the constant here
const isPercy = import.meta.env.VITE_PERCY === 'true';

console.log(isPercy);

const props = defineProps({
  // The class to apply to the <img> element
  class: {
    type: String,
    default: "",
  },
  srcset: {
    type: String,
    default: "",
  },
  src: {
    type: String,
    default: "",
  },
  sizeDesktop: {
    type: String,
    default: "",
  },
  sizeMobile: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  loading: {
    type: String,
    default: "lazy",
  },
});
</script>
