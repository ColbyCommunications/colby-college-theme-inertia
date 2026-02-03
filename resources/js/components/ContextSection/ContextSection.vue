<template>
  <div class="context-section">
    <div
      class="context-section__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
      :class="{ 'my-24': hero }"
    >
      <div
        class="md:col-span-8"
        :class="{ 'md:col-start-3': align === 'center' }"
      >
        <Context
          :hero="hero"
          :align="align"
          :size="size"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
// Assuming the Context child component exists at this path
import Context from "../Context/Context.vue";

const props = defineProps({
  hero: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: "left", // Defaulting to left, as 'center' triggers specific classes
  },
  size: {
    type: String,
    default: "medium",
  },
  subheading: {
    type: String,
    default: "",
  },
  heading: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    default: "",
  },
  buttons: {
    type: Array,
    default: () => [],
  },
});
</script>
