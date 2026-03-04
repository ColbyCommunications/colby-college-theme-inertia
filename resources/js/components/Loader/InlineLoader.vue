<template>
    <!-- Normal: just render children -->
    <span v-if="!loading">
      <slot />
    </span>
  
    <!-- Loading: render a positioned container so we can overlay + center spinner -->
    <div v-else class="wrapper" :aria-busy="true">
      <!-- Children underneath (optional) -->
      <div v-if="!removeChildren" class="content">
        <slot />
      </div>
  
      <!-- Semi-transparent overlay -->
      <div v-if="!removeChildren" class="overlay" aria-hidden="true" />
  
      <!-- Centered spinner -->
      <div class="spinnerCenter" aria-hidden="true">
        <div class="inlineSpinner" />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    loading: { type: Boolean, required: true },
    removeChildren: { type: Boolean, required: true },
  })
  const { loading, removeChildren } = props
  </script>
  
  <style scoped>
  /* The container becomes the positioning context for overlay + spinner */
  .wrapper {
    position: relative;
    display: block;
  }
  
  /* Keep the child content in normal flow */
  .content {
    position: relative;
    z-index: 0;
  }
  
  /* Overlay sits above content, below spinner */
  .overlay {
    position: absolute;
    inset: 0; /* top/right/bottom/left: 0 */
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.6);
  }
  
  /* Spinner wrapper centered in the middle */
  .spinnerCenter {
    position: absolute;
    inset: 0;
    z-index: 2;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    /* Prevent overlay/spinner from capturing clicks unless you want it to */
    pointer-events: none;
  }
  
  .inlineSpinner {
    width: 26px;
    height: 26px;
    border: 2px solid #9ea9b0;
    border-left-color: #002169;
    border-radius: 50%;
    animation: rotate 0.8s infinite linear;
  }
  
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
  </style>