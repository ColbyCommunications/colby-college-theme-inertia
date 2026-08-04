<template>
  <div class="gravity-form">
    <iframe
      v-if="formId"
      ref="gfIframe"
      :src="iframeSrc"
      :title="iframeTitle"
      class="gravity-form__iframe"
      :style="{
        height: `${iframeHeight}px`,
      }"
    />
  </div>
</template>

<script setup>
import {
  computed,
  nextTick,
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

const gfIframe = ref(null);
const iframeHeight = ref(500);

const formId = computed(() => {
  const value = Number.parseInt(
    props.blockAttrs?.formId,
    10,
  );

  return Number.isInteger(value) && value > 0
    ? value
    : null;
});

const iframeSrc = computed(() =>
  formId.value
    ? `/?gf_iframe_id=${encodeURIComponent(
        formId.value,
      )}`
    : "",
);

const iframeTitle = computed(
  () => props.blockAttrs?.title || "Online form",
);

const updateIframeHeight = (rawHeight) => {
  const nextHeight = Number(rawHeight);

  if (
    !Number.isFinite(nextHeight)
    || nextHeight <= 0
  ) {
    return;
  }

  iframeHeight.value = Math.ceil(nextHeight) + 20;
};

const scrollToPageTop = () => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: reduceMotion ? "auto" : "smooth",
  });
};

const scrollAfterConfirmation = async () => {
  await nextTick();

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      scrollToPageTop();
    });
  });
};

const handleMessage = (event) => {
  if (event.origin !== window.location.origin) {
    return;
  }

  if (
    event.source
    !== gfIframe.value?.contentWindow
  ) {
    return;
  }

  if (event.data?.type === "gf_iframe_resize") {
    updateIframeHeight(event.data.height);
    return;
  }

  if (
    event.data?.type
    === "gf_iframe_confirmation"
  ) {
    updateIframeHeight(event.data.height);
    scrollAfterConfirmation();
  }
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
.gravity-form {
  width: 100%;
  min-width: 0;
}

.gravity-form__iframe {
  display: block;
  width: 100%;
  max-width: none;
  border: 0;
}
</style>