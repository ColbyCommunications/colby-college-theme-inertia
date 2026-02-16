<template>
  <div
    class="collage-section full-bleed space-y-16 bg-gray-100 pt-16 pb-[100%] md:pt-24 md:pb-40"
  >
    <div
      class="collage-section__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="collage-section___context md:col-span-8 md:col-start-3">
        <Context
          size="medium"
          align="center"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
        />
      </div>
    </div>

    <div
      class="collage-section__inner mx-auto mt-12 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="md:col-span-12">
        <div class="collage-section__collage relative">
          <div
            v-if="images[0]"
            class="collage-section__image1 relative right-[-20px] z-[1] w-full md:right-auto md:w-1/2"
          >
            <div class="relative pb-[65.28117359413203%] md:pb-[87.5%]">
              <Picture
                class="absolute h-full w-full object-cover"
                :srcset="images[0].srcset"
                :src="images[0].src"
                :sizeMobile="images[0].image.sizes.Hero"
                :sizeDesktop="images[0].image.sizes.Hero"
                :alt="images[0].alt"
              />
            </div>
          </div>

          <div
            v-if="images[1]"
            class="collage-section__image2 absolute top-[80%] left-[-20px] z-[2] w-[80%] md:top-[40%] md:left-[30%] md:w-[40%]"
          >
            <div class="relative pb-[80.43478260869566%]">
              <Picture
                class="absolute h-full w-full object-cover"
                :srcset="images[1].srcset"
                :src="images[1].src"
                :sizeMobile="images[1].image.sizes.Square"
                :sizeDesktop="images[1].image.sizes.Square"
                :alt="images[1].alt"
              />
            </div>
          </div>

          <div
            v-if="images[2]"
            class="collage-section__image3 absolute top-[150%] right-0 z-[3] w-[66%] md:top-[10%] md:w-[44%]"
          >
            <div
              class="relative pb-[85.18518518518518%] md:pb-[56.31067961165048%]"
            >
              <Picture
                class="absolute h-full w-full object-cover"
                :srcset="images[2].srcset"
                :src="images[2].src"
                :sizeMobile="images[2].image.sizes.Rectangle"
                :size-desktop="images[2].image.sizes.Rectangle"
                :alt="images[2].alt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";

// Define Props using standard Vue object syntax
const props = defineProps({
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
  images: {
    type: Array,
    required: true,
    // Default to empty array to prevent access errors if prop is missing
    default: () => [],
  },
});
</script>
