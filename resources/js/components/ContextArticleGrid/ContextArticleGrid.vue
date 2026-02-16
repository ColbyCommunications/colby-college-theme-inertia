<template>
  <div class="context-article-grid space-y-20">
    <div
      v-if="subheading || heading || paragraph"
      class="context-article-grid__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="md:col-span-8 md:col-start-3">
        <Context
          size="medium"
          align="center"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
        />
      </div>
    </div>

    <div
      class="context-article-grid__inner mx-auto mt-10 w-full max-w-screen-2xl gap-x-10 px-5"
    >
      <div class="article-grid grid w-full max-w-screen-2xl grid-cols-9 gap-10">
        <template v-if="renderApi && normalizedApiItems.length">
          <div
            v-for="(item, index) in normalizedApiItems"
            :key="item.id || index"
            class="article-grid__item col-span-9 md:col-span-3"
          >
            <Article
              size="small"
              :image="item.image"
              :subheading="item.subheading"
              :heading="item.heading"
              :paragraph="item.paragraph"
              :buttons="item.buttons"
            />
          </div>
        </template>

        <template v-else-if="!renderApi && items.length">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="article-grid__item col-span-9 md:col-span-3"
          >
            <Article
              size="small"
              :image="item.image"
              :subheading="item.subheading"
              :heading="item.heading"
              :paragraph="item.paragraph"
              :buttons="item.buttons"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import Context from "@/js/components/Context/Context.vue";
import Article from "@/js/components/Article/Article.vue";

const props = defineProps({
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  cta: { type: String, default: "Read Story" },
  renderApi: { type: Boolean, default: false },
  api: { type: String, default: "" },
  perPage: { type: Number, default: 3 },
  items: {
    type: Array,
    default: () => [],
  },
});

const featuredNews = ref([]);
const error = ref(null);

const decodeHtmlEntities = (input) => {
  if (!input) return "";
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};

// Normalize API data into Article-compatible shape
const normalizedApiItems = computed(() =>
  featuredNews.value.map((item) => {
    const ogImage = item.yoast_head_json?.og_image?.[0]?.url || "";
    return {
      id: item.id,
      image: ogImage
        ? { sizes: { desktop: ogImage, mobile: ogImage }, alt: item.yoast_head_json?.og_description || "" }
        : null,
      subheading: item["post-meta-fields"]?.primary_category || "",
      heading: decodeHtmlEntities(item.title?.rendered),
      paragraph: item["post-meta-fields"]?.summary?.[0]
        ? decodeHtmlEntities(item["post-meta-fields"].summary[0])
        : "",
      buttons: [
        {
          button: {
            url: item.guid?.rendered || "#",
            title: props.cta,
            target: "_blank",
          },
        },
      ],
    };
  }),
);

onMounted(async () => {
  if (props.renderApi) {
    let endpoint =
      "https://news.colby.edu/wp-json/wp/v2/posts?per_page=6&tags=569&_embed=1";

    switch (props.api) {
      case "Arts":
        endpoint = `https://news.colby.edu/wp-json/wp/v2/posts?per_page=${props.perPage}&categories=8&_embed=1`;
        break;
      case "Alumni":
        endpoint = `https://news.colby.edu/wp-json/wp/v2/posts?per_page=${props.perPage}&categories=6&_embed=1`;
        break;
    }

    try {
      const response = await axios.get(endpoint);
      featuredNews.value = response.data.slice(0, props.perPage);
    } catch (err) {
      console.error("API Fetch Error:", err);
      error.value = err;
    }
  }
});
</script>
