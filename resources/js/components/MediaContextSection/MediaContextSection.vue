<template>
  <div
    class="full-bleed media-context-section relative isolate overflow-hidden py-24"
  >
    <div
      class="media-context-section__inner relative z-10 mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div
        class="media-context-section__main space-y-16"
        :class="
          type === 'narrow' ? 'md:col-span-10 md:col-start-2' : 'md:col-span-12'
        "
      >
        <MediaContext
          v-for="(item, index) in items"
          :key="index"
          v-bind="item"
        />
      </div>
    </div>
    <div
      class="media-context-section__bg pointer-events-none absolute inset-0 -z-10 h-full w-full bg-mediacontextsection___pattern bg-cover bg-center"
    ></div>
  </div>
</template>

<script setup>
import MediaContext from "@/js/components/MediaContext/MediaContext.vue";

defineProps({
  type: { type: String, default: "wide" },
  items: { type: Array, default: () => [] },
});
</script>
