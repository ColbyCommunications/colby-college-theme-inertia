<template>
  <component v-if="IconComponent" :is="IconComponent" />
</template>

<script setup>
import { shallowRef, watch } from "vue";
import { icons } from "@/images/svg/icons/index.js";

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

    const normalizedName = newName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

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
