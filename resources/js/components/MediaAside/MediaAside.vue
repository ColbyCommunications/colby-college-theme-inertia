<template>
  <div class="media-aside mx-auto my-0 w-full max-w-screen-2xl">
    <div class="media-aside__inner gap-10 lg:grid lg:grid-cols-12">
      <!-- Main media area -->
      <div class="media-aside__main lg:col-span-8 xl:col-span-9">
        <!-- Carousel mode -->
        <div v-if="carousel" ref="glideEl">
          <div class="media-aside__window overflow-hidden" data-glide-window>
            <div class="glide__track" data-glide-el="track">
              <div class="glide__slides !items-start">
                <div
                  v-for="(item, index) in items"
                  :key="index"
                  class="media-aside__slide glide__slide !h-auto"
                >
                  <Picture
                    class="h-auto w-full object-cover"
                    :src="item.image?.sizes?.Landscape"
                    :alt="item.image?.alt"
                    :width="getImageWidth(item.image)"
                    :height="getImageHeight(item.image)"
                  />
                  <p
                    v-if="hasAnyCaption"
                    class="media-aside__caption mt-2 min-h-[1.5rem] font-body text-12 leading-140 font-normal text-indigo"
                  >
                    {{ item.image?.caption || "" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Static mode -->
        <template v-else>
          <div class="media-aside__image">
            <Picture
              class="h-auto w-full object-cover"
              :src="image?.sizes?.Landscape"
              :alt="image?.alt"
              :width="getImageWidth(image)"
              :height="getImageHeight(image)"
            />
          </div>
          <p
            v-if="image?.caption"
            class="media-aside__caption mt-2 font-body text-12 leading-140 font-normal text-indigo"
          >
            {{ image.caption }}
          </p>
        </template>
      </div>

      <!-- Aside -->
      <div
        class="media-aside__aside mt-8 flex flex-col justify-between space-y-4 lg:col-span-4 lg:mt-0 xl:col-span-3"
      >
        <!-- Carousel aside: show context per slide -->
        <template v-if="carousel">
          <div class="grid grid-cols-1 items-start">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="media-aside__context-wrap col-start-1 row-start-1 flex w-full flex-col space-y-3 transition-opacity duration-300 ease-in-out"
              :class="
                activeSlide === index
                  ? 'visible z-10 opacity-100'
                  : 'pointer-events-none invisible z-0 opacity-0'
              "
            >
              <h2
                v-if="item.heading"
                class="font-body text-18 leading-130 font-bold text-indigo"
              >
                {{ item.heading }}
              </h2>
              <p
                v-if="item.paragraph"
                class="font-body leading-140 font-normal text-indigo"
              >
                {{ item.paragraph }}
              </p>
              <div v-if="item.buttons && item.buttons.length" class="pt-1">
                <ButtonGroup size="large" :items="item.buttons" />
              </div>
            </div>
          </div>

          <div
            class="inline-flex gap-4 pt-4"
            :class="hasAnyCaption ? 'lg:pb-6' : 'lg:pb-0'"
          >
            <button
              type="button"
              class="inline-flex h-8 w-10 cursor-pointer items-center justify-center rounded border-[0.75px] border-solid border-indigo bg-snow transition-all duration-200 ease-in-out hover:bg-cloud focus:bg-cloud"
              @click="changeSlide('prev')"
            >
              <span class="sr-only">Previous</span>
              <Icon name="chevron" class="w-1.5 fill-azure" />
            </button>
            <button
              type="button"
              class="inline-flex h-8 w-10 cursor-pointer items-center justify-center rounded border-[0.75px] border-solid border-indigo bg-snow transition-all duration-200 ease-in-out hover:bg-cloud focus:bg-cloud"
              @click="changeSlide('next')"
            >
              <span class="sr-only">Next</span>
              <Icon name="chevron" class="w-1.5 rotate-180 fill-azure" />
            </button>
          </div>
        </template>

        <!-- Static aside -->
        <div v-else class="flex flex-col space-y-3">
          <h2
            v-if="heading"
            class="font-body text-18 leading-130 font-bold text-indigo"
          >
            {{ heading }}
          </h2>
          <p
            v-if="paragraph"
            class="font-body leading-140 font-normal text-indigo"
          >
            {{ paragraph }}
          </p>
          <div v-if="buttons && buttons.length" class="pt-1">
            <ButtonGroup size="large" :items="buttons" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import Glide from "@glidejs/glide";
import Picture from "@/js/components/Picture/Picture.vue";
import ButtonGroup from "@/js/components/ButtonGroup/ButtonGroup.vue";
import Icon from "@/js/components/Icon/Icon.vue";

const props = defineProps({
  carousel: { type: Boolean, default: false },
  image: { type: Object, default: null },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  items: { type: Array, default: () => [] },
});

const activeSlide = ref(0);
const glideEl = ref(null);
let glide = null;

const getImageWidth = (img) =>
  Number(img?.sizes?.["Landscape-width"] || img?.width || 1200);

const getImageHeight = (img) =>
  Number(img?.sizes?.["Landscape-height"] || img?.height || 800);

const hasAnyCaption = computed(
  () =>
    Array.isArray(props.items) &&
    props.items.some((item) => Boolean(item?.image?.caption)),
);

const changeSlide = (dir) => {
  if (!glide) return;
  glide.go(dir === "next" ? ">" : "<");
};

onMounted(async () => {
  if (!props.carousel) return;
  await nextTick();
  const win = glideEl.value?.querySelector("[data-glide-window]");
  if (!win) return;

  glide = new Glide(win, {
    type: "carousel",
    gap: 0,
    animationDuration: 600,
    autoplay: false,
    perView: 1,
  });

  glide.on("run", () => {
    activeSlide.value = glide.index;
  });

  glide.mount();
});

onBeforeUnmount(() => {
  if (glide) glide.destroy();
});
</script>

<style lang="scss">
@use "@glidejs/glide/src/assets/sass/glide.core" as *;
</style>
