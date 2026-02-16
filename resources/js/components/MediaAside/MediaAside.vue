<template>
  <div class="media-aside max-w-screen-2xl w-full my-0 mx-auto">
    <div class="media-aside__inner md:grid md:grid-cols-12 gap-10">
      <!-- Main media area -->
      <div class="media-aside__main md:col-span-9">
        <!-- Carousel mode -->
        <div v-if="carousel" ref="glideEl">
          <div class="media-aside__window" data-glide-window>
            <div class="glide__track" data-glide-el="track">
              <div class="glide__slides">
                <div
                  v-for="(item, index) in items"
                  :key="index"
                  class="media-aside__slide glide__slide"
                >
                  <Picture
                    class="w-full object-cover"
                    :src="item.image?.src"
                    :srcset="item.image?.srcset"
                    :size-desktop="item.image?.sizes?.Landscape"
                    :size-mobile="item.image?.sizes?.Square"
                    :alt="item.image?.alt"
                  />
                  <p
                    v-if="item.image?.caption"
                    class="media-aside__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"
                  >
                    {{ item.image.caption }}
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
              class="w-full object-cover"
              :src="image?.src"
              :srcset="image?.srcset"
              :size-desktop="image?.sizes?.Landscape"
              :size-mobile="image?.sizes?.Square"
              :alt="image?.alt"
            />
          </div>
          <p
            v-if="image?.caption"
            class="media-aside__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"
          >
            {{ image.caption }}
          </p>
        </template>
      </div>

      <!-- Aside -->
      <div
        class="media-aside__aside md:col-span-3 space-y-2 mt-8 md:mt-0"
        :class="{ grid: carousel }"
      >
        <!-- Carousel aside: show context per slide -->
        <template v-if="carousel">
          <div class="relative h-44 md:h-auto">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="media-aside__context-wrap absolute top-0 left-0 w-full invisible opacity-0 translate-y-[60px] grid space-y-2 transition-all duration-300 ease-in-out"
              :class="{
                '!visible !opacity-100 !translate-y-0':
                  activeSlide === index,
              }"
            >
              <h2
                v-if="item.heading"
                class="font-body font-bold text-16 leading-130 text-indigo"
              >
                {{ item.heading }}
              </h2>
              <p
                v-if="item.paragraph"
                class="font-body font-normal text-12 leading-140 text-indigo"
              >
                {{ item.paragraph }}
              </p>
              <ButtonGroup
                v-if="item.buttons && item.buttons.length"
                size="large"
                :items="mapButtons(item.buttons)"
              />
            </div>
          </div>
          <div class="inline-flex self-end gap-4 md:pb-6">
            <button
              class="inline-flex items-center justify-center w-10 h-8 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out"
              @click="changeSlide('prev')"
            >
              <span class="sr-only">Previous</span>
              <Icon name="chevron" class="fill-azure w-1.5" />
            </button>
            <button
              class="inline-flex items-center justify-center w-10 h-8 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out"
              @click="changeSlide('next')"
            >
              <span class="sr-only">Next</span>
              <Icon name="chevron" class="rotate-180 fill-azure w-1.5" />
            </button>
          </div>
        </template>

        <!-- Static aside -->
        <template v-else>
          <h2
            v-if="heading"
            class="font-body font-bold text-16 leading-130 text-indigo"
          >
            {{ heading }}
          </h2>
          <p
            v-if="paragraph"
            class="font-body font-normal text-12 leading-140 text-indigo"
          >
            {{ paragraph }}
          </p>
          <ButtonGroup
            v-if="buttons && buttons.length"
            size="large"
            :items="mapButtons(buttons)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
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

const mapButtons = (btns) =>
  btns.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  }));

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
