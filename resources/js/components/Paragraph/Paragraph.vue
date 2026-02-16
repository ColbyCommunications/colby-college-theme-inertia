<template>
  <div class="colby-paragraph-block" v-html="text"></div>
</template>

<script setup>
defineProps({
  text: { type: String, default: "" },
});
</script>
