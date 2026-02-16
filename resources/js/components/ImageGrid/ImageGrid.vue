<template>
  <div class="image-grid grid grid-cols-8 gap-10 max-w-screen-2xl w-full mx-auto">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="image-grid__item col-span-8"
      :class="{ 'md:col-span-4': imageOrientation !== 'landscape' }"
    >
      <div class="image-grid__image relative" :class="aspectClass">
        <Picture
          class="absolute w-full h-full object-cover"
          :src="image.src"
          :srcset="image.srcset"
          :size-desktop="desktopSize(image)"
          :size-mobile="mobileSize(image)"
          :alt="image.alt"
        />
      </div>
      <p
        v-if="image.caption"
        class="hero__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"
      >
        {{ image.caption }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  images: { type: Array, default: () => [] },
  imageOrientation: { type: String, default: "square" },
});

const aspectClass = computed(() => {
  switch (props.imageOrientation) {
    case "landscape":
      return "pb-[69.04761904761905%] md:pb-[48.86363636363636%]";
    case "rectangle":
      return "pb-[69.04761904761905%]";
    case "portrait":
      return "pb-[152.63157894736844%]";
    default:
      return "pb-[100%]";
  }
});

const desktopSize = (image) => {
  const sizes = image.image?.sizes || image.sizes || {};
  switch (props.imageOrientation) {
    case "landscape":
      return sizes.Landscape || "";
    case "portrait":
      return sizes.Portrait || "";
    default:
      return sizes.Square || "";
  }
};

const mobileSize = (image) => {
  const sizes = image.image?.sizes || image.sizes || {};
  switch (props.imageOrientation) {
    case "landscape":
      return sizes.Landscape_mobile || "";
    case "portrait":
      return sizes.Portrait_mobile || "";
    default:
      return sizes.Square_mobile || "";
  }
};
</script>
