<template>
  <video
    ref="videoRef"
    class="absolute inset-0 z-[1] h-full w-full object-cover"
    playsinline
    autoplay
    muted
    loop
    preload="metadata"
    :poster="poster || undefined"
    @canplay="emit('ready')"
    @playing="emit('ready')"
    @error="emit('error')"
  />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  src: { type: String, default: "" },
  fallbackSrc: { type: String, default: "" },
  poster: { type: String, default: "" },
});

const videoRef = ref(null);
let hls = null;

const emit = defineEmits(["ready", "error"]);

function destroyHls() {
  if (hls) {
    hls.destroy();
    hls = null;
  }
}

function playVideo(video) {
  video.play().catch(() => {});
}

function loadFallback(video) {
  if (!props.fallbackSrc) return;

  video.src = props.fallbackSrc;
  video.load();
  playVideo(video);
}

async function attachSource() {
  const video = videoRef.value;
  if (!video) return;

  destroyHls();

  video.removeAttribute("src");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.muted = true;
  video.load();

  if (!props.src) {
    loadFallback(video);
    return;
  }

  const { default: Hls } = await import("hls.js");

  const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 767px)").matches;

  // Prefer hls.js anywhere it is supported so we control quality behavior.
  if (Hls.isSupported()) {
    hls = new Hls({
      autoStartLoad: true,
      capLevelToPlayerSize: false,

      startLevel: -1,

      abrEwmaDefaultEstimate: isMobile
        ? 3_000_000
        : 8_000_000,

      maxBufferLength: isMobile ? 10 : 30,
      maxMaxBufferLength: isMobile ? 20 : 60,

      startFragPrefetch: true,
    });

    hls.loadSource(props.src);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      playVideo(video);
    });

    hls.on(Hls.Events.ERROR, (_, data) => {
      if (data?.fatal) {
        emit("error", data);
        destroyHls();
        loadFallback(video);
      }
    });

    return;
  }

  // Native HLS fallback, mainly Safari/iOS.
  const nativeHlsSupport = video.canPlayType("application/vnd.apple.mpegurl");

  if (nativeHlsSupport === "probably" || nativeHlsSupport === "maybe") {
    video.src = props.src;
    video.load();
    playVideo(video);
    return;
  }

  loadFallback(video);
}

watch(
  () => [props.src, props.fallbackSrc, props.poster],
  () => {
    attachSource();
  },
);

onMounted(() => {
  attachSource();
});

onBeforeUnmount(() => {
  destroyHls();
});
</script>