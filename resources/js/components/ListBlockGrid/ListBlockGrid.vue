<template>
  <div
    class="list-block-grid grid grid-cols-12 gap-10 max-w-screen-2xl w-full my-0 mx-auto"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="list-block-grid__item col-span-12"
      :class="colClass"
    >
      <ListBlock
        :type="item.type"
        :subheading="item.subheading"
        :heading="item.heading"
        :paragraph="item.paragraph"
        :buttons="item.buttons"
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
      return "md:col-span-3";
    case 3:
      return "md:col-span-4";
    default:
      return "md:col-span-6";
  }
});
</script>
