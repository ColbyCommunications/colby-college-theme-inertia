<template>
  <div class="endpoint-filter">
    <div
      v-if="filters"
      class="section-nav full-bleed !mt-0 overflow-x-auto bg-gray-100 py-6"
    >
      <div class="section-nav__inner flex space-x-10 px-5 lg:justify-center">
        <h2
          class="section-nav__heading text-14 font-bold tracking-8 whitespace-nowrap text-azure uppercase md:text-12"
        >
          Event types:
        </h2>
        <ul class="flex items-center space-x-7 pr-9 md:pr-0">
          <li
            v-for="(filter, index) in filters"
            :key="index"
            class="font-body text-14 leading-130 font-medium whitespace-nowrap text-indigo-800 md:text-10"
          >
            <button
              class="text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo hover:underline"
              :class="{
                '!text-indigo underline': currentEndpoint === filter.url,
              }"
              @click="requestData(filter.url)"
            >
              {{ filter.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="mx-auto my-0 grid w-full max-w-screen-2xl grid-cols-9 gap-10 px-5"
      :class="{ 'mt-14': filters }"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="article-grid__item col-span-9 md:col-span-3"
      >
        <article class="article space-y-4">
          <div class="context w-full space-y-5">
            <div class="text-group--animated text-group">
              <div
                class="text-group__subheading text-left text-12 leading-130 font-bold tracking-8 uppercase"
                :class="[type === 'dark' ? 'text-canary' : 'text-azure']"
              >
                {{ stripHTML(item.date) }}
              </div>

              <h2
                class="text-group__heading -tracking-3 mt-2 text-left text-24 leading-110 font-bold md:text-18"
                :class="[type === 'dark' ? 'text-white' : 'text-indigo']"
                v-html="stripHTML(item.title)"
              ></h2>

              <p
                class="text-group__p mt-2 text-left font-body text-12 leading-130 font-normal !opacity-100 md:text-12"
                :class="[type === 'dark' ? 'text-white' : 'text-indigo-800']"
              >
                {{ stripHTML(item.time) }}
              </p>
            </div>

            <div
              class="button-group--animated button-group flex shrink-0 flex-wrap gap-4"
            >
              <a
                v-if="type === 'light'"
                class="btn group inline-flex !translate-x-0 flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline !opacity-100 outline-offset-[-1px] transition-all duration-200 ease-in-out hover:border-indigo-500 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary"
                :href="item.url"
                target="_blank"
              >
                <span class="btn__text">
                  Learn More
                  <div
                    class="btn__border block h-px w-0 bg-indigo transition-all duration-200 ease-in-out group-hover:w-full"
                  ></div>
                </span>
              </a>

              <a
                v-if="type === 'dark'"
                class="btn group inline-flex !translate-x-0 flex-row items-center space-x-1.5 rounded border border-solid border-indigo-800 bg-indigo/20 px-3 py-1 font-body text-10 leading-130 font-normal text-white !no-underline !opacity-100 outline-offset-[-1px] transition-all duration-200 ease-in-out hover:border-indigo-800 focus:outline focus:outline-2 focus:outline-canary"
                :href="item.url"
                target="_blank"
              >
                <span class="btn__text">
                  Learn More
                  <div
                    class="btn__border block h-px w-0 bg-white transition-all duration-200 ease-in-out group-hover:w-full"
                  ></div>
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps } from "vue";
import axios from "axios";

// Define Props
const props = defineProps({
  type: {
    type: String,
    default: "light",
  },
  initialEndpoint: {
    type: String,
    default:
      "https://events.colby.edu/live/json/events/group/Colby%20Arts%20EMS/group/Museum%20of%20Art/group/Art/group/Center%20for%20Arts%20and%20Humanities/group/Creative%20Writing/group/Music/group/Cinema%20Studies/group/Performance%2C%20Theater%2C%20and%20Dance",
  },
  limit: {
    type: Number,
    default: null,
  },
  // Accepts Array of filters or 'false' (boolean) to hide the menu
  filters: {
    type: [Array, Boolean],
    default: () => [
      {
        title: "All",
        url: "https://events.colby.edu/live/json/events/group/Colby%20Arts%20EMS/group/Museum%20of%20Art/group/Art/group/Center%20for%20Arts%20and%20Humanities/group/Creative%20Writing/group/Music/group/Cinema%20Studies/group/Performance%2C%20Theater%2C%20and%20Dance",
      },
      {
        title: "Art",
        url: "https://events.colby.edu/live/json/events/group/Art",
      },
      {
        title: "Music",
        url: "https://events.colby.edu/live/json/events/group/Music",
      },
      {
        title: "Cinema Studies",
        url: "https://events.colby.edu/live/json/events/group/Cinema%20Studies",
      },
      {
        title: "Performance, Theater, and Dance",
        url: "https://events.colby.edu/live/json/events/group/Performance%2C%20Theater%2C%20and%20Dance",
      },
      {
        title: "Center for the Arts and Humanities",
        url: "https://events.colby.edu/live/json/events/group/Center%20for%20Arts%20and%20Humanities",
      },
      {
        title: "Creative Writing",
        url: "https://events.colby.edu/live/json/events/group/Creative%20Writing",
      },
      {
        title: "Museum of Art",
        url: "https://events.colby.edu/live/json/events/group/Museum%20of%20Art",
      },
    ],
  },
});

// Reactive State
const currentEndpoint = ref(props.initialEndpoint);
const items = ref([]);

// Utility: Strip HTML tags
const stripHTML = (html) => {
  if (!html) return "";
  return html.replace(/<\/?\s*[^>]+(>|$)/g, "");
};

// Fetch Data Logic
const requestData = async (url) => {
  currentEndpoint.value = url;

  try {
    const response = await axios.get(url);

    // Map response to internal structure
    const mappedItems = response.data.map((item) => ({
      date: item.date,
      title: item.title,
      time: item.date_time,
      url: item.url,
    }));

    // Apply limit if prop exists
    if (props.limit) {
      items.value = mappedItems.slice(0, props.limit);
    } else {
      items.value = mappedItems;
    }
  } catch (error) {
    console.error("Error fetching endpoint data:", error);
  }
};

// Lifecycle
onMounted(() => {
  requestData(props.initialEndpoint);
});
</script>
