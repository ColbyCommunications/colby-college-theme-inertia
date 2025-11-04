<template>
  <ais-index
    index-name="prod_colbyedu_aggregated_query_suggestions"
    index-id="colby-qs"
  >
    <ais-configure :hitsPerPage.camel="8" />

    <ais-hits :transform-items="removeExactQueryQuerySuggestion">
      <template v-slot="{ items, sendEvent }">
        <ul class="button-group mb-10 flex flex-wrap justify-end gap-4">
          <li
            v-for="item in items"
            :key="item.objectID"
            :aria-label="item.query"
            @click="search(item.query)"
            class="btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary"
          >
            <span class="btn__text">
              <ais-highlight :hit="item" attribute="query" />
            </span>
          </li>
        </ul>
      </template>
    </ais-hits>
  </ais-index>
</template>
<script setup>
defineProps({
  search: Function,
  removeExactQueryQuerySuggestion: Function,
});
</script>
