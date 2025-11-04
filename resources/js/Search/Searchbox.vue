<template>
  <div class="mb-5 flex w-full items-center border-b border-black pb-4">
    <div v-if="state" :class="`${suit()} w-full`">
      <slot
        :current-refinement="currentRefinement"
        :is-search-stalled="state.isSearchStalled"
        :refine="state.refine"
      >
        <div class="flex flex-col justify-between md:flex-row">
          <h1
            class="-tracking-3 mb-5 font-extended text-24 leading-110 font-normal text-indigo md:mb-0"
            v-text="'Search'"
          />
          <form
            action=""
            role="search"
            novalidate
            :class="suit('form')"
            @submit.prevent="onFormSubmit"
            @reset.prevent="onFormReset"
            class="flex w-full justify-items-end md:w-1/4"
          >
            <label class="relative flex w-full max-w-sm text-[0]">
              <SearchIcon class="absolute top-3 left-3 w-2.5 fill-indigo-800" />
              <input
                class="h-[34px] w-full max-w-sm rounded-md border border-solid border-indigo-400 bg-white p-2.5 pl-7 font-body text-10 leading-130 font-normal text-indigo-800 placeholder-indigo-800"
                name="search-input"
                placeholder="Search"
                ref="input"
                type="search"
                autocorrect="off"
                autocapitalize="off"
                autocomplete="off"
                spellcheck="false"
                required
                maxlength="512"
                aria-label="Search"
                :class="suit('input')"
                :value="currentRefinement"
                @focus="$emit('focus', $event)"
                @blur="$emit('blur', $event)"
                @input="onInputChange($event)"
              />
            </label>
          </form>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance } from "vue";
import { connectSearchBox } from "instantsearch.js/es/connectors";
import { createSuitMixin } from "vue-instantsearch/vue3/es";
import { createWidgetMixin } from "vue-instantsearch/vue3/es";
import SearchIcon from "@/images/svg/icons/search.svg?component";

const props = defineProps({
  placeholder: { type: String, default: "Search here…" },
  autofocus: { type: Boolean, default: false },
  showLoadingIndicator: { type: Boolean, default: false },
  submitTitle: { type: String, default: "Search" },
  resetTitle: { type: String, default: "Clear" },
  value: { type: String, default: undefined },
  modelValue: { type: String, default: undefined },
});

const emit = defineEmits([
  "input",
  "update:modelValue",
  "blur",
  "focus",
  "reset",
]);

// Mixins
const { proxy } = getCurrentInstance();
createWidgetMixin(
  { connector: connectSearchBox },
  { $$widgetType: "ais.searchBox" },
).setup(proxy);
createSuitMixin({ name: "SearchBox" }).setup(proxy);

const localQuery = ref("");

const currentRefinement = computed({
  get() {
    return localQuery.value;
  },
  set(val) {
    localQuery.value = val;
    proxy.state.refine(localQuery.value);
  },
});

const input = ref(null);

function onInputChange(event) {
  const val = event.target.value;
  currentRefinement.value = val;
  emit("input", val);
  emit("update:modelValue", val);
}

function onFormSubmit() {
  input.value.blur();
}

function onFormReset() {
  currentRefinement.value = "";
  emit("input", "");
  emit("update:modelValue", "");
  emit("reset");
}
</script>
