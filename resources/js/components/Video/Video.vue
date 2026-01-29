<template>
  <div
    ref="root"
    class="video group relative w-full cursor-pointer overflow-hidden pb-[56.25%]"
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

      <video
        v-if="videoLoop"
        class="absolute top-0 left-0 z-[1] hidden h-auto min-h-full w-auto min-w-full object-cover md:block"
        autoplay
        muted
        loop
        playsinline
      >
        <source :src="videoLoop" type="video/mp4" />
      </video>
      <Picture
        :alt="image.alt || ''"
        class="absolute top-0 left-0 h-full w-full object-cover"
        :src="image.src"
        :sizeDesktop:="image.srcset"
        :sizeMobile="image.sizes.Hero"
      />
    </div>

    <div class="iframe absolute top-0 left-0 h-full w-full"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import YTPlayer from "youtube-player";
import Icon from "../Icon/Icon.vue";
import Picture from "../Picture/Picture.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
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
});

const active = ref(false);
const root = ref(null);
let player = null;

const play = () => {
  if (player && !active.value) {
    active.value = true;
    player.playVideo(); // Note: 'playVideo' instead of 'play'
  }
};

onMounted(() => {
  if (root.value) {
    // ID of the div, or the DOM element itself
    const container = root.value.querySelector(".iframe");

    // Initialize
    player = YTPlayer(container, {
      videoId: props.id,
      // Optional: width/height vars if needed, usually handled by CSS
    });
  }
});
</script>
