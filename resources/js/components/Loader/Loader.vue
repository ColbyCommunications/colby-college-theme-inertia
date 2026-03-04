<template>
    <GlobalLoader
      v-if="type === 'global'"
      :loading="loading"
      :remove-children="removeChildren"
    >
      <slot />
    </GlobalLoader>
  
    <InlineLoader
      v-else-if="type === 'inline'"
      :loading="loading"
      :remove-children="removeChildren"
    >
      <slot />
    </InlineLoader>
  
    <SkeletonLoader
      v-else-if="type === 'skeleton'"
      :loading="loading"
    >
      <template #skeleton>
        <slot name="skeleton" />
      </template>
  
      <slot />
    </SkeletonLoader>
  </template>
  
  <script setup>
  import GlobalLoader from './GlobalLoader.vue'
  import InlineLoader from './InlineLoader.vue'
  import SkeletonLoader from './SkeletonLoader.vue'
  
  const props = defineProps({
      /** Show loading spinner or not? */
      loading: { type: Boolean, default: false },
  
      /** Type of the loader. Options: 'global', 'inline', 'skeleton' */
      type: { type: String, default: 'global' },
  
      /** Remove children from the background or not? */
      removeChildren: { type: Boolean, default: false },
    });

  
  const { loading, type, removeChildren } = props
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
            border: 3px solid #9EA9B0;
            border-left-color: #002169;
            border-radius: 50%;
            animation: rotate 0.8s infinite linear;
        }
    }
</style>