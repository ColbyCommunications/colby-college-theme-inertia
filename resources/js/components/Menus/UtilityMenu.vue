<template>
  <nav
    class="float-right block bg-indigo-100 px-5 pt-4 md:flex md:h-auto md:w-full md:justify-between md:pt-0"
    aria-label="Utility menu"
  >
    <!-- Left side: Utility links -->
    <ul
      class="hidden w-0 md:grid md:inline-flex md:w-auto md:grid-cols-3 md:grid-cols-none md:grid-rows-2 md:grid-rows-none md:gap-0 md:gap-x-5 md:space-x-6"
    >
      <li
        v-for="item in menu"
        :key="item.id || item.url || item.title"
        class="flex list-none items-center font-body text-16 leading-110 font-normal md:text-10"
      >
        <a
          class="block py-2 text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo-1000 hover:underline"
          :href="item.url"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
    <!-- Right side: Action links (myColby, Search) -->
    <ul
      class="flex space-x-6 bg-indigo-100 px-5 md:static md:float-right md:block md:bg-transparent md:px-0"
    >
      <!-- myColby -->
      <li
        class="group inline-block items-center font-body text-14 leading-110 font-normal md:text-10"
      >
        <a
          class="flex py-2 text-indigo-800 transition-all duration-200 ease-in-out group-hover:text-indigo-1000 group-hover:underline"
          href="https://my.colby.edu/"
        >
          <MyColbyIcon
            class="mr-1.5 w-[16px] fill-indigo-500 transition-all duration-200 ease-in-out group-hover:fill-indigo-700 md:w-[10px]"
          />
          myColby
        </a>
      </li>

      <!-- Search (opens in modal) -->
      <li
        class="group inline-block font-body text-14 leading-110 font-normal md:text-10"
      >
        <Modal :full="true" classes="w-screen h-screen top-0">
          <!-- Trigger button -->
          <template #button>
            <button
              type="button"
              class="flex cursor-pointer py-2 text-indigo-800 transition-all duration-200 ease-in-out group-hover:text-indigo-1000 group-hover:underline"
              aria-haspopup="dialog"
            >
              <SearchIcon
                class="mr-1.5 w-[16px] fill-indigo-500 transition-all duration-200 ease-in-out group-hover:fill-indigo-700 md:w-[10px]"
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
                <Search />
              </div>
            </div>
          </template>
        </Modal>
      </li>
    </ul>
  </nav>
</template>
<script setup>
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
});
</script>
