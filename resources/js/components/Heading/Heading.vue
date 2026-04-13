<template>
    <div v-html="heading" />
</template>

<script setup>
const props = defineProps({
  heading: { type: String, default: "" },
});
</script>