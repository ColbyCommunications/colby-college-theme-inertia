<template>
  <div class="advanced-accordion mx-auto w-full max-w-screen-2xl">
    <div class="colby-advanced-accordion-block border-b border-gray-300">
      <AdvancedAccordionPanel
        v-for="(panel, index) in blocks"
        :key="panel.attrs?.id || index"
        v-bind="panel.attrs?.data"
        :open="single ? activePanelIndex === index : panel.attrs?.data?.open"
        @toggle="(open) => onPanelToggle(index, open)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AdvancedAccordionPanel from "@/js/components/AdvancedAccordionPanel/AdvancedAccordionPanel.vue";

const props = defineProps({
  blocks: { type: Array, default: () => [] },
  single: { type: Boolean, default: false },
});

const activePanelIndex = ref(null);

const onPanelToggle = (index, open) => {
  if (props.single) {
    activePanelIndex.value = open ? index : null;
  }
};
</script>
