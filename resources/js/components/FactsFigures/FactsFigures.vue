<template>
  <div class="facts-figures">
    <!-- top rule -->
    <div
      class="facts-figures__inner relative mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <AnimatedBorder class="col-span-12 block h-px w-0 bg-azure" />
    </div>

    <!-- main row -->
    <div
      class="facts-figures__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div
        class="facts-figures__main mt-4 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7"
      >
        <Context
          size="large"
          type="dark"
          :arrow="true"
          :reverse="true"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
        />
      </div>

      <!-- image -->
      <div
        class="facts-figures__image mt-12 md:order-[-1] md:col-span-5 md:mt-0"
      >
        <Picture
          v-if="image"
          class="h-full w-full object-cover"
          :size-desktop="image?.sizes?.Square || image?.srcset"
          :size-mobile="image?.sizes?.Square || image?.src"
          :alt="image?.alt || ''"
        />
      </div>
    </div>

    <!-- facts grid -->
    <div
      class="facts-figures__inner relative mx-auto my-0 mt-12 w-full max-w-screen-2xl gap-x-10 px-5 md:mt-0 md:grid md:grid-cols-12"
    >
      <div
        class="pb-6 md:relative md:bottom-[16px] md:col-span-7 md:col-start-6 md:pb-8 lg:bottom-[70px] lg:col-span-6 lg:col-start-7"
      >
        <div
          class="grid w-full max-w-screen-2xl grid-cols-6 gap-x-3 md:gap-x-10"
        >
          <div
            v-for="(fact, i) in facts"
            :key="i"
            class="facts-figures__figure col-span-2"
          >
            <h3
              class="font-extended text-24 leading-115 font-normal text-indigo"
            >
              {{ fact.figure }}
            </h3>
            <p
              class="font-body text-12 leading-140 font-normal text-indigo-800"
            >
              {{ fact.paragraph }}
            </p>
          </div>
        </div>
      </div>

      <!-- If you ever need the bottom rule again:
        <AnimatedBorder class="block col-span-12 w-0 h-px bg-azure" />
        -->
    </div>
  </div>
</template>

<script setup>
import Context from "@/js/components/Context/Context.vue";
import AnimatedBorder from "@/js/components/AnimatedBorder/AnimatedBorder.vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  image: {
    type: Object,
    default: null, // { srcset, src, sizes: { Square }, alt }
  },
  facts: {
    type: Array,
    default: () => [], // [{ figure: '10:1', paragraph: 'Student-to-faculty ratio' }, ...]
  },
});
</script>
