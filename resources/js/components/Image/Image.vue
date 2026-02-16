<template>
  <div
    class="colby-image-block"
    :class="{ 'flex justify-center': alignCenter }"
  >
    <figure class="inline-block" :style="figureStyle">
      <img
        v-if="image"
        :src="image.url"
        :alt="image.alt"
        class="w-full"
      />
      <img
        v-else-if="imagePath"
        :src="imagePath"
        class="w-full"
      />
      <figcaption
        v-if="caption"
        class="text-center text-indigo text-12 pt-2"
      >
        {{ caption }}
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  image: { type: Object, default: null },
  imagePath: { type: String, default: "" },
  imageScale: { type: String, default: "100" },
  caption: { type: String, default: "" },
  alignCenter: { type: Boolean, default: false },
});

const figureStyle = computed(() => {
  const scale = parseInt(props.imageScale) || 100;
  if (scale < 100) {
    return { width: `${scale}%` };
  }
  return {};
});
</script>
