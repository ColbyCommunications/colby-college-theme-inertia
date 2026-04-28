<template>
  <div
    class="carousel__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    v-if="mode === 'basic'"
  >
    <!-- Left Context -->
    <div
      class="carousel__context items-center md:col-span-4 md:flex lg:col-span-3"
    >
      <!-- BASIC (non-API) uses the shared Context component -->
      <Context
        size="small"
        :type="type"
        :arrow="true"
        :reverse="true"
        :heading="heading"
        :subheading="subheading"
        :paragraph="paragraph"
        :buttons="{ items: basicButtonItems }"
      />
    </div>

    <!-- Right Slides -->
    <div
      class="carousel__main mt-12 md:col-span-8 md:col-start-5 md:mt-0"
      @mouseenter="pauseCarousel"
      @mouseleave="playCarousel"
      ref="rootEl"
    >
      <div class="carousel__window w-full" data-glide-window>
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <!-- BASIC mode uses local items image fields -->
            <div
              v-for="(item, idx) in items"
              :key="'basic-' + idx"
              class="carousel__slide glide__slide"
            >
              <Picture
                class="h-full w-full object-cover"
                :src="item.image?.url"
                :alt="item.image?.alt || ''"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Slide context under the window (shared) -->
      <div class="carousel__slides-context relative mt-6 h-80 md:h-40">
        <!-- BASIC: use Context -->
        <div
          v-for="(item, idx) in items"
          :key="'ctx-basic-' + idx"
          class="carousel__slides-context-wrap invisible absolute top-0 left-0 w-full translate-y-[60px] opacity-0 transition-all duration-300 ease-in-out"
          :class="{
            '!visible !translate-y-0 opacity-100': activeSlide === idx,
          }"
        >
          <Context
            :size="size"
            :type="type"
            :subheading="item.subheading"
            :heading="item.heading"
            :paragraph="item.paragraph"
            :buttons="{ items: item.buttons }"
          />
        </div>
      </div>

      <!-- Controls (for basic + latest) -->
      <div class="carousel__controls-wrap flex justify-end">
        <div class="carousel__controls">
          <ArrowControls size="large" type="light" @prev="prev" @next="next" />
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="render_api && mode == 'latest'"
    class="carousel__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
  >
    <div
      class="carousel__context items-center md:col-span-4 md:flex lg:col-span-3"
    >
      <div class="context space-y-5">
        <TextGroup
          :size="currentSize"
          :subheading="currentSubheading"
          :heading="heading"
          :paragraph="paragraph"
        />
        <ButtonGroup :items="buttons" :size="currentSize" />
      </div>
    </div>
    <div
      class="carousel__main mt-12 md:col-span-8 md:col-start-5 md:mt-0"
      @mouseenter="pauseCarousel"
      @mouseleave="playCarousel"
      ref="rootEl"
    >
      <div class="carousel__window w-full" data-glide-window ref="window">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div
              v-for="(it, idx) in slides"
              class="carousel__slide glide__slide"
              :key="'ctx-api-' + idx"
            >
              <div class="relative pb-[56.578947368421055%]">
                <picture>
                  <source
                    media="(min-width:768px)"
                    :srcset="firstOg(it)?.url || ''"
                  />
                  <img
                    class="absolute top-0 left-0 h-full w-full object-cover"
                    :srcset="buildSrcset(firstOg(it)?.src)"
                    :sizes="'(max-width: 767px) 100vw, 50vw'"
                    :alt="it.yoast_head_json?.og_description || ''"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel__slides-context relative mt-6 h-80 md:h-40">
        <div
          v-for="(it, idx) in slides"
          :key="'ctx-api-' + idx"
          class="carousel__slides-context-wrap invisible absolute top-0 left-0 w-full translate-y-[60px] opacity-0 transition-all duration-300 ease-in-out"
          :class="{
            '!visible !translate-y-0 opacity-100': activeSlide === idx,
          }"
        >
          <div class="context space-y-5">
            <TextGroup
              size="small"
              :static="true"
              :subheading="primaryCategory(it)"
              :heading="title(it)"
              :paragraph="summary(it)"
            />

            <ButtonGroup
              :items="[
                {
                  button: {
                    url: it.guid?.rendered || '#',
                    title: cta,
                    target: '_blank',
                  },
                },
              ]"
              size="small"
            />
          </div>
        </div>
      </div>
      <div class="carousel__controls-wrap flex justify-end">
        <div class="carousel__controls">
          <ArrowControls size="large" type="light" @prev="prev" @next="next" />
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="render_api && mode == 'academic'"
    class="article-section__inner mx-auto my-0 w-full max-w-screen-2xl space-y-16 gap-x-10 px-5 md:grid md:grid-cols-12 md:space-y-0"
  >
    <div class="article-section__intro space-y-10 md:col-span-4 lg:col-span-3">
      <div class="context w-full space-y-5">
        <TextGroup
          :size="currentSize"
          :subheading="currentSubheading"
          :heading="heading"
          :paragraph="paragraph"
        />
        <ButtonGroup :items="buttons" :size="currentSize" />
      </div>
      <div class="carousel__controls">
        <ArrowControls size="large" type="light" @prev="prev" @next="next" />
      </div>
    </div>
    <div
      class="article-section__grid md:col-span-8 md:col-start-5"
      @mouseenter="pauseCarousel"
      @mouseleave="playCarousel"
      ref="rootEl"
    >
      <div
        class="article-grid mx-auto my-0 max-w-screen-2xl"
        data-glide-window
        ref="window"
      >
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div
              v-for="(it, idx) in slides"
              :key="'ctx-api-' + idx"
              class="article-grid__item glide__slide"
            >
              <article class="article space-y-4">
                <a
                  v-if="it.yoast_head_json.og_image[0].url"
                  class="article__image relative block overflow-hidden"
                  :href="it.guid.rendered"
                >
                  <picture>
                    <source
                      media="(min-width:768px)"
                      :srcset="it.yoast_head_json.og_image[0].url"
                    />
                    <img
                      class="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
                      :src="it.yoast_head_json.og_image[0].url"
                      :alt="it.yoast_head_json.og_description"
                    />
                  </picture>
                </a>
                <div class="context w-full space-y-5">
                  <TextGroup
                    size="small"
                    :static="true"
                    :subheading="primaryCategory(it)"
                    :heading="title(it)"
                    :paragraph="summary(it)"
                  />

                  <ButtonGroup
                    :items="[
                      {
                        button: {
                          url: it.guid?.rendered || '#',
                          title: cta,
                          target: '_blank',
                        },
                      },
                    ]"
                    size="small"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else-if="render_api && mode == 'faculty'"
    class="article-section__inner mx-auto my-0 w-full max-w-screen-2xl space-y-16 gap-x-10 px-5 md:grid md:grid-cols-12 md:space-y-0"
  >
    <div class="article-section__intro space-y-10 md:col-span-4 lg:col-span-3">
      <div class="context w-full space-y-5">
        <TextGroup
          :size="currentSize"
          :subheading="currentSubheading"
          :heading="heading"
          :paragraph="paragraph"
        />
        <ButtonGroup :items="apiLeftButtonItems" :size="currentSize" />
      </div>
      <div class="carousel__controls">
        <ArrowControls size="large" type="light" @prev="prev" @next="next" />
      </div>
    </div>
    <div
      class="article-section__grid md:col-span-8 md:col-start-5"
      @mouseenter="pauseCarousel"
      @mouseleave="playCarousel"
      ref="rootEl"
    >
      <div
        class="article-grid mx-auto my-0 max-w-screen-2xl"
        data-glide-window
        ref="window"
      >
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div
              v-for="(it, idx) in slides"
              :key="'ctx-api-' + idx"
              class="article-grid__item glide__slide"
            >
              <article class="article space-y-4">
                <a
                  v-if="it.yoast_head_json.og_image[0].url"
                  class="article__image relative block overflow-hidden"
                  :href="item.guid.rendered"
                >
                  <picture>
                    <source
                      media="(min-width:768px)"
                      :srcset="it.yoast_head_json.og_image[0].url"
                    />
                    <img
                      class="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
                      :src="it.yoast_head_json.og_image[0].url"
                      :alt="it.yoast_head_json.og_description"
                    />
                  </picture>
                </a>
                <div class="context w-full space-y-5">
                  <TextGroup
                    size="small"
                    :static="true"
                    :subheading="primaryCategory(it)"
                    :heading="title(it)"
                    :paragraph="summary(it)"
                  />

                  <ButtonGroup
                    :items="[
                      {
                        button: {
                          url: it.guid?.rendered || '#',
                          title: cta,
                          target: '_blank',
                        },
                      },
                    ]"
                    size="small"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
  defineExpose,
} from "vue";
import Glide from "@glidejs/glide";
import Context from "../Context/Context.vue";
import ArrowControls from "../ArrowControls/ArrowControls.vue";
import TextGroup from "../TextGroup/TextGroup.vue";
import ButtonGroup from "../ButtonGroup/ButtonGroup.vue";
import Picture from "../Picture/Picture.vue";

const props = defineProps({
  render_api: { type: Boolean, default: false },
  api: { type: String, default: "" },

  type: { type: String, default: "dark" },
  heading: { type: String, default: "News" },
  subheading: { type: String, default: "" },
  paragraph: { type: String, default: "Latest from Colby." },
  cta: { type: String, default: "Read Story" },

  buttons: {
    type: Array,
    default: () => [{ url: "https://news.colby.edu/", title: "All News" }],
  },
  FAbuttons: {
    type: Array,
    default: () => [
      {
        url: "https://news.colby.edu/external/faculty-accomplishments/",
        title: "All News",
      },
    ],
  },

  items: { type: Array, default: () => [] },
  size: { type: String, default: "small" },

  perView: { type: Number, default: 1 },
  gap: { type: Number, default: 0 },

  autoplay: { type: Boolean, default: true },
  interval: { type: [Number, String], default: 5000 },

  initial_items: { type: Array, default: () => [] },
  hydrated_from_server: { type: Boolean, default: false },
  should_client_refresh: { type: Boolean, default: false },
});

const currentSubheading = ref(props.subheading);
const currentSize = ref(props.size);

const isApi = computed(() => ["true", "1", 1, true].includes(props.render_api));

const mode = computed(() => {
  if (!isApi.value) return "basic";

  if (props.api === "Latest News") {
    currentSize.value = "large";
    return "latest";
  }

  if (props.api === "Academic News") {
    currentSubheading.value = props.api;
    return "academic";
  }

  if (props.api === "Faculty Accomplishments") {
    currentSubheading.value = props.api;
    return "faculty";
  }

  return "latest";
});

const apiLeftButtonItems = computed(() => {
  if (mode.value === "faculty") {
    return props.FAbuttons.map((btn) => ({
      button: { url: btn.url, title: btn.title, target: "_blank" },
    }));
  }

  return props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: "_blank" },
  }));
});

const basicButtonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);

// Simplified: slides come directly from props
const slides = computed(() =>
  mode.value === "basic" ? props.items : props.initial_items,
);

const rootEl = ref(null);
const activeSlide = ref(0);
const glide = ref(null);

function destroyGlide() {
  if (glide.value) {
    glide.value.destroy();
    glide.value = null;
  }
}

function buildGlide() {
  const win = rootEl.value?.querySelector("[data-glide-window]");
  if (!win || slides.value.length === 0) return;

  destroyGlide();

  glide.value = new Glide(win, {
    type: "carousel",
    gap: props.gap,
    animationDuration: 600,
    autoplay: false,
    perView: props.perView,
  });

  glide.value.on("run", () => {
    activeSlide.value = glide.value.index;
  });

  glide.value.mount();
}

const isPlaying = ref(!!props.autoplay);
const intervalMs = computed(() => Number(props.interval) || 5000);
let timer = null;

function startAutoplay() {
  stopAutoplay();
  if (!isPlaying.value || slides.value.length <= 1) return;
  timer = setInterval(next, intervalMs.value);
}

function stopAutoplay() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function pauseCarousel() {
  isPlaying.value = false;
  stopAutoplay();
}

function playCarousel() {
  if (!isPlaying.value) {
    isPlaying.value = true;
    startAutoplay();
  }
}

function next() {
  if (!glide.value) return;
  glide.value.go(">");
}

function prev() {
  if (!glide.value) return;
  glide.value.go("<");
}

function changeSlide(dir) {
  dir === "next" ? next() : prev();
}

async function initializeCarousel() {
  await nextTick();

  setTimeout(() => {
    buildGlide();
    startAutoplay();
  }, 80);
}

onMounted(async () => {
  await initializeCarousel();
});

onBeforeUnmount(() => {
  stopAutoplay();
  destroyGlide();
});

watch(
  () => slides.value.length,
  async () => {
    await initializeCarousel();
  },
);

watch([intervalMs], startAutoplay);

const decodeHtmlEntities = (input) => {
  const doc = new DOMParser().parseFromString(input || "", "text/html");
  return doc.documentElement.textContent || "";
};

const firstOg = (it) => it?.yoast_head_json?.og_image?.[0] || null;
const title = (it) => it?.title?.rendered;
const summary = (it) =>
  decodeHtmlEntities(it?.["post-meta-fields"]?.summary?.[0] || "");
const primaryCategory = (it) =>
  it?.["post-meta-fields"]?.primary_category || "";

const buildSrcset = (url) => {
  if (!url) return "";
  return [
    `https://colby.edu/cdn-cgi/image/width=320,quality=60/${url} 320w`,
    `https://colby.edu/cdn-cgi/image/width=640,quality=65/${url} 640w`,
    `https://colby.edu/cdn-cgi/image/width=960,quality=70/${url} 960w`,
    `https://colby.edu/cdn-cgi/image/width=1280,quality=70/${url} 1280w`,
  ].join(", ");
};

defineExpose({
  pauseCarousel,
  playCarousel,
  next,
  prev,
  changeSlide,
  activeSlide,
});
</script>

<style lang="scss">
@use "@glidejs/glide/src/assets/sass/glide.core" as *;
</style>
