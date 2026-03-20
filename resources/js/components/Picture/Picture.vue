<template>
  <picture v-if="!import.meta.env.VITE_PERCY">
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
    <source media="(min-width:768px)" :srcset="
      sizeDesktop +
      ' 320w,' +
      sizeDesktop +
      ' 640w,' +
      sizeDesktop +
      ' 960w,' +
      sizeDesktop +
      ' 1280w,'
    "/>
    <img :class="class" :src="sizeDesktop" :alt="alt" :loading="loading" :sizes="'(max-width: 767px) 100vw, 50vw'" :fetchpriority="loading === 'eager' ? 'high' : 'low'" />
  </picture>
</template>

<script setup>

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
