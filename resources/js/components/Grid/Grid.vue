<template>
  <section class="grid-block mx-auto my-0 w-full max-w-screen-2xl">
    <div
      v-if="items && items.length"
      class="grid-block__inner grid items-stretch"
      :class="[gridColumnClasses, gapClass]"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        style="container-type: inline-size"
        class="grid-block__item @container flex h-full w-full flex-col overflow-hidden [&_.media-item>div]:h-full [&_img]:h-full [&_img]:object-cover [&_video]:h-full [&_video]:object-cover [&>*]:h-full"
        :class="[getItemSpanClasses(item), getCellAspectClass(item)]"
      >
        <component
          :is="resolveComponent(item.acf_fc_layout)"
          v-bind="item"
          :col-span="getActiveSpanNumber(item)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import MediaItem from "../MediaItem/MediaItem.vue";
import CtaCard from "../CtaCard/CtaCard.vue";
import BlockQuote from "../BlockQuote/BlockQuote.vue";
import MediaContextCard from "../MediaContextCard/MediaContextCard.vue";

const props = defineProps({
  columns: {
    type: [String, Number],
    default: "4",
  },
  min_columns: {
    type: [String, Number],
    default: "1",
  },
  gap: {
    type: String,
    default: "medium",
  },
  row_style: {
    type: String,
    default: "stretch",
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const componentMap = {
  media_item: MediaItem,
  media_context_card: MediaContextCard,
  cta_card: CtaCard,
  block_quote: BlockQuote,
};

const resolveComponent = (layout) => componentMap[layout] || MediaItem;

// Progressive column counts across mobile (base), sm, md, and lg (desktop) up to 8 columns
const breakpointCols = computed(() => {
  const min = Math.min(4, Math.max(1, Number(props.min_columns) || 1));
  const max = Math.min(8, Math.max(min, Number(props.columns) || 4));

  const sm = Math.min(max, Math.max(min, 2));
  const md = Math.min(max, Math.max(sm, Math.ceil(max / 2)));

  return { base: min, sm, md, lg: max };
});

const gridColumnClasses = computed(() => {
  const { base, sm, md, lg } = breakpointCols.value;

  const baseMap = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };
  const smMap = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
  };
  const mdMap = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
  };
  const lgMap = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
    8: "lg:grid-cols-8",
  };

  return [baseMap[base], smMap[sm], mdMap[md], lgMap[lg]]
    .filter(Boolean)
    .join(" ");
});

const getActiveSpanNumber = (item) => {
  const activeColKey = `col_span_${props.columns}`;
  const rawSpan = item?.[activeColKey] || item?.col_span || 1;
  const desired = Math.max(1, Number(rawSpan) || 1);
  return Math.min(desired, breakpointCols.value.lg);
};

const getItemSpanClasses = (item) => {
  const desired = getActiveSpanNumber(item);
  const { base, sm, md, lg } = breakpointCols.value;

  const baseSpan = Math.min(desired, base);
  const smSpan = Math.min(desired, sm);
  const mdSpan = Math.min(desired, md);
  const lgSpan = Math.min(desired, lg);

  const baseSpanMap = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
  };
  const smSpanMap = {
    1: "sm:col-span-1",
    2: "sm:col-span-2",
    3: "sm:col-span-3",
    4: "sm:col-span-4",
  };
  const mdSpanMap = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
  };
  const lgSpanMap = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
    7: "lg:col-span-7",
    8: "lg:col-span-8",
  };

  return [
    baseSpanMap[baseSpan],
    smSpanMap[smSpan],
    mdSpanMap[mdSpan],
    lgSpanMap[lgSpan],
  ]
    .filter(Boolean)
    .join(" ");
};

const gapClass = computed(() => {
  const gaps = {
    none: "gap-0",
    small: "gap-3 sm:gap-4",
    medium: "gap-4 sm:gap-6",
    large: "gap-4 sm:gap-8",
  };
  return gaps[props.gap] ?? gaps.medium;
});

// Applies a uniform aspect ratio only to 1-column items when row_style is set;
// multi-column items stretch naturally to match their 1-column neighbors' height.
const getCellAspectClass = (item) => {
  if (props.row_style === "stretch" || getActiveSpanNumber(item) > 1) {
    return "";
  }

  const ratios = {
    square: "aspect-square",
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
  };

  return ratios[props.row_style] || "";
};
</script>
