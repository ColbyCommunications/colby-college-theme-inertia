<template>
  <div class="search">
    <ais-instant-search
      id="modal-top"
      ref="aisIS"
      index-name="prod_colbyedu_aggregated"
      :search-client="searchClient"
    >
      <ais-configure :hitsPerPage.camel="1" />

      <!-- Search box -->
      <div class="mb-5 flex w-full items-center border-b border-gray-200 pb-4">
        <Searchbox />
      </div>

      <!-- Query suggestions -->
      <div class="qs mb-12" role="region" aria-label="Query Suggestions">
        <QuerySuggestions
          :search="search"
          :removeExactQueryQuerySuggestion="removeExactQueryQuerySuggestion"
        />
      </div>

      <p
        class="-tracking-3 text-left font-extended text-24 leading-110 font-normal text-indigo"
        v-if="!query"
        v-text="'What are you looking for?'"
      ></p>

      <!-- Search results -->
      <div v-if="query">
        <ais-index index-name="prod_colbyedu_aggregated" index-id="results">
          <ais-configure :hitsPerPage.camel="20" />
          <ais-state-results>
            <template v-slot="{ results: { hits, query } }">
              <ais-hits
                class="article-grid mx-auto my-0 grid w-full max-w-screen-2xl grid-cols-8 gap-10 pb-6"
                v-if="hits.length > 0"
              >
                <template #default="{ items, sendEvent }">
                  <div
                    v-for="item in items"
                    class="article-grid__item col-span-4 md:col-span-2"
                    :key="item.objectID"
                  >
                    <article class="article space-y-4">
                      <div class="context w-full space-y-5">
                        <div class="text-group">
                          <div
                            class="text-group__subheading text-left font-extended text-12 leading-130 font-bold tracking-8 text-azure uppercase"
                            v-text="item.originIndexLabel"
                          />
                          <h2
                            class="text-group__heading -tracking-3 mt-2 text-left font-extended text-20 leading-110 font-normal text-indigo"
                          >
                            <ais-highlight
                              attribute="cleaned_title"
                              :hit="item"
                            />
                          </h2>
                          <p
                            class="text-group__p mt-2 text-left font-body text-12 leading-130 font-normal break-words text-indigo-800 md:text-12"
                          >
                            <ais-snippet attribute="content" :hit="item" />
                          </p>
                        </div>
                        <div class="button-group flex flex-wrap gap-4">
                          <a
                            class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary"
                            :href="item.permalink"
                          >
                            <span class="btn__text">
                              Read More
                              <div
                                class="btn__border block h-px w-0 bg-indigo transition-all duration-200 ease-in-out group-hover:w-full"
                              ></div>
                            </span>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </template>
              </ais-hits>
              <div v-else>
                <p
                  class="-tracking-3 font-extended text-24 leading-110 font-normal text-indigo"
                >
                  No results found for the query: <q>{{ query }}</q>
                </p>
              </div>
            </template>
          </ais-state-results>
        </ais-index>
      </div>
    </ais-instant-search>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { liteClient } from "algoliasearch/lite";
import Searchbox from "./Searchbox.vue";
import QuerySuggestions from "./QuerySuggestions.vue";

const searchClient = liteClient(
  "2XJQHYFX2S",
  "63c304c04c478fd0c4cb1fb36cd666cb",
);

const query = ref("");
const aisIS = ref(null);

function search(newQuery) {
  query.value = newQuery;
}

function removeExactQueryQuerySuggestion(items) {
  const helperState = aisIS.value?.instantSearchInstance?.helper?.state;
  if (helperState && "query" in helperState) {
    const currentQuery = helperState.query.toLowerCase();
    query.value = currentQuery;
    return items.filter((item) => item.query.toLowerCase() !== currentQuery);
  }
  return items;
}
</script>
