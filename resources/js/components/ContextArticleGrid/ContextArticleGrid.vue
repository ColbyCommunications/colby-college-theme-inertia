<template>
  <div class="context-article-grid space-y-20">
    <div
      v-if="subheading || heading || paragraph"
      class="context-article-grid__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="md:col-span-8 md:col-start-3">
        <div class="context space-y-5">
          <div class="text-group">
            <div
              v-if="subheading"
              class="text-group__subheading text-center font-extended text-14 leading-130 font-bold tracking-8 text-azure uppercase"
              v-text="subheading"
            />
            <h2
              v-if="heading"
              class="text-group__heading -tracking-3 mt-2 text-center font-extended text-36 leading-110 font-normal text-indigo md:text-24"
              v-text="heading"
            />
            <p
              v-if="paragraph"
              class="text-group__p mt-2 text-center font-body text-18 leading-130 font-normal text-indigo-800 md:text-16"
              v-text="paragraph"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="context-article-grid__inner mx-auto mt-10 w-full max-w-screen-2xl gap-x-10 px-5"
    >
      <div class="article-grid grid w-full max-w-screen-2xl grid-cols-9 gap-10">
        <template v-if="renderApi && featuredNews.length">
          <div
            v-for="(item, index) in featuredNews"
            :key="item.id || index"
            class="article-grid__item col-span-9 md:col-span-3"
          >
            <article class="article space-y-4">
              <div class="article__image relative">
                <a
                  class="relative block overflow-hidden"
                  :href="item.guid.rendered"
                  target="_blank"
                >
                  <picture>
                    <source
                      v-if="item.yoast_head_json?.og_image?.[0]"
                      media="(min-width:768px)"
                      :srcset="item.yoast_head_json.og_image[0].url"
                    />
                    <img
                      v-if="item.yoast_head_json?.og_image?.[0]"
                      class="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
                      :src="item.yoast_head_json.og_image[0].url"
                      :alt="item.yoast_head_json.og_description || ''"
                    />
                  </picture>
                </a>
              </div>

              <div class="context space-y-5">
                <div class="text-group">
                  <div
                    v-if="item['post-meta-fields']?.primary_category"
                    class="text-group__subheading text-left font-extended text-12 leading-130 font-bold tracking-8 text-azure uppercase"
                    v-text="item['post-meta-fields'].primary_category"
                  />
                  <h2
                    class="text-group__heading -tracking-3 mt-2 text-left font-extended text-20 leading-110 font-normal text-indigo"
                    v-text="decodeHtmlEntities(item.title.rendered)"
                  />
                  <p
                    v-if="item['post-meta-fields']?.summary?.[0]"
                    class="text-group__p mt-2 text-left font-body text-14 leading-130 font-normal text-indigo-800"
                    v-text="
                      decodeHtmlEntities(item['post-meta-fields'].summary[0])
                    "
                  />
                </div>

                <div class="button-group flex flex-wrap gap-4">
                  <a
                    class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary"
                    target="_blank"
                    :href="item.guid.rendered"
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
        </template>

        <template v-else-if="!renderApi && items.length">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="article-grid__item col-span-9 md:col-span-3"
          >
            <article class="article space-y-4">
              <div class="article__image relative">
                <div class="relative block overflow-hidden">
                  <picture>
                    <source
                      v-if="item.image?.sizes?.desktop"
                      media="(min-width:768px)"
                      :srcset="item.image.sizes.desktop"
                    />
                    <img
                      v-if="
                        item.image?.sizes?.desktop || item.image?.sizes?.mobile
                      "
                      class="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
                      :src="item.image.sizes.desktop || item.image.sizes.mobile"
                      :alt="item.image.alt || ''"
                    />
                  </picture>
                </div>
              </div>

              <div class="context space-y-5">
                <div class="text-group">
                  <div
                    v-if="item.subheading"
                    class="text-group__subheading text-left font-extended text-12 leading-130 font-bold tracking-8 text-azure uppercase"
                    v-text="item.subheading"
                  />
                  <h2
                    v-if="item.heading"
                    class="text-group__heading -tracking-3 mt-2 text-left font-extended text-20 leading-110 font-normal text-indigo"
                    v-text="item.heading"
                  />
                  <p
                    v-if="item.paragraph"
                    class="text-group__p mt-2 text-left font-body text-14 leading-130 font-normal text-indigo-800"
                    v-html="item.paragraph"
                  />
                </div>

                <div
                  v-if="item.buttons && item.buttons.length"
                  class="button-group flex flex-wrap gap-4"
                >
                  <a
                    v-for="(btn, bIndex) in item.buttons"
                    :key="bIndex"
                    class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary"
                    :href="btn.button?.url || '#'"
                  >
                    <span class="btn__text">
                      {{ btn.button?.title || cta }}
                      <div
                        class="btn__border block h-px w-0 bg-indigo transition-all duration-200 ease-in-out group-hover:w-full"
                      ></div>
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import axios from "axios";

// Define Props
const props = defineProps({
  // Content Props
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  cta: { type: String, default: "Read Story" },

  // Data Source Props
  renderApi: { type: Boolean, default: false }, // Toggles between API fetch and Static items
  api: { type: String, default: "" }, // 'Arts', 'Alumni', or default
  perPage: { type: Number, default: 3 },

  // Static Data Prop (Replaces Twig 'items' context)
  items: {
    type: Array,
    default: () => [],
    // Expected structure: { image: { sizes: { desktop } }, subheading, heading, paragraph, buttons: [{ button: { url } }] }
  },
});

// State
const featuredNews = ref([]);
const error = ref(null);

// Utility: Decode HTML entities (from original Vue file)
const decodeHtmlEntities = (input) => {
  if (!input) return "";
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};

// Logic: Fetch Data if renderApi is true
onMounted(async () => {
  if (props.renderApi) {
    let endpoint =
      "https://news.colby.edu/wp-json/wp/v2/posts?per_page=6&tags=569&_embed=1"; // Default

    // Logic from original Vue file switch statement
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
      // Slice based on logic in original file (though per_page query usually handles this)
      featuredNews.value = response.data.slice(0, props.perPage);
    } catch (err) {
      console.error("API Fetch Error:", err);
      error.value = err;
    }
  }
});
</script>
