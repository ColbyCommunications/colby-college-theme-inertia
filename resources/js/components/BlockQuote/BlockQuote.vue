<template>
  <div
    class="block-quote -tracking-3 font-extended relative leading-[1.5] font-normal text-indigo"
    :class="[alignmentClasses.wrapper, sizeClasses.wrapper]"
  >
    <svg
      class="block-quote__icon fill-indigo"
      :class="[alignmentClasses.icon, sizeClasses.icon]"
      viewBox="0 0 38.9 34"
      xml:space="preserve"
      aria-hidden="true"
    >
      <path
        d="M16.9 0v8.3c-.1 0-.2.1-.3.1-1.1.4-2.1.8-3 1.5-1.6 1.1-2.7 2.6-3.4 4.3-.3.8-.6 1.6-.8 2.5v.2h7.4V34H0V20.2c0-.9.1-1.8.1-2.7.1-1.3.3-2.6.7-3.8.6-2.1 1.4-4 2.6-5.7C4.7 6.2 6.3 4.8 8 3.6c1.6-1.1 3.3-1.9 5.2-2.6 1.1-.4 2.3-.7 3.4-.9.1-.1.2-.1.3-.1zM38.9 0v8.3c-.1 0-.2.1-.3.1-1.1.4-2.1.8-3 1.5-1.6 1.1-2.7 2.6-3.4 4.3-.3.8-.6 1.6-.8 2.5v.2h7.4V34H22V20.2c0-.9.1-1.8.1-2.7.1-1.3.3-2.6.7-3.8.6-2.1 1.4-4 2.6-5.7 1.2-1.7 2.8-3.2 4.5-4.4 1.6-1.1 3.3-1.9 5.2-2.6 1.1-.4 2.3-.7 3.4-.9.2-.1.3-.1.4-.1z"
      />
    </svg>

    <div class="block-quote__text">
      {{ quote }}
    </div>

    <div
      v-if="author"
      class="block-quote__author mt-4 font-body tracking-normal"
      :class="sizeClasses.author"
    >
      &mdash; {{ author }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  alignment: {
    type: String,
    default: "left",
  },
  size: {
    type: String,
    default: "large",
  },
  quote: {
    type: String,
    required: true,
    default: "",
  },
  author: {
    type: String,
    default: "",
  },
});

const isCenter = computed(() => props.alignment === "center");
const isSmall = computed(() => props.size === "small");

const alignmentClasses = computed(() => {
  if (isCenter.value) {
    return {
      wrapper: "text-center",
      icon: "mx-auto mb-5 block",
    };
  }

  return {
    wrapper: isSmall.value ? "pl-12 text-left" : "pl-16 text-left",
    icon: "absolute top-0 left-0",
  };
});

const sizeClasses = computed(() => {
  if (isSmall.value) {
    return {
      wrapper: "text-20 md:text-18",
      icon: "w-6",
      author: "text-16",
    };
  }

  // Matches original large styling: text-28 md:text-24 and w-8
  return {
    wrapper: "text-28 md:text-24",
    icon: "w-8",
    author: "text-20",
  };
});
</script>
