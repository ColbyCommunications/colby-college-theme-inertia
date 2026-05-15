<template>
  <video
    ref="videoRef"
    class="absolute inset-0 z-[-10] h-full w-full object-cover"
    playsinline
    autoplay
    muted
    loop
    preload="metadata"
    :poster="poster || undefined"
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
  video.load();

  if (!props.src) {
    loadFallback(video);
    return;
  }

  const { default: Hls } = await import("hls.js");

  // Prefer hls.js anywhere it is supported so we control quality behavior.
  if (Hls.isSupported()) {
    hls = new Hls({
      autoStartLoad: true,

      // Do not cap quality based on measured element size.
      capLevelToPlayerSize: false,

      // Let hls.js pick, but give it a strong initial bandwidth estimate.
      startLevel: -1,
      abrEwmaDefaultEstimate: 8_000_000,

      // Give ABR enough buffer to ramp quality.
      maxBufferLength: 30,
      maxMaxBufferLength: 60,

      // Helpful for VOD hero loops.
      startFragPrefetch: true,
    });

    hls.loadSource(props.src);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      playVideo(video);
    });

    hls.on(Hls.Events.ERROR, (_, data) => {
      if (data?.fatal) {
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
  () => [props.src, props.fallbackSrc],
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