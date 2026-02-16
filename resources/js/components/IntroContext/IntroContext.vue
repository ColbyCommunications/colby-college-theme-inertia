<template>
  <div class="intro-context">
    <div
      class="intro-context__inner md:grid md:grid-cols-12 gap-10 max-w-screen-2xl w-full px-5 mx-auto"
    >
      <div
        class="intro-context__main pt-5 border-t border-azure"
        :class="inset ? 'md:col-start-2 md:col-span-5' : 'md:col-span-6'"
      >
        <Context :size="size" :subheading="subheading" :heading="heading" />
      </div>
      <div
        class="intro-context__secondary mt-2 md:mt-0 grid gap-4"
        :class="inset ? 'md:col-span-5' : 'md:col-span-6'"
      >
        <div
          class="font-body font-normal text-18 leading-130 text-indigo-800"
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
