<template>
    <div class="progress-bar w-full">
      <div class="mb-2 flex items-end justify-between gap-4">
        <div>
          <div
            v-if="label"
            :id="labelId"
            class="font-body text-18 font-semibold leading-120 text-indigo"
          >
            {{ label }}
          </div>
  
          <div
            v-if="description"
            :id="descriptionId"
            class="mt-1 font-body text-14 leading-140 text-gray-700"
            v-html="description"
          />
        </div>
  
        <div
          v-if="show_percentage"
          class="shrink-0 font-body text-16 font-semibold leading-none text-indigo"
          aria-hidden="true"
        >
          {{ normalizedValue }}%
        </div>
      </div>
  
      <div
        class="relative h-4 w-full overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        :aria-valuenow="normalizedValue"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-labelledby="label ? labelId : undefined"
        :aria-describedby="description ? descriptionId : undefined"
        :aria-label="!label ? `Progress: ${normalizedValue}%` : undefined"
      >
        <div
          class="h-full rounded-full bg-indigo transition-[width] duration-300 ease-out"
          :style="{ width: `${normalizedValue}%` }"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, useId } from "vue";
  
  const props = defineProps({
    label: {
      type: String,
      default: "",
    },
  
    value: {
      type: [Number, String],
      default: 0,
    },
  
    description: {
      type: String,
      default: "",
    },
  
    show_percentage: {
      type: Boolean,
      default: true,
    },
  });
  
  const id = useId();
  
  const labelId = `progress-bar-label-${id}`;
  const descriptionId = `progress-bar-description-${id}`;
  
  const normalizedValue = computed(() => {
    const value = Number(props.value);
  
    if (Number.isNaN(value)) {
      return 0;
    }
  
    return Math.min(100, Math.max(0, value));
  });
  </script>