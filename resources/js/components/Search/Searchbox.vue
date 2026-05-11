<template>
  <ais-search-box class="w-full">
    <template #default="{ currentRefinement, refine }">
      <span v-if="captureRefine(refine)" />
      
      <div class="flex flex-col justify-between md:flex-row">
        <h1 class="-tracking-3 mb-5 font-extended text-24 leading-110 font-normal text-indigo md:mb-0">
          Search
        </h1>
        <form class="flex w-full justify-items-end md:w-1/4" @submit.prevent>
          <label class="relative flex w-full max-w-sm text-[0]">
            <Icon name="search" class="absolute top-3 left-3 w-2.5 fill-indigo-800" />
            <input
              type="search"
              placeholder="Search"
              class="h-[34px] w-full max-w-sm rounded-md border border-solid border-indigo-400 bg-white p-2.5 pl-7 font-body text-10 text-indigo-800"
              :value="currentRefinement"
              @input="onInput($event.target.value, refine)"
            />
          </label>
        </form>
      </div>
    </template>
  </ais-search-box>
</template>

<script setup>
import { watch, ref } from "vue";
import { AisSearchBox } from "vue-instantsearch/vue3/es";
import Icon from '../Icon/Icon.vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

// Local reference to store Algolia's refine function
const algoliaRefine = ref(null);

const captureRefine = (refine) => {
  algoliaRefine.value = refine;
  return false; // Don't render anything
};

// CRITICAL: Watch for changes to the query from the parent (Suggestions)
watch(() => props.modelValue, (newVal) => {
  if (algoliaRefine.value && newVal !== undefined) {
    algoliaRefine.value(newVal);
  }
});

const onInput = (val, refine) => {
  refine(val);
  emit('update:modelValue', val);
};
</script>