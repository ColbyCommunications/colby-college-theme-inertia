<template>
  <img
    :class="class"
    :src="
      'https://www.colby.edu/cdn-cgi/image/width=320,quality=50/' + processedSrc
    "
    :alt="alt"
    :loading="loading"
    :sizes="'(max-width: 767px) 100vw, 50vw'"
    :fetchpriority="loading === 'eager' ? 'high' : 'auto'"
    :srcset="srcset"
    :width="width"
    :height="height"
  />
</template>

<script setup>
import { ref, computed } from "vue";

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
  alt: {
    type: String,
    default: "",
  },
  height: {
    type: Number,
    default: 1320,
  },
  width: {
    type: Number,
    default: 2400,
  },
  loading: {
    type: String,
    default: "lazy",
  },
  quality: {
    type: String,
    default: "60",
  },
  fromApi: {
    type: Boolean,
    default: false,
  },
});
console.log(props);
const processedSrc = ref();
const url = new URL(props.src);

if (window.colby.isLocal && !props.fromApi) {
  processedSrc.value = `https://${window.colby.PRIMARY_DOMAIN}${url.pathname}`;
} else {
  processedSrc.value = props.src;
}

const aspectRatio = computed(() => {
  const w = Number(props.width);
  const h = Number(props.height);

  if (!w || !h) return null;

  return w / h;
});

function buildCdnUrl(targetWidth, quality = 60) {
  if (!processedSrc.value) return "";

  const transforms = [`width=${targetWidth}`, `quality=${quality}`];

  if (aspectRatio.value) {
    const targetHeight = Math.round(targetWidth / aspectRatio.value);
    transforms.push(`height=${targetHeight}`);
  }

  return `https://www.colby.edu/cdn-cgi/image/${transforms.join(",")}/${processedSrc.value}`;
}

const srcset = computed(() => {
  //widths
  return [320, 640, 960, 1280]
    .map((w) => `${buildCdnUrl(w, 60)} ${w}w`)
    .join(", ");
});

</script>
