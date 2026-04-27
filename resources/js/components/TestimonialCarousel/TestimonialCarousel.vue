<template>
  <div class="testimonial-carousel space-y-11">
    <div
      class="testimonial-carousel__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="testimonial-carousel__context md:col-span-5">
        <Context
          size="large"
          type="dark"
          :arrow="true"
          :reverse="true"
          :heading="heading"
          :subheading="subheading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
        />
      </div>
    </div>
    <div
      class="testimonial-carousel__inner relative mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
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
                    class="h-full w-full object-cover md:absolute"
                    :src="item.image?.url"
                    :alt="item.image?.alt"
                  />
                </div>
                <p
                  v-if="item.caption"
                  class="mt-2 font-body text-10 leading-140 font-normal text-indigo-800"
                >
                  {{ item.caption }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="testimonial-carousel__quotes mt-12 self-end md:order-[-1] md:col-span-3 md:mt-0"
      >
        <div class="testimonial-carousel__quotes-wrap relative h-[150px]">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="testimonial-carousel__quote invisible absolute top-0 left-0 w-full space-y-2 border-t border-solid border-canary pt-2 opacity-0 transition-all duration-300 ease-in-out md:top-auto md:bottom-0"
            :class="{
              '!visible !translate-y-0 opacity-100': activeSlide === index,
            }"
          >
            <p
              class="font-extended text-20 leading-110 font-normal -tracking-[0.01em] text-indigo"
            >
              {{ item.testimonial.quote }}
            </p>
            <div
              class="font-body text-14 leading-130 font-normal text-indigo-800"
            >
              {{ item.testimonial.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="testimonial-carousel__controls top-[-40px] right-[20px] mt-4 flex justify-end md:absolute md:mt-0 md:translate-y-[-100%]"
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
  subheading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  items: { type: Array, default: () => [] },
});

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
