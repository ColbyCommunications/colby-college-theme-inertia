<template>
  <div ref="rootEl" class="progress-bar w-full">
    <div class="progress-bar__container mx-auto w-full" :class="barWidthClass">
      <div
        v-if="heading || paragraph"
        :id="headingId"
        class="progress-bar__header mb-6"
      >
        <Context
          :align="textAlign"
          :size="size || 'medium'"
          :heading="heading"
          :paragraph="paragraph"
        />
      </div>

      <div class="w-full">
        <div
          v-if="isParallelTop && hasParallelContent"
          class="mb-2.5 flex items-end justify-between gap-4"
        >
          <!-- Parallel Left -->
          <div class="flex flex-col items-start space-y-1 text-left">
            <template
              v-for="(line, idx) in parallelLeftLines"
              :key="`plt-${idx}`"
            >
              <div
                v-if="line.hasContent"
                class="font-body leading-120"
                :class="sizeMap[line.size] || sizeMap.medium"
              >
                <span
                  v-if="line.hasMetric"
                  class="font-bold tabular-nums"
                  :style="{ color: line.metricColor }"
                >
                  {{
                    formatMetric(
                      animatedMetrics[`parallel_left_${idx}`],
                      line.decimals,
                      line.format,
                    )
                  }}
                </span>
                <span
                  v-if="line.text"
                  :class="line.hasMetric ? 'ml-1 font-normal' : 'font-semibold'"
                  :style="{ color: line.textColor }"
                >
                  {{ line.text }}
                </span>
              </div>
            </template>
          </div>

          <!-- Parallel Right -->
          <div class="ml-auto flex flex-col items-end space-y-1 text-right">
            <template
              v-for="(line, idx) in parallelRightLines"
              :key="`prt-${idx}`"
            >
              <div
                v-if="line.hasContent"
                class="font-body leading-120"
                :class="sizeMap[line.size] || sizeMap.medium"
              >
                <span
                  v-if="line.hasMetric"
                  class="font-bold tabular-nums"
                  :style="{ color: line.metricColor }"
                >
                  {{
                    formatMetric(
                      animatedMetrics[`parallel_right_${idx}`],
                      line.decimals,
                      line.format,
                    )
                  }}
                </span>
                <span
                  v-if="line.text"
                  :class="line.hasMetric ? 'ml-1 font-normal' : 'font-semibold'"
                  :style="{ color: line.textColor }"
                >
                  {{ line.text }}
                </span>
              </div>
            </template>
          </div>
        </div>

        <!-- Progress Bar Track -->
        <div
          class="relative w-full overflow-hidden rounded-full bg-gray-200"
          :class="barHeightClass"
          role="progressbar"
          :aria-valuenow="Math.round(animatedBarValue)"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-labelledby="heading ? headingId : undefined"
          :aria-label="
            !heading
              ? `Progress: ${Math.round(normalizedTargetValue)}%`
              : undefined
          "
        >
          <div
            class="h-full rounded-full"
            :style="{
              width: `${animatedBarValue}%`,
              backgroundColor: bar_color || '#012169',
            }"
          />
        </div>

        <!-- Parallel Metrics Row when assigned to BOTTOM -->
        <div
          v-if="!isParallelTop && hasParallelContent"
          class="mt-2.5 flex items-start justify-between gap-4"
        >
          <!-- Parallel Left -->
          <div class="flex flex-col items-start space-y-1 text-left">
            <template
              v-for="(line, idx) in parallelLeftLines"
              :key="`plb-${idx}`"
            >
              <div
                v-if="line.hasContent"
                class="font-body leading-120"
                :class="sizeMap[line.size] || sizeMap.medium"
              >
                <span
                  v-if="line.hasMetric"
                  class="font-bold tabular-nums"
                  :style="{ color: line.metricColor }"
                >
                  {{
                    formatMetric(
                      animatedMetrics[`parallel_left_${idx}`],
                      line.decimals,
                      line.format,
                    )
                  }}
                </span>
                <span
                  v-if="line.text"
                  :class="line.hasMetric ? 'ml-1 font-normal' : 'font-semibold'"
                  :style="{ color: line.textColor }"
                >
                  {{ line.text }}
                </span>
              </div>
            </template>
          </div>

          <!-- Parallel Right -->
          <div class="ml-auto flex flex-col items-end space-y-1 text-right">
            <template
              v-for="(line, idx) in parallelRightLines"
              :key="`prb-${idx}`"
            >
              <div
                v-if="line.hasContent"
                class="font-body leading-120"
                :class="sizeMap[line.size] || sizeMap.medium"
              >
                <span
                  v-if="line.hasMetric"
                  class="font-bold tabular-nums"
                  :style="{ color: line.metricColor }"
                >
                  {{
                    formatMetric(
                      animatedMetrics[`parallel_right_${idx}`],
                      line.decimals,
                      line.format,
                    )
                  }}
                </span>
                <span
                  v-if="line.text"
                  :class="line.hasMetric ? 'ml-1 font-normal' : 'font-semibold'"
                  :style="{ color: line.textColor }"
                >
                  {{ line.text }}
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Optional ButtonGroup below the Progress Bar -->
      <div
        v-if="validButtons.length"
        class="progress-bar__buttons mt-6 flex w-full"
        :class="isButtonsRight ? 'justify-end' : 'justify-start'"
      >
        <ButtonGroup :items="validButtons" :size="size || 'medium'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  onMounted,
  onBeforeUnmount,
  watch,
  useId,
} from "vue";
import gsap from "gsap";
import Context from "../Context/Context.vue";
import ButtonGroup from "@/js/components/ButtonGroup/ButtonGroup.vue";

const props = defineProps({
  size: { type: String, default: "medium" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  text_align: { type: String, default: "left" },
  value: { type: [Number, String], default: 0 },

  parallel_position: { type: [Boolean, Number, String], default: 1 },
  parallel_left: { type: Object, default: () => ({}) },
  parallel_right: { type: Object, default: () => ({}) },

  bar_height: { type: String, default: "medium" },
  bar_width: { type: String, default: "large" },
  bar_color: { type: String, default: "#012169" },
  animate_metrics: { type: [Boolean, Number], default: true },

  align_buttons: { type: [Boolean, Number, String], default: 0 },
  buttons: { type: Array, default: () => [] },
});

const id = useId();
const headingId = `progress-bar-heading-${id}`;

const rootEl = ref(null);
let observer = null;
let activeTweens = [];

const textAlign = computed(() => props.text_align || "left");

const isParallelTop = computed(() => {
  if (props.parallel_position === "bottom") return false;
  if (props.parallel_position === "top") return true;
  return Boolean(Number(props.parallel_position));
});

const isButtonsRight = computed(() => {
  if (props.align_buttons === "right") return true;
  if (props.align_buttons === "left") return false;
  return Boolean(Number(props.align_buttons));
});

const validButtons = computed(() => {
  if (!Array.isArray(props.buttons)) return [];
  return props.buttons.filter(
    (item) => item?.button && item.button.url && item.button.title,
  );
});

const sizeMap = {
  small: "text-12 md:text-14",
  medium: "text-16 md:text-18",
  large: "text-20 md:text-24",
  xl: "text-28 md:text-36",
};

const barHeightClass = computed(() => {
  const heights = {
    small: "h-2",
    medium: "h-4",
    large: "h-7",
    xl: "h-10",
  };
  return heights[props.bar_height] || heights.medium;
});

const barWidthClass = computed(() => {
  const widths = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
    xl: "max-w-full",
  };
  return widths[props.bar_width] || widths.large;
});

const normalizedTargetValue = computed(() => {
  const num = Number(props.value);
  if (Number.isNaN(num)) return 0;
  return Math.min(100, Math.max(0, num));
});

const getDecimalPlaces = (val) => {
  if (val === null || val === undefined || val === "") return 0;
  const str = String(val);
  const dotIndex = str.indexOf(".");
  return dotIndex === -1 ? 0 : str.length - dotIndex - 1;
};

const parseSectionLines = (sectionObj) => {
  const obj = sectionObj || {};
  return [1, 2].map((i) => {
    const rawMetric = obj[`line_${i}_metric`];
    const hasMetric =
      rawMetric !== "" &&
      rawMetric !== null &&
      rawMetric !== undefined &&
      !Number.isNaN(Number(rawMetric));
    const metricNum = hasMetric ? Number(rawMetric) : 0;
    const decimals = hasMetric ? getDecimalPlaces(rawMetric) : 0;
    const format = obj[`line_${i}_format`] || "number";
    const metricColor =
      obj[`line_${i}_metric_color`] || obj[`line_${i}_color`] || "#012169";
    const text = obj[`line_${i}_text`]
      ? String(obj[`line_${i}_text`]).trim()
      : "";
    const textColor = obj[`line_${i}_color`] || "#012169";
    const size = obj[`line_${i}_size`] || "medium";

    return {
      hasMetric,
      metricNum,
      decimals,
      format,
      metricColor,
      text,
      textColor,
      size,
      hasContent: hasMetric || Boolean(text),
    };
  });
};

const parallelLeftLines = computed(() =>
  parseSectionLines(props.parallel_left),
);
const parallelRightLines = computed(() =>
  parseSectionLines(props.parallel_right),
);

const hasSectionContent = (lines) => lines.some((line) => line.hasContent);

const hasParallelContent = computed(
  () =>
    hasSectionContent(parallelLeftLines.value) ||
    hasSectionContent(parallelRightLines.value),
);

const shouldAnimate = computed(() => Boolean(Number(props.animate_metrics)));

const animatedBarValue = ref(
  shouldAnimate.value ? 0 : normalizedTargetValue.value,
);

const animatedMetrics = reactive({
  parallel_left_0: 0,
  parallel_left_1: 0,
  parallel_right_0: 0,
  parallel_right_1: 0,
});

const getSectionsMap = () => ({
  parallel_left: parallelLeftLines.value,
  parallel_right: parallelRightLines.value,
});

const setFinalValuesImmediately = () => {
  animatedBarValue.value = normalizedTargetValue.value;
  Object.entries(getSectionsMap()).forEach(([key, lines]) => {
    lines.forEach((line, idx) => {
      animatedMetrics[`${key}_${idx}`] = line.metricNum;
    });
  });
};

const runEntryAnimation = () => {
  activeTweens.forEach((t) => t.kill());
  activeTweens = [];

  if (!shouldAnimate.value) {
    setFinalValuesImmediately();
    return;
  }

  animatedBarValue.value = 0;
  activeTweens.push(
    gsap.to(animatedBarValue, {
      value: normalizedTargetValue.value,
      duration: 1.4,
      ease: "power2.out",
    }),
  );

  Object.entries(getSectionsMap()).forEach(([key, lines]) => {
    lines.forEach((line, idx) => {
      const stateKey = `${key}_${idx}`;
      animatedMetrics[stateKey] = 0;

      if (line.hasMetric) {
        const proxy = { val: 0 };
        activeTweens.push(
          gsap.to(proxy, {
            val: line.metricNum,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              animatedMetrics[stateKey] = proxy.val;
            },
          }),
        );
      }
    });
  });
};

const formatMetric = (val, decimals = 0, format = "number") => {
  const num = Number(val) || 0;
  const formatted = num.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  if (format === "currency") {
    return num < 0
      ? `-$${Math.abs(num).toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}`
      : `$${formatted}`;
  }

  if (format === "percentage") {
    return `${formatted}%`;
  }

  return formatted;
};

onMounted(() => {
  if (!shouldAnimate.value) {
    setFinalValuesImmediately();
    return;
  }

  if (typeof IntersectionObserver !== "undefined" && rootEl.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runEntryAnimation();
            observer?.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(rootEl.value);
  } else {
    runEntryAnimation();
  }
});

watch(
  () => [
    props.value,
    props.parallel_position,
    props.parallel_left,
    props.parallel_right,
    props.animate_metrics,
  ],
  () => {
    setFinalValuesImmediately();
  },
  { deep: true },
);

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
  activeTweens.forEach((t) => t.kill());
});
</script>
