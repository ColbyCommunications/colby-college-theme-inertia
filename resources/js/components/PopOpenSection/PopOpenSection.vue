<template>
  <div class="pop-open-section">
    <div
      class="pop-open-section__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
      :class="{ 'my-24': hero }"
    >
      <div
        class="md:col-span-8"
        :class="{ 'md:col-start-3': component_align === 'center' }"
      >
        <Context
          :hero="hero"
          :align="text_align || 'left'"
          :size="size || 'medium'"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
        />

        <div
          class="mt-6 flex"
          :class="{ 'justify-center text-center': text_align === 'center' }"
        >
          <Button
            url="#"
            :title="button_text"
            type="light"
            :size="size || 'medium'"
            role="button"
            aria-haspopup="dialog"
            :aria-expanded="isOpen ? 'true' : 'false'"
            @click.prevent="isOpen = true"
          />

          <Drawer
            v-model="isOpen"
            :side="drawer_side"
            :title="resolvedDrawerTitle"
          >
            <div
              v-if="blockItems.length"
              class="space-y-8 [&_.context-section__inner]:!block [&_.context-section__inner]:!px-0"
            >
              <div v-for="(item, index) in blockItems" :key="index">
                <Heading
                  v-if="item.acf_fc_layout === 'heading'"
                  :heading="formatHeadingHtml(item)"
                />
                <component
                  :is="resolveComponent(item.acf_fc_layout)"
                  v-else-if="resolveComponent(item.acf_fc_layout)"
                  v-bind="item"
                />
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Context from "../Context/Context.vue";
import Button from "../Button/Button.vue";
import Drawer from "@/js/components/Drawer/Drawer.vue";

import Heading from "../Heading/Heading.vue";
import Paragraph from "../Paragraph/Paragraph.vue";
import Accordion from "../Accordion/Accordion.vue";
import ContextSection from "../ContextSection/ContextSection.vue";
import Grid from "../Grid/Grid.vue";

const props = defineProps({
  hero: {
    type: Boolean,
    default: false,
  },
  text_align: {
    type: String,
    default: "left",
  },
  component_align: {
    type: String,
    default: "left",
  },
  size: {
    type: String,
    default: "medium",
  },
  subheading: {
    type: String,
    default: "",
  },
  heading: {
    type: String,
    default: "",
  },
  paragraph: {
    type: [String, Object],
    default: "",
  },
  button_text: {
    type: String,
    default: "Learn More",
  },
  drawer_side: {
    type: String,
    default: "right",
  },
  drawer_heading: {
    type: String,
    default: "",
  },
  drawer_items: {
    type: Array,
    default: () => [],
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const isOpen = ref(false);

const resolvedDrawerTitle = computed(() => {
  const custom = props.drawer_heading?.trim();
  return custom ? custom : props.heading;
});

const blockItems = computed(() =>
  props.drawer_items?.length ? props.drawer_items : props.items || [],
);

const formatHeadingHtml = (item) => {
  const tag = ["h2", "h3", "h4", "h5", "h6"].includes(item.level)
    ? item.level
    : "h2";
  const text = item.heading || "";
  // If `text` already starts with an <h2..h6> tag, pass it directly; otherwise wrap it
  if (/^<h[2-6]\b/i.test(text.trim())) {
    return text;
  }
  return `<${tag}>${text}</${tag}>`;
};

const componentMap = {
  paragraph: Paragraph,
  accordion: Accordion,
  context_section: ContextSection,
  grid: Grid,
};

const resolveComponent = (layout) => componentMap[layout] || null;
</script>
