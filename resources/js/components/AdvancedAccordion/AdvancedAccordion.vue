<template>
  <div class="advanced-accordion max-w-screen-2xl w-full mx-auto">
    <div class="colby-advanced-accordion-block border-b border-gray-300">
      <AdvancedAccordionPanel
        v-for="(panel, index) in panels"
        :key="index"
        :heading="panel.heading"
        :content="panel.content"
        @toggle="(open) => onPanelToggle(index, open)"
      />
    </div>
  </div>
</template>

<script setup>
import AdvancedAccordionPanel from "@/js/components/AdvancedAccordionPanel/AdvancedAccordionPanel.vue";

defineProps({
  panels: { type: Array, default: () => [] },
  single: { type: Boolean, default: false },
});

const onPanelToggle = (index, open) => {
  // If single mode, close others (handled by parent if needed)
};
</script>
