<template>
  <div class="related-section overflow-x-clip">
    <div
      class="related-section__inner mx-auto my-0 grid w-full max-w-screen-2xl grid-cols-12 gap-4 px-5 sm:gap-6 lg:gap-8"
    >
      <div
        class="related-section__context col-span-12 mb-2 min-w-0 md:col-span-4 md:mb-0"
      >
        <Context
          size="medium"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
        />
      </div>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="related-section__secondary col-span-12 min-w-0 sm:col-span-6 md:col-span-4"
      >
        <a
          class="related-section__thumbnail group relative block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo"
          :href="item.link.url"
          :target="item.link.target || null"
        >
          <div
            class="relative aspect-[4/3] w-full overflow-hidden sm:aspect-square md:aspect-[11/6]"
          >
            <Picture
              class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              :src="item.image.sizes?.Rectangle || item.image.url"
              :alt="item.image.alt || item.link.title"
            />
            <div
              class="pointer-events-none absolute inset-0 z-10 flex items-end p-5 md:p-6"
              style="
                background: linear-gradient(
                  180deg,
                  rgba(9, 21, 46, 0) 35%,
                  rgba(9, 21, 46, 0.72) 100%
                );
              "
            >
              <h3
                class="font-body text-18 leading-120 font-bold break-words text-white"
              >
                {{ item.link.title }}
              </h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  items: { type: Array, default: () => [] },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
