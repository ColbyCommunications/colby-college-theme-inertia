<template>
  <nav
    aria-label="Breadcrumbs"
    class="breadcrumbs flex h-9 items-center overflow-x-auto bg-gray-100"
  >
    <div class="breadcrumbs__inner mx-auto w-full max-w-screen-2xl px-5">
      <ul class="flex items-center [&>li+li]:ml-5">
        <li
          class="font-body text-10 leading-140 font-bold whitespace-nowrap text-indigo-800"
        >
          <a
            class="text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo"
            href="/"
          >
            <span class="sr-only">Homepage</span>
            <Icon :name="'home'" />
          </a>
        </li>

        <li
          v-for="(item, index) in items"
          :key="index"
          class="font-body text-10 leading-140 font-bold whitespace-nowrap text-indigo-800"
        >
          <a
            class="text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo"
            :href="item.url"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import Icon from "../Icon/Icon.vue";
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
