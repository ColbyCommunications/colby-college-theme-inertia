<template>
  <div
    class="colby-image-text-block mx-auto my-0 box-border w-full max-w-screen-2xl overflow-hidden px-5"
  >
    <div v-if="wrapping_text === 'wrap'" class="block w-full overflow-hidden">
      <div
        class="mx-auto !mb-4 max-w-full"
        :class="[
          align_image === 'left'
            ? 'md:float-left md:!mr-6'
            : 'md:float-right md:!ml-6',
          resolvedCaption ? '!mb-4' : '',
          scaleClass,
        ]"
      >
        <img
          v-if="normalizedImage.src"
          :src="normalizedImage.src"
          :alt="normalizedImage.alt"
          :width="normalizedImage.width || null"
          :height="normalizedImage.height || null"
          class="block h-auto w-full max-w-full"
        />

        <figcaption
          v-if="resolvedCaption"
          class="w-full max-w-full pt-2 text-center text-12 break-words text-indigo"
        >
          {{ resolvedCaption }}
        </figcaption>
      </div>

      <TextGroup
        class="mt-2 max-w-full min-w-0 break-words"
        :paragraph="paragraph_text"
        :disableAnimations="true"
      />
    </div>

    <div
      v-else
      class="flex w-full max-w-full flex-col gap-4 md:flex-nowrap md:gap-6"
      :class="[
        align_image === 'right' ? 'md:flex-row-reverse' : 'md:flex-row',
        align_text === 'center' ? 'md:items-center' : 'md:items-start',
      ]"
    >
      <div
        class="flex max-w-full min-w-0 flex-col items-center"
        :class="[
          scaleClass,
          align_text === 'center' ? 'justify-center' : 'justify-start',
        ]"
      >
        <img
          v-if="normalizedImage.src"
          :src="normalizedImage.src"
          :alt="normalizedImage.alt"
          :width="normalizedImage.width || null"
          :height="normalizedImage.height || null"
          class="block h-auto max-w-full"
        />

        <figcaption
          v-if="resolvedCaption"
          class="w-full max-w-full pt-2 text-center text-12 break-words text-indigo"
        >
          {{ resolvedCaption }}
        </figcaption>
      </div>

      <div
        class="max-w-full min-w-0 flex-1 break-words"
        :class="
          align_text === 'center'
            ? 'flex flex-col justify-center'
            : 'flex flex-col justify-start'
        "
      >
        <TextGroup
          class="w-full max-w-full min-w-0 break-words"
          :paragraph="paragraph_text"
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
  image_scale: { type: [String, Number], default: "100" },
  wrapping_text: { type: String, default: "wrap" },
  align_image: { type: String, default: "left" },
  align_text: { type: String, default: "top" },
  paragraph_text: { type: String, default: "" },
  caption: { type: [String, Boolean, Number], default: "" },
  media_caption: { type: [String, Boolean, Number], default: false },

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

const isTruthyToggle = (val) =>
  val === true || val === 1 || val === "1" || val === "true";

const isToggleLiteral = (val) =>
  typeof val === "boolean" ||
  typeof val === "number" ||
  val === "true" ||
  val === "false" ||
  val === "1" ||
  val === "0";

const getCleanCaptionString = (...candidates) => {
  for (const val of candidates) {
    if (typeof val === "string" && val.trim() && !isToggleLiteral(val.trim())) {
      return val;
    }
  }
  return "";
};

const fallbackImage = computed(() => {
  if (props.image) {
    return {
      src: props.image.url || props.image.src || "",
      alt: props.image.alt || "",
      caption: isTruthyToggle(props.media_caption)
        ? getCleanCaptionString(props.image.caption)
        : "",
      width: props.image.width || 0,
      height: props.image.height || 0,
      caption_width: props.image.width || 0,
    };
  }

  return {
    src: props.image_path || "",
    alt: "",
    caption: getCleanCaptionString(props.caption),
    width: 0,
    height: 0,
    caption_width: 0,
  };
});

const normalizedImage = computed(() => {
  return props.image_data?.src ? props.image_data : fallbackImage.value;
});

const resolvedCaption = computed(() => {
  // If using an uploaded ACF image, only show caption when media_caption checkbox is enabled
  if (props.image && !isTruthyToggle(props.media_caption)) {
    return "";
  }

  return getCleanCaptionString(
    normalizedImage.value.caption,
    props.image?.caption,
    props.caption,
  );
});

const scaleClass = computed(() => {
  switch (String(props.image_scale)) {
    case "75":
      return "w-full md:w-3/4 md:max-w-[75%]";
    case "50":
      return "w-full md:w-1/2 md:max-w-[50%]";
    case "25":
      return "w-full md:w-1/4 md:max-w-[25%]";
    default:
      return "w-full md:w-1/2 md:max-w-[50%]";
  }
});
</script>
