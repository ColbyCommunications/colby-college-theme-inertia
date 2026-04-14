<template>
    <div class="group md:[&>div>section]:mt-[15px]" >
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

  console.log(props);
  </script>