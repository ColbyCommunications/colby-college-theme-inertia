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
          :buttons="{ items: buttons }"
        />
      </div>
      <div
        class="stat-group__main col-span-12"
        :class="groupAlignmentClasses"
      >
        <div
          class="grid grid-cols-8 gap-10"
          :class="innerAlignmentClasses"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="space-y-3"
            :class="getItemClasses(index)"
          >
            <h3
              class="font-extended font-normal text-36 leading-[1.5] -tracking-3 text-indigo"
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
  alignment: { type: String, default: "left" },
  buttons: { type: Array, default: () => [] },
  items: { type: Array, default: () => [] },
});
const groupAlignmentClasses = computed(() => {
  switch (props.alignment) {
    case "center":
      return "lg:col-start-3 lg:col-span-8";

    case "right":
      return "lg:col-start-5 lg:col-span-8";

    case "left":
    default:
      return "lg:col-start-1 lg:col-span-8";
  }
});

const innerAlignmentClasses = computed(() => {
  switch (props.alignment) {
    case "center":
      return "justify-center";

    case "right":
      return "justify-end";

    case "left":
    default:
      return "justify-start";
  }
});

function getItemClasses(index) {
  const count = props.items.length;

  if (props.alignment === "right") {
    if (count === 1) return "col-span-4 md:col-span-2 md:col-start-7";
    if (count === 2) return index === 0
      ? "col-span-4 md:col-span-2 md:col-start-5"
      : "col-span-4 md:col-span-2 md:col-start-7";
    if (count === 3) return index === 0
      ? "col-span-4 md:col-span-2 md:col-start-3"
      : "col-span-4 md:col-span-2";
  }

  if (props.alignment === "center") {
    if (count === 1) return "col-span-4 md:col-span-2 md:col-start-4";
    if (count === 2) return index === 0
      ? "col-span-4 md:col-span-2 md:col-start-3"
      : "col-span-4 md:col-span-2";
    if (count === 3) return index === 0
      ? "col-span-4 md:col-span-2 md:col-start-2"
      : "col-span-4 md:col-span-2";
  }

  return "col-span-4 md:col-span-2";
}

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
