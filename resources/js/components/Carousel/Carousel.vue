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
      <div
        class="carousel__controls-wrap flex justify-end"
      >
        <div class="carousel__controls">
          <ArrowControls size="large" type="light" @prev="prev" @next="next" />
        </div>
      </div>
    </div>
  </div>
  <div
      v-if="render_api && mode == 'latest'"
      class="carousel__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
  >
      <div class="carousel__context md:col-span-4 lg:col-span-3 md:flex items-center">
          <div class="context space-y-5">
            <TextGroup
              :size="currentSize"
              :subheading="currentSubheading"
              :heading="heading"
              :paragraph="paragraph"
            />
            <ButtonGroup
              :items="buttons"
              :size="currentSize"
            />
          </div>
      </div>
      <div
          class="carousel__main md:col-start-5 md:col-span-8 mt-12 md:mt-0"
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
                  class="carousel__slides-context-wrap absolute top-0 left-0 w-full invisible opacity-0 translate-y-[60px] transition-all duration-300 ease-in-out"
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
          <div class="carousel__controls-wrap flex justify-end">
            <div class="carousel__controls">
                <ArrowControls size="large" type="light" @prev="prev" @next="next" />
            </div>
          </div>
      </div>
  </div>
  <div
      v-if="render_api && api == 'Academic News'"
      class="article-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto space-y-16 md:space-y-0"
  >
      <div class="article-section__intro md:col-span-4 lg:col-span-3 space-y-10">
          <div class="context w-full space-y-5">
              <div class="text-group">
                  <div
                      class="text-group__subheading font-extended font-bold text-12 leading-130 tracking-8 text-left text-azure uppercase"
                      v-text="subheading"
                  />
                  <h2
                      class="text-group__heading font-extended font-normal text-28 md:text-20 leading-110 -tracking-3 text-left text-indigo mt-2"
                      v-text="heading"
                  />
                  <p
                      class="text-group__p font-body font-normal text-18 md:text-14 leading-130 text-left text-indigo-800 mt-2"
                      v-text="paragraph"
                  />
              </div>
              <div class="button-group flex flex-wrap gap-4">
                  <a
                      v-for="(button, index) in buttons"
                      class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 font-body font-normal text-10 leading-130 text-indigo bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1 px-3 transition-all duration-200 ease-in-out"
                      :href="button.url"
                  >
                      <span class="btn__text"
                          >{{ button.title }}
                          <div
                              class="btn__border block bg-indigo h-px w-0 group-hover:w-full transition-all duration-200 ease-in-out"
                          ></div
                      ></span>
                  </a>
              </div>
          </div>
          <div class="arrow-controls space-x-4">
              <button
                  class="arrow-btn inline-flex items-center justify-center w-12 h-12 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out"
                  @click="changeSlide('prev')"
              >
                  <span class="sr-only">Previous</span>
                  <svg class="arrow-btn__arrow w-5 h-5" viewBox="0 0 26.9 26.5">
                      <path
                          d="M26.9 12.7h-25L14 .7l-.8-.7L0 13.2l13.2 13.3.8-.7L1.9 13.7h25z"
                      ></path>
                  </svg>
              </button>
              <button
                  class="arrow-btn inline-flex items-center justify-center w-12 h-12 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out"
                  @click="changeSlide('next')"
              >
                  <span class="sr-only">Next</span>
                  <svg class="arrow-btn__arrow w-5 h-5 rotate-180" viewBox="0 0 26.9 26.5">
                      <path
                          d="M26.9 12.7h-25L14 .7l-.8-.7L0 13.2l13.2 13.3.8-.7L1.9 13.7h25z"
                      ></path>
                  </svg>
              </button>
          </div>
      </div>
      <div
          class="article-section__grid md:col-start-5 md:col-span-8"
          @mouseEnter="pauseCarousel()"
          @mouseOut="playCarousel()"
      >
          <div
              class="article-grid max-w-screen-2xl my-0 mx-auto"
              data-glide-window
              ref="window"
          >
              <div class="glide__track" data-glide-el="track">
                  <div class="glide__slides">
                      <div
                          v-for="(item, index) in featuredNews"
                          class="article-grid__item glide__slide"
                      >
                          <article class="article space-y-4">
                              <a
                                  v-if="item.yoast_head_json.og_image[0].url"
                                  class="article__image relative block overflow-hidden"
                                  :href="item.guid.rendered"
                              >
                                  <picture>
                                      <source
                                          media="(min-width:768px)"
                                          :srcset="item.yoast_head_json.og_image[0].url"
                                      />
                                      <img
                                          class="w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                                          :src="item.yoast_head_json.og_image[0].url"
                                          :alt="item.yoast_head_json.og_description"
                                      />
                                  </picture>
                              </a>
                              <div class="context w-full space-y-5">
                                  <div class="text-group">
                                      <div
                                          v-if="item['post-meta-fields'].primary_category"
                                          class="text-group__subheading font-extended font-bold text-12 leading-130 tracking-8 text-left text-azure uppercase"
                                          v-text="item['post-meta-fields'].primary_category"
                                      />
                                      <h2
                                          class="text-group__heading font-extended font-normal text-20 leading-110 -tracking-3 text-left text-indigo"
                                          :class="{
                                              'mt-2': item['post-meta-fields']
                                                  .primary_category,
                                          }"
                                          v-text="decodeHtmlEntities(item.title.rendered)"
                                      />
                                      <p
                                          class="text-group__p font-body font-normal text-14 leading-130 text-left text-indigo-800 mt-2"
                                          v-text="
                                              decodeHtmlEntities(
                                                  item['post-meta-fields'].summary[0]
                                              )
                                          "
                                      />
                                  </div>
                                  <div class="button-group flex flex-wrap gap-4">
                                      <a
                                          class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 font-body font-normal text-10 leading-130 text-indigo bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1 px-3 transition-all duration-200 ease-in-out"
                                          :href="item.guid.rendered"
                                      >
                                          <span class="btn__text">
                                              {{ cta }}
                                              <div
                                                  class="btn__border block bg-indigo h-px w-0 group-hover:w-full transition-all duration-200 ease-in-out"
                                              ></div>
                                          </span>
                                      </a>
                                  </div>
                              </div>
                          </article>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div
      v-else-if="render_api && api == 'Faculty Accomplishments'"
      class="article-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto space-y-16 md:space-y-0"
  >
      <div class="article-section__intro md:col-span-4 lg:col-span-3 space-y-10">
          <div class="context w-full space-y-5">
              <div class="text-group">
                  <div
                      class="text-group__subheading font-extended font-bold text-12 leading-130 tracking-8 text-left text-azure uppercase"
                      v-text="subheading"
                  />
                  <h2
                      class="text-group__heading font-extended font-normal text-28 md:text-20 leading-110 -tracking-3 text-left text-indigo mt-2"
                      v-text="heading"
                  />
                  <p
                      class="text-group__p font-body font-normal text-18 md:text-14 leading-130 text-left text-indigo-800 mt-2"
                      v-text="paragraph"
                  />
              </div>
              <div class="button-group flex flex-wrap gap-4">
                  <a
                      v-for="(button, index) in FAbuttons"
                      class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 font-body font-normal text-10 leading-130 text-indigo bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1 px-3 transition-all duration-200 ease-in-out"
                      :href="button.url"
                  >
                      <span class="btn__text"
                          >{{ button.title }}
                          <div
                              class="btn__border block bg-indigo h-px w-0 group-hover:w-full transition-all duration-200 ease-in-out"
                          ></div
                      ></span>
                  </a>
              </div>
          </div>
          <div class="arrow-controls space-x-4">
              <button
                  class="arrow-btn inline-flex items-center justify-center w-12 h-12 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out"
                  @click="changeSlide('prev')"
              >
                  <span class="sr-only">Previous</span>
                  <svg class="arrow-btn__arrow w-5 h-5" viewBox="0 0 26.9 26.5">
                      <path
                          d="M26.9 12.7h-25L14 .7l-.8-.7L0 13.2l13.2 13.3.8-.7L1.9 13.7h25z"
                      ></path>
                  </svg>
              </button>
              <button
                  class="arrow-btn inline-flex items-center justify-center w-12 h-12 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out"
                  @click="changeSlide('next')"
              >
                  <span class="sr-only">Next</span>
                  <svg class="arrow-btn__arrow w-5 h-5 rotate-180" viewBox="0 0 26.9 26.5">
                      <path
                          d="M26.9 12.7h-25L14 .7l-.8-.7L0 13.2l13.2 13.3.8-.7L1.9 13.7h25z"
                      ></path>
                  </svg>
              </button>
          </div>
      </div>
      <div
          class="article-section__grid md:col-start-5 md:col-span-8"
          @mouseEnter="pauseCarousel()"
          @mouseOut="playCarousel()"
      >
          <div
              class="article-grid max-w-screen-2xl my-0 mx-auto"
              data-glide-window
              ref="window"
          >
              <div class="glide__track" data-glide-el="track">
                  <div class="glide__slides">
                      <div
                          v-for="(item, index) in featuredNews"
                          class="article-grid__item glide__slide"
                      >
                          <article class="article space-y-4">
                              <a
                                  v-if="item.yoast_head_json.og_image[0].url"
                                  class="article__image relative block overflow-hidden"
                                  :href="item.guid.rendered"
                              >
                                  <picture>
                                      <source
                                          media="(min-width:768px)"
                                          :srcset="item.yoast_head_json.og_image[0].url"
                                      />
                                      <img
                                          class="w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                                          :src="item.yoast_head_json.og_image[0].url"
                                          :alt="item.yoast_head_json.og_description"
                                      />
                                  </picture>
                              </a>
                              <div class="context w-full space-y-5">
                                  <div class="text-group">
                                      <div
                                          v-if="item['post-meta-fields'].primary_category"
                                          class="text-group__subheading font-extended font-bold text-12 leading-130 tracking-8 text-left text-azure uppercase"
                                          v-text="item['post-meta-fields'].primary_category"
                                      />
                                      <h2
                                          class="text-group__heading font-extended font-normal text-20 leading-110 -tracking-3 text-left text-indigo"
                                          :class="{
                                              'mt-2': item['post-meta-fields']
                                                  .primary_category,
                                          }"
                                          v-html="item.title.rendered"
                                      />
                                      <p
                                          class="text-group__p font-body font-normal text-14 leading-130 text-left text-indigo-800 mt-2"
                                          v-html="item['post-meta-fields'].summary[0]"
                                      />
                                  </div>
                                  <div class="button-group flex flex-wrap gap-4">
                                      <a
                                          class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 font-body font-normal text-10 leading-130 text-indigo bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1 px-3 transition-all duration-200 ease-in-out"
                                          :href="item.guid.rendered"
                                      >
                                          <span class="btn__text">
                                              {{ cta }}
                                              <div
                                                  class="btn__border block bg-indigo h-px w-0 group-hover:w-full transition-all duration-200 ease-in-out"
                                              ></div>
                                          </span>
                                      </a>
                                  </div>
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
  render_api: { type: Boolean, default: false },
  api: { type: String, default: "" },

  // layout / content
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

  items: { type: Array, default: () => [] }, // non-API slides
  size: { type: String, default: "small" },

  // glide
  perView: { type: Number, default: 1 },
  gap: { type: Number, default: 0 },

  // autoplay
  autoplay: { type: Boolean, default: true },
  interval: { type: [Number, String], default: 5000 },

  // NEW: server-hydrated data contract
  initial_items: { type: Array, default: () => [] },
  hydrated_from_server: { type: Boolean, default: false },
  should_client_refresh: { type: Boolean, default: false },
});

const currentSubheading = ref(props.subheading)
const currentSize = ref(props.size)


/* =========================
     Derived state
  ========================= */
const isApi = computed(() => ["true", "1", 1, true].includes(props.render_api));
const mode = computed(() => {
  if (!isApi.value) return "basic";

  if (props.api === "Latest News") {
    currentSize.value = 'large';
    return "latest";
  }

  if (props.api === "Academic News"){ 
    currentSubheading.value = props.api;
    return "academic";
  }
  if (props.api === "Faculty Accomplishments"){
    currentSubheading.value = props.api;
    return "faculty";
  }
  return "latest";
});

const apiLeftButtonItems = computed(() => {
  if (mode.value === "faculty") {
    // Added return here
    return props.FAbuttons.map((btn) => ({
      button: { url: btn.url, title: btn.title, target: "_blank" },
    }));
  } else if (props.buttons) {
    // Added return here
    return props.buttons.map((btn) => ({
      button: { url: btn.url, title: btn.title, target: "_blank" },
    }));
  }
  // Optional: return an empty array if no conditions are met
  return []; 
});


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

function decodeEntities(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.documentElement.textContent;
}

async function fetchApi() {
  console.log(endpoint.value);
  if (!endpoint.value) return;

  const data = props.initial_items;
  
  featuredNews.value =
    mode.value === "faculty"
      ? data.map((item) => {
        console.log(item);
      return {
          yoast_head_json: { og_image: [{ url: "" }] },
          title: {
            rendered: decodeEntities(item.title.rendered),
          },
          "post-meta-fields": {
            primary_category: "",
            summary: [
              `${decodeEntities(item["post-meta-fields"].summary[0].substring(0, 120))}...`,
            ],
          },
          guid: { rendered: item.guid.rendered },
        };
      }
      )
    
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
 
  if (isApi.value) {
    fetchApi();
  }
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
