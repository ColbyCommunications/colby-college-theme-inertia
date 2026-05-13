<template>
  <div class="relative">
    <div
      v-if="isCarouselEnabled"
      ref="rootEl"
      class="article-grid article-grid--carousel mx-auto my-0 w-full max-w-screen-2xl"
    >
      <div data-glide-window>
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <div
              v-for="(item, index) in carouselItems"
              :key="index"
              class="article-grid__item glide__slide"
            >
              <Article
                size="small"
                :image="item.image"
                :subheading="item.subheading"
                :heading="item.heading"
                :border="normalizedBorder"
                :paragraph="item.paragraph"
                :buttons="item.buttons"
                class="pt-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="article-grid__controls mt-8 flex justify-end">
        <ArrowControls size="large" type="light" @prev="prev" @next="next" />
      </div>
    </div>
    <div v-if="!isCarouselEnabled && props.display_posts_method === 'internal'">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
        <div
          v-for="(item, index) in displayItems"
          :key="index"
          class="article-grid__item glide__slide"
          :class="{
            'col-span-12 md:col-span-6': currentColumns === 2,
            'col-span-12 md:col-span-6 lg:col-span-4': currentColumns === 3,
            'col-span-12 md:col-span-6 lg:col-span-3': currentColumns === 4,
          }"
        >
          <Article
            size="small"
            :image="item.image"
            :subheading="item.subheading"
            :heading="item.heading"
            :border="normalizedBorder"
            :paragraph="item.paragraph"
            :buttons="[
              {
                button: {
                  url: item.url,
                  title: cta,
                  type: 'light',
                  size: 'small',
                },
              },
            ]"
            class="pt-4"
          />
        </div>
      </div>
    </div>

    <div v-if="props.display_posts_method === 'api'">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
        <div
          v-for="(item, index) in displayItems"
          :key="index"
          class="article-grid__item glide__slide"
          :class="{
            'col-span-12 md:col-span-6': currentColumns === 2,
            'col-span-12 md:col-span-6 lg:col-span-4': currentColumns === 3,
            'col-span-12 md:col-span-6 lg:col-span-3': currentColumns === 4,
          }"
        >
          <Article
            :apiSource="props.api_source"
            :size="props.size"
            :image="item.image"
            :heading="item.title.rendered"
            :border="normalizedBorder"
            :paragraph="toSummaryText(item.summary)"
            :buttons="[
              {
                button: {
                  url: item.url,
                  title: cta,
                  type: 'light',
                  size: 'small',
                },
              },
            ]"
            class="pt-4"
            :fromApi="true"
          />
        </div>
      </div>
    </div>

    <div
      v-if="
        !isCarouselEnabled &&
        props.display_posts_method === 'manual' &&
        props.accordion_style !== 'accordion'
      "
    >
      <div class="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
        <div
          v-for="(item, index) in normalizeItems(props.items)"
          :key="index"
          class="article-grid__item glide__slide"
          :class="{
            'col-span-12 md:col-span-6': currentColumns === 2,
            'col-span-12 md:col-span-6 lg:col-span-4': currentColumns === 3,
            'col-span-12 md:col-span-6 lg:col-span-3': currentColumns === 4,
          }"
        >
          <Article
            size="small"
            :image="item.image"
            :subheading="item.subheading"
            :heading="item.heading"
            :border="normalizedBorder"
            :paragraph="item.paragraph"
            :buttons="item.buttons"
            class="pt-4"
          />
        </div>
      </div>
    </div>

    <div v-if="showLoadMore" class="mt-10 flex justify-center">
      <button
        @click="loadMore"
        class="btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-600 bg-indigo-600 px-6 py-3 font-body text-14 leading-130 font-bold text-white !no-underline transition-all duration-200 ease-in-out hover:bg-indigo-700"
      >
        <span class="btn__text">See More</span>
      </button>
    </div>

    <!-- Accordion style (non-API) -->
    <div
      v-if="
        props.display_posts_method === 'manual' &&
        props.accordion_style === 'accordion'
      "
      ref="gridContainer"
      class="article-grid relative mx-auto my-0 grid w-full max-w-screen-2xl gap-10"
      :class="gridColsClass"
    >
      <div
        v-for="(item, i) in props.items"
        :key="i"
        class="relative"
        :class="[
          'article-grid__item transition-transform duration-500',
          expandedIndex === i ? 'z-10 bg-white' : 'z-0',
        ]"
        :style="expandedIndex === i ? pickedUpStyle(i) : {}"
        :ref="(el) => (itemRefs[i] = el)"
      >
        <article
          class="article space-y-4"
          :class="{ 'border-t-2 border-solid border-indigo-600 pt-1': border }"
        >
          <a
            v-if="item.image?.src"
            class="article__image relative block overflow-hidden"
            :href="item.url || '#'"
            :aria-label="item.heading"
          >
            <img
              decoding="async"
              class="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
              :src="item.image.src"
              :alt="item.image.alt || item.heading || ''"
            />
          </a>

          <div
            class="context w-full space-y-5"
            :ref="(el) => (contextRefs[i] = el)"
          >
            <component is="text-group" class="text-group">
              <div class="mr-6 flex shrink-0 flex-col justify-start">
                <div
                  v-if="item.heading && item.subheading"
                  class="text-group__subheading font-extended text-12 leading-130 font-bold tracking-8 text-azure uppercase"
                >
                  {{ item.subheading }}
                </div>
                <h2
                  class="text-group__heading -tracking-3 text-left font-extended text-20 leading-110 font-normal text-indigo"
                  :class="{ 'lg:text-16': columns == 4 }"
                  v-html="item.heading"
                />
              </div>
            </component>

            <div class="button-group mt-4 flex flex-wrap gap-4">
              <button
                type="button"
                class="btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-[#dfecfd] bg-[#fafbff] px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-[#EEF4FF] focus:bg-[#EEF4FF] focus:outline focus:outline-2 focus:outline-canary"
                @click="toggleAccordion(i)"
              >
                <span class="btn__text">
                  {{ expandedIndex === i ? "Close" : "Read More" }}
                </span>
              </button>
            </div>
          </div>
        </article>

        <!-- MOBILE: Inline Accordion (pushes content down) -->
        <Transition
          v-if="isMobileAccordion()"
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-if="expandedIndex === i"
            class="mt-4 flex w-full flex-col border-[1px] border-[#d2dbea] bg-[#eef4ff] text-14 text-indigo-800"
            :style="{ maxHeight: '80vh' }"
          >
            <div class="flex w-full justify-end pt-4 pr-4 pl-4">
              <button @click="toggleAccordion(i)" class="cursor-pointer">
                <span class="material-symbols-sharp text-indigo-800"
                  >close</span
                >
              </button>
            </div>

            <div
              class="text-group mb-4 flex-grow overflow-auto p-4 text-20 sm:text-18 md:text-20 lg:text-20"
              v-html="item.paragraph"
            ></div>

            <div
              v-if="Array.isArray(items[i].buttons)"
              class="mt-auto flex justify-end px-4 pb-4"
            >
              <a
                v-for="(buttonObj, buttonIndex) in items[i].buttons"
                :key="buttonIndex"
                :href="buttonObj.button.url"
                :target="buttonObj.button.target || '_self'"
                class="btn group ml-2 inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-[#e7f0fe] bg-[#fafbff] px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-[#EEF4FF] focus:bg-[#EEF4FF] focus:outline focus:outline-2 focus:outline-canary"
              >
                {{ buttonObj.button.title }}
              </a>
            </div>
          </div>
        </Transition>

        <!-- DESKTOP: Side-Flyout Accordion -->
        <Transition
          v-else
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="expandedIndex === i"
            class="absolute top-0 flex flex-col border-[1px] border-[#d2dbea] bg-[#eef4ff] text-14 text-indigo-800"
            :class="
              accordionDirection(i) === 'right'
                ? 'left-full ml-4'
                : 'right-full mr-4'
            "
            :style="{
              width: accordionWidth,
              height: calculateAccordionHeight(i),
            }"
          >
            <div
              :class="[
                'flex w-full pt-4 pr-4 pl-4',
                accordionDirection(i) === 'left'
                  ? 'justify-end'
                  : 'justify-start',
              ]"
            >
              <button @click="toggleAccordion(i)" class="cursor-pointer">
                <span class="material-symbols-sharp text-indigo-800"
                  >close</span
                >
              </button>
            </div>

            <div
              class="text-group mb-4 flex-grow overflow-auto p-4 sm:text-18 md:text-20 lg:text-20"
              v-html="item.paragraph"
            ></div>

            <div
              v-if="Array.isArray(items[i].buttons)"
              :class="[
                'mt-auto flex px-4 pb-4',
                accordionDirection(i) === 'left'
                  ? 'justify-start'
                  : 'justify-end',
              ]"
            >
              <a
                v-for="(buttonObj, buttonIndex) in items[i].buttons"
                :key="buttonIndex"
                :href="buttonObj.button.url"
                :target="buttonObj.button.target || '_self'"
                :class="[
                  'btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-[#e8f1fe] bg-[#fafbff] px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-[#EEF4FF] focus:bg-[#EEF4FF] focus:outline focus:outline-2 focus:outline-canary',
                  accordionDirection(i) === 'left' ? 'mr-2' : 'ml-2',
                ]"
              >
                {{ buttonObj.button.title }}
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
} from "vue";
import Glide from "@glidejs/glide";
import TextGroup from "../TextGroup/TextGroup.vue";
import Article from "../Article/Article.vue";
import Picture from "../Picture/Picture.vue";
import ArrowControls from "../ArrowControls/ArrowControls.vue";

const props = defineProps({
  display_posts_method: { type: String, default: "internal" },
  render_api: { type: Boolean, default: false },
  api_source: { type: String, default: "" },
  external_media_api: { type: String, default: "" },
  range: { type: [Number, String], default: 6 },
  post_limit: { type: [Number, String], default: -1 },
  size: { type: String, default: "" },
  image_orientation: { type: String, default: "rectangle" },
  columns: { type: Number, default: 3 },
  border: { type: [Boolean, Number, String], default: false },
  render_posts_category: { type: Number, default: 1 },
  cta: { type: String, default: "Read Story" },
  accordion_style: { type: String, default: "default" },
  items: { type: Array, default: () => [] },
  carousel: { type: Boolean, default: false },
  initial_items: { type: Array, default: () => [] },
  initial_visible_count: { type: [Number, String], default: 12 },
  hydrated_from_server: { type: Boolean, default: false },
  should_client_refresh: { type: Boolean, default: false },
});

console.log(props);

const expandedIndex = ref(null);
const itemRefs = reactive([]);
const contextRefs = reactive([]);
const accordionWidth = ref("auto");
const currentColumns = ref(props.columns);
const gridContainer = ref(null);
const visibleCount = ref(Number(props.initial_visible_count) || 12);

const getColumnsFromBreakpoint = () => {
  const w = window.innerWidth;

  if (w >= 1280) return 4; // xl
  if (w >= 1024) return 3; // lg
  if (w >= 640) return 2; // md/sm
  return 1;
};

const gridColsClass = computed(() => {
  if (currentColumns.value === 4) {
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  }
  if (currentColumns.value === 3) {
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  }
  return "grid-cols-1 sm:grid-cols-2";
});

const normalizedBorder = computed(() => {
  if (typeof props.border === "string") {
    return (
      props.border !== "" && props.border !== "0" && props.border !== "false"
    );
  }
  return Boolean(props.border);
});

const toSummaryText = (value) => {
  if (Array.isArray(value)) return value[0] || "";
  return value || "";
};

const isMobileAccordion = () => currentColumns.value === 1;

const allItems = computed(() => {
  if (props.display_posts_method === "manual") {
    return props.items || [];
  }

  return props.initial_items || [];
});

const displayItems = computed(() => {
  if (props.display_posts_method === "manual") {
    return allItems.value;
  }

  return allItems.value.slice(0, visibleCount.value);
});

const isCarouselEnabled = computed(() => {
  return (
    props.carousel === true &&
    ["internal", "manual"].includes(props.display_posts_method)
  );
});

const carouselItems = computed(() => {
  if (props.display_posts_method === "manual") {
    return normalizeItems(props.items);
  }

  return normalizeItems(displayItems.value);
});

const showLoadMore = computed(() => {
  if (isCarouselEnabled.value) return false;
  if (props.display_posts_method !== "internal") return false;

  return displayItems.value.length < allItems.value.length;
});

function normalizeImage(image) {
  if (!image || typeof image !== "object") {
    return image;
  }

  return {
    ...image,
    src: image.src || image.url || "",
  };
}

/**
 * Normalize a single item object:
 * - item.image.src guaranteed if image exists
 */
function normalizeItem(item) {
  if (!item || typeof item !== "object") {
    return item;
  }

  return {
    ...item,
    image: item.image ? normalizeImage(item.image) : item.image,
  };
}

/**
 * Normalize any items array
 */
function normalizeItems(items = []) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.map(normalizeItem);
}

const loadMore = () => {
  visibleCount.value += 12;
};

const updateColumns = () => {
  currentColumns.value = getColumnsFromBreakpoint();

  if (expandedIndex.value !== null) {
    expandedIndex.value = null;
    accordionWidth.value = "auto";
  }
};

const toggleAccordion = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
  nextTick(() => {
    if (expandedIndex.value !== null && !isMobileAccordion.value) {
      printWidths(expandedIndex.value);
    } else {
      accordionWidth.value = "auto";
    }
  });
};

const accordionDirection = (index) => {
  if (isMobileAccordion.value) return "down";
  const positionInRow = index % currentColumns.value;
  return positionInRow < currentColumns.value / 2 ? "right" : "left";
};

const pickedUpStyle = (index) => {
  if (isMobileAccordion()) return {};

  const cols = currentColumns.value;
  const positionInRow = index % cols;

  const gap = 2.5;

  if (positionInRow === 0 || positionInRow === cols - 1) {
    return {};
  }

  const direction = accordionDirection(index);

  if (direction === "right") {
    return {
      transform: `translateX(calc(-100% - ${gap}rem))`,
      zIndex: 10,
    };
  }

  return {
    transform: `translateX(calc(100% + ${gap}rem))`,
    zIndex: 10,
  };
};

const printWidths = (index) => {
  const currentItem = itemRefs[index];
  if (!currentItem) return;

  const currentWidth = currentItem.offsetWidth;
  const container = currentItem.closest(".article-grid");
  if (!container) return;

  const containerWidth = container.clientWidth;
  const remainingWidth = containerWidth - currentWidth;

  accordionWidth.value = `${remainingWidth - 16}px`;
};

const calculateAccordionHeight = (index) => {
  const itemEl = itemRefs[index];
  if (!itemEl) return "auto";

  return `${itemEl.offsetHeight}px`;
};

const rootEl = ref(null);
const glide = ref(null);

function destroyGlide() {
  if (glide.value) {
    glide.value.destroy();
    glide.value = null;
  }
}

function buildGlide() {
  if (!isCarouselEnabled.value) return;

  const win = rootEl.value?.querySelector("[data-glide-window]");
  if (!win || carouselItems.value.length === 0) return;

  destroyGlide();

  glide.value = new Glide(win, {
    type: "carousel",
    gap: 40,
    animationDuration: 600,
    autoplay: false,
    perView: Number(props.columns) || 3,
    breakpoints: {
      1024: {
        perView: Math.min(Number(props.columns) || 3, 2),
      },
      767: {
        perView: 1,
      },
    },
  });

  glide.value.mount();
}

function next() {
  glide.value?.go(">");
}

function prev() {
  glide.value?.go("<");
}

async function initializeArticleGridCarousel() {
  await nextTick();

  setTimeout(() => {
    buildGlide();
  }, 80);
}

onMounted(async () => {
  updateColumns();
  window.addEventListener("resize", updateColumns);

  if (isCarouselEnabled.value) {
    await initializeArticleGridCarousel();
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateColumns);
  destroyGlide();
});

watch(
  () => [isCarouselEnabled.value, carouselItems.value.length, props.columns],
  async () => {
    if (isCarouselEnabled.value) {
      await initializeArticleGridCarousel();
    } else {
      destroyGlide();
    }
  },
);
</script>
<style lang="scss">
@use "@glidejs/glide/src/assets/sass/glide.core" as *;
</style>
