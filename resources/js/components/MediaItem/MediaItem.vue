<template>
  <component
    :is="url ? 'a' : 'div'"
    :href="url || undefined"
    :target="url && new_tab ? '_blank' : undefined"
    :rel="url && new_tab ? 'noopener noreferrer' : undefined"
    class="media-item block w-full"
    :class="url ? 'group cursor-pointer' : ''"
  >
    <div
      v-if="image?.url || image?.src"
      class="relative w-full overflow-hidden bg-gray-100"
      :class="ratioClass"
    >
      <img
        :src="image.url || image.src"
        :alt="image.alt || ''"
        :width="image.width || undefined"
        :height="image.height || undefined"
        loading="lazy"
        class="block w-full transition-transform duration-500 ease-out"
        :class="[
          ratio && ratio !== 'original' ? 'h-full object-cover' : 'h-auto',
          url ? 'group-hover:scale-105' : '',
        ]"
        @load="$emit('load')"
      />
    </div>
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  image: { type: Object, default: () => ({}) },
  url: { type: String, default: "" },
  new_tab: { type: [Boolean, Number], default: false },
  ratio: { type: String, default: "original" },
});

defineEmits(["load"]);

const ratioClass = computed(() => {
  const ratios = {
    original: "",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    landscape: "aspect-[4/3]",
  };
  return ratios[props.ratio] || "";
});
</script>
