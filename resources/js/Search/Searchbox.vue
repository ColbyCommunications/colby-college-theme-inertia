<template>
    <div class="mb-5 w-full flex items-center border-b border-black pb-4">
        <div v-if="state" :class="`${suit()} w-full`">
            <slot
                :current-refinement="currentRefinement"
                :is-search-stalled="state.isSearchStalled"
                :refine="state.refine"
            >
                <search-input
                    id="site-search-searchbox"
                    @focus="$emit('focus', $event)"
                    @blur="$emit('blur', $event)"
                    @reset="$emit('reset')"
                    :placeholder="placeholder"
                    :show-loading-indicator="showLoadingIndicator"
                    :should-show-loading-indicator="state.isSearchStalled"
                    :submit-title="submitTitle"
                    :reset-title="resetTitle"
                    :class-names="classNames"
                    v-model="currentRefinement"
                >
                    <slot name="loading-indicator" />

                    <slot name="submit-icon" />
                    <slot name="reset-icon" />
                </search-input>
            </slot>
        </div>
    </div>
</template>
<script setup>
import { connectSearchBox } from 'instantsearch.js/es/connectors';
    import { createSuitMixin } from 'vue-instantsearch/vue3/es';
    import { createWidgetMixin } from 'vue-instantsearch/vue3/es';
    import SearchInput from './SearchInput.vue';

import { ref, reactive, computed } from 'vue'
const props = defineProps({placeholder: {
                type: String,
                default: 'Search here…',})
const state = reactive({
localQuery: '',
})
// Access former data as state.foo
// no methods
/* TODO: convert computed:
currentRefinement: {
                get() {
                    return this.localQuery;
*/
</script>
