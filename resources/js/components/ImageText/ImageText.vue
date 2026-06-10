<template>
  <div class="colby-image-text-block mx-auto overflow-auto">
    <div v-if="wrapping_text === 'wrap'" class="flex flex-col md:block">
      <div
        class="!mb-4 self-center"
        :class="[
          align_image === 'left'
            ? 'float-left md:!mr-4'
            : 'float-right md:!ml-4',
          resolvedCaption ? '!mb-4' : '',
        ]"
      >
        <img
          v-if="normalizedImage.src"
          :src="normalizedImage.src"
          :alt="normalizedImage.alt"
          :width="normalizedImage.width || null"
          :height="normalizedImage.height || null"
          class="max-w-full"
        />

        <figcaption
          v-if="resolvedCaption"
          class="pt-2 text-center text-12 text-indigo"
          :style="captionStyle"
        >
          {{ resolvedCaption }}
        </figcaption>
      </div>

      <TextGroup
        class="mt-2"
        :paragraph="paragraph_text"
        :disableAnimations="true"
      />
    </div>

    <div
      v-else
      class="flex flex-col md:flex-wrap"
      :class="align_image === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'"
    >
      <div
        class="mb-4 flex shrink-0 flex-col items-center"
        :class="[align_image === 'left' ? 'md:mr-4' : 'md:ml-4', scaleClass]"
        :style="imageWrapperStyle"
      >
        <img
          v-if="normalizedImage.src"
          :src="normalizedImage.src"
          :alt="normalizedImage.alt"
          :width="normalizedImage.width || null"
          :height="normalizedImage.height || null"
          class="max-w-full"
        />

        <figcaption
          v-if="resolvedCaption"
          class="pt-2 text-center text-12 text-indigo"
        >
          {{ resolvedCaption }}
        </figcaption>
      </div>

      <div
        class="mt-2 md:mt-0"
        :class="align_text === 'center' ? 'flex flex-col items-center' : ''"
        :style="textStyle"
      >
        <TextGroup
          :paragraph="paragraph_text"
          :align="align_text"
          :disableAnimations="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import TextGroup from "../TextGroup/TextGroup.vue";

const props = defineProps({
  image: { type: Object, default: null },
  image_path: { type: String, default: "" },
  image_scale: { type: String, default: "100" },
  wrapping_text: { type: String, default: "no-wrap" },
  align_image: { type: String, default: "left" },
  align_text: { type: String, default: "left" },
  paragraph_text: { type: String, default: "" },
  caption: { type: String, default: "" },
  media_caption: { type: String, default: "" },

  image_data: {
    type: Object,
    default: () => ({
      src: "",
      alt: "",
      caption: "",
      width: 0,
      height: 0,
      caption_width: 0,
      image_flex_basis: "auto",
      text_flex_basis: "100%",
    }),
  },

  hydrated_from_server: { type: Boolean, default: false },
});

const fallbackImage = computed(() => {
  if (props.image) {
    return {
      src: props.image.url || props.image.src || "",
      alt: props.image.alt || "",
      caption:
        props.media_caption || props.caption || props.image.caption || "",
      width: props.image.width || 0,
      height: props.image.height || 0,
      caption_width: props.image.width || 0,
      image_flex_basis: props.image.width ? `${props.image.width}px` : "auto",
      text_flex_basis: "100%",
    };
  }

  return {
    src: props.image_path || "",
    alt: "",
    caption: props.caption || "",
    width: 0,
    height: 0,
    caption_width: 0,
    image_flex_basis: "auto",
    text_flex_basis: "100%",
  };
});

const normalizedImage = computed(() => {
  return props.image_data?.src ? props.image_data : fallbackImage.value;
});

const resolvedCaption = computed(() => {
  return (
    normalizedImage.value.caption || props.media_caption || props.caption || ""
  );
});

const captionStyle = computed(() => {
  if (!normalizedImage.value.caption_width) return {};

  return {
    width: `${normalizedImage.value.caption_width}px`,
  };
});

const imageWrapperStyle = computed(() => ({
  flexBasis: normalizedImage.value.image_flex_basis || "auto",
}));

const textStyle = computed(() => ({
  flexBasis: normalizedImage.value.text_flex_basis || "100%",
}));

const scaleClass = computed(() => {
  switch (props.image_scale) {
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
