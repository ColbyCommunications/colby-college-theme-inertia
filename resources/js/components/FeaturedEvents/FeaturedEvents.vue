<template>
  <div
    class="featured-events full-bleed relative space-y-28 bg-bluemarble__pattern bg-cover bg-center py-24"
  >
    <div
      class="featured-events__inner mx-auto my-0 mb-12 w-full max-w-screen-2xl gap-x-10 md:grid md:grid-cols-12"
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

<style scoped>
/* Replace fixed h-60 / md:h-40 and absolute positioning with a single-cell CSS Grid stack
   so the text container grows naturally with the text/button and never collides with the arrows */
.featured-events__carousel :deep(.carousel__slides-context) {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  height: auto !important;
  min-height: 0;
}

.featured-events__carousel :deep(.carousel__slides-context-wrap) {
  position: relative !important;
  grid-area: 1 / 1 / 2 / 2;
}

.featured-events__carousel :deep(.carousel__controls-wrap) {
  margin-top: 1.5rem;
}
</style>
