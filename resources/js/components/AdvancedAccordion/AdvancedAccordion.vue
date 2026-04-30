<template>
  <div class="advanced-accordion mx-auto w-full max-w-screen-2xl">
    <div class="colby-advanced-accordion-block border-b border-gray-300">
      <AdvancedAccordionPanel
        v-for="(panel, index) in blocks"
        :key="panel.attrs?.id"
        v-bind="panel.attrs?.data"
        @toggle="(open) => onPanelToggle(index, open)"
      />
    </div>
  </div>
</template>

<script setup>
import AdvancedAccordionPanel from "@/js/components/AdvancedAccordionPanel/AdvancedAccordionPanel.vue";

const props = defineProps({
  blocks: { type: Array, default: () => [] },
  single: { type: Boolean, default: false },
});

const onPanelToggle = (index, open) => {
  // If single mode, close others (handled by parent if needed)
};
</script>
