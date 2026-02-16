<template>
  <div class="related-section">
    <div class="related-section__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto">
      <div class="related-section__context col-span-12 md:col-span-4 mb-8 md:mb-0">
        <Context
          size="medium"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttonItems }"
        />
      </div>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="related-section__secondary col-span-6 md:col-span-4"
      >
        <a class="related-section__thumbnail group relative block overflow-hidden" :href="item.link.url">
          <div
            class="z-10 absolute flex items-end top-0 left-0 w-full h-full p-6"
            style="background: linear-gradient(180deg, rgba(9, 21, 46, 0) 0%, rgba(9, 21, 46, 0.3) 25%)"
          >
            <h3 class="font-body font-bold text-18 leading-120 text-white">{{ item.link.title }}</h3>
          </div>
          <div class="media-aside___image pb-[100%] md:pb-[54.54545454545455%]">
            <Picture
              class="absolute w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
              :src="item.image.src"
              :srcset="item.image.srcset"
              :size-desktop="item.image.sizes?.Rectangle"
              :size-mobile="item.image.sizes?.Rectangle"
              :alt="item.image.alt"
            />
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
