<template>
  <nav
    v-if="utilityMenuStyle === 'colby.edu'"
    class="float-right block bg-snow px-5 md:flex md:h-auto md:w-full md:justify-between md:pt-0"
    aria-label="Utility menu"
  >
    <!-- Left side: Utility links -->
    <ul
      class="hidden w-0 md:grid md:inline-flex md:w-auto md:grid-cols-3 md:grid-cols-none md:grid-rows-2 md:grid-rows-none md:gap-0 md:gap-x-5 md:space-x-6"
    >
      <li
        v-if="
          utilityMenuButton &&
          utilityMenuButton.text.length > 0 &&
          utilityMenuButton.url.length > 0
        "
        class="flex list-none items-center font-body text-16 leading-110 font-normal md:text-12"
      >
        <a
          class="block flex min-h-[44px] min-w-[44px] items-center text-center font-body text-14 leading-120 font-normal text-white hover:underline md:text-12"
          :href="utilityMenuButton.url"
        >
          <div class="rounded-sm border border-gray-800 bg-indigo px-2 py-1">
            {{ utilityMenuButton.text }}
          </div>
        </a>
      </li>
      <li
        v-for="item in menu"
        :key="item.id || item.url || item.title"
        class="flex list-none items-center font-body text-16 leading-110 font-normal md:text-12"
      >
        <a
          class="inline-flex min-h-[44px] min-w-[44px] items-center justify-center py-2 text-indigo transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline"
          :href="item.url"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
    <!-- Right side: Action links (myColby, Search) -->
    <ul
      class="flex space-x-6 bg-snow px-5 md:static md:float-right md:block md:bg-transparent md:px-0"
    >
      <!-- myColby -->
      <li
        class="group inline-block items-center font-body text-14 leading-110 font-normal md:text-12"
      >
        <a
          class="inline-flex min-h-[44px] min-w-[44px] items-center justify-center py-2 text-indigo transition-all duration-200 ease-in-out group-hover:text-indigo-1000 group-hover:underline"
          href="https://my.colby.edu/"
        >
          <MyColbyIcon
            class="mr-1.5 w-[16px] fill-[#b7c2d5] transition-all duration-200 ease-in-out group-hover:fill-indigo-700 md:w-[10px]"
          />
          myColby
        </a>
      </li>

      <!-- Search (opens in modal) -->
      <li
        class="group inline-block font-body text-14 leading-110 font-normal md:text-12"
      >
        <Modal
          :full="true"
          classes="w-screen h-screen top-0"
          v-model="showModal"
        >
          <!-- Trigger button -->
          <template #button="{ open, isOpen }">
            <button
              type="button"
              class="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center py-2 text-indigo transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline"
              :class="{ 'text-indigo-1000 underline': isOpen }"
              aria-haspopup="dialog"
              :aria-expanded="isOpen ? 'true' : 'false'"
              @click="open"
            >
              <SearchIcon
                class="mr-1.5 w-[16px] fill-[#b7c2d5] transition-all duration-200 ease-in-out md:w-[10px]"
                aria-hidden="true"
                focusable="false"
              />
              Search
            </button>
          </template>

          <!-- Modal content -->
          <template #content>
            <div
              class="mx-auto my-0 mt-16 w-full max-w-screen-2xl px-5 md:mt-20 md:grid md:grid-cols-12"
            >
            <div class="md:col-span-12"><Search /></div>
            </div>
          </template>
        </Modal>
      </li>
    </ul>
  </nav>
  <nav
    v-else
    class="header__utility flex h-[118px] justify-end bg-snow px-5 pt-4 lg:h-auto lg:pt-0"
  >
    <ul
      class="hidden w-0 md:grid md:inline-flex md:w-auto md:grid-cols-3 md:grid-cols-none md:grid-rows-2 md:grid-rows-none md:gap-0 md:gap-x-5 md:space-x-6"
    >
      <li
        v-if="
          utilityMenuButton &&
          utilityMenuButton.text.length > 0 &&
          utilityMenuButton.url.length > 0
        "
        class="flex list-none items-center font-body text-16 leading-110 font-normal md:text-12"
      >
        <a
          class="block flex min-h-[44px] min-w-[44px] items-center text-center font-body text-14 leading-120 font-normal text-white hover:underline md:text-12"
          :href="utilityMenuButton.url"
        >
          <div class="rounded-sm border border-gray-800 bg-indigo px-2 py-1">
            {{ utilityMenuButton.text }}
          </div>
        </a>
      </li>
      <li
        v-for="item in menu"
        :key="item.id || item.url || item.title"
        class="flex list-none items-center font-body text-16 leading-110 font-normal md:text-12"
      >
        <a
          class="inline-flex min-h-[44px] min-w-[44px] items-center justify-center py-2 text-indigo transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline"
          :href="item.url"
        >
          {{ item.title }}
        </a>
      </li>
      <!-- Search (opens in modal) -->
      <li
        class="group inline-block font-body text-14 leading-110 font-normal md:text-12"
      >
        <Modal
          :full="true"
          classes="w-screen h-screen top-0"
          v-model="showModal"
        >
          <!-- Trigger button -->
          <template #button="{ open, isOpen }">
              <button
                type="button"
                class="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center py-2 text-indigo transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline"
                :class="{ 'text-indigo-1000 underline': isOpen }"
                aria-haspopup="dialog"
                :aria-expanded="isOpen ? 'true' : 'false'"
                @click="open"
              >
                <SearchIcon
                  class="mr-1.5 w-[16px] fill-[#b7c2d5] transition-all duration-200 ease-in-out md:w-[10px]"
                  aria-hidden="true"
                  focusable="false"
                />
                Search
              </button>
            </template>

          <!-- Modal content -->
          <template #content>
            <div
              class="mx-auto my-0 mt-16 w-full max-w-screen-2xl px-5 md:mt-20 md:grid md:grid-cols-12"
            >
              <div class="md:col-span-12"><Search /></div>
            </div>
          </template>
        </Modal>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import Modal from "../Modal/Modal.vue";
import Search from "../Search/Search.vue";
import SearchIcon from "@/images/svg/icons/search.svg?component";
import MyColbyIcon from "@/images/svg/icons/mycolby.svg?component";

const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
  breakpoints: { type: String, default: "" },
  utilityMenuStyle: { type: String, default: "" },
  utilityMenuButton: { type: Object, default: () => ({ text: "", url: "" }) },
});

console.log(props);

const showModal = ref(false);
const searchRef = ref(null);
</script>
