<template>
  <picture>
    <source media="(min-width:768px)" :srcset="sizeDesktop" />
    <img :class="class" :src="sizeMobile" :alt="alt" :loading="loading" />
  </picture>
</template>

<script setup>
import { defineProps } from "vue";

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
