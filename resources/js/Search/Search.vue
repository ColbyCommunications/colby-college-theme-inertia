<template>
    <div class="search" v-if="modalOpen">
        <ais-instant-search
            id="modal-top"
            ref="aisIS"
            index-name="prod_colbyedu_aggregated"
            :search-client="searchClient"
        >
            <ais-configure :hits-per-page.camel="1" />
            <!-- Widgets -->
            <!-- searchbox widget-->
            <searchbox ref="customSearchBox"></searchbox>
            <!-- query suggestions -->
            <div class="qs mb-12" role="region" aria-label="Query Suggestions`">
                <ais-index
                    index-name="prod_colbyedu_aggregated_query_suggestions"
                    index-id="colby-qs"
                >
                    <ais-configure :hits-per-page.camel="8" />

                    <ais-hits :transform-items="removeExactQueryQuerySuggestion">
                        <template v-slot="{ items, sendEvent }">
                            <ul class="button-group flex justify-end flex-wrap gap-4 mb-10">
                                <li
                                    v-for="item in items"
                                    :key="item.objectID"
                                    :aria-label="item.query"
                                    @click="search(item.query)"
                                    class="cursor-pointer btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 font-body font-normal text-10 leading-130 text-indigo bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1 px-3 transition-all duration-200 ease-in-out"
                                >
                                    <span class="btn__text">
                                        <ais-highlight :hit="item" attribute="query" />
                                    </span>
                                </li>
                            </ul>
                        </template>
<script setup>
import { liteClient } from 'algoliasearch/lite';
    import Searchbox from './Searchbox.vue';
import { ref, reactive, computed } from 'vue'
// no props
const state = reactive({
searchClient: liteClient('2XJQHYFX2S', '63c304c04c478fd0c4cb1fb36cd666cb'),
                modalOpen: false,
                query: '',
})
// Access former data as state.foo
function search(query) {
                state.query = query;
                state.$refs.customSearchBox.currentRefinement = query;
</script>
