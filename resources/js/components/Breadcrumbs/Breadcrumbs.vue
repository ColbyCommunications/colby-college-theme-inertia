<template>
  <nav
    aria-label="Breadcrumbs"
    class="breadcrumbs flex h-9 min-h-[44px] min-w-[44px] items-center overflow-x-auto bg-gray-100"
  >
    <div class="breadcrumbs__inner mx-auto w-full max-w-screen-2xl px-5">
      <ul class="flex items-center [&>li+li]:ml-5">
        <li
          class="font-body text-10 leading-140 font-bold whitespace-nowrap text-indigo-800"
        >
          <a
            class="inline-flex h-[44px] w-[44px] items-center justify-center text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo"
            href="/"
          >
            <span class="sr-only">Homepage</span>

            <Icon :name="'home'" class="size-[10px] fill-indigo" />
          </a>
        </li>

        <li
          v-for="(item, index) in items"
          :key="index"
          class="font-body text-10 leading-140 font-bold whitespace-nowrap text-indigo-800"
        >
          <a
            class="inline-block min-h-[44px] min-w-[44px] leading-[44px] text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo"
            :href="item.url"
            v-html="item.title"
          ></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import Icon from "../Icon/Icon.vue";
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

console.log(props);
</script>
