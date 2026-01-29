<template>
  <div class="media-context mx-auto my-0 w-full max-w-screen-2xl px-5">
    <div
      class="media-context__inner grid gap-10"
      :class="[inset ? 'grid-cols-12' : 'grid-cols-8']"
    >
      <div
        class="media-context__image"
        :class="[
          inset
            ? !reverse
              ? 'col-span-12 md:col-span-5 md:col-start-2'
              : 'col-span-12 md:col-span-5'
            : 'col-span-8 md:col-span-4',
        ]"
      >
        <template v-if="video && video.id">
          <Video :id="video.id" :image="image" />
        </template>

        <template v-else>
          <img
            class="w-full object-cover"
            :srcset="image.srcset"
            :src="image.src"
            :alt="image.alt || ''"
            loading="lazy"
          />
        </template>
      </div>

      <div
        class="media-context__context md:flex md:items-center"
        :class="[
          reverse ? 'md:-order-1' : '',
          inset
            ? reverse
              ? 'col-span-12 md:col-span-5 md:col-start-2'
              : 'col-span-12 md:col-span-5'
            : 'col-span-8 md:col-span-4',
        ]"
      >
        <Context
          :size="size"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Adjust imports to match your project structure
import Video from "../Video/Video.vue";
import Context from "../Context/Context.vue";

const props = defineProps({
  inset: {
    type: Boolean,
    default: false,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  video: {
    type: Object,
    default: () => null,
  },
  image: {
    type: Object,
    default: () => ({
      src: "",
      srcset: "",
      alt: "",
      sizes: {},
    }),
  },
  size: {
    type: String,
    default: "medium",
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
});
</script>
