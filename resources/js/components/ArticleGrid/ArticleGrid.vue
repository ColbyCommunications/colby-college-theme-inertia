<template>
  <div class="relative">
    <div v-if="props.display_posts_method === 'internal'">
      <div class="grid grid-cols-12 gap-10">
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
      <div class="grid grid-cols-12 gap-10">
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

    <div v-if="props.display_posts_method === 'manual'">
      <div class="grid grid-cols-12 gap-10">
        <div
          v-for="(item, index) in props.items"
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
      v-if="!props.render_api && props.style === 'accordion'"
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
          :class="{
            'border-t-2 border-solid border-indigo-600 pt-1': normalizedBorder,
          }"
        >
          <a
            v-if="item.image?.url"
            class="article__image relative block overflow-hidden"
            :href="item.url"
            :aria-label="item.heading"
          >
            <Picture
              class="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
              :src="item.image.url"
              :alt="item.title"
            />
          </a>

          <div
            class="context w-full space-y-5"
            :ref="(el) => (contextRefs[i] = el)"
          >
            <TextGroup class="text-group">
              <div class="mr-6 flex shrink-0 flex-col justify-start">
                <div
                  v-if="item.heading && item.subheading"
                  class="text-group__subheading font-extended text-12 leading-130 font-bold tracking-8 text-azure uppercase"
                >
                  {{ item.subheading }}
                </div>
                <h2
                  class="text-group__heading -tracking-3 text-left font-extended text-20 leading-110 font-normal text-indigo"
                  :class="{ 'lg:text-16': currentColumns === 4 }"
                  v-html="item.heading"
                />
              </div>
            </TextGroup>

            <div class="button-group mt-4 flex flex-wrap gap-4">
              <a
                class="btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-[#eef4ff] focus:bg-[#eef4ff] focus:outline focus:outline-2 focus:outline-canary"
                @click="toggleAccordion(i)"
              >
                <button class="btn__text">
                  {{ expandedIndex === i ? "Close" : "Read More" }}
                </button>
              </a>
            </div>
          </div>
        </article>

        <Transition
          v-if="isMobileAccordion"
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-if="expandedIndex === i"
            class="accordion__flyout mt-4 flex w-full flex-col border-[1px] border-[#b7c2d5] bg-[#eef4ff] text-14 text-indigo-800"
            :style="{ maxHeight: '80vh' }"
          >
            <div class="flex w-full justify-end pt-4 pr-4 pl-4">
              <button @click="toggleAccordion(i)">
                <span class="material-symbols-sharp text-indigo-800">close</span>
              </button>
            </div>

            <div
              class="text-group mb-4 flex-grow overflow-auto p-4 text-20 sm:text-18 md:text-20 lg:text-20"
              v-html="item.paragraph"
            />
            <div
              v-if="Array.isArray(props.items[i].buttons)"
              class="mt-auto flex justify-end px-4 pb-4"
            >
              <a
                v-for="(buttonObj, buttonIndex) in props.items[i].buttons"
                :key="buttonIndex"
                :href="buttonObj.button.url"
                :target="buttonObj.button.target || '_self'"
                class="btn group ml-2 inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-[#eef4ff] focus:bg-[#eef4ff] focus:outline focus:outline-2 focus:outline-canary"
              >
                {{ buttonObj.button.title }}
              </a>
            </div>
          </div>
        </Transition>

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
            class="accordion__flyout absolute top-0 flex flex-col border-[1px] border-[#b7c2d5] bg-[#eef4ff] text-14 text-indigo-800"
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
              <button @click="toggleAccordion(i)">
                <span class="material-symbols-sharp text-indigo-800">close</span>
              </button>
            </div>

            <div
              class="text-group mb-4 flex-grow overflow-auto p-4 sm:text-18 md:text-20 lg:text-20"
              v-html="item.paragraph"
            />
            <div
              v-if="Array.isArray(props.items[i].buttons)"
              :class="[
                'mt-auto flex px-4 pb-4',
                accordionDirection(i) === 'left'
                  ? 'justify-start'
                  : 'justify-end',
              ]"
            >
              <a
                v-for="(buttonObj, buttonIndex) in props.items[i].buttons"
                :key="buttonIndex"
                :href="buttonObj.button.url"
                :target="buttonObj.button.target || '_self'"
                :class="[
                  'btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-[#eef4ff] focus:bg-[#eef4ff] focus:outline focus:outline-2 focus:outline-canary',
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
} from "vue";
import TextGroup from "../TextGroup/TextGroup.vue";
import Article from "../Article/Article.vue";
import Picture from "../Picture/Picture.vue";

const props = defineProps({
  display_posts_method: { type: String, default: "internal" },
  render_api: { type: Boolean, default: false },
  api_source: { type: String, default: "" },
  external_media_api: { type: String, default: "" },
  range: { type: [Number, String], default: 6 },
  post_limit: { type: [Number, String], default: -1 },
  size: { type: String, default: "" },
  columns: { type: Number, default: 3 },
  image_orientation: { type: String, default: "" },
  border: { type: [Boolean, Number, String], default: false },
  render_posts_category: { type: Number, default: 1 },
  cta: { type: String, default: "Read Story" },
  style: { type: String, default: "" },
  items: { type: Array, default: () => [] },

  initial_items: { type: Array, default: () => [] },
  initial_visible_count: { type: [Number, String], default: 12 },
  hydrated_from_server: { type: Boolean, default: false },
  should_client_refresh: { type: Boolean, default: false },
});

const expandedIndex = ref(null);
const itemRefs = reactive([]);
const contextRefs = reactive([]);
const accordionWidth = ref("auto");
const currentColumns = ref(parseInt(props.columns, 10));
const gridContainer = ref(null);
const visibleCount = ref(Number(props.initial_visible_count) || 12);

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
      props.border !== "" &&
      props.border !== "0" &&
      props.border !== "false"
    );
  }
  return Boolean(props.border);
});

const toSummaryText = (value) => {
  if (Array.isArray(value)) return value[0] || "";
  return value || "";
};

const isMobileAccordion = computed(() => currentColumns.value === 1);

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

const showLoadMore = computed(() => {
  if (props.display_posts_method !== "internal") return false;
  return displayItems.value.length < allItems.value.length;
});

const loadMore = () => {
  visibleCount.value += 12;
};

const updateColumns = () => {
  const container = gridContainer.value;
  if (!container || !container.children.length) return;

  const itemWidth = container.children[0].offsetWidth;
  const containerWidth = container.clientWidth;
  const newCols = Math.floor(containerWidth / itemWidth) || 1;

  if (newCols !== currentColumns.value) {
    currentColumns.value = newCols;
    if (expandedIndex.value !== null) {
      expandedIndex.value = null;
      accordionWidth.value = "auto";
    }
  } else {
    currentColumns.value = newCols;
  }

  if (expandedIndex.value !== null && !isMobileAccordion.value) {
    printWidths(expandedIndex.value);
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
  if (isMobileAccordion.value) return {};
  const positionInRow = index % currentColumns.value;
  const gap = "1.25rem";

  if (positionInRow === 0 || positionInRow === currentColumns.value - 1) {
    return {};
  }

  return accordionDirection(index) === "right"
    ? { transform: `translateX(calc(-100% + -${gap}))`, zIndex: 10 }
    : { transform: `translateX(calc(100% + ${gap}))`, zIndex: 10 };
};

const printWidths = (index) => {
  const currentItem = itemRefs[index];
  if (!currentItem) return;

  const currentWidth = currentItem.offsetWidth;
  const container = currentItem.closest(".article-grid");
  if (!container) return;

  const containerWidth = container.clientWidth;
  const remainingWidth = containerWidth - currentWidth;
  const adjustedWidth = remainingWidth - 16;
  accordionWidth.value = `${adjustedWidth}px`;
};

const calculateAccordionHeight = (index) => {
  const itemEl = itemRefs[index];
  const contextEl = contextRefs[index];
  if (!itemEl || !contextEl) return "auto";
  return `${itemEl.offsetHeight}px`;
};

onMounted(() => {
  updateColumns();
  window.addEventListener("resize", updateColumns);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateColumns);
});
</script>