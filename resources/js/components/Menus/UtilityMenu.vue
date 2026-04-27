<template>
  <nav v-if="utilityMenuStyle === 'colby.edu'" class="float-right block bg-[#f9fbff] px-5 pt-4 md:flex md:h-auto md:w-full md:justify-between md:pt-0" aria-label="Utility menu">
    <!-- Left side: Utility links -->
    <ul
      class="hidden w-0 md:grid md:inline-flex md:w-auto md:grid-cols-3 md:grid-cols-none md:grid-rows-2 md:grid-rows-none md:gap-0 md:gap-x-5 md:space-x-6"
    >
    <li
        v-if="utilityMenuButton && (utilityMenuButton.text.length > 0 && utilityMenuButton.url.length > 0)"
        class="flex list-none items-center font-body text-16 leading-110 font-normal md:text-12"
      >
        <a class="font-body font-normal text-14 leading-120 text-center block text-white md:text-12 min-w-[44px] min-h-[44px] flex items-center hover:underline" :href="utilityMenuButton.url">
          <div class="bg-indigo border border-gray-800 rounded-sm px-2 py-1">{{ utilityMenuButton.text }}</div>
        </a>
      </li>
      <li
        v-for="item in menu"
        :key="item.id || item.url || item.title"
        class="flex list-none items-center font-body text-16 leading-110 font-normal md:text-12"
      >
        <a
          class="inline-flex items-center justify-center py-2 text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline min-w-[44px] min-h-[44px]"
          :href="item.url"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
    <!-- Right side: Action links (myColby, Search) -->
    <ul
      class="flex space-x-6 bg-[#f9fbff] px-5 md:static md:float-right md:block md:bg-transparent md:px-0"
    >
      <!-- myColby -->
      <li
        class="group inline-block items-center font-body text-14 leading-110 font-normal md:text-12"
      >
        <a
          class="inline-flex items-center justify-center py-2 text-indigo-800 transition-all duration-200 ease-in-out group-hover:text-indigo-1000 group-hover:underline min-w-[44px] min-h-[44px]"
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
          <template #button>
            <button
              type="button"
              class="inline-flex items-center justify-center cursor-pointer py-2 text-indigo-800 transition-all duration-200 ease-in-out group-hover:text-indigo-1000 group-hover:underline min-w-[44px] min-h-[44px]"
              aria-haspopup="dialog"
              @click="showModal = true"
            >
              <SearchIcon
                class="mr-1.5 w-[16px] fill-[#b7c2d5] transition-all duration-200 ease-in-out group-hover:fill-indigo-700 md:w-[10px]"
              />
              Search
            </button>
          </template>

          <!-- Modal content -->
          <template #content>
            <div
              class="mx-auto my-0 mt-16 w-full max-w-screen-2xl px-5 md:mt-20 md:grid md:grid-cols-12"
            >
              <div class="md:col-span-12">
                search
              </div>
            </div>
          </template>
        </Modal>
      </li>
    </ul>
  </nav>
  <nav v-else class="header__utility flex justify-end h-[118px] lg:h-auto pt-4 lg:pt-0 px-5 bg-[#f9fbff]">
    <ul
      class="hidden w-0 md:grid md:inline-flex md:w-auto md:grid-cols-3 md:grid-cols-none md:grid-rows-2 md:grid-rows-none md:gap-0 md:gap-x-5 md:space-x-6"
    >
        <li
          v-if="utilityMenuButton && (utilityMenuButton.text.length > 0 && utilityMenuButton.url.length > 0)"
          class="flex list-none items-center font-body text-16 leading-110 font-normal md:text-12"
        >
          <a class="font-body font-normal text-14 leading-120 text-center block text-white md:text-12 min-w-[44px] min-h-[44px] flex items-center hover:underline" :href="utilityMenuButton.url">
            <div class="bg-indigo border border-gray-800 rounded-sm px-2 py-1">{{ utilityMenuButton.text }}</div>
          </a>
        </li>
      <li
        v-for="item in menu"
        :key="item.id || item.url || item.title"
        class="flex list-none items-center font-body text-16 leading-110 font-normal md:text-12"
      >
        <a
          class="inline-flex items-center justify-center py-2 text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline min-w-[44px] min-h-[44px]"
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
          <template #button>
            <button
              type="button"
              class="inline-flex items-center justify-center cursor-pointer py-2 text-indigo-800 transition-all duration-200 ease-in-out group-hover:text-indigo-1000 group-hover:underline min-w-[44px] min-h-[44px]"
              aria-haspopup="dialog"
              @click="showModal = true"
            >
              <SearchIcon
                class="mr-1.5 w-[16px] fill-[#b7c2d5] transition-all duration-200 ease-in-out group-hover:fill-indigo-700 md:w-[10px]"
              />
              Search
            </button>
          </template>

          <!-- Modal content -->
          <template #content>
            <div
              class="mx-auto my-0 mt-16 w-full max-w-screen-2xl px-5 md:mt-20 md:grid md:grid-cols-12"
            >
              <div class="md:col-span-12">
                search
              </div>
            </div>
          </template>
        </Modal>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ref, watch } from "vue";
import Modal from "../Modal/Modal.vue";
// import Search from "../Search/Search.vue";
import SearchIcon from "@/images/svg/icons/search.svg?component";
import MyColbyIcon from "@/images/svg/icons/mycolby.svg?component";

const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
  breakpoints: { type: String, default: "" },
  utilityMenuStyle: { type: String, default: "" },
  utilityMenuButton: { type: Object, default: () => ({text: "", url: ""}) },
});

console.log(props);

const showModal = ref(false);
const searchRef = ref(null);

// watch(showModal, (val) => {
//   if (!val) {
//     searchRef.value?.clearSearch();
//   }
// });
</script>
