<template>
  <div class="hero full-bleed relative space-y-16 py-20">
    <div
      class="hero__inner mx-auto my-0 grid w-full max-w-screen-2xl space-y-16 gap-x-10 px-5 md:grid-cols-12 md:items-center md:space-y-0"
    >
      <div
        :class="[
          'hero__main',
          { 'md:col-start-3': align === 'center' },
          'md:col-span-8',
        ]"
      >
        <Context
          size="medium"
          :hero="true"
          :date="date"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
          :align="align"
        />
      </div>

      <div v-if="image && image.url" class="hero__secondary md:col-span-4 mt-6">
        <div
          :class="[
            'hero__image relative',
            imageClass,
            'pb-[70.73170731707317%]',
          ]"
        >
          <Picture
            class="absolute top-0 left-0 h-full w-full object-cover"
            :src="image.url"
            :alt="image.alt"
            :loading="priority ? 'eager' : 'lazy'"
            :fetch-priority="priority ? 'high' : 'auto'"
            :progressive="!priority"
            :sizes="primaryImageSizes"
          />
        </div>
        <p
          v-if="image.caption"
          class="hero__caption mt-2 font-body text-12 leading-[1.5] font-normal text-coal"
        >
          {{ image.caption }}
        </p>
      </div>
    </div>

    <div
      v-if="images && align === 'center'"
      class="hero__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 px-5 md:grid-cols-12 md:items-center mt-6"
    >
      <div
        v-for="(secondaryImage, index) in images"
        :key="index"
        :class="[
          'mb-10',
          { 'md:col-span-3': currentColumns === 4 },
          { 'md:col-span-4': currentColumns !== 4 },
        ]"
      >
        <div
          :class="[
            'hero__image relative pb-[70.73170731707317%]',
            secondaryImageClass,
          ]"
        >
          <Picture
            class="absolute top-0 left-0 h-full w-full object-cover"
            :src="secondaryImage.image.url"
            :alt="secondaryImage.image.alt || secondaryImage.alt || ''"
            :loading="isPrioritySecondaryImage(index) ? 'eager' : 'lazy'"
            :fetch-priority="isPrioritySecondaryImage(index) ? 'high' : 'auto'"
            :progressive="!isPrioritySecondaryImage(index)"
            :sizes="secondaryImageSizes"
          />
        </div>
        <p
          v-if="secondaryImage.caption"
          class="hero__caption mt-2 font-body text-12 leading-140 font-normal text-coal"
        >
          {{ secondaryImage.caption }}
        </p>
      </div>
    </div>

    <div
      class="hero__pattern bg-hero__pattern absolute top-0 left-0 z-[-1] !mt-0 h-full w-full opacity-50"
    ></div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  align: {
    type: String,
    default: "left",
  },
  date: String,
  subheading: String,
  heading: String,
  paragraph: String,
  buttons: {
    type: Array,
    default: () => [],
  },
  image: Object,
  imageOrientation: {
    type: String,
    default: "landscape",
  },
  images: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Number,
    default: 3,
  },
  priority: {
    type: Boolean,
    default: false,
  },
});

const primaryImageSizes = "(max-width: 767px) 100vw, 50vw";

const imageClass = computed(() => {
  return props.imageOrientation === "portrait"
    ? "md:pb-[119.44444444444444%]"
    : "md:pb-[80.55555555555556%]";
});

const secondaryImageClass = computed(() => {
  return props.columns === 4
    ? "pb-[165.3846153846154%]"
    : "md:pb-[80.55555555555556%]";
});

const currentColumns = ref(parseInt(props.columns, 10));
const secondaryImageSizes = computed(() =>
  currentColumns.value === 4
    ? "(max-width: 767px) 100vw, 25vw"
    : "(max-width: 767px) 100vw, 33vw",
);

function isPrioritySecondaryImage(index) {
  return props.priority && !props.image && index === 0;
}
</script>
