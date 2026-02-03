<template>
  <div class="embed">
    <div class="embed__main">
      <div v-html="embed"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  // Data Objects
  embed: {
    type: String,
    default: "",
  },
});
</script>
