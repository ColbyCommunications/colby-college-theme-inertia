<template>
  <div class="relative">
    <!-- API-rendered grid (internal or api) -->
    <div
      v-if="
        props.display_posts_method === 'internal' ||
        props.display_posts_method === 'api'
      "
      class="mx-auto my-0 grid w-full max-w-screen-2xl grid-cols-12 gap-10"
    >
      <div
        v-for="(item, index) in data"
        :key="index"
        class="article-grid__item glide__slide"
        :class="{
          'col-span-12 md:col-span-6': props.columns === 2,
          'col-span-12 md:col-span-6 lg:col-span-4': props.columns === 3,
          'col-span-12 md:col-span-6 lg:col-span-3': props.columns === 4,
        }"
      >
        <article
          class="article space-y-4"
          :class="[
            props.border
              ? 'border-t-2 border-solid border-indigo-600 pt-1'
              : '',
          ]"
        >
          <div class="context w-full py-4">
            <component is="text-group" class="text-group flex">
              <div
                v-if="props.display_posts_method === 'api'"
                class="mr-6 flex shrink-0 flex-col justify-start"
              >
                <img
                  class="h-[75px] w-[75px] lg:h-[96px] lg:w-[96px]"
                  :src="item.image"
                  :alt="item.title.rendered"
                />
              </div>
              <div>
                <time
                  class="text-left font-extended text-12 leading-130 font-bold tracking-8 text-azure uppercase"
                  >{{ item.date }}</time
                >
                <h2
                  class="text-group__heading -tracking-3 text-left font-extended text-20 leading-110 font-normal text-indigo"
                  :class="{ 'lg:text-16': columns == 4 }"
                  v-html="item.title.rendered"
                />
                <p
                  class="text-group__p mt-2 text-left font-body text-14 leading-130 font-normal text-indigo-800"
                  v-html="item['post-meta-fields'].summary[0]"
                />
              </div>
            </component>
            <div class="button-group mt-4 flex flex-wrap items-end gap-4">
              <a
                class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary"
                :href="item.url"
              >
                <span class="btn__text">
                  {{ cta }}
                  <div
                    class="btn__border block h-px w-0 bg-indigo transition-all duration-200 ease-in-out group-hover:w-full"
                  ></div>
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div v-if="showLoadMore" class="mt-10 flex justify-center">
      <button
        @click="loadMore"
        :disabled="isLoadingMore"
        class="btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-600 bg-indigo-600 px-6 py-3 font-body text-14 leading-130 font-bold text-white !no-underline transition-all duration-200 ease-in-out hover:bg-indigo-700 disabled:opacity-50"
      >
        <span class="btn__text">
          {{ isLoadingMore ? "Loading..." : "See More" }}
        </span>
      </button>
    </div>

    <div v-else>
      <pre>{{ rawProps }}</pre>
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
            'border-t-2 border-solid border-indigo-600 pt-1': props.border,
          }"
        >
          <!-- Image -->
          <a
            v-if="item.image?.sizes?.desktop && item.image?.sizes?.mobile"
            class="article__image relative block overflow-hidden"
            :href="item.url"
            :aria-label="item.heading"
          >
            <picture>
              <source
                media="(min-width: 768px)"
                :srcset="item.image.sizes.desktop"
              />
              <img
                decoding="async"
                class="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
                :src="item.image.sizes.mobile"
                :alt="item.title"
              />
            </picture>
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
                  :class="{ 'lg:text-16': props.columns === 4 }"
                  v-html="item.heading"
                />
              </div>
            </TextGroup>

            <div class="button-group mt-4 flex flex-wrap gap-4">
              <a
                class="btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary"
                @click="toggleAccordion(i)"
              >
                <button class="btn__text">
                  {{ expandedIndex === i ? "Close" : "Read More" }}
                </button>
              </a>
            </div>
          </div>
        </article>

        <!-- MOBILE: inline accordion -->
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
            class="mt-4 flex w-full flex-col border-[1px] border-indigo-500 bg-indigo-200 text-14 text-indigo-800"
            :style="{ maxHeight: '80vh' }"
          >
            <div class="flex w-full justify-end pt-4 pr-4 pl-4">
              <button @click="toggleAccordion(i)">
                <span class="material-icons-sharp text-indigo-800">close</span>
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
                class="btn group ml-2 inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary"
              >
                {{ buttonObj.button.title }}
              </a>
            </div>
          </div>
        </Transition>

        <!-- DESKTOP: side flyout -->
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
            class="absolute top-0 flex flex-col border-[1px] border-indigo-500 bg-indigo-200 text-14 text-indigo-800"
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
                <span class="material-icons-sharp text-indigo-800">close</span>
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
                  'btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary',
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

    <!-- passthrough slot when not API and not accordion -->
    <div
      :class="[
        'article-grid mx-auto my-0 grid w-full max-w-screen-2xl gap-10',
        gridColsClass,
      ]"
      v-if="!props.render_api && style !== 'accordion'"
    >
      <template>
        <div
          v-for="(item, i) in items"
          :key="i"
          v-if="item?.heading"
          :class="['article-grid__item', itemColClass]"
        >
          <!-- replace the path if your component lives elsewhere -->
          <Article v-bind="item" />
        </div>
      </template>
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
import axios from "axios";
// import moment from 'moment';
import TextGroup from "../TextGroup/TextGroup.vue";
import Article from "../Article/Article.vue";

const rawProps = defineProps({
  display_posts_method: { type: String, default: "internal" },
  render_api: { type: Boolean, default: false },
  api_source: { type: String, default: "" },
  external_media_api: { type: String, default: "" },
  range: { type: [Number, String], default: 6 },
  post_limit: { type: [Number, String], default: -1 },
  size: { type: String, default: "" },
  columns: { type: [Number, String], default: 3 },
  image_orientation: { type: String, default: "" },
  border: { type: [Number, String], default: 0 },
  render_posts_category: { type: Number, default: 1 },
  cta: { type: String, default: "Read Story" },
  style: { type: String, default: "" },
  items: { type: Array, default: () => [] },
});

// ---------- Normalize / Coerce ----------
const props = {
  display_posts_method: String(rawProps.display_posts_method || "internal"),
  render_api: Boolean(rawProps.render_api),
  api_source: String(rawProps.api_source || ""),
  external_media_api: String(rawProps.external_media_api || ""),
  range: Number(rawProps.range) || 6,
  post_limit: Number(rawProps.post_limit) || -1,
  size: String(rawProps.size || ""),
  columns: Number(rawProps.columns) || 3,
  image_orientation: String(rawProps.image_orientation || ""),
  border: Number(rawProps.border) || 0,
  render_posts_category: Number(rawProps.render_posts_category || 1),
  cta: String(rawProps.cta || "Read Story"),
  style: String(rawProps.style || ""),
  items: Array.isArray(rawProps.items) ? rawProps.items : [],
};

const data = ref([]);
const expandedIndex = ref(null);
const itemRefs = reactive([]);
const contextRefs = reactive([]);
const accordionWidth = ref("auto");
const currentColumns = ref(props.columns);

const gridContainer = ref(null);

const currentPage = ref(1);
const totalPages = ref(1);
const isLoadingMore = ref(false);
const postsPerPage = 12;

/* Helpers */
const gridColsClass = computed(() => {
  if (props.columns === 4)
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  if (props.columns === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2";
});

const itemColClass = computed(() => {
  if (props.columns === 4) return "md:col-span-2 col-span-4";
  if (props.columns === 3) return "md:col-span-3 col-span-9";
  return "col-span-4";
});

const isMobileAccordion = computed(() => currentColumns.value === 1);

const showLoadMore = computed(() => {
  // Only show if we are internally fetching and haven't loaded all pages
  if (props.display_posts_method !== "internal") return false;

  // If post_limit is -1, pagination is based on totalPages
  if (props.post_limit === -1) {
    return currentPage.value < totalPages.value;
  }

  // If post_limit is set, pagination stops when we reach the limit
  // We check if the next page would exceed the limit
  const totalLoaded = data.value.length;
  return totalLoaded < props.post_limit;
});

const fetchApiData = async (page = 1) => {
  isLoadingMore.value = true;

  // Set the posts per page based on the requirement
  let postsPerRequest = postsPerPage;

  // If a post_limit is set, we calculate how many to fetch on the current page
  // so we don't fetch more than the limit.
  if (props.post_limit !== -1) {
    const remaining = props.post_limit - data.value.length;
    postsPerRequest = Math.min(postsPerRequest, remaining);

    // If we've already hit the limit, stop fetching
    if (remaining <= 0) {
      isLoadingMore.value = false;
      return;
    }
  }

  // Build the internal endpoint dynamically
  const internalPostsEndpoint =
    "/wp-json/wp/v2/posts?categories=" +
    props.render_posts_category +
    "&per_page=" +
    postsPerRequest +
    "&page=" +
    page;

  let finalData = [];

  try {
    if (props.display_posts_method === "api") {
      // Logic for external API remains the same (assuming no pagination needed here)
      const newsPostsEndpoint =
        "https://news.colby.edu/wp-json/custom/v1/external-posts";
      const { data: output } = await axios.get(newsPostsEndpoint);
      // ... (your existing external API filtering/mapping logic) ...

      const filtered = output.filter((item) => {
        if (props.api_source !== "media_coverage") return false;
        const isMedia =
          item.story_type?.[0]?.slug === "media-coverage" &&
          item.content?.rendered;
        if (!isMedia) return false;
        switch (props.external_media_api) {
          case "all_media":
            return true;
          case "president":
            return (
              item.tags && item.tags.some((tag) => tag.name === "president")
            );
          case "highlight":
            return (
              item.tags && item.tags.some((tag) => tag.name === "editors-pick")
            );
          default:
            return false;
        }
      });

      finalData = filtered
        .map((item) => ({
          title: {
            rendered: item.title.rendered.replace(
              /<(?!\/?(i|em)\b)[^>]+>/gi,
              "",
            ),
          },
          "post-meta-fields": {
            summary: [
              `${item.content.rendered.replace(/<(?!\/?(i|em)\b)[^>]+>/gi, "").substring(0, 120)}...`,
            ],
          },
          url: item.external_url,
          image: item.image,
        }))
        .slice(0, props.range);
    } else if (props.display_posts_method === "internal") {
      // Fetch data for the current page
      const response = await axios.get(internalPostsEndpoint);
      const output = response.data;

      // Read pagination headers on the first page load
      if (page === 1) {
        // ⚠️ NOTE: This relies on your WordPress API sending the headers
        // X-WP-TotalPages and X-WP-Total. The default REST API does.
        const totalPagesHeader = response.headers["x-wp-totalpages"];
        if (totalPagesHeader) {
          totalPages.value = Number(totalPagesHeader);
        }
      }

      // Map and format the posts from the current page
      const newPosts = output.map((item) => ({
        title: item.title,
        date: formatWpDate(item.date),
        "post-meta-fields": {
          summary: [
            item.excerpt.rendered
              .replace(/<(?!\/?(i|em)\b)[^>]+>/gi, "")
              .substring(0, 120),
          ],
        },
        url: item.link,
        image: item.featured_media,
      }));

      // Append new posts to the existing data array
      finalData = [...data.value, ...newPosts];

      // Apply post_limit if it is not -1
      if (props.post_limit !== -1) {
        finalData = finalData.slice(0, props.post_limit);
      }
    }

    // Update the reactive data reference
    data.value = finalData;
  } catch (e) {
    console.error("Error fetching API data:", e);
  } finally {
    isLoadingMore.value = false;
  }
};

function formatWpDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

const loadMore = () => {
  if (showLoadMore.value && !isLoadingMore.value) {
    currentPage.value++;
    fetchApiData(currentPage.value);
  }
};

/* Layout / accordion logic */
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
  if (positionInRow === 0 || positionInRow === currentColumns.value - 1)
    return {};
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
  const adjustedWidth = remainingWidth - 16; // Tailwind m-4 (approx) spacing
  accordionWidth.value = `${adjustedWidth}px`;
};

const calculateAccordionHeight = (index) => {
  const itemEl = itemRefs[index];
  const contextEl = contextRefs[index];
  if (!itemEl || !contextEl) return "auto";
  return `${itemEl.offsetHeight}px`;
};

/* Lifecycle */
onMounted(async () => {
  await fetchApiData();
  updateColumns();
  window.addEventListener("resize", updateColumns);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateColumns);
});
</script>
