<template>
  <div
    class="full-bleed-hero py-24 relative bg-cover bg-center !max-w-full"
    :class="type === 'dark' ? 'bg-bluemarble__pattern' : 'bg-marble__pattern'"
  >
    <div
      class="full-bleed-hero__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
    >
      <div class="full-bleed-hero__context md:col-span-8 md:col-start-3">
        <Context
          :hero="hero"
          size="large"
          :type="type === 'dark' ? 'light' : 'dark'"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttonItems }"
          align="center"
        />
      </div>
      <div
        v-if="image"
        class="full-bleed-hero__main"
        :class="
          type === 'light'
            ? 'md:col-span-10 md:col-start-2'
            : 'md:col-span-8 md:col-start-3'
        "
      >
        <div
          class="full-bleed-hero__image relative pb-[100%] mt-16"
          :class="
            type === 'dark'
              ? 'md:pb-[44.79166666666667%]'
              : 'md:pb-[56.578947368421055%]'
          "
        >
          <Picture
            class="absolute w-full h-full object-cover"
            :src="image.src"
            :srcset="image.srcset"
            :size-desktop="image.sizes?.Hero"
            :size-mobile="image.sizes?.Rectangle"
            :alt="image.alt"
          />
        </div>
        <p
          v-if="image.caption"
          class="hero__caption font-body font-normal text-12 leading-140 mt-2"
          :class="type === 'light' ? 'text-gray-800' : 'text-white'"
        >
          {{ image.caption }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  type: { type: String, default: "dark" },
  hero: { type: Boolean, default: false },
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  image: { type: Object, default: null },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
