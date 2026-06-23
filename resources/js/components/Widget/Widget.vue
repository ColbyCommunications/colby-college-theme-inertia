<template>
  <div class="widget space-y-3 bg-cloud p-5">
    <h2
      v-if="heading"
      class="font-extended text-14 leading-130 font-bold tracking-8 text-azure uppercase md:text-12"
    >
      {{ heading }}
    </h2>
    <TextGroup
      v-if="text"
      class="list-spacing widget__context"
      :paragraph="text"
      size="xsmall"
    />
    <ButtonGroup
      v-if="buttons && buttons.length"
      align="column"
      :items="buttonItems"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import ButtonGroup from "@/js/components/ButtonGroup/ButtonGroup.vue";
import TextGroup from "@/js/components/TextGroup/TextGroup.vue";

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
