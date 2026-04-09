<template>
  <div
    class="hw-image-section full-bleed md:flex [&+.hw-image-section]:mt-0"
    :class="type === 'light' ? 'bg-indigo' : 'bg-[#f9fbff]'"
  >
    <div class="hw-image-section__image relative md:w-1/2">
      <Picture
        class="w-full min-h-full object-cover"
        :src="image.url"
        :alt="image.alt"
      />
    </div>
    <div
      class="hw-image-section__context flex justify-center items-center md:w-1/2 py-9 md:py-12 px-9 md:px-12 lg:px-24"
      :class="{ 'md:-order-1': reverse }"
    >
      <Context
        :hero="hero"
        :type="type"
        :size="size || 'medium'"
        :subheading="subheading"
        :heading="heading"
        :paragraph="paragraph"
        :buttons="{ items: buttons }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  type: { type: String, default: "dark" },
  size: { type: String, default: "medium" },
  hero: { type: Boolean, default: false },
  reverse: { type: Boolean, default: false },
  imageOrientation: { type: String, default: "Square" },
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  image: { type: Object, default: () => ({}) },
});

</script>
