<template>
    <div class="group [&>div>section]:mt-[20px]" >
      <ComponentRouter :components="blocks" />
    </div>
  </template>
  
  <script setup>
  import ComponentRouter from "../ComponentRouter/ComponentRouter.vue";
  
  const props = defineProps({
    blocks: {
      type: Array,
      default: () => [],
    },
  });

  </script>