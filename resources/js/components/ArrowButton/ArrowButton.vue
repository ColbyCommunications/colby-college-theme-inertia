<template>
  <button
    class="arrow-btn inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded border-[0.75px] border-solid border-indigo bg-white transition-all duration-200 ease-in-out hover:bg-cloud focus:bg-cloud hover:border-snow"
    @click="handleClick"
  >
    <span class="sr-only">
      {{ reverse ? "Next" : "Previous" }}
    </span>
    <svg
      class="arrow-btn__arrow h-5 w-5 fill-indigo"
      :class="{ 'rotate-180': reverse }"
      viewBox="0 0 26.9 26.5"
    >
      <path
        d="M26.9 12.7h-25L14 .7l-.8-.7L0 13.2l13.2 13.3.8-.7L1.9 13.7h25z"
      />
    </svg>
  </button>
</template>

<script setup>
const props = defineProps({
  // size: { type: String, default: 'large' },
  // type: { type: String, default: 'light' },
  reverse: { type: Boolean, default: false },
});

const emit = defineEmits(["prev", "next"]);

function handleClick() {
  if (props.reverse) {
    emit("next");
  } else {
    emit("prev");
  }
}
</script>
