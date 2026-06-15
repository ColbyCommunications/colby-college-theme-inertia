<template>
  <div
    ref="overlayHeroRef"
    class="overlay-hero relative overflow-hidden full-bleed"
    :class="[
      !hasAnyVideo
        ? [
            'h-[calc(100vh_-_100px)]',
            size === 'medium' ? 'md:h-[400px]' : '',
          ]
        : 'h-[calc(100vh_-_100px)] md:h-auto',
    ]"
  >
    <div
      class="overlay-hero__bottom absolute bottom-0 left-0 z-[11] w-full space-y-12 pt-40 pb-16 transition-all duration-200 ease-in-out md:space-y-20"
      :class="{ 'invisible opacity-0': active }"
      :style="{
        background:
          'linear-gradient(180deg, rgba(1, 33, 105, 0) 0%, rgba(14, 20, 34, 0.4) 25%)',
      }"
    >
      <div
        class="overlay-hero__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-5 px-5 md:grid-cols-12 md:gap-x-10"
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

          <button v-if="video?.id" class="btn group inline-flex flex-row items-center rounded border-[0.75px] border-solid font-body leading-130 font-normal !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out focus:outline focus:outline-2 focus:outline-gold min-w-[44px] min-h-[44px] space-x-1.5 text-12 py-1 px-3.5 border-white text-white hover:text-indigo hover:bg-white" @click="setActive">
            <Icon
              name="play"
              class="w-3 fill-gold transition-all duration-400 ease-in-out group-hover:fill-gold"
            />
            <span class="btn__text">
              Watch
              <div class="btn__border block h-px w-0 transition-all duration-200 ease-in-out group-hover:w-full bg-indigo" />
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mode 1: YouTube foreground video + optional autoplaying background loop -->
    <template v-if="video?.id">
      <div
        class="overlay-hero__screen absolute top-0 left-0 h-full w-full"
        :class="{ 'invisible opacity-0': active }"
      />

      <Video
        :id="video.id"
        :video-loop="selectedVideoLoop"
        :hls-video-loop="selectedHlsVideoLoop"
        :image="image || {}"
        :priority="priority"
        :play-icon="false"
        sizes="100vw"
      />
    </template>

    <!-- Mode 2: Static image only -->
    <template v-else-if="fromPage || !hasAnyVideo">
      <Picture
        v-if="image"
        class="absolute inset-0 z-[-10] h-full w-full object-cover"
        :src="image.url || image.src"
        :alt="image.alt || ''"
        :loading="priority ? 'eager' : 'lazy'"
        :fetch-priority="priority ? 'high' : 'auto'"
        sizes="100vw"
      />
    </template>

    <!-- Mode 3: Background loop only, no YouTube foreground -->
    <template v-else>
      <div
        class="overlay-hero__screen absolute top-0 left-0 h-full w-full"
        :class="{ 'invisible opacity-0': active }"
      />

      <Video
        id=""
        :video-loop="selectedVideoLoop"
        :hls-video-loop="selectedHlsVideoLoop"
        :image="image || {}"
        :priority="priority"
        :play-icon="false"
        :is-background-only="true"
        :is-decorative="isDecorativeBackgroundVideo"
        sizes="100vw"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount, onMounted } from "vue";
import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";
import Video from "@/js/components/Video/Video.vue";
import Icon from "@/js/components/Icon/Icon.vue";

const props = defineProps({
  size: { type: String, default: "large" },
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  image: { type: Object, default: null },
  video: { type: Object, default: null },

  video_loop: { type: String, default: "" },
  video_loop_tablet: { type: String, default: "" },
  video_loop_mobile: { type: String, default: "" },

  hls_video_loop: { type: String, default: "" },
  hls_video_loop_tablet: { type: String, default: "" },
  hls_video_loop_mobile: { type: String, default: "" },

  fromPage: { type: Boolean, default: false },
  priority: { type: Boolean, default: false },
});

const overlayHeroRef = ref(null);
const active = ref(false);

const isMobile = ref(
  typeof window !== "undefined"
    ? window.matchMedia("(max-width: 767px)").matches
    : false,
);

const isTablet = ref(
  typeof window !== "undefined"
    ? window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
    : false,
);

let mobileMediaQuery = null;
let tabletMediaQuery = null;

function updateViewport() {
  isMobile.value = mobileMediaQuery?.matches ?? false;
  isTablet.value = tabletMediaQuery?.matches ?? false;
}

const selectedHlsVideoLoop = computed(() => {
  if (isMobile.value) {
    return props.hls_video_loop_mobile || props.hls_video_loop || "";
  }

  if (isTablet.value) {
    return props.hls_video_loop_tablet || props.hls_video_loop || "";
  }

  return props.hls_video_loop || "";
});

const selectedVideoLoop = computed(() => {
  if (selectedHlsVideoLoop.value) {
    return "";
  }

  if (isMobile.value) {
    return props.video_loop_mobile || props.video_loop || "";
  }

  if (isTablet.value) {
    return props.video_loop_tablet || props.video_loop || "";
  }

  return props.video_loop || "";
});

const hasBackgroundLoopVideo = computed(() =>
  Boolean(
    props.video_loop ||
      props.video_loop_tablet ||
      props.video_loop_mobile ||
      props.hls_video_loop ||
      props.hls_video_loop_tablet ||
      props.hls_video_loop_mobile,
  ),
);

const hasAnyVideo = computed(() =>
  Boolean(props.video?.id || hasBackgroundLoopVideo.value),
);

const isDecorativeBackgroundVideo = computed(() =>
  hasBackgroundLoopVideo.value && !props.video?.id
);

function setActive() {
  active.value = true;

  const videoEl = overlayHeroRef.value?.querySelector(".video");

  if (videoEl) {
    videoEl.click();
  }
}

onMounted(() => {
  mobileMediaQuery = window.matchMedia("(max-width: 767px)");
  tabletMediaQuery = window.matchMedia(
    "(min-width: 768px) and (max-width: 1023px)",
  );

  updateViewport();

  mobileMediaQuery.addEventListener("change", updateViewport);
  tabletMediaQuery.addEventListener("change", updateViewport);
});

onBeforeUnmount(() => {
  mobileMediaQuery?.removeEventListener("change", updateViewport);
  tabletMediaQuery?.removeEventListener("change", updateViewport);
});
</script>