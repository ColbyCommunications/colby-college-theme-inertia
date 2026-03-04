<template>
    <span>
      <slot v-if="!(loading && removeChildren)" />
    </span>
  </template>
  
<script setup>
  import { toRef } from 'vue'
  import { useGlobalLoader } from '../../composables/useGlobalLoader.js'
  
  const props = defineProps({
      loading: { type: Boolean, default: false },
      removeChildren: { type: Boolean, default: false },
    });
  
  useGlobalLoader(toRef(props, 'loading'), {
    delayStart: 300,
    minDuration: 1000,
    className: 'loader',
    hiddenClassName: 'hidden',
  })
  </script>
<style scss>
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 1100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.3s;
        color: white;
        pointer-events: auto;

        &.hidden {
            opacity: 0;
            pointer-events: none;
        }
        &:before {
            content: '';
            width: 50px;
            height: 50px;
            border: 3px solid #ddd;
            border-left-color: #666;
            border-radius: 50%;
            animation: rotate 0.8s infinite linear;
        }
    }
    .inlineSpinner {
        width: 26px;
        height: 26px;
        border: 2px solid #ddd;
        border-left-color: #666;
        border-radius: 50%;
        animation: rotate 0.8s infinite linear;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @keyframes pulse {
        0% {
            opacity: 0.6;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.6;
        }
    }

</style>