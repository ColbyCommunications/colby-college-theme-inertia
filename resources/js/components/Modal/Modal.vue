<template>
  <!-- Modal -->
  <vue-final-modal
    v-model="showModal"
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
    <!-- Close Button -->
    <button
      class="absolute cursor-pointer py-2.5"
      :class="{ 'top-7 right-5': full, 'top-3 right-3': !full }"
      @click="closeModal"
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

    <!-- Slot: Modal Content -->
    <slot name="content" :showModal="showModal" />
  </vue-final-modal>

  <!-- Trigger Button -->
  <button
    class="group active text-left"
    :class="{
      '[&>span]:text-indigo-1000 [&>span>svg]:fill-indigo-1000': showModal,
    }"
    @click="toggleModal"
  >
    <slot name="button" :showModal="showModal" />
  </button>
</template>

<script setup>
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";

// Props
const props = defineProps({
  full: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
    default: "",
  },
});

// Emits
const emit = defineEmits(["open-modal", "close-modal"]);

// State
const showModal = ref(false);

// Methods
const toggleModal = () => {
  showModal.value = !showModal.value;
  emit(showModal.value ? "open-modal" : "close-modal");
};

const closeModal = () => {
  showModal.value = false;
  emit("close-modal");
};
</script>
