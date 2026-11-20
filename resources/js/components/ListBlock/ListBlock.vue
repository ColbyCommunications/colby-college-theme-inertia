<template>
  <div
    class="list-block h-full w-full min-w-0 overflow-hidden rounded-md border border-solid border-indigo px-5 py-6 break-words md:px-8"
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
