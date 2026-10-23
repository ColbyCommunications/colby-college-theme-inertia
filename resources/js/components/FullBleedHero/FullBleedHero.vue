<template>
  <div
    class="full-bleed-hero relative !max-w-full bg-cover bg-center py-24"
    :class="type === 'dark' ? 'bg-bluemarble__pattern' : 'bg-marble__pattern'"
  >
    <div
      class="full-bleed-hero__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 px-5 md:grid-cols-12"
    >
      <div class="full-bleed-hero__context md:col-span-8 md:col-start-3">
        <Context
          :hero="hero"
          size="large"
          :type="type === 'dark' ? 'light' : 'dark'"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
          align="center"
        />
      </div>
      <div
        v-if="image && image.url"
        class="full-bleed-hero__main"
        :class="
          type === 'light'
            ? 'md:col-span-10 md:col-start-2'
            : 'md:col-span-8 md:col-start-3'
        "
      >
        <div
          class="full-bleed-hero__image relative mt-16 pb-[100%]"
          :class="
            type === 'dark'
              ? 'md:pb-[44.79166666666667%]'
              : 'md:pb-[56.578947368421055%]'
          "
        >
          <Picture
            class="absolute h-full w-full object-cover"
            :src="imageSrc"
            :alt="image.alt"
            :loading="priority ? 'eager' : 'lazy'"
            :fetch-priority="priority ? 'high' : 'auto'"
            :progressive="!priority"
            sizes="100vw"
          />
        </div>
        <p
          v-if="image.caption"
          class="hero__caption mt-2 font-body text-12 leading-140 font-normal"
          :class="type === 'light' ? 'text-gray-800' : 'text-white'"
        >
          {{ image.caption }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  type: { type: String, default: "dark" },
  hero: { type: Boolean, default: false },
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  image: { type: Object, default: null },
  priority: { type: Boolean, default: false },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
const imageSrc = computed(() => props.image?.url || props.image?.src || "");
</script>
