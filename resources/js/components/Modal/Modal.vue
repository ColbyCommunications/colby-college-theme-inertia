<template>
  <vue-final-modal
    v-model="isOpen"
    :class="classes"
    :classes="{
      '!px-0': full,
      'modal__container flex justify-center items-center px-5': true,
    }"
    :content-class="{
      'w-full max-w-none h-full max-h-none': full,
      'max-w-xl max-h-96 rounded': !full,
      'modal__content relative w-full overflow-hidden bg-white overflow-y-auto': true,
    }"
  >
    <!-- Close button -->
    <button
      class="absolute cursor-pointer py-2.5"
      :class="{ 'top-7 right-5': full, 'top-3 right-3': !full }"
      @click="isOpen = false"
    >
      <span class="relative block h-0.5 w-6 bg-transparent">
        <span
          class="absolute left-0 h-full w-full origin-center rotate-45 bg-indigo transition-all duration-200 ease-in-out"
        />
        <span
          class="absolute left-0 h-full w-full origin-center -rotate-45 bg-indigo transition-all duration-200 ease-in-out"
        />
      </span>
    </button>

    <!-- Slot: modal content -->
    <slot name="content" />
  </vue-final-modal>

  <!-- <Menu search button -->
  <button
    class="group active text-left"
    :class="{
      '[&>span]:text-indigo-1000 [&>span>svg]:fill-indigo-1000': isOpen,
    }"
    @click="isOpen = true"
  >
    <slot name="button" />
  </button>
</template>

<script setup>
import { ref, watch } from "vue";
import { VueFinalModal } from "vue-final-modal";

const props = defineProps({
  full: { type: Boolean, default: false },
  classes: { type: String, default: "" },
  modelValue: { type: Boolean, required: true },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val;
  },
);

watch(isOpen, (val) => {
  emit("update:modelValue", val);
});
</script>
