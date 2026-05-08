<template>
  <video
    ref="videoRef"
    class="absolute top-0 right-0 bottom-0 left-0 z-[-10] h-auto min-h-full w-auto min-w-full bg-cover bg-repeat object-cover"
    playsinline
    autoplay
    muted
    loop
    preload="auto"
    :poster="poster || undefined"
  >
    <source v-if="fallbackSrc" :src="fallbackSrc" type="video/mp4" />
  </video>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  fallbackSrc: {
    type: String,
    default: "",
  },
  poster: {
    type: String,
    default: "",
  },
});

const videoRef = ref(null);
let hls = null;

function destroyHls() {
  if (hls) {
    hls.destroy();
    hls = null;
  }
}

async function attachSource() {
  const video = videoRef.value;
  if (!video) {
    return;
  }

  destroyHls();

  if (!props.src) {
    if (props.fallbackSrc) {
      video.src = props.fallbackSrc;
      video.load();
      video.play().catch(() => {});
    }
    return;
  }

  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = props.src;
    video.load();
    video.play().catch(() => {});
    return;
  }

  const { default: Hls } = await import("hls.js");
  if (Hls.isSupported()) {
    hls = new Hls({
      autoStartLoad: true,
      capLevelToPlayerSize: true,
      maxBufferLength: 3,
      maxMaxBufferLength: 5,
      startFragPrefetch: false,
    });
    hls.loadSource(props.src);
    hls.attachMedia(video);
    return;
  }

  if (props.fallbackSrc) {
    video.src = props.fallbackSrc;
    video.load();
    video.play().catch(() => {});
  }
}

watch(() => [props.src, props.fallbackSrc], attachSource);

onMounted(attachSource);

onBeforeUnmount(destroyHls);
</script>
