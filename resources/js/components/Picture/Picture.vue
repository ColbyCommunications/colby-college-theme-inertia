<template>
  <picture>
    <source media="(min-width:768px)" :srcset="
      'https://colby.edu/cdn-cgi/image/width=320,quality=60/' +
      processedSrc +
      ' 320w,' +
      'https://colby.edu/cdn-cgi/image/width=640,quality=60/' +
      processedSrc +
      ' 640w,' +
      'https://colby.edu/cdn-cgi/image/width=960,quality=60/' +
      processedSrc +
      ' 960w,' +
      'https://colby.edu/cdn-cgi/image/width=1280,quality=60/' +
      processedSrc +
      ' 1280w,'
    "/>
    <img :class="class" :src="'https://colby.edu/cdn-cgi/image/width=320,quality=50/' +
      processedSrc" :alt="alt" :loading="loading" :sizes="'(max-width: 767px) 100vw, 50vw'" :fetchpriority="loading === 'eager' ? 'high' : 'auto'" />
  </picture>
</template>

<script setup>
import {
  ref,
} from "vue";

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
  loading: {
    type: String,
    default: "lazy",
  },
  fromApi: {
    type: Boolean,
    default: false,
  }
});
const processedSrc = ref();
const url = new URL(props.src);

if (window.colby.isLocal && !props.fromApi) {
  processedSrc.value = `https://${window.colby.PRIMARY_DOMAIN}${url.pathname}`;
} else {
  processedSrc.value = props.src;
}
</script>
