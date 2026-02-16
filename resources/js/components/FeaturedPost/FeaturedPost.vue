<template>
  <div class="featured-post">
    <div
      class="featured-post__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
    >
      <div
        class="featured-post__context md:col-start-9 lg:col-start-10 md:col-span-4 lg:col-span-3 md:flex md:order-2 items-center"
      >
        <Context
          size="large"
          type="dark"
          :arrow="true"
          :reverse="true"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttonItems }"
          btn-type="light"
        />
      </div>
      <div
        class="featured-post__caption md:z-[-1] md:absolute top-0 right-[20px] md:w-1/2 pb-3.5 md:pb-0 font-extended font-bold text-12 tracking-8 text-azure uppercase text-right border-b md:border-b-0 border-azure border-solid mt-14 md:mt-0"
      >
        <AnimatedBorder
          class="featured-post__border hidden md:block w-0 h-px md:mb-3.5 bg-azure transition-all duration-200 ease-in-out"
        />
        {{ caption }}
      </div>
      <div class="featured-post__main md:col-span-8">
        <div class="featured-post__image">
          <Picture
            class="w-full h-full object-cover"
            :size-desktop="post.image?.sizes?.Rectangle || post.image?.srcset"
            :size-mobile="post.image?.sizes?.Rectangle || post.image?.src"
            :alt="post.image?.alt || ''"
          />
        </div>
        <div class="featured-post__post relative mt-6">
          <Context
            size="small"
            type="dark"
            :subheading="post.date"
            :heading="post.heading"
            :paragraph="post.paragraph"
            :buttons="{ items: postButtonItems }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import AnimatedBorder from "@/js/components/AnimatedBorder/AnimatedBorder.vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  caption: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  post: { type: Object, default: () => ({}) },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);

const postButtonItems = computed(() =>
  (props.post.buttons || []).map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
