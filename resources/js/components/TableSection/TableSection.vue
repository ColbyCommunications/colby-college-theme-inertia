<template>
  <div class="table-section py-20 bg-cloud">
    <div class="table-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto">
      <div class="md:col-start-3 md:col-span-8">
        <Table v-bind="table" :manualItems="table.items" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Table from "@/js/components/Table/Table.vue";

const props = defineProps({
  table: { type: Object, default: () => ({}) },
});

</script>
