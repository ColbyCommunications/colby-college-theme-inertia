<template>
    <div
      class="html-block"
      :class="WysiwygClasses"
      v-html="html"
    />
  </template>
  
  <script setup>
  import { WysiwygClasses } from '../../utils/wysiwygClasses';
  defineProps({
    html: {
      type: String,
      default: "",
    },
  });
  </script>
