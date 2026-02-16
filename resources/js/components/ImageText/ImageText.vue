<template>
  <div class="colby-image-text-block overflow-auto mx-auto">
    <!-- Wrap mode -->
    <div v-if="wrappingText === 'wrap'" class="flex flex-col md:block">
      <div
        class="self-center !mb-4"
        :class="[
          alignImage === 'left' ? 'md:!mr-4 float-left' : 'md:!ml-4 float-right',
          caption || mediaCaption ? '!mb-4' : '',
        ]"
      >
        <img
          v-if="image"
          :src="image.url"
          :alt="image.alt"
          class="max-w-full"
          :style="scaledStyle"
        />
        <img
          v-else-if="imagePath"
          :src="imagePath"
          class="max-w-full"
          :style="scaledStyle"
        />
        <figcaption
          v-if="mediaCaption || caption"
          class="text-center text-indigo text-12 pt-2"
          :style="scaledStyle"
        >
          {{ mediaCaption || caption }}
        </figcaption>
      </div>
      <div v-html="paragraphText"></div>
    </div>

    <!-- Side-by-side mode -->
    <div
      v-else
      class="flex flex-col md:flex-wrap"
      :class="alignImage === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'"
    >
      <div
        class="mb-4 flex flex-col items-center shrink-0"
        :class="[
          alignImage === 'left' ? 'md:mr-4' : 'md:ml-4',
          scaleClass,
        ]"
        :style="{ flexBasis: scaledWidth }"
      >
        <img
          v-if="image"
          :src="image.url"
          :alt="image.alt"
          class="max-w-full"
          :style="scaledStyle"
        />
        <img
          v-else-if="imagePath"
          :src="imagePath"
          class="max-w-full"
          :style="scaledStyle"
        />
        <figcaption
          v-if="mediaCaption || caption"
          class="text-center text-indigo text-12 pt-2"
        >
          {{ mediaCaption || caption }}
        </figcaption>
      </div>
      <div
        :class="alignText === 'center' ? 'flex flex-col items-center' : ''"
        :style="{ flexBasis: textBasis }"
        v-html="paragraphText"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  image: { type: Object, default: null },
  imagePath: { type: String, default: "" },
  imageScale: { type: String, default: "100" },
  wrappingText: { type: String, default: "no-wrap" },
  alignImage: { type: String, default: "left" },
  alignText: { type: String, default: "left" },
  paragraphText: { type: String, default: "" },
  caption: { type: String, default: "" },
  mediaCaption: { type: String, default: "" },
});

const scaleFactor = computed(() => (parseInt(props.imageScale) || 100) / 100);

const scaledStyle = computed(() => {
  if (scaleFactor.value < 1) {
    return { width: `${scaleFactor.value * 100}%` };
  }
  return {};
});

const scaledWidth = computed(() => {
  if (scaleFactor.value < 1) {
    return `${scaleFactor.value * 100}%`;
  }
  return "100%";
});

const textBasis = computed(() => {
  if (scaleFactor.value >= 1) return "100%";
  return `calc(100% - ${scaleFactor.value * 100}% - 1rem)`;
});

const scaleClass = computed(() => {
  switch (props.imageScale) {
    case "75":
      return "md:max-w-75";
    case "50":
      return "md:max-w-50";
    case "25":
      return "md:max-w-25";
    default:
      return "max-w-full";
  }
});
</script>
