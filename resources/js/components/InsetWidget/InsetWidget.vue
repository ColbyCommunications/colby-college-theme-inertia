<template>
  <div class="inset-widget">
    <div class="inset-widget__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full my-0 mx-auto">
      <div
        class="inset-widget__main"
        :class="inset ? 'md:col-span-10 md:col-start-2' : 'md:col-span-12'"
      >
        <div class="inset-widget__widget md:flex justify-between items-center p-10 bg-gray-100 border border-solid border-azure rounded-lg space-y-5 md:space-y-0">
          <Context
            :size="size || 'medium'"
            :subheading="subheading"
            :heading="heading"
            :paragraph="paragraph"
          />
          <ButtonGroup
            v-if="buttons && buttons.length"
            size="large"
            :items="buttonItems"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import ButtonGroup from "@/js/components/ButtonGroup/ButtonGroup.vue";

const props = defineProps({
  inset: { type: Boolean, default: false },
  size: { type: String, default: "medium" },
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
