<template>
  <AppLayout
    :site-data="resolvedSiteData"
    :menus="resolvedMenus"
    :page-title="props.title"
  >
    <div class="mx-auto max-w-screen-2xl px-9">
      <div v-if="person_data" class="mt-10 mb-8">
        <h2 class="font-bold" style="font-size: 30px">
          Hello, {{ person_data.first_name }} {{ person_data.last_name }}
        </h2>
      </div>

      <ComponentRouter :components="resolvedBlocks" />
    </div>
  </AppLayout>
</template>

<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import AppLayout from "../Layouts/App.vue";
import ComponentRouter from "../../components/ComponentRouter/ComponentRouter.vue";

const props = defineProps({
  title: String,
  blocks: {
    type: Array,
    default: () => [],
  },
  person_data: {
    type: Object,
    default: null,
  },
  siteData: {
    type: Object,
    default: null,
  },
  menus: {
    type: Object,
    default: null,
  },
});

const page = usePage();

const resolvedBlocks = computed(() => props.blocks || page.props?.blocks || []);
const resolvedSiteData = computed(
  () => props.siteData || page.props?.site_data || {},
);
const resolvedMenus = computed(() => props.menus || page.props?.menus || {});
</script>
