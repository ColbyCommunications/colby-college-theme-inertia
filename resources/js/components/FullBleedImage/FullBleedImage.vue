<template>
  <div class="full-bleed-image relative !max-w-full">
    <div
      class="relative full-bleed-image__image lg:h-[calc(100vh_-_100px)] overflow-hidden"
    >
      <Picture
        class="w-full h-full object-cover"
        :src="image.src"
        :srcset="image.srcset"
        :size-desktop="image.sizes?.Hero"
        :size-mobile="image.sizes?.Square"
        :alt="image.alt"
      />
    </div>
    <div
      class="full-bleed-image__context md:absolute right-0 bottom-0 md:w-[520px] md:max-w-[50%] py-8 px-10 bg-indigo-200 space-y-4"
    >
      <h2
        class="font-extended font-bold text-14 leading-130 text-azure tracking-8 uppercase"
      >
        {{ heading }}
      </h2>
      <p class="font-body font-normal text-16 leading-130 text-indigo-800 !mt-2">
        {{ paragraph }}
      </p>
      <ButtonGroup
        v-if="buttons && buttons.length"
        size="medium"
        :items="buttonItems"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Picture from "@/js/components/Picture/Picture.vue";
import ButtonGroup from "@/js/components/ButtonGroup/ButtonGroup.vue";

const props = defineProps({
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
