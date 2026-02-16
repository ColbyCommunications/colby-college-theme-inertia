<template>
  <div class="index-section">
    <div class="index-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto">
      <div class="index-section__secondary md:col-span-3">
        <SubpageNav
          :heading="nav.heading"
          :items="nav.items"
          :parent-permalink="nav.parentPermalink"
        />
      </div>
      <div class="index-section__main md:col-span-9">
        <div class="index-section__top mb-12">
          <h2 class="index-section__heading font-extended font-normal text-36 md:text-24 leading-100 -tracking-3 text-left text-indigo">
            {{ heading }}
          </h2>
        </div>
        <Table v-bind="table" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SubpageNav from "@/js/components/SubpageNav/SubpageNav.vue";
import Table from "@/js/components/Table/Table.vue";

defineProps({
  heading: { type: String, default: "" },
  nav: { type: Object, default: () => ({ heading: "", items: [], parentPermalink: "" }) },
  table: { type: Object, default: () => ({}) },
});
</script>
