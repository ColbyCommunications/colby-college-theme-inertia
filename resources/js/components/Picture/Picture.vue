<template>
  <img
    :class="class"
    :src="imageSrc"
    :alt="alt"
    :loading="loading"
    :sizes="sizes"
    media="(min-width:768px)"
    :fetchpriority="resolvedFetchPriority"
    :srcset="imageSrcset"
    :width="width"
    :height="height"
  />
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  // The class to apply to the <img> element
  class: {
    type: String,
    default: "",
  },
  src: {
    type: String,
    default: "",
  },
  widthDesktop: {
    type: String,
    default: "",
  },
  widthMobile: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 2400,
  },
  height: {
    type: Number,
    default: 1320,
  },
  loading: {
    type: String,
    default: "lazy",
  },
  quality: {
    type: String,
    default: "60",
  },
  sizes: {
    type: String,
    default: "(max-width: 767px) 100vw, 50vw",
  },
  fetchPriority: {
    type: String,
    default: "",
  },
  progressive: {
    type: Boolean,
    default: false,
  },
  fromApi: {
    type: Boolean,
    default: false,
  },
});

const isEnhanced = ref(false);

function normalizeSrc(src) {
  if (!src) {
    return "";
  }

  const rawSrc = String(src);
  const colby = window.colby || {};

  if (colby.isLocal && colby.PRIMARY_DOMAIN && !props.fromApi) {
    try {
      const url = new URL(rawSrc, window.location.origin);
      return `https://${colby.PRIMARY_DOMAIN}${url.pathname}`;
    } catch {
      return rawSrc;
    }
  }

  return rawSrc;
}

const processedSrc = computed(() => normalizeSrc(props.src));

function cdnImageUrl(width, quality) {
  if (!processedSrc.value) {
    return "";
  }

  return `https://${colby.PRIMARY_DOMAIN}/cdn-cgi/image/width=${width},format=auto,quality=${quality}/${processedSrc.value}`;
}

function enhanceImage() {
  if (!props.progressive) {
    isEnhanced.value = true;
    return;
  }

  window.requestAnimationFrame(() => {
    isEnhanced.value = true;
  });
}

const imageSrc = computed(() =>
  props.progressive && !isEnhanced.value
    ? cdnImageUrl(64, 35)
    : cdnImageUrl(320, 50),
);

const imageSrcset = computed(() => {
  if (!processedSrc.value) {
    return "";
  }

  if (props.progressive && !isEnhanced.value) {
    return "";
  }

  return [320, 640, 960, 1280, 1600, 1920, 2240]
    .map((width) => `${cdnImageUrl(width, props.quality)} ${width}w`)
    .join(", ");
});

const resolvedFetchPriority = computed(
  () => props.fetchPriority || (props.loading === "eager" ? "high" : "auto"),
);

watch(processedSrc, () => {
  isEnhanced.value = !props.progressive;
  enhanceImage();
});

onMounted(() => {
  enhanceImage();
});
</script>
