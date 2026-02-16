<template>
  <div class="testimonial-carousel space-y-11">
    <div
      class="testimonial-carousel__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
    >
      <div class="testimonial-carousel__context md:col-span-5">
        <Context
          size="large"
          type="dark"
          :arrow="true"
          :reverse="true"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttonItems }"
        />
      </div>
    </div>
    <div
      class="testimonial-carousel__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
      @mouseenter="pauseCarousel"
      @mouseleave="playCarousel"
    >
      <div class="testimonial-carousel__main md:col-span-9" ref="rootEl">
        <div class="testimonial-carousel__window w-full" data-glide-window>
          <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="testimonial-carousel__slide glide__slide"
              >
                <div
                  class="testimonial-carousel__image relative md:pb-[46.51162790697675%]"
                >
                  <Picture
                    class="md:absolute w-full h-full object-cover"
                    :src="item.image?.src"
                    :srcset="item.image?.srcset"
                    :size-desktop="item.image?.sizes?.Landscape"
                    :size-mobile="item.image?.sizes?.Square"
                    :alt="item.image?.alt"
                  />
                </div>
                <p
                  v-if="item.caption"
                  class="font-body font-normal text-10 leading-140 text-indigo-800 mt-2"
                >
                  {{ item.caption }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="testimonial-carousel__quotes md:col-span-3 md:order-[-1] self-end mt-12 md:mt-0"
      >
        <div class="testimonial-carousel__quotes-wrap relative h-[150px]">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="testimonial-carousel__quote absolute top-0 md:top-auto md:bottom-0 left-0 w-full pt-2 invisible opacity-0 space-y-2 border-t border-solid border-canary transition-all duration-300 ease-in-out"
            :class="{
              '!visible opacity-100 !translate-y-0': activeSlide === index,
            }"
          >
            <p
              class="font-extended font-normal text-20 leading-110 -tracking-[0.01em] text-indigo"
            >
              {{ item.testimonial?.quote }}
            </p>
            <div
              class="font-body font-normal text-14 leading-130 text-indigo-800"
            >
              {{ item.testimonial?.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="testimonial-carousel__controls md:absolute top-[-40px] right-[20px] flex justify-end mt-4 md:mt-0 md:translate-y-[-100%]"
      >
        <ArrowControls size="large" type="light" @prev="prev" @next="next" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import Glide from "@glidejs/glide";
import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";
import ArrowControls from "@/js/components/ArrowControls/ArrowControls.vue";

const props = defineProps({
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  items: { type: Array, default: () => [] },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);

const rootEl = ref(null);
const activeSlide = ref(0);
let glide = null;
let timer = null;

const next = () => glide?.go(">");
const prev = () => glide?.go("<");

const pauseCarousel = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

const playCarousel = () => {
  pauseCarousel();
  if (props.items.length > 1) {
    timer = setInterval(next, 5000);
  }
};

onMounted(async () => {
  await nextTick();
  setTimeout(() => {
    const win = rootEl.value?.querySelector("[data-glide-window]");
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
    playCarousel();
  }, 80);
});

onBeforeUnmount(() => {
  pauseCarousel();
  if (glide) glide.destroy();
});
</script>

<style lang="scss">
@use "@glidejs/glide/src/assets/sass/glide.core" as *;
</style>
