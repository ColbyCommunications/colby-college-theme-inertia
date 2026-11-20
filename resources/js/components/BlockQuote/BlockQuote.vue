<template>
  <div
    class="block-quote -tracking-3 font-extended px-5 font-regular leading-[1.5] text-indigo"
    :class="[alignmentClasses.wrapper, sizeClasses.wrapper]"
  >
    <div class="block-quote__inner relative" :class="alignmentClasses.inner">
      <div class="block-quote__text">
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
        <span>{{ quote }}</span>
      </div>

      <div
        v-if="author"
        class="block-quote__author mt-4 font-regular tracking-normal"
        :class="sizeClasses.author"
      >
        &mdash; {{ author }}
      </div>
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
      inner: "",
      icon: isSmall.value
        ? "inline-block align-top mr-3 -mt-1"
        : "inline-block align-top mr-4 -mt-1",
    };
  }

  return {
    wrapper: "text-left",
    inner: isSmall.value ? "pl-12" : "pl-16",
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

  return {
    wrapper: "text-28 md:text-36",
    icon: "w-8",
    author: "text-20 md:text-28",
  };
});
</script>
