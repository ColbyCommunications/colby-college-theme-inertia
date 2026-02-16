<template>
  <div
    class="carousel__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
  >
    <!-- Left Context -->
    <div
      class="carousel__context items-center md:col-span-4 md:flex lg:col-span-3"
    >
      <!-- BASIC (non-API) uses the shared Context component -->
      <Context
        v-if="mode === 'basic'"
        size="large"
        :type="type"
        :arrow="true"
        :reverse="true"
        :heading="heading"
        :paragraph="paragraph"
        :buttons="{ items: basicButtonItems }"
      />

      <!-- API variants render a tiny, normalized context -->
      <div v-else class="context w-full space-y-5">
        <TextGroup
          size="small"
          :subheading="mode !== 'latest' ? subheading : ''"
          :heading="heading"
          :paragraph="paragraph"
        />

        <ButtonGroup
          :items="apiLeftButtonItems"
          size="small"
        />

        <!-- Inline controls (for grid modes) -->
        <div
          v-if="mode !== 'latest' && mode !== 'basic'"
          class="arrow-controls space-x-4 pt-2"
        >
          <button
            class="arrow-btn inline-flex h-12 w-12 items-center justify-center rounded border border-solid border-indigo-300 bg-indigo-100 transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200"
            @click="changeSlide('prev')"
          >
            <span class="sr-only">Previous</span>
            <svg class="arrow-btn__arrow h-5 w-5" viewBox="0 0 26.9 26.5">
              <path
                d="M26.9 12.7h-25L14 .7l-.8-.7L0 13.2l13.2 13.3.8-.7L1.9 13.7h25z"
              />
            </svg>
          </button>
          <button
            class="arrow-btn inline-flex h-12 w-12 items-center justify-center rounded border border-solid border-indigo-300 bg-indigo-100 transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200"
            @click="changeSlide('next')"
          >
            <span class="sr-only">Next</span>
            <svg
              class="arrow-btn__arrow h-5 w-5 rotate-180"
              viewBox="0 0 26.9 26.5"
            >
              <path
                d="M26.9 12.7h-25L14 .7l-.8-.7L0 13.2l13.2 13.3.8-.7L1.9 13.7h25z"
              />
            </svg>
          </button>
        </div>
      </div>
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
              v-if="mode === 'basic'"
              v-for="(item, idx) in items"
              :key="'basic-' + idx"
              class="carousel__slide glide__slide"
            >
              <Picture
                class="h-full w-full object-cover"
                :size-desktop="item.image?.sizes?.Rectangle"
                :size-mobile="item.image?.sizes?.Rectangle_mobile"
                :alt="item.image?.alt || ''"
              />
            </div>

            <!-- API modes share the same markup, just different data shape -->
            <div
              v-else
              v-for="(it, idx) in slides"
              :key="'api-' + idx"
              class="carousel__slide glide__slide"
            >
              <div class="relative pb-[56.578947368421055%]">
                <picture>
                  <source
                    media="(min-width:768px)"
                    :srcset="firstOg(it)?.url || ''"
                  />
                  <img
                    class="absolute top-0 left-0 h-full w-full object-cover"
                    :srcset="buildSrcset(firstOg(it)?.url)"
                    :sizes="'(max-width: 767px) 100vw, 50vw'"
                    :alt="it.yoast_head_json?.og_description || ''"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide context under the window (shared) -->
      <div class="carousel__slides-context relative mt-6 h-80 md:h-40">
        <!-- BASIC: use Context -->
        <div
          v-if="mode === 'basic'"
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

        <!-- API: text-only context -->
        <div
          v-else
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
              v-if="mode === 'latest'"
              :items="[{ button: { url: it.guid?.rendered || '#', title: cta, target: '_blank' } }]"
              size="small"
            />
          </div>
        </div>
      </div>

      <!-- Controls (for basic + latest) -->
      <div
        v-if="mode === 'basic' || mode === 'latest'"
        class="carousel__controls-wrap flex justify-end"
      >
        <div class="carousel__controls">
          <ArrowControls size="large" type="light" @prev="prev" @next="next" />
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
import axios from "axios";
import Glide from "@glidejs/glide";
import Context from "../Context/Context.vue";
import ArrowControls from "../ArrowControls/ArrowControls.vue";
import TextGroup from "../TextGroup/TextGroup.vue";
import ButtonGroup from "../ButtonGroup/ButtonGroup.vue";
import Picture from "../Picture/Picture.vue";

/* =========================
     Props (normalized)
  ========================= */
const props = defineProps({
  render_api: { type: [Boolean, Number, String], default: false },
  api: { type: String, default: "" },

  // layout / content
  type: { type: String, default: "dark" },
  heading: { type: String, default: "News" },
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

  items: { type: Array, default: () => [] }, // non-API slides
  size: { type: String, default: "small" },

  // glide
  perView: { type: Number, default: 1 },
  gap: { type: Number, default: 0 },

  // autoplay
  autoplay: { type: Boolean, default: true },
  interval: { type: [Number, String], default: 5000 },
});

/* =========================
     Derived state
  ========================= */
const isApi = computed(() => ["true", "1", 1, true].includes(props.render_api));
const mode = computed(() => {
  if (!isApi.value) return "basic";
  if (props.api === "Latest News") return "latest";
  if (props.api === "Academic News") return "academic";
  if (props.api === "Faculty Accomplishments") return "faculty";
  return "latest";
});

const subheading = ref(""); // only used for academic/faculty display
watch(
  mode,
  (m) => {
    subheading.value = m === "academic" || m === "faculty" ? props.api : "";
  },
  { immediate: true },
);

const apiLeftButtonItems = computed(() =>
  (mode.value === "faculty" ? props.FAbuttons : props.buttons).map((btn) => ({
    button: { url: btn.url, title: btn.title, target: "_blank" },
  })),
);

const basicButtonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);

/* =========================
     Data (API)
  ========================= */
const endpoint = computed(() => {
  if (!isApi.value) return undefined;
  switch (mode.value) {
    case "latest":
      return "https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&tags=561&_embed=1";
    case "academic":
      return "https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&categories=8,12,14,15&_embed=1";
    case "faculty":
      return "https://news.colby.edu/wp-json/wp/v2/external_post?story_type_slug=faculty-accomplishments&per_page=5&_embed=1";
    default:
      return undefined;
  }
});

const featuredNews = ref([]);

async function fetchApi() {
  if (!endpoint.value) return;

  const { data } = await axios.get(endpoint.value);
  featuredNews.value =
    mode.value === "faculty"
      ? data.map((item) => ({
          yoast_head_json: { og_image: [{ url: "" }] },
          title: {
            rendered: item.title.rendered.replace(
              /<(?!\/?(i|em)\b)[^>]+>/gi,
              "",
            ),
          },
          "post-meta-fields": {
            primary_category: "",
            summary: [
              `${item.content.rendered
                .replace(/<(?!\/?(i|em)\b)[^>]+>/gi, "")
                .substring(0, 120)}...`,
            ],
          },
          guid: { rendered: item.external_url },
        }))
      : data;
}

const slides = computed(() =>
  mode.value === "basic" ? props.items : featuredNews.value,
);

/* =========================
     Glide + autoplay
  ========================= */
const rootEl = ref(null);
const activeSlide = ref(0);
const glide = ref(null);

function buildGlide() {
  const win = rootEl.value?.querySelector("[data-glide-window]");
  if (!win) return;
  glide.value = new Glide(win, {
    type: "carousel",
    gap: props.gap,
    animationDuration: 600,
    // CHANGE THIS LINE:
    // Old: autoplay: 4000,
    // New: set to false so it doesn't conflict with your startAutoplay function
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

onMounted(async () => {
  if (isApi.value) await fetchApi();
  await nextTick();
  // brief delay to ensure slides exist
  setTimeout(() => {
    buildGlide();
    startAutoplay();
  }, 80);
});

onBeforeUnmount(stopAutoplay);
watch([slides, intervalMs], startAutoplay, { deep: true });

/* =========================
     Tiny helpers (display)
  ========================= */
const decodeHtmlEntities = (input) => {
  const doc = new DOMParser().parseFromString(input || "", "text/html");
  return doc.documentElement.textContent || "";
};

const firstOg = (it) => it?.yoast_head_json?.og_image?.[0] || null;
const title = (it) => decodeHtmlEntities(it?.title?.rendered || "");
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
