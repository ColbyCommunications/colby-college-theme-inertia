<template>
  <div
    ref="overlayHeroRef"
    class="overlay-hero relative overflow-hidden full-bleed"
    :class="[
      !video
        ? [
            'h-[calc(100vh_-_100px)]',
            size === 'medium' ? 'md:h-[400px]' : '',
          ]
        : 'h-[calc(100vh_-_100px)] md:h-auto',
    ]"
  >
    <!-- Bottom gradient overlay with context -->
    <div
      class="overlay-hero__bottom absolute bottom-0 left-0 z-[11] w-full space-y-12 pt-40 pb-16 transition-all duration-200 ease-in-out md:space-y-20"
      :class="{ 'invisible opacity-0': active }"
      :style="{
        background:
          'linear-gradient(180deg, rgba(1, 33, 105, 0) 0%, rgba(14, 20, 34, 0.4) 25%)',
      }"
    >
      <div
        class="overlay-hero__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 px-5 md:grid-cols-12"
      >
        <div class="overlay-hero__main col-span-12 lg:col-span-5">
          <Context
            :hero="true"
            :size="size || 'large'"
            type="light"
            :subheading="subheading"
            :heading="heading"
            :paragraph="paragraph"
            :buttons="{ items: buttons }"
          />

          <!-- Watch button (YouTube video mode) -->
          <button
            v-if="video && video.id"
            class="btn group mt-4 inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-800 bg-indigo/20 px-3.5 py-1 font-body text-12 leading-130 font-normal text-white outline-offset-[-1px] transition-all duration-200 ease-in-out focus:outline focus:outline-2 focus:outline-canary"
            @click="setActive"
          >
            <Icon
              name="play"
              class="w-3 fill-canary transition-all duration-400 ease-in-out group-hover:fill-white"
            />
            <span class="btn__text">
              Watch
              <div
                class="btn__border block h-px w-0 bg-white transition-all duration-200 ease-in-out group-hover:w-full"
              ></div>
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mode 1: YouTube video with Video component -->
    <template v-if="video && video.id">
      <div
        class="overlay-hero__screen absolute top-0 left-0 h-full w-full"
        :class="{ 'invisible opacity-0': active }"
      ></div>
      <Video
        :id="video.id"
        :play-icon="false"
        :image="image || {}"
        :priority="priority"
        sizes="100vw"
      />
    </template>

    <!-- Mode 2: Static image (fromPage or no video at all) -->
    <template v-else-if="fromPage || (!video && !video_loop)">
      <Picture
        v-if="image"
        class="absolute top-0 left-0 z-[-10] h-full w-full object-cover"
        :src="image.url"
        :alt="image.alt || ''"
        :loading="priority ? 'eager' : 'lazy'"
        :fetch-priority="priority ? 'high' : 'auto'"
        sizes="100vw"
      />
    </template>

    <!-- Mode 3: Video loop or fallback image -->
    <template v-else>
      <div
        class="overlay-hero__screen absolute top-0 left-0 h-full w-full"
        :class="{ 'invisible opacity-0': active }"
      ></div>
      <div class="video relative w-full overflow-hidden pb-[56.25%] h-full">
        <div
          class="video__overlay group absolute z-10 flex h-full w-full cursor-pointer items-center justify-center transition-all duration-200 ease-in-out"
        >
          <Picture
            v-if="showPosterImage && image"
            class="absolute top-0 left-0 z-[-10] h-full w-full object-cover"
            :src="image.url"
            :alt="image.alt || ''"
            :loading="priority ? 'eager' : 'lazy'"
            :fetch-priority="priority ? 'high' : 'auto'"
            :progressive="!priority"
            sizes="100vw"
          />
          <video
            v-if="selectedVideoLoop && !selectedHlsVideoLoop"
            class="absolute top-0 right-0 bottom-0 left-0 z-[-10] h-auto min-h-full w-auto min-w-full bg-cover bg-repeat object-cover"
            playsinline
            autoplay
            muted
            loop
            preload="metadata"
            :poster="posterUrl || undefined"
          >
            <source :src="selectedVideoLoop" type="video/mp4" />
          </video>
          <HlsBackground
            v-if="selectedHlsVideoLoop"
            :src="selectedHlsVideoLoop"
            :fallback-src="selectedMp4Fallback"
            :poster="posterUrl"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount, onMounted } from "vue";
import Context from "@/js/components/Context/Context.vue";
import HlsBackground from "@/js/components/HlsBackground/HlsBackground.vue";
import Picture from "@/js/components/Picture/Picture.vue";
import Video from "@/js/components/Video/Video.vue";
import Icon from "@/js/components/Icon/Icon.vue";

const props = defineProps({
  size: {
    type: String,
    default: "large",
  },
  subheading: {
    type: String,
    default: "",
  },
  heading: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    default: "",
  },
  buttons: {
    type: Array,
    default: () => [],
  },
  image: {
    type: Object,
    default: null,
  },
  video: {
    type: Object,
    default: null,
  },
  video_loop: {
    type: String,
    default: "",
  },
  video_loop_tablet: {
    type: String,
    default: "",
  },
  video_loop_mobile: {
    type: String,
    default: "",
  },
  hls_video_loop: {
    type: String,
    default: "",
  },
  hls_video_loop_tablet: {
    type: String,
    default: "",
  },
  hls_video_loop_mobile: {
    type: String,
    default: "",
  },
  fromPage: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: Boolean,
    default: false,
  },
});

const overlayHeroRef = ref(null);
const active = ref(false);
const isMobile = ref(
  typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false,
);
const isTablet = ref(
  typeof window !== "undefined"
    ? window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
    : false,
);
let mobileMediaQuery = null;
let tabletMediaQuery = null;
let mobileVideoTimer = null;
const canLoadMobileVideo = ref(false);

function updateViewport() {
  isMobile.value = mobileMediaQuery?.matches ?? false;
  isTablet.value = tabletMediaQuery?.matches ?? false;
}

const posterUrl = computed(() => {
  if (props.image && props.image.sizes && props.image.sizes.Hero) {
    return optimizedPosterUrl(props.image.sizes.Hero);
  }
  return "";
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

function optimizedPosterUrl(src) {
  const normalizedSrc = normalizeMediaUrl(src);
  if (!normalizedSrc) {
    return "";
  }

  const width = isMobile.value ? 640 : isTablet.value ? 1280 : 1920;
  return `https://www.colby.edu/cdn-cgi/image/width=${width},format=auto,quality=60/${normalizedSrc}`;
}

onMounted(() => {
  mobileMediaQuery = window.matchMedia("(max-width: 767px)");
  tabletMediaQuery = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
  updateViewport();
  mobileMediaQuery.addEventListener("change", updateViewport);
  tabletMediaQuery.addEventListener("change", updateViewport);

  if (props.video_loop_mobile) {
    const loadMobileVideo = () => {
      mobileVideoTimer = window.setTimeout(() => {
        canLoadMobileVideo.value = true;
      }, 2000);
    };

    if (document.readyState === "complete") {
      loadMobileVideo();
    } else {
      window.addEventListener("load", loadMobileVideo, { once: true });
    }
  }
});

onBeforeUnmount(() => {
  mobileMediaQuery?.removeEventListener("change", updateViewport);
  tabletMediaQuery?.removeEventListener("change", updateViewport);
  if (mobileVideoTimer) {
    window.clearTimeout(mobileVideoTimer);
  }
});

const selectedVideoLoop = computed(() => {
  if (selectedHlsVideoLoop.value) {
    return "";
  }

  if (isMobile.value) {
    return canLoadMobileVideo.value ? props.video_loop_mobile || "" : "";
  }

  if (isTablet.value) {
    return props.video_loop_tablet || props.video_loop || "";
  }

  return props.video_loop || "";
});

const selectedMp4Fallback = computed(() => {
  if (isMobile.value) {
    return props.video_loop_mobile || "";
  }

  if (isTablet.value) {
    return props.video_loop_tablet || props.video_loop || "";
  }

  return props.video_loop || "";
});

const selectedHlsVideoLoop = computed(() => {
  if (isMobile.value) {
    return props.hls_video_loop_mobile || props.hls_video_loop || "";
  }

  if (isTablet.value) {
    return props.hls_video_loop_tablet || props.hls_video_loop || "";
  }

  return props.hls_video_loop || "";
});

const showPosterImage = computed(() => !selectedVideoLoop.value || isMobile.value || !!selectedHlsVideoLoop.value);

function setActive() {
  active.value = true;
  // Trigger the embedded Video component's play action
  if (overlayHeroRef.value) {
    const videoEl = overlayHeroRef.value.querySelector(".video");
    if (videoEl) {
      videoEl.click();
    }
  }
}
</script>
