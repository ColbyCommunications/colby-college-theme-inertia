<template>
  <section class="mosaic mx-auto my-0 w-full max-w-screen-2xl">
    <div
      v-if="items && items.length"
      ref="gridRef"
      class="mosaic__grid grid grid-flow-dense auto-rows-[4px] items-start"
      :class="[gridColumnClasses, gapClasses.columnGap]"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        :ref="(el) => setItemRef(el, index)"
        style="container-type: inline-size"
        class="mosaic__item @container block w-full overflow-hidden"
        :class="[getItemSpanClasses(item), gapClasses.marginBottom]"
        :style="{
          gridRowEnd: rowSpans[index] ? `span ${rowSpans[index]}` : undefined,
        }"
      >
        <component
          :is="resolveComponent(item.acf_fc_layout)"
          v-bind="item"
          :col-span="getActiveSpanNumber(item)"
          @load="calculateRowSpans"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
} from "vue";
import MediaItem from "../MediaItem/MediaItem.vue";
import CtaCard from "../CTACard/CtaCard.vue";
import BlockQuote from "../BlockQuote/BlockQuote.vue";
import MediaContextCard from "../MediaContextCard/MediaContextCard.vue";

const props = defineProps({
  columns: {
    type: [String, Number],
    default: "3",
  },
  min_columns: {
    type: [String, Number],
    default: "1",
  },
  gap: {
    type: String,
    default: "medium",
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

const gridRef = ref(null);
const itemRefs = ref([]);
const rowSpans = ref({});
let itemResizeObserver = null;

const setItemRef = (el, index) => {
  if (el) {
    itemRefs.value[index] = el;
    if (itemResizeObserver && el.firstElementChild) {
      itemResizeObserver.observe(el.firstElementChild);
    }
  }
};

const breakpointCols = computed(() => {
  const min = Number(props.min_columns) || 1;
  const max = Math.max(min, Number(props.columns) || 3);
  const sm = Math.min(max, Math.max(min, 2));
  const md = max === 4 ? 3 : sm;

  return { base: min, sm, md, lg: max };
});

const gridColumnClasses = computed(() => {
  const { base, sm, md, lg } = breakpointCols.value;

  const baseMap = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
  };
  const smMap = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
  };
  const mdMap = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  };
  const lgMap = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
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
  };
  const smSpanMap = {
    1: "sm:col-span-1",
    2: "sm:col-span-2",
    3: "sm:col-span-3",
  };
  const mdSpanMap = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
  };
  const lgSpanMap = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
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

const gapClasses = computed(() => {
  const gaps = {
    small: {
      columnGap: "gap-x-3 sm:gap-x-4",
      marginBottom: "mb-3 sm:mb-4",
    },
    medium: {
      columnGap: "gap-x-4 sm:gap-x-6",
      marginBottom: "mb-4 sm:mb-6",
    },
    large: {
      columnGap: "gap-x-4 sm:gap-x-8",
      marginBottom: "mb-4 sm:mb-8",
    },
  };
  return gaps[props.gap] || gaps.medium;
});

const calculateRowSpans = () => {
  const rowTrackHeight = 4;
  const updated = {};

  itemRefs.value.forEach((el, index) => {
    if (!el) return;
    const inner = el.firstElementChild;
    if (!inner) return;

    const rect = inner.getBoundingClientRect();
    const styles = window.getComputedStyle(el);
    const marginBottom = parseFloat(styles.marginBottom) || 0;

    if (rect.height > 0) {
      updated[index] = Math.ceil((rect.height + marginBottom) / rowTrackHeight);
    }
  });

  rowSpans.value = updated;
};

onMounted(() => {
  calculateRowSpans();

  if (typeof ResizeObserver !== "undefined") {
    itemResizeObserver = new ResizeObserver(() => {
      calculateRowSpans();
    });

    if (gridRef.value) {
      itemResizeObserver.observe(gridRef.value);
    }

    itemRefs.value.forEach((el) => {
      if (el?.firstElementChild) {
        itemResizeObserver.observe(el.firstElementChild);
      }
    });
  }
});

onBeforeUnmount(() => {
  if (itemResizeObserver) {
    itemResizeObserver.disconnect();
  }
});

watch(
  () => [props.items, props.columns, props.min_columns, props.gap],
  async () => {
    await nextTick();
    itemRefs.value.forEach((el) => {
      if (itemResizeObserver && el?.firstElementChild) {
        itemResizeObserver.observe(el.firstElementChild);
      }
    });
    calculateRowSpans();
  },
  { deep: true },
);
</script>
