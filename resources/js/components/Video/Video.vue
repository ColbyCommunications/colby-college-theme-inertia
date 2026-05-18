<template>
  <div
    ref="root"
    class="video group relative w-full h-full cursor-pointer overflow-hidden pb-[56.25%]"
    @click="play"
  >
    <div
      class="video__overlay absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center transition-all duration-200 ease-in-out"
      :class="{ 'invisible opacity-0': active }"
    >
      <div
        v-if="playIcon"
        class="z-10 w-12 transition-all duration-400 ease-in-out"
      >
        <Icon
          name="play"
          class="z-10 w-12 fill-indigo-800 transition-all duration-400 ease-in-out group-hover:fill-indigo"
        />
      </div>

      <HlsBackground
        v-if="hlsVideoLoop"
        :src="hlsVideoLoop"
        :fallback-src="videoLoop"
        :poster="posterUrl"
        @ready="videoReady = true"
      />

      <video
        v-else-if="videoLoop"
        class="absolute top-0 left-0 z-[1] h-full w-full object-cover"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        :poster="posterUrl || undefined"
        @canplay="videoReady = true"
        @playing="videoReady = true"
      >
        <source :src="videoLoop" type="video/mp4" />
      </video>

      <Picture
        :alt="image.alt || ''"
        class="absolute top-0 left-0 z-[2] h-full w-full object-cover transition-opacity duration-500 ease-in-out"
        :class="showPoster ? 'opacity-100' : 'pointer-events-none opacity-0'"
        :src="image.url || image.src"
        :loading="priority ? 'eager' : 'lazy'"
        :fetch-priority="priority ? 'high' : 'auto'"
        :progressive="!priority"
        :sizes="sizes"
      />
    </div>

    <div class="iframe absolute top-0 left-0 h-full w-full"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import YTPlayer from "youtube-player";
import Icon from "../Icon/Icon.vue";
import Picture from "../Picture/Picture.vue";
import HlsBackground from "@/js/components/HlsBackground/HlsBackground.vue";

const props = defineProps({
  id: {
    type: String,
  },
  // Maps to 'video_loop' in Twig
  videoLoop: {
    type: String,
    default: "",
  },
  playIcon: {
    type: Boolean,
    default: true,
  },
  // Maps to the 'image' object passed to macros.picture
  image: {
    type: Object,
    default: () => ({
      src: "",
      srcset: "",
      sizes: {},
      alt: "",
    }),
  },
  priority: {
    type: Boolean,
    default: false,
  },
  sizes: {
    type: String,
    default: "(max-width: 767px) 100vw, 50vw",
  },
  hlsVideoLoop: {
    type: String,
    default: "",
  },
  isBackgroundOnly: {
    type: Boolean,
    default: false,
  },
});

const active = ref(false);
const root = ref(null);
let player = null;

const posterUrl = computed(() => {
  const source = props.image?.sizes?.Hero || props.image?.url || props.image?.src || "";
  return normalizeMediaUrl(source);
});

function normalizeMediaUrl(src) {
  if (!src) {
    return "";
  }

  const rawSrc = String(src);
  const colby = window.colby || {};

  if (colby.isLocal && colby.PRIMARY_DOMAIN) {
    try {
      const url = new URL(rawSrc, window.location.origin);
      return `https://${colby.PRIMARY_DOMAIN}${url.pathname}`;
    } catch {
      return rawSrc;
    }
  }

  return rawSrc;
}

const videoReady = ref(false);

const showPoster = computed(() => {
  if (!props.videoLoop && !props.hlsVideoLoop) return true;
  return !videoReady.value;
});

const play = () => {
  if (player && !active.value) {
    active.value = true;
    player.playVideo(); // Note: 'playVideo' instead of 'play'
  }
};

onMounted(() => {
  if (props.isBackgroundOnly || !props.id || !root.value) return;

  const container = root.value.querySelector(".iframe");
  if (!container) return;

  player = YTPlayer(container, {
    videoId: props.id,
  });
});
</script>
