<template>
    <div :class="[loading ? 'skeletonLoading' : '']">
      <slot v-if="!loading" />
      <slot v-else name="skeleton" />
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    loading: { type: Boolean, required: true },
  })
  const { loading } = props
  </script>


<style scss>
    @keyframes pulse {
        0% {
            opacity: 0.4;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.4;
        }
    }

    .skeletonLoading {
        animation: pulse 1.5s infinite;

        .rect-shape,
        .round-shape,
        .text-row {
            background-color: #ddd;
        }

        .rect-shape {
            border-radius: 2px;
        }
    }
</style>