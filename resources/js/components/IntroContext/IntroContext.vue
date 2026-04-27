<template>
  <div class="intro-context">
    <div
      class="intro-context__inner mx-auto w-full max-w-screen-2xl gap-10 px-5 md:grid md:grid-cols-12"
    >
      <div
        class="intro-context__main border-t border-azure pt-5"
        :class="inset ? 'md:col-span-5 md:col-start-2' : 'md:col-span-6'"
      >
        <Context :size="size" :subheading="subheading" :heading="heading" />
      </div>
      <div
        class="intro-context__secondary mt-2 grid gap-4 md:mt-0"
        :class="inset ? 'md:col-span-5' : 'md:col-span-6'"
      >
        <div
          class="font-body text-18 leading-130 font-normal text-indigo-800"
          v-html="text"
        ></div>
        <ButtonGroup
          v-if="buttons && buttons.length"
          size="large"
          :items="buttonItems"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import ButtonGroup from "@/js/components/ButtonGroup/ButtonGroup.vue";

const props = defineProps({
  size: { type: String, default: "medium" },
  inset: { type: Boolean, default: false },
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  text: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
