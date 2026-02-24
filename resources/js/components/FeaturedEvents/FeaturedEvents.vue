<template>
  <div
    class="featured-events bg-bluemarble__pattern full-bleed relative space-y-28 bg-cover bg-center py-24"
  >
    <div
      class="featured-events__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 md:grid md:grid-cols-12"
    >
      <div
        class="featured-events__carousel col-span-12 md:col-span-10 md:col-start-2"
      >
        <Carousel
          type="light"
          size="medium"
          :render-api="false"
          :heading="heading"
          :paragraph="paragraph"
          :items="items"
          :buttons="[]"
        />
      </div>
    </div>

    <div
      class="featured-events__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 md:grid-cols-12"
    >
      <div class="md:col-span-10 md:col-start-2">
        <EndpointFilter type="dark" :limit="3" :filters="false" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Import child components (assuming standard directory structure)
import Carousel from "../Carousel/Carousel.vue";
import EndpointFilter from "../EndpointFilter/EndpointFilter.vue";

const props = defineProps({
  heading: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
