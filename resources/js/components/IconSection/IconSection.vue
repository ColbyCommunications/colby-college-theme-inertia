<template>
  <div
    class="icon-section py-24 relative bg-blueslate__pattern bg-cover bg-center space-y-16"
  >
    <div
      class="icon-section__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
    >
      <div class="icon-section__context md:col-span-8 md:col-start-3">
        <Context
          size="large"
          type="light"
          align="center"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttonItems }"
        />
      </div>
    </div>
    <div
      class="icon-section__inner grid grid-cols-12 gap-x-10 gap-y-16 max-w-screen-2xl w-full px-5 my-0 mx-auto"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="icon-section__item flex flex-col items-center col-span-6 md:col-span-3"
      >
        <img
          class="icon-section__image w-40 mb-4"
          :src="item.image?.sizes?.Square || item.image?.src"
          :alt="item.image?.alt"
        />
        <Context
          size="medium"
          type="light"
          align="center"
          :heading="item.heading"
          :paragraph="item.paragraph"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";

const props = defineProps({
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  items: { type: Array, default: () => [] },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
