<template>
  <ais-index index-name="prod_colbyedu_aggregated_query_suggestions" index-id="colby-qs">
    <ais-configure :hitsPerPage.camel="8" />
    <ais-hits :transform-items="transformItems">
      <template #default="{ items } = {}">
        <ul v-if="items && items.length > 0" class="button-group flex flex-wrap justify-end gap-4">
          <li
            v-for="item in items"
            :key="item.objectID"
            @click="$emit('select-suggestion', item.query)"
            class="btn group/btn inline-flex min-h-[44px] min-w-[44px] flex-row items-center rounded border-[0.75px] border-solid font-body leading-130 font-normal outline-offset-[-1px] transition-all duration-200 ease-in-out focus:outline focus:outline-2 focus:outline-coal text-12 py-1 px-3.5 space-x-1.5 bg-white hover:text-indigo hover:bg-cloud hover:border-snow hover:underline cursor-pointer transition-all duration-200 ease-in-out"
          >
            <ais-highlight :hit="item" attribute="query" />
          </li>
        </ul>
      </template>
    </ais-hits>
  </ais-index>
</template>

<script setup>
import { AisIndex, AisConfigure, AisHits, AisHighlight } from "vue-instantsearch/vue3/es";
const props = defineProps({ currentQuery: String });
defineEmits(["select-suggestion"]);

const transformItems = (items) => {
  if (!items) return [];
  const q = (props.currentQuery || "").toLowerCase();
  return items.filter((item) => item.query.toLowerCase() !== q);
};
</script>