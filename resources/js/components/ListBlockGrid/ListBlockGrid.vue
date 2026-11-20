<template>
  <div
    class="list-block-grid mx-auto my-0 grid w-full max-w-screen-2xl grid-cols-12 gap-6 lg:gap-10"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="list-block-grid__item col-span-12 min-w-0"
      :class="colClass"
    >
      <ListBlock
        :type="item.type"
        :subheading="item.subheading"
        :heading="item.heading"
        :paragraph="item.paragraph"
        :buttons="item.buttons ? item.buttons : []"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ListBlock from "@/js/components/ListBlock/ListBlock.vue";

const props = defineProps({
  items: { type: Array, default: () => [] },
  columns: { type: [Number, String], default: 2 },
});

const colClass = computed(() => {
  switch (Number(props.columns)) {
    case 4:
      return "sm:col-span-6 lg:col-span-3";
    case 3:
      return "sm:col-span-6 lg:col-span-4";
    default:
      return "md:col-span-6";
  }
});
</script>
