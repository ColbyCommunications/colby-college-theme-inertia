<template>
  <div class="bg-inset-media-context">
    <div
      class="bg-inset-media-context__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="bg-inset-media-context__main md:col-span-12">
        <div
          class="bg-inset-media-context__bg bg-hero__pattern bg-cover bg-no-repeat px-8 py-14 md:px-14"
        >
          <MediaContext v-bind="$attrs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MediaContext from "../MediaContext/MediaContext.vue";
</script>
