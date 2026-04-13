<template>
  <div class="colby-paragraph-block"><TextGroup :paragraph="paragraph_text" /></div>
</template>

<script setup>
import TextGroup from '../TextGroup/TextGroup.vue';
defineProps({
  paragraph_text: { type: String, default: "" },
});
</script>
