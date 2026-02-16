<template>
  <div class="list-context">
    <div
      class="list-context__inner md:grid grid-cols-8 gap-10 max-w-screen-2xl w-full space-y-8 md:space-y-0"
    >
      <div class="list-context__context md:col-span-5">
        <Context
          size="small"
          :is-static="size === 'small'"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttonItems }"
        />
      </div>
      <div class="list-context__main md:col-span-3">
        <ul class="list-context__list space-y-2 ml-4">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="font-body text-indigo-600 list-disc"
            :class="
              size === 'small'
                ? 'font-semibold text-14 leading-130'
                : 'font-bold text-20 leading-120'
            "
          >
            <a
              v-if="item.link?.url"
              class="text-indigo hover:text-indigo-600 no-underline hover:underline transition-all duration-200 ease-in-out"
              :href="item.link.url"
            >
              {{ item.link.title }}
            </a>
            <span v-else class="text-indigo">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";

const props = defineProps({
  size: { type: String, default: "medium" },
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  items: { type: Array, default: () => [] },
});

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
