<!-- resources/js/components/ArrowButton.vue -->
<template>
  <div
    :class="[
      'button-group',
      'flex',
      'flex-wrap',
      'gap-4',
      {
        'justify-center': align === 'center',
        'flex-col': align === 'column',
        'items-start': align === 'column',
      },
    ]"
  >
    <Button
      v-for="(item, idx) in items"
      :key="idx"
      :size="size"
      :type="type"
      :arrow="arrow"
      :transparent-bg="transparentBg"
      :url="item.button.url"
      :title="item.button.title"
      :reverse="reverse"
      :target="item.button.target"
    />
  </div>
</template>

<script setup>
import Button from "@/js/components/Button/Button.vue";
const props = defineProps({
  align: { type: String, default: "center" },
  items: { type: Array, default: () => [] },
  size: { type: String, default: "medium" },
  type: { type: String, default: "light" },
  arrow: { type: Boolean, default: false },
  transparentBg: { type: Boolean, default: false },
  reverse: { type: Boolean, default: false },
});
</script>
