<template>
  <div
    class="wysiwyg [&>.wp-block-paragraph+.wp-block-heading]:mt-20 [&>.wp-block-paragraph+.colby-image-block]:mt-20 [&>.wp-block-heading+.wp-block-heading]:mt-8"
    v-html="content"
  ></div>
</template>

<script setup>
defineProps({
  content: { type: String, default: "" },
});
</script>
