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
            class="btn cursor-pointer rounded border border-[#dfecfe] bg-[#f9fbff] px-3 py-1 font-body text-10 text-indigo hover:bg-[#eef4ff]"
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