<template>
  <div class="flex items-center space-x-4 md:hidden">
    <label class="font-body text-20 font-normal text-indigo-800">Menu</label>

    <button
      class="flex h-[52px] w-[56px] cursor-pointer items-center justify-center rounded-sm border border-solid border-indigo-300 bg-indigo-100 text-[0px]"
      @click="toggleActive"
      aria-label="Toggle menu"
      :aria-expanded="active ? 'true' : 'false'"
      :aria-controls="'header-menus'"
    >
      <span
        class="relative block h-0.5 w-6 bg-indigo transition-all duration-200 ease-in-out"
        :class="{ 'bg-transparent': active }"
      >
        <span
          class="absolute top-[-6px] left-0 h-full w-full origin-center bg-indigo transition-all duration-200 ease-in-out"
          :class="{ '!top-0 rotate-45': active }"
        ></span>
        <span
          class="absolute top-[6px] left-0 h-full w-full origin-center bg-indigo transition-all duration-200 ease-in-out"
          :class="{ '!top-0 rotate-[-45deg]': active }"
        ></span>
      </span>
      Menu Button
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  menus: {
    type: Object,
    default: () => ({ main: [], utility: [] }),
  },
});
const emit = defineEmits(["update:active"]);

const active = ref(false);
const toggleActive = () => {
  active.value = !active.value;
  emit("update:active", active.value);
};
</script>
