<template>
  <div class="colby-image-text-block overflow-auto mx-auto">
    <!-- Wrap mode -->
    <div v-if="wrapping_text === 'wrap'" class="flex flex-col md:block">
      <div
        class="self-center !mb-4"
        :class="[
          align_image === 'left'
            ? 'md:!mr-4 float-left'
            : 'md:!ml-4 float-right',
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
          class="text-center text-indigo text-12 pt-2"
          :style="captionStyle"
        >
          {{ resolvedCaption }}
        </figcaption>
      </div>

      <div v-html="paragraph_text" class="font-body font-normal text-16 leading-[1.75] text-left text-indigo-800 mt-2 [&>p]:mb-2" ></div>
    </div>

    <!-- Side-by-side mode -->
    <div
      v-else
      class="flex flex-col md:flex-wrap"
      :class="align_image === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'"
    >
      <div
        class="mb-4 flex flex-col items-center shrink-0"
        :class="[
          align_image === 'left' ? 'md:mr-4' : 'md:ml-4',
          scaleClass,
        ]"
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
          class="text-center text-indigo text-12 pt-2"
        >
          {{ resolvedCaption }}
        </figcaption>
      </div>

      <div
        class="font-body font-normal text-16 leading-[1.75] text-left text-indigo-800 mt-2 md:mt-0 [&>p]:mb-4"
        :class="align_text === 'center' ? 'flex flex-col items-center' : ''"
        :style="textStyle"
        v-html="paragraph_text"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

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
      caption: props.media_caption || props.caption || props.image.caption || "",
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
    normalizedImage.value.caption ||
    props.media_caption ||
    props.caption ||
    ""
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