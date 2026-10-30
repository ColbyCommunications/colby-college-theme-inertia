<template>
  <ais-index :index-name="qsIndexName" index-id="colby-qs">
    <ais-configure :hitsPerPage.camel="8" />
    <ais-hits :transform-items="transformItems">
      <template #default="{ items } = {}">
        <ul
          v-if="items && items.length > 0"
          class="button-group flex flex-wrap justify-end gap-4"
        >
          <li
            v-for="item in items"
            :key="item.objectID"
            @click="$emit('select-suggestion', item.query)"
            class="btn group/btn inline-flex min-h-[44px] min-w-[44px] cursor-pointer flex-row items-center space-x-1.5 rounded border-[0.75px] border-solid bg-white px-3.5 py-1 font-body text-12 leading-130 font-normal outline-offset-[-1px] transition-all duration-200 ease-in-out hover:border-snow hover:bg-cloud hover:text-indigo hover:underline focus:outline focus:outline-2 focus:outline-coal"
          >
            <ais-highlight :hit="item" attribute="query" />
          </li>
        </ul>
      </template>
    </ais-hits>
  </ais-index>
</template>

<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import {
  AisIndex,
  AisConfigure,
  AisHits,
  AisHighlight,
} from "vue-instantsearch/vue3/es";

const props = defineProps({
  currentQuery: String,
  indexName: { type: String, default: "" },
});

defineEmits(["select-suggestion"]);

const page = usePage();

const qsIndexName = computed(
  () =>
    props.indexName ||
    page.props?.site_data?.algolia_qs_index ||
    "prod_colbyedu_aggregated_query_suggestions",
);

const transformItems = (items) => {
  if (!items) return [];
  const q = (props.currentQuery || "").toLowerCase();
  return items.filter((item) => item.query.toLowerCase() !== q);
};
</script>
