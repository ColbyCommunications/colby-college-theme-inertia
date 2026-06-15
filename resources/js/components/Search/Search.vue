<template>
  <div class="search">
    <ais-instant-search
      index-name="prod_colbyedu_aggregated"
      :search-client="searchClient"
    >
      <ais-configure :hitsPerPage.camel="1" />

      <div class="mb-5 flex w-full items-center border-b border-gray-200 pb-4">
        <Searchbox v-model="query" />
      </div>

      <div class="qs mb-12">
        <QuerySuggestions 
          :current-query="query" 
          @select-suggestion="updateQuery" 
        />
      </div>

      <p v-if="!query" class="-tracking-3 text-left font-extended text-24 text-indigo">
        What are you looking for?
      </p>

      <div v-else>
        <ais-index index-name="prod_colbyedu_aggregated" index-id="results">
          <ais-configure :hitsPerPage.camel="20" />
          <ais-state-results>
            <template #default="{ results } = {}">
              <div v-if="results && results.hits">
                <ais-hits
                  v-if="results.hits.length > 0"
                  class="article-grid mx-auto my-0 grid w-full max-w-screen-2xl grid-cols-8 gap-10 pb-6"
                >
                  <template #default="{ items }">
                    <div 
                      v-for="item in items" 
                      :key="item.objectID" 
                      class="article-grid__item col-span-4 md:col-span-2"
                    >
                      <article class="article space-y-4">
                        <div class="context w-full space-y-5">
                          <div class="text-group">
                            <div class="text-group__subheading text-left font-extended text-12 leading-130 font-bold tracking-8 text-azure uppercase">
                              {{ item.originIndexLabel }}
                            </div>
                            <h2 class="text-group__heading -tracking-3 mt-2 text-left font-extended text-20 leading-110 font-normal text-indigo">
                              <ais-highlight attribute="cleaned_title" :hit="item" />
                            </h2>
                            <p class="text-group__p mt-2 text-left font-body text-12 leading-130 font-normal break-words text-coal">
                              <ais-snippet attribute="content" :hit="item" />
                            </p>
                          </div>
                          <div class="button-group flex flex-wrap gap-4">
                            <Button
                              size="small"
                              type="light"
                              :url="item.permalink"
                              title="Read More"
                            />
                          </div>
                        </div>
                      </article>
                    </div>
                  </template>
                </ais-hits>
                
                <div v-else class="py-20 text-center">
                  <p class="font-body text-18 text-indigo">No results for "{{ query }}"</p>
                </div>
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
import { 
  AisInstantSearch, 
  AisConfigure, 
  AisIndex, 
  AisHits, 
  AisHighlight, 
  AisSnippet, 
  AisStateResults 
} from "vue-instantsearch/vue3/es";

import Searchbox from "./Searchbox.vue";
import QuerySuggestions from "./QuerySuggestions.vue";
import Button from "../Button/Button.vue";

const searchClient = liteClient("2XJQHYFX2S", "63c304c04c478fd0c4cb1fb36cd666cb");
const query = ref("");

const updateQuery = (newQuery) => {
  query.value = newQuery;
};
</script>