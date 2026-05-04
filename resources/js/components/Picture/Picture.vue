<template>
  <img
    :class="class"
    :src="
      'https://www.colby.edu/cdn-cgi/image/width=320,quality=50/' + processedSrc
    "
    :alt="alt"
    :loading="loading"
    :sizes="'(max-width: 767px) 100vw, 50vw'"
    media="(min-width:768px)"
    :fetchpriority="loading === 'eager' ? 'high' : 'auto'"
    :srcset="
      'https://www.colby.edu/cdn-cgi/image/width=320,quality=60/' +
      processedSrc +
      ' 320w,' +
      'https://www.colby.edu/cdn-cgi/image/width=640,quality=60/' +
      processedSrc +
      ' 640w,' +
      'https://www.colby.edu/cdn-cgi/image/width=960,quality=60/' +
      processedSrc +
      ' 960w,' +
      'https://www.colby.edu/cdn-cgi/image/width=1280,quality=60/' +
      processedSrc +
      ' 1280w,'
    "
    :width="width"
    :height="height"
    :style="imageStyle"
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

const imageStyle = computed(() => {
  if (!props.width || !props.height) return {};

  return {
    aspectRatio: `${props.width} / ${props.height}`,
  };
});
</script>
