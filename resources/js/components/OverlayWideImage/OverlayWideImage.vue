<template>
  <div class="overlay-wide-image max-w-screen-2xl my-0 mx-auto">
    <div class="overlay-wide-image__inner relative md:pb-[45.45454545454545%]">
      <div
        class="overlay-wide-image__overlay z-10 relative md:absolute top-0 left-0 flex items-center w-full h-full p-9 md:p-24 bg-gray-1000/40"
      >
        <Context
          size="medium"
          type="light"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttonItems }"
        />
      </div>
      <Picture
        class="absolute top-0 left-0 md:top-auto md:left-auto w-full h-full object-cover"
        :src="image.src"
        :srcset="image.srcset"
        :size-desktop="image.sizes?.Landscape"
        :size-mobile="image.sizes?.Landscape"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  image: { type: Object, default: () => ({}) },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
