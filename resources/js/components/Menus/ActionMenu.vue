<!-- ActionMenu.vue -->
<template>
  <!-- Filled Style -->
  <ul
    v-if="variant === 'filled'"
    class="footer__action flex flex-wrap items-center gap-4 md:gap-6"
  >
    <li
      v-for="item in menu"
      :key="item.id || item.url || item.title"
      class="inline-flex min-h-[44px] items-center"
    >
      <Button size="small" type="dark" :url="item.url" :title="item.title" />
    </li>
  </ul>

  <!-- Outline Style -->
  <ul
    v-else-if="variant === 'outline' || variant === 'box'"
    class="footer__action flex flex-wrap gap-4 md:gap-6"
  >
    <li
      v-for="item in menu"
      :key="item.id || item.url || item.title"
      class="inline-block"
    >
      <a
        class="btn group inline-flex min-h-[44px] min-w-[44px] flex-row items-center space-x-1.5 rounded border border-solid border-white bg-indigo px-4 py-1.5 font-body text-14 leading-130 font-normal text-white !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out focus:outline focus:outline-2 focus:outline-gold"
        :href="item.url"
      >
        <Icon :name="item.title.toLowerCase()" class="h-3.5 w-3.5 fill-white" />
        <span class="btn__text">
          {{ item.title }}
          <div
            class="btn__border block h-px w-0 bg-white transition-all duration-200 ease-in-out group-hover:w-full"
          ></div>
        </span>
      </a>
    </li>
  </ul>

  <!-- Link Style (Default) -->
  <ul v-else class="flex flex-wrap gap-x-4 gap-y-3 md:gap-x-2">
    <li
      v-for="item in menu"
      :key="item.id || item.url || item.title"
      class="flex-shrink-0 font-body text-18 leading-140 font-bold text-[#eef4ff] md:px-4 md:text-10 md:first:pl-0 md:last:pr-0"
    >
      <a
        :href="item.url"
        class="flex min-h-[44px] min-w-[44px] items-center text-[#eef4ff] transition-all duration-200 ease-in-out hover:text-white hover:underline"
      >
        <Icon
          :name="item.title"
          class="mr-2 h-4 w-4 fill-gold md:mr-1 md:h-3 md:w-3"
        />
        {{ item.title }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import Icon from "@/js/components/Icon/Icon.vue";
import Button from "../Button/Button.vue";

defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
  variant: {
    type: String,
    default: "link",
  },
});
</script>
