<template>
  <component v-if="IconComponent" :is="IconComponent" v-bind="$attrs" />
</template>

<script setup>
import { shallowRef, watch } from "vue";
import { icons } from "@/images/svg/icons/index.js";

// Optional: specific name for devtools
defineOptions({
  inheritAttrs: false, // Prevents Vue from auto-applying attributes to the root, giving you full control via v-bind="$attrs"
});

const props = defineProps({
  name: String,
});

const IconComponent = shallowRef(null);

watch(
  () => props.name,
  async (newName) => {
    if (!newName) {
      IconComponent.value = null;
      return;
    }

    // Normalize the name (e.g., "Chevron Right" -> "chevron-right")
    const normalizedName = newName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    // Find the matching key in the icons object
    const key = Object.keys(icons).find((k) => {
      const fileName = k.split("/").pop().replace(".svg", "");
      return fileName === normalizedName;
    });

    if (key) {
      const module = await icons[key]();
      IconComponent.value = module.default;
    } else {
      IconComponent.value = null;
    }
  },
  { immediate: true },
);
</script>
