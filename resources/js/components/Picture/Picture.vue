<template>
  <picture>
    <template v-if="inComponentLibrary">
      <source media="(min-width:768px)" :srcset="srcset" />

      <img :class="class" :src="src" :alt="alt" />
    </template>

    <template v-else>
      <source media="(min-width:768px)" :srcset="sizeDesktop" />

      <img :class="class" :src="sizeMobile" :alt="alt" />
    </template>
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

  // Used when inComponentLibrary is TRUE (for desktop source)
  srcset: {
    type: String,
    default: "",
  },

  // Used when inComponentLibrary is TRUE (for mobile/default image src)
  src: {
    type: String,
    default: "",
  },

  // Used when inComponentLibrary is FALSE (for desktop source)
  sizeDesktop: {
    type: String,
    default: "",
  },

  // Used when inComponentLibrary is FALSE (for mobile/default image src)
  sizeMobile: {
    type: String,
    default: "",
  },

  // Alt text for the <img> tag
  alt: {
    type: String,
    default: "",
  },

  // Conditional flag from Twig's logic
  inComponentLibrary: {
    type: Boolean,
    default: false,
  },
});
</script>
