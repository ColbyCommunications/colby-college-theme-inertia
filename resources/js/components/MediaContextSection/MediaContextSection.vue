<template>
  <div class="media-context-section relative py-24">
    <div class="media-context-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto">
      <div
        class="media-context-section__main space-y-16"
        :class="type === 'narrow' ? 'md:col-span-10 md:col-start-2' : 'md:col-span-12'"
      >
        <MediaContext
          v-for="(item, index) in items"
          :key="index"
          v-bind="item"
        />
      </div>
    </div>
    <div
      class="media-context-section__bg absolute -z-10 top-0 right-0 bg-mediacontextsection___pattern bg-cover"
      :class="type === 'narrow' ? 'w-[100%] h-[100%]' : 'w-[60%] md:w-[75%] h-[60%]'"
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
