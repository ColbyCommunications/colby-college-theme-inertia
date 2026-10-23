<template>
  <div class="media-aside mx-auto my-0 w-full max-w-screen-2xl">
    <div class="media-aside__inner gap-10 md:grid md:grid-cols-12">
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
                    :src="item.image?.sizes.Landscape"
                    :alt="item.image?.alt"
                  />
                  <p
                    v-if="item.image?.caption"
                    class="media-aside__caption mt-2 font-body text-12 leading-140 font-normal text-indigo"
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
              :src="image?.sizes.Landscape"
              :alt="image?.alt"
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
        class="media-aside__aside mt-8 space-y-2 md:col-span-3 md:mt-0"
        :class="{ grid: carousel }"
      >
        <!-- Carousel aside: show context per slide -->
        <template v-if="carousel">
          <div class="relative h-44 md:h-auto">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="media-aside__context-wrap invisible absolute top-0 left-0 grid w-full translate-y-[60px] space-y-2 opacity-0 transition-all duration-300 ease-in-out"
              :class="{
                '!visible !translate-y-0 !opacity-100': activeSlide === index,
              }"
            >
              <h2
                v-if="item.heading"
                class="font-body text-16 leading-130 font-bold text-indigo"
              >
                {{ item.heading }}
              </h2>
              <p
                v-if="item.paragraph"
                class="font-body text-12 leading-140 font-normal text-indigo"
              >
                {{ item.paragraph }}
              </p>
              <ButtonGroup
                v-if="item.buttons && item.buttons.length"
                size="large"
                :items="item.buttons"
              />
            </div>
          </div>
          <div class="inline-flex gap-4 self-end md:pb-6">
            <button
              class="inline-flex h-8 w-10 cursor-pointer items-center justify-center rounded border-[0.75px] border-solid border-indigo bg-snow transition-all duration-200 ease-in-out hover:bg-cloud focus:bg-cloud"
              @click="changeSlide('prev')"
            >
              <span class="sr-only">Previous</span>
              <Icon name="chevron" class="w-1.5 fill-azure" />
            </button>
            <button
              class="inline-flex h-8 w-10 cursor-pointer items-center justify-center rounded border-[0.75px] border-solid border-indigo bg-snow transition-all duration-200 ease-in-out hover:bg-cloud focus:bg-cloud"
              @click="changeSlide('next')"
            >
              <span class="sr-only">Next</span>
              <Icon name="chevron" class="w-1.5 rotate-180 fill-azure" />
            </button>
          </div>
        </template>

        <!-- Static aside -->
        <template v-else>
          <h2
            v-if="heading"
            class="font-body text-16 leading-130 font-bold text-indigo"
          >
            {{ heading }}
          </h2>
          <p
            v-if="paragraph"
            class="font-body text-12 leading-140 font-normal text-indigo"
          >
            {{ paragraph }}
          </p>
          <ButtonGroup
            v-if="buttons && buttons.length"
            size="large"
            :items="buttons"
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
