<template>
  <div class="stat-group">
    <div
      class="stat-group__inner mx-auto my-0 w-full max-w-screen-2xl grid-cols-12 space-y-24 gap-x-10 px-5 md:grid"
    >
      <div
        class="stat-group__intro md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3"
      >
        <Context
          size="xlarge"
          align="center"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="{ items: buttons }"
        />
      </div>
      <div class="stat-group__main col-span-12" :class="groupAlignmentClasses">
        <div
          class="grid grid-cols-8 gap-8 sm:gap-10"
          :class="innerAlignmentClasses"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="min-w-0 space-y-3"
            :class="getItemClasses(index)"
          >
            <h3
              class="font-extended -tracking-3 text-36 leading-[1.5] font-normal text-indigo"
            >
              {{ item.heading }}
            </h3>

            <p class="font-body text-14 leading-[1.5] font-normal text-indigo">
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
  const baseSpan =
    "col-span-8 text-center sm:col-span-4 sm:text-left md:col-span-2";

  if (props.alignment === "right") {
    if (count === 1) return `${baseSpan} md:col-start-7`;
    if (count === 2)
      return index === 0
        ? `${baseSpan} md:col-start-5`
        : `${baseSpan} md:col-start-7`;
    if (count === 3)
      return index === 0 ? `${baseSpan} md:col-start-3` : baseSpan;
  }

  if (props.alignment === "center") {
    if (count === 1) return `${baseSpan} md:col-start-4`;
    if (count === 2)
      return index === 0 ? `${baseSpan} md:col-start-3` : baseSpan;
    if (count === 3)
      return index === 0 ? `${baseSpan} md:col-start-2` : baseSpan;
  }

  return baseSpan;
}

const buttonItems = computed(() =>
  props.buttons.map((btn) => ({
    button: { url: btn.url, title: btn.title, target: btn.target || "" },
  })),
);
</script>
