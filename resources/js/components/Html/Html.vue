<template>
  <TextGroup :paragraph="html" />
</template>
  
<script setup>
  import TextGroup from '../TextGroup/TextGroup.vue';
  defineProps({
    html: {
      type: String,
      default: "",
    },
  });
</script>
