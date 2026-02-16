<template>
  <div
    ref="overlayHeroRef"
    class="overlay-hero relative overflow-hidden"
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
      />
    </template>

    <!-- Mode 2: Static image (fromPage or no video at all) -->
    <template v-else-if="fromPage || (!video && !videoLoop)">
      <Picture
        v-if="image"
        class="absolute top-0 left-0 z-[-10] h-full w-full object-cover"
        :srcset="image.srcset"
        :src="image.src"
        :size-desktop="image.sizes ? image.sizes.Hero : ''"
        :size-mobile="image.sizes ? image.sizes.Hero : ''"
        :alt="image.alt || ''"
      />
    </template>

    <!-- Mode 3: Video loop or fallback image -->
    <template v-else>
      <div
        class="overlay-hero__screen absolute top-0 left-0 h-full w-full"
        :class="{ 'invisible opacity-0': active }"
      ></div>
      <div class="video relative w-full overflow-hidden pb-[56.25%]">
        <div
          class="video__overlay group absolute z-10 flex h-full w-full cursor-pointer items-center justify-center transition-all duration-200 ease-in-out"
        >
          <video
            v-if="videoLoop"
            class="absolute top-0 right-0 bottom-0 left-0 z-[-10] h-auto min-h-full w-auto min-w-full bg-cover bg-repeat object-cover"
            playsinline
            autoplay
            muted
            loop
            :poster="posterUrl || undefined"
          >
            <source :src="videoLoop" type="video/mp4" />
          </video>
          <Picture
            v-else-if="image"
            class="absolute top-0 left-0 z-[-10] h-full w-full object-cover"
            :srcset="image.srcset"
            :src="image.src"
            :size-desktop="image.sizes ? image.sizes.Hero : ''"
            :size-mobile="image.sizes ? image.sizes.Hero : ''"
            :alt="image.alt || ''"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
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
  videoLoop: {
    type: String,
    default: "",
  },
  fromPage: {
    type: Boolean,
    default: false,
  },
});

const overlayHeroRef = ref(null);
const active = ref(false);

const posterUrl = computed(() => {
  if (props.image && props.image.sizes && props.image.sizes.Hero) {
    return props.image.sizes.Hero;
  }
  return "";
});

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
