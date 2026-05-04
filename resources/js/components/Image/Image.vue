<template>
  <div
    class="colby-image-block"
    :class="{ 'flex justify-center': alignCenter }"
  >
    <figure class="inline-block" :style="figureStyle">
      <Picture
        v-if="image"
        class="w-full"     
        :src="image.url"
        :alt="image.alt"
      />
      <img
        v-else-if="imagePath"
        :src="imagePath"
        class="w-full"
      />
      <figcaption
        v-if="media_caption || caption"
        class="text-center text-indigo text-12 pt-2"
      >
        {{ media_caption ? image.caption : caption }}
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  image: { type: Object, default: null },
  image_path: { type: String, default: "" },
  image_scale: { type: [String, Number], default: "100" },
  caption: { type: String, default: "" },
  align_center: { type: [Boolean, Array, String], default: false },
  media_caption: { type: Boolean, default: false },
});

const alignCenter = computed(() => {
  const val = props.align_center;
  
  if (typeof val === 'boolean') {
    return val;
  }
  
  if (Array.isArray(val) && val.length > 0) {
    // Check if the first item in the array is 'yes' (case-insensitive just in case)
    return String(val[0]).toLowerCase() === 'yes';
  }
  
  if (typeof val === 'string') {
    return val.toLowerCase() === 'yes';
  }
  
  return false;
});

const figureStyle = computed(() => {
  const scale = parseInt(props.image_scale) || 100;
  if (scale < 100) {
    return { width: `${scale}%` };
  }
  return {};
});
</script>
