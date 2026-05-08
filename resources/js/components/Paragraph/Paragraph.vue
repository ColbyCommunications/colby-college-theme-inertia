<template>
  <div class="colby-paragraph-block space-y-5">
    <TextGroup
      :paragraph="paragraph_text"
      @animation-complete="showButtonGroup"
    />
    <div
      v-if="buttonItems.length"
      class="transition-all duration-300 ease-in-out"
      :class="
        buttonGroupVisible
          ? 'translate-x-0 opacity-100'
          : 'pointer-events-none translate-x-2 opacity-0'
      "
      :aria-hidden="buttonGroupVisible ? null : 'true'"
      :inert="!buttonGroupVisible"
    >
      <ButtonGroup :items="buttonItems" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ButtonGroup from "../ButtonGroup/ButtonGroup.vue";
import TextGroup from "../TextGroup/TextGroup.vue";

const props = defineProps({
  paragraph_text: { type: String, default: "" },
  buttons: { type: [Array, Boolean], default: () => [] },
});

const buttonItems = computed(() => {
  const buttons = Array.isArray(props.buttons) ? props.buttons : [];

  return buttons.filter((item) => item?.button?.url && item?.button?.title);
});

const buttonGroupVisible = ref(false);

function showButtonGroup() {
  buttonGroupVisible.value = true;
}
</script>
