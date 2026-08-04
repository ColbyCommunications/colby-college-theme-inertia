<template>
  <div class="gravity-form-container mx-auto mt-10">
    <iframe
      v-if="formId"
      ref="gfIframe"
      :src="iframeSrc"
      :title="iframeTitle"
      class="w-full"
      :style="{
        height: `${iframeHeight}px`,
        border: 'none',
        overflow: 'hidden',
      }"
      scrolling="no"
    ></iframe>

    <div v-else class="p-5 text-red-500">
      Error: No Gravity Form ID provided.
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  blockAttrs: {
    type: Object,
    default: () => ({}),
  },
});

const gfIframe = ref(null);
const iframeHeight = ref(800);

const formId = computed(() => {
  const value = Number.parseInt(props.blockAttrs?.formId, 10);
  return Number.isInteger(value) && value > 0 ? value : null;
});

const iframeSrc = computed(() =>
  formId.value ? `/?gf_iframe_id=${encodeURIComponent(formId.value)}` : "",
);

const iframeTitle = computed(
  () => props.blockAttrs?.title || "Online form",
);

const handleMessage = (event) => {
  if (event.origin !== window.location.origin) return;
  if (event.source !== gfIframe.value?.contentWindow) return;
  if (event.data?.type !== "gf_iframe_resize") return;

  const nextHeight = Number(event.data.height);

  if (Number.isFinite(nextHeight) && nextHeight > 0) {
    iframeHeight.value = Math.ceil(nextHeight) + 20;
  }
};

onMounted(() => {
  window.addEventListener("message", handleMessage);
});

onUnmounted(() => {
  window.removeEventListener("message", handleMessage);
});
</script>
