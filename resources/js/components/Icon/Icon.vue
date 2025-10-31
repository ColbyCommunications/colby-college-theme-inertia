<template>
  <component
    v-if="Icon"
    :is="Icon"
    :width="size"
    :height="size"
    :fill="fill"
    :class="class"
  />
  <span v-else class="text-xs text-red-500">⚠ Missing icon: {{ name }}</span>
</template>

<script setup>
import { icons } from "@/images/svg/icons/index.js";

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [String, Number], default: 24 },
  fill: { type: String, default: "currentColor" },
  class: String,
});

// Build the full key dynamically
const key = `/src/images/svg/icons/${props.name}.svg`;
const Icon = icons[key]?.default;
</script>
