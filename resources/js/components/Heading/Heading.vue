<template>
    <div v-html="heading" :class="WysiwygClasses" />
</template>

<script setup>
import { WysiwygClasses } from '../../utils/wysiwygClasses';

const props = defineProps({
  heading: { type: String, default: "" },
});
</script>