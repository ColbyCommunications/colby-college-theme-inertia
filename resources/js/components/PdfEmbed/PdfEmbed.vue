<template>
    <div
      v-if="pdf_url"
      class="pdf-embed grid"
      aria-label="PDF Viewer"
    >
      <PDFViewer
        :config="{
          src: pdf_url,
          theme: {
            preference: 'dark',
          },
          disabledCategories: [
            'annotation',
            'document',
            'redaction',
            'panel',
            'page',
          ],
          zoom: {
            defaultZoomLevel: ZoomMode.FitPage,
          },
          spread: {
            defaultSpreadMode: spread,
          },
        }"
        :style="{
          width: '100%',
          height: '700px',
        }"
      />
    </div>
</template>
  
<script setup>
  import { computed } from "vue";
  import {
    PDFViewer,
    ZoomMode,
    SpreadMode,
  } from "@embedpdf/vue-pdf-viewer";
  
  const props = defineProps({
    pdf_url: {
      type: String,
      default: "",
    },
  
    page_spread: {
      type: String,
      default: "single",
    },
  });
  
  const spread = computed(() => {
    return props.page_spread === "two"
      ? SpreadMode.Odd
      : SpreadMode.None;
  });
</script>
  
<style>
  .pdf-embed > div {
    grid-column: span 12 / span 12;
  }
</style>