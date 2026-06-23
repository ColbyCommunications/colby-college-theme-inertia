<!-- resources/js/components/Button.vue -->
<template>
  <a
    :href="url"
    :target="target || undefined"
    class="btn group inline-flex min-h-[44px] min-w-[44px] flex-row items-center rounded border-[0.75px] border-solid font-body leading-130 font-normal !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out focus:outline focus:outline-2 focus:outline-gold"
    :class="[
      space,
      textSize,
      paddingY,
      paddingX,
      borderColor,
      hoverBorderColor,
      textColor,
      hoverTextColor,
      hoverBackgroundColor,
      !transparentBg ? [backgroundColor, focusBackgroundColor] : null,
    ]"
  >
    <svg
      v-if="arrow && !reverse"
      class="btn__arrow"
      :class="[arrowWidth, arrowHeight, arrowColor]"
      viewBox="0 0 12 12"
      aria-hidden="true"
    >
      <path
        d="M10 1H.7V0H12v11.7h-1V1.4L.7 12l-.7-.7L10 1z"
        style="fill-rule: evenodd; clip-rule: evenodd"
      />
    </svg>

    <span class="btn__text">
      <span v-html="title"></span>
      <div
        class="btn__border block h-px w-0 transition-all duration-200 ease-in-out group-hover/btn:w-full"
        :class="borderBackground"
      ></div>
    </span>

    <svg
      v-if="arrow && reverse"
      class="btn__arrow"
      :class="[arrowWidth, arrowHeight, arrowColor]"
      viewBox="0 0 12 12"
      aria-hidden="true"
    >
      <path
        d="M10 1H.7V0H12v11.7h-1V1.4L.7 12l-.7-.7L10 1z"
        style="fill-rule: evenodd; clip-rule: evenodd"
      />
    </svg>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: { type: String, default: "medium" }, // xlarge|large|medium|small
  type: { type: String, default: "light" }, // dark|light (twig else = light)
  arrow: { type: Boolean, default: false },
  playIcon: { type: Boolean, default: false },
  transparentBg: { type: Boolean, default: false },
  url: { type: String, required: true },
  title: { type: String, required: true },
  reverse: { type: Boolean, default: false },
  target: { type: String, default: null },
});

/* size mapping */
const sizeMap = {
  xlarge: {
    text: "text-18",
    py: "py-1.5",
    px: "px-4",
    w: "w-3",
    h: "h-3",
    space: "space-x-2",
  },
  large: {
    text: "text-14",
    py: "py-1.5",
    px: "px-4",
    w: "w-3",
    h: "h-3",
    space: "space-x-2",
  },
  medium: {
    text: "text-12",
    py: "py-1",
    px: "px-3.5",
    w: "w-2",
    h: "h-2",
    space: "space-x-1.5",
  },
  small: {
    text: "text-10",
    py: "py-1",
    px: "px-3",
    w: "w-1.5",
    h: "h-1.5",
    space: "space-x-1.5",
  },
};
const S = computed(() => sizeMap[props.size] || sizeMap.medium);
const textSize = computed(() => S.value.text);
const paddingY = computed(() => S.value.py);
const paddingX = computed(() => S.value.px);
const arrowWidth = computed(() => S.value.w);
const arrowHeight = computed(() => S.value.h);
const space = computed(() => S.value.space);

/* type mapping */
const isDark = computed(() => props.type === "dark");
const textColor = computed(() =>
  props.transparentBg
    ? "text-white"
    : isDark.value
      ? "text-white"
      : "text-indigo",
);
const backgroundColor = computed(() =>
  isDark.value ? "bg-indigo" : "bg-transparent",
);
const borderColor = computed(() =>
  props.transparentBg
    ? "border-white"
    : isDark.value
      ? "border-[#5a6e94]"
      : "border-indigo",
);
const hoverBorderColor = computed(() =>
  props.transparentBg
    ? ""
    : isDark.value
      ? "hover:border-indigo"
      : "hover:border-snow",
);
const hoverTextColor = computed(() =>
  props.transparentBg
    ? "hover:text-indigo"
    : isDark.value
      ? "hover:text-indigo"
      : "hover:text-indigo",
);
const hoverBackgroundColor = computed(() =>
  props.transparentBg
    ? "hover:bg-white"
    : isDark.value
      ? "hover:bg-white"
      : "hover:bg-cloud",
);
const focusBackgroundColor = computed(() =>
  isDark.value ? "" : "focus:bg-cloud",
);
const borderBackground = computed(() => "bg-indigo");
const arrowColor = computed(() =>
  props.transparentBg
    ? "fill-gold"
    : isDark.value
      ? "fill-gold"
      : "fill-indigo",
);
</script>
