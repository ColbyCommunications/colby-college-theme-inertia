<template>
  <div class="widget p-5 bg-gray-100 space-y-3">
    <h2
      v-if="heading"
      class="font-extended font-bold text-14 md:text-12 leading-130 text-azure tracking-8 uppercase"
    >
      {{ heading }}
    </h2>
    <div
      class="widget__context [&>p]:font-body [&>p]:font-medium [&>p]:text-10 [&>p]:leading-140 [&>p>a]:no-underline hover:[&>p>a]:underline [&>p]:text-indigo-800 hover:[&>p>a]:text-indigo [&>ul>li]:font-body [&>ul>li]:font-medium [&>ul>li]:text-10 [&>ul>li]:leading-140 [&>ul>li>a]:no-underline hover:[&>ul>li>a]:underline [&>ul>li]:text-indigo-800 hover:[&>ul>li>a]:text-indigo [&>ul>li]:list-disc [&>ul>li]:ml-3 [&>ul>li+li]:mt-2 space-y-2"
      v-html="text"
    ></div>
    <ButtonGroup
      v-if="buttons && buttons.length"
      size="small"
      align="column"
      :items="buttonItems"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import ButtonGroup from "@/js/components/ButtonGroup/ButtonGroup.vue";

const props = defineProps({
  heading: { type: String, default: "" },
  text: { type: String, default: "" },
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
