<template>
  <div
    class="cta-card flex w-full flex-col justify-center p-6 transition-colors md:p-10 lg:p-12"
    :style="{ backgroundColor: currentTheme.bg }"
  >
    <!-- MULTI-COLUMN LAYOUT (2+ Columns) -->
    <div
      v-if="isMultiCol"
      class="cta-card__inner flex w-full gap-6 md:gap-10"
      :class="multiColLayoutClasses"
    >
      <!-- Context Column (Subheading, Heading, Buttons) -->
      <div
        v-if="heading || subheading || (buttons && buttons.length)"
        class="cta-card__context w-full"
        :class="alignment === 'center' ? '' : 'md:w-5/12 md:shrink-0'"
      >
        <Context
          size="medium"
          :align="alignment === 'center' ? 'center' : 'left'"
          :type="currentTheme.contextType"
          :subheading="subheading"
          :heading="heading"
          :buttons="{ items: buttons }"
        />
      </div>

      <!-- Paragraph Column -->
      <div
        v-if="paragraph"
        class="cta-card__paragraph w-full"
        :class="alignment === 'center' ? '' : 'md:flex-1'"
      >
        <TextGroup
          size="small"
          :align="alignment === 'center' ? 'center' : 'left'"
          :type="currentTheme.contextType"
          :paragraph="paragraph"
        />
      </div>
    </div>

    <!-- SINGLE-COLUMN LAYOUT (1 Column) -->
    <div v-else class="cta-card__inner w-full">
      <Context
        size="small"
        align="left"
        :type="currentTheme.contextType"
        :heading="heading"
        :subheading="subheading"
        :paragraph="paragraph"
        :buttons="{ items: buttons }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import TextGroup from "@/js/components/TextGroup/TextGroup.vue";

const props = defineProps({
  theme: { type: String, default: "indigo" },
  alignment: { type: String, default: "left" },
  colSpan: { type: Number, default: 1 },
  heading: { type: String, default: "" },
  subheading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
});

const isMultiCol = computed(() => Number(props.colSpan) >= 2);

const themeMap = {
  indigo: { bg: "var(--color-indigo, #012169)", contextType: "light" },
  gold: { bg: "var(--color-gold, #EEB808)", contextType: "dark" },
  azure: { bg: "var(--color-azure, #0646C3)", contextType: "light" },
  snow: { bg: "var(--color-snow, #f2f6f9)", contextType: "dark" },
  cloud: { bg: "var(--color-cloud, #eef4ff)", contextType: "dark" },
  stone: { bg: "var(--color-stone, #B5B5B5)", contextType: "dark" },
  slate: { bg: "var(--color-slate, #666666)", contextType: "light" },
  coal: { bg: "var(--color-coal, #0F0F0F)", contextType: "light" },
};

const currentTheme = computed(() => themeMap[props.theme] || themeMap.indigo);

const multiColLayoutClasses = computed(() => {
  if (props.alignment === "center") {
    return "mx-auto max-w-2xl flex-col items-center";
  }

  if (props.alignment === "right") {
    return "flex-col md:flex-row-reverse md:items-center md:justify-between";
  }

  return "flex-col md:flex-row md:items-center md:justify-between";
});
</script>
