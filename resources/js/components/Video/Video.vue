<template>
  <div
    ref="root"
    class="video group relative h-full w-full overflow-hidden pb-[56.25%]"
    :class="{ 'cursor-pointer': isInteractive }"
    :aria-hidden="isDecorative ? 'true' : undefined"
    :tabindex="isDecorative ? -1 : undefined"
    @click="isInteractive ? play() : null"
  >
    <div
      class="video__overlay absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center transition-all duration-200 ease-in-out"
      :class="{ 'invisible opacity-0': active }"
    >
      <div
        v-if="playIcon && isInteractive"
        class="z-10 w-12 transition-all duration-400 ease-in-out"
      >
        <Icon
          name="play"
          class="z-10 w-12 fill-indigo transition-all duration-400 ease-in-out group-hover:fill-indigo"
          aria-hidden="true"
          focusable="false"
        />
      </div>

      <div
        v-if="hlsVideoLoop"
        class="absolute inset-0 z-[1]"
        :aria-hidden="isDecorative ? 'true' : undefined"
      >
        <HlsBackground
          :src="hlsVideoLoop"
          :fallback-src="videoLoop"
          :poster="posterUrl"
          @ready="videoReady = true"
        />
      </div>

      <video
        v-else-if="videoLoop"
        class="absolute top-0 left-0 z-[1] h-full w-full object-cover"
        :aria-hidden="isDecorative ? 'true' : undefined"
        :tabindex="isDecorative ? -1 : undefined"
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
        :alt="isDecorative ? '' : image.alt || ''"
        class="absolute top-0 left-0 z-[2] h-full w-full object-cover transition-opacity duration-500 ease-in-out"
        :class="showPoster ? 'opacity-100' : 'pointer-events-none opacity-0'"
        :src="image.url || image.src"
        :loading="priority ? 'eager' : 'lazy'"
        :fetch-priority="priority ? 'high' : 'auto'"
        :progressive="!priority"
        :sizes="sizes"
      />
    </div>

    <div
      v-if="!isBackgroundOnly && id"
      class="iframe absolute top-0 left-0 h-full w-full"
    />
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
    default: "",
  },
  videoLoop: {
    type: String,
    default: "",
  },
  playIcon: {
    type: Boolean,
    default: true,
  },
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
  isDecorative: {
    type: Boolean,
    default: false,
  },
});

const active = ref(false);
const root = ref(null);
const videoReady = ref(false);

let player = null;

const isInteractive = computed(() => Boolean(props.id && !props.isBackgroundOnly));

const posterUrl = computed(() => {
  const source =
    props.image?.sizes?.Hero || props.image?.url || props.image?.src || "";

  return normalizeMediaUrl(source);
});

const showPoster = computed(() => {
  if (!props.videoLoop && !props.hlsVideoLoop) return true;

  return !videoReady.value;
});

function normalizeMediaUrl(src) {
  if (!src) return "";

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

function play() {
  if (player && !active.value) {
    active.value = true;
    player.playVideo();
  }
}

onMounted(() => {
  if (!isInteractive.value || !root.value) return;

  const container = root.value.querySelector(".iframe");
  if (!container) return;

  player = YTPlayer(container, {
    videoId: props.id,
  });
});
</script>