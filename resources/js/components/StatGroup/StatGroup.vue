<template>
  <div class="stat-group">
    <div
      class="stat-group__inner md:grid grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 space-y-24 my-0 mx-auto"
    >
      <div class="stat-group__intro md:col-start-2 lg:col-start-3 md:col-span-10 lg:col-span-8">
        <Context
          size="xlarge"
          align="center"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttonItems }"
        />
      </div>
      <div class="stat-group__main col-span-12 lg:col-start-2 lg:col-span-10">
        <div class="grid grid-cols-8 gap-10">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="col-span-4 md:col-span-2 space-y-3"
          >
            <h3
              class="font-extended font-normal text-36 leading-100 -tracking-3 text-indigo"
            >
              {{ item.heading }}
            </h3>
            <p class="font-body font-normal text-14 leading-130 text-indigo-900">
              {{ item.paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";

const props = defineProps({
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
