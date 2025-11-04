<template>
  <ais-search-box class="w-full">
    <template #default="{ currentRefinement, refine }">
      <div class="flex flex-col justify-between md:flex-row">
        <h1
          class="-tracking-3 mb-5 font-extended text-24 leading-110 font-normal text-indigo md:mb-0"
          v-text="'Search'"
        />
        <form
          class="flex w-full justify-items-end md:w-1/4"
          @submit.prevent
          @reset.prevent="refine('')"
        >
          <label class="relative flex w-full max-w-sm text-[0]">
            <SearchIcon class="absolute top-3 left-3 w-2.5 fill-indigo-800" />
            <input
              id="search"
              name="search"
              type="search"
              aria-label="Search"
              placeholder="Search"
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="false"
              required
              maxlength="512"
              class="h-[34px] w-full max-w-sm rounded-md border border-solid border-indigo-400 bg-white p-2.5 pl-7 font-body text-10 leading-130 font-normal text-indigo-800 placeholder-indigo-800"
              :value="currentRefinement"
              @input="refine($event.target.value)"
            />
          </label>
        </form>
      </div>
    </template>
  </ais-search-box>
</template>
<script setup>
import SearchIcon from "@/images/svg/icons/search.svg?component";
</script>
