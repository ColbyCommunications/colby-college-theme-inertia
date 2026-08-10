<template>
    <div class="tablepress-embed">
      <iframe
        v-if="tableId"
        ref="tableIframe"
        :src="iframeSrc"
        :title="iframeTitle"
        class="tablepress-embed__iframe"
        :style="{
          height: `${iframeHeight}px`,
        }"
      />
    </div>
  </template>
  
  <script setup>
  import {
    computed,
    onMounted,
    onUnmounted,
    ref,
  } from "vue";
  
  const props = defineProps({
    blockAttrs: {
      type: Object,
      default: () => ({}),
    },
  });
  
  const tableIframe = ref(null);
  const iframeHeight = ref(500);
  
  /*
   * TablePress IDs are strings rather than necessarily integers,
   * so don't use parseInt() here.
   */
  const tableId = computed(() => {
    const value = String(
      props.blockAttrs?.id ?? "",
    ).trim();
  
    if (!value) {
      return null;
    }
  
    /*
     * Match the same restrictions as our PHP iframe endpoint.
     */
    if (!/^[A-Za-z0-9_-]+$/.test(value)) {
      return null;
    }
  
    return value;
  });
  
  const iframeSrc = computed(() => {
    if (!tableId.value) {
      return "";
    }
  
    return `/?tablepress_iframe_id=${encodeURIComponent(
      tableId.value,
    )}`;
  });
  
  const iframeTitle = computed(() => {
    return `Data table ${tableId.value ?? ""}`.trim();
  });
  
  const updateIframeHeight = (rawHeight) => {
    const nextHeight = Number(rawHeight);
  
    if (
      !Number.isFinite(nextHeight)
      || nextHeight <= 0
    ) {
      return;
    }
  
    iframeHeight.value =
      Math.ceil(nextHeight) + 20;
  };
  
  const handleMessage = (event) => {
    /*
     * Only accept messages from our own origin.
     */
    if (event.origin !== window.location.origin) {
      return;
    }
  
    /*
     * Only accept messages from this particular iframe.
     */
    if (
      event.source
      !== tableIframe.value?.contentWindow
    ) {
      return;
    }
  
    if (
      event.data?.type
      !== "tablepress_iframe_resize"
    ) {
      return;
    }
  
    updateIframeHeight(
      event.data.height,
    );
  };
  
  onMounted(() => {
    window.addEventListener(
      "message",
      handleMessage,
    );
  });
  
  onUnmounted(() => {
    window.removeEventListener(
      "message",
      handleMessage,
    );
  });
  </script>
  
  <style scoped>
  .tablepress-embed {
    width: 100%;
    min-width: 0;
  }
  
  .tablepress-embed__iframe {
    display: block;
    width: 100%;
    max-width: none;
    border: 0;
  }
  </style>