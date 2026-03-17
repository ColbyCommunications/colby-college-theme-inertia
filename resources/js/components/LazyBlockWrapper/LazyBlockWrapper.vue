<template>
    <component
      :is="tag"
      ref="root"
      class="lazy-block"
    >
      <component
        v-if="resolvedComponent"
        :is="resolvedComponent"
        v-bind="componentProps"
      />
  
      <div
        v-else
        class="lazy-block__placeholder"
        :style="placeholderStyle"
        aria-hidden="true"
      />
    </component>
  </template>
  
  <script setup>
  import {
    ref,
    shallowRef,
    markRaw,
    onMounted,
    onBeforeUnmount,
  } from "vue";
  
  const props = defineProps({
    loader: {
      type: Function,
      required: true,
    },
    componentProps: {
      type: Object,
      default: () => ({}),
    },
    eager: {
      type: Boolean,
      default: false,
    },
    rootMargin: {
      type: String,
      default: "800px 0px",
    },
    threshold: {
      type: Number,
      default: 0,
    },
    tag: {
      type: String,
      default: "section",
    },
    placeholderMinHeight: {
      type: [String, Number],
      default: 0,
    },
  });
  
  const emit = defineEmits(["loaded"]);
  
  const root = ref(null);
  const resolvedComponent = shallowRef(null);
  let observer = null;
  let hasStartedLoading = false;
  
  const placeholderStyle =
    props.placeholderMinHeight
      ? {
          minHeight:
            typeof props.placeholderMinHeight === "number"
              ? `${props.placeholderMinHeight}px`
              : props.placeholderMinHeight,
        }
      : {};
  
  async function loadComponent() {
    if (hasStartedLoading || resolvedComponent.value) {
      return;
    }
  
    hasStartedLoading = true;
  
    try {
      const mod = await props.loader();
      resolvedComponent.value = markRaw(mod.default);
      emit("loaded");
    } catch (error) {
      console.error("Failed to lazy-load block component:", error);
    } finally {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    }
  }
  
  onMounted(() => {
    if (props.eager) {
      loadComponent();
      return;
    }
  
    if (!root.value) {
      loadComponent();
      return;
    }
  
    if (!("IntersectionObserver" in window)) {
      loadComponent();
      return;
    }
  
    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
  
        if (entry?.isIntersecting) {
          loadComponent();
        }
      },
      {
        root: null,
        rootMargin: props.rootMargin,
        threshold: props.threshold,
      },
    );
  
    observer.observe(root.value);
  });
  
  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  });
  </script>
  
  <style scoped>
  .lazy-block__placeholder {
    width: 100%;
  }
  </style>