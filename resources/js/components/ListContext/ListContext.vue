<template>
  <div class="list-context">
    <div
      class="list-context__inner w-full max-w-screen-2xl grid-cols-8 gap-10 space-y-8 md:grid md:space-y-0"
    >
      <div class="list-context__context md:col-span-5">
        <Context
          size="small"
          :is-static="size === 'small'"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
        />
      </div>
      <div class="list-context__main md:col-span-3">
        <ul class="list-context__list list-spacing ml-4">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="list-disc font-body text-coal"
            :class="
              size === 'small'
                ? 'text-14 leading-130 font-semibold'
                : 'text-20 leading-120 font-bold'
            "
          >
            <a
              v-if="item.link?.url"
              class="text-indigo no-underline transition-all duration-200 ease-in-out hover:text-indigo hover:underline"
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

const buttonItems = computed(() => {
  if (props.buttons) {
    return props.buttons.map((btn) => ({
      button: { url: btn.url, title: btn.title, target: btn.target || "" },
    }));
  } else {
    return [];
  }
});
</script>
