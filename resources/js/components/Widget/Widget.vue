<template>
  <div class="widget space-y-3 bg-cloud p-5">
    <h2
      v-if="heading"
      class="font-extended text-14 leading-130 font-bold tracking-8 text-azure uppercase md:text-12"
    >
      {{ heading }}
    </h2>
    <div
      class="list-spacing widget__context space-y-2 [&>p]:font-body [&>p]:text-10 [&>p]:leading-[1.5] [&>p]:font-medium [&>p]:text-coal [&>p>a]:no-underline hover:[&>p>a]:text-indigo hover:[&>p>a]:underline [&>ul>li]:ml-3 [&>ul>li]:list-disc [&>ul>li]:font-body [&>ul>li]:text-10 [&>ul>li]:leading-140 [&>ul>li]:font-medium [&>ul>li]:text-coal [&>ul>li>a]:no-underline [&>ul>li>a:hover]:text-indigo [&>ul>li>a:hover]:underline"
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
