<template>
  <div
    class="list-block h-full py-6 px-8 border border-solid border-indigo rounded-md"
    :class="type === 'dark' ? 'bg-cloud' : 'bg-white'"
  >
    <Context
      type="dark"
      size="xsmall"
      :subheading="subheading"
      :heading="heading"
      :paragraph="paragraph"
      :buttons="{ items: buttons }"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";

const props = defineProps({
  type: { type: String, default: "dark" },
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: {
      url: btn.url,
      title: btn.title,
      target: btn.target || "",
    },
  })),
);
</script>
