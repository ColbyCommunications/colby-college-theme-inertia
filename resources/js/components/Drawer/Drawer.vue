<template>
  <Teleport to="body">
    <Transition name="drawer-overlay">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[9998] bg-black/50"
        aria-hidden="true"
        @click="close"
      />
    </Transition>

    <Transition :name="transitionName" @after-enter="refreshWaypoints">
      <div
        v-if="modelValue"
        ref="drawerRef"
        class="fixed inset-y-0 z-[9999] flex w-full max-w-[640px] flex-col overflow-hidden bg-white shadow-xl"
        :class="sideClasses"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="title ? titleId : undefined"
        :aria-label="!title ? 'Additional content' : undefined"
        tabindex="-1"
        @keydown="onKeydown"
      >
        <div
          class="z-20 flex min-h-[64px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-5 md:px-8"
        >
          <h2
            v-if="title"
            :id="titleId"
            class="font-extended pr-6 text-left text-24 leading-110 text-indigo"
          >
            {{ title }}
          </h2>

          <span v-else />

          <button
            ref="closeButtonRef"
            type="button"
            class="ml-auto inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center"
            aria-label="Close"
            @click="close"
          >
            <span class="material-symbols-sharp text-indigo" aria-hidden="true"
              >close</span
            >
          </button>
        </div>

        <div
          ref="scrollContainerRef"
          class="flex-1 overflow-y-auto overscroll-contain p-5 md:p-8"
          style="-webkit-overflow-scrolling: touch"
          @scroll.passive="onDrawerScroll"
        >
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import {
  computed,
  getCurrentInstance,
  nextTick,
  onBeforeUnmount,
  ref,
  watch,
} from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  side: {
    type: String,
    default: "right",
    validator: (value) => ["left", "right"].includes(value),
  },
  title: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const drawerRef = ref(null);
const scrollContainerRef = ref(null);
const closeButtonRef = ref(null);

const instance = getCurrentInstance();
const titleId = `drawer-title-${instance?.uid ?? Math.random().toString(36).slice(2, 9)}`;

let previouslyFocusedElement = null;
let rafId = null;

const sideClasses = computed(() => {
  return props.side === "left" ? "left-0" : "right-0";
});

const transitionName = computed(() => {
  return props.side === "left" ? "drawer-left" : "drawer-right";
});

const close = () => {
  emit("update:modelValue", false);
};

const refreshWaypoints = () => {
  if (typeof window === "undefined") return;
  window.Waypoint?.refreshAll?.();
  window.Waypoint?.Context?.refreshAll?.();
};

const onDrawerScroll = () => {
  if (rafId !== null) return;
  rafId = window.requestAnimationFrame(() => {
    refreshWaypoints();
    rafId = null;
  });
};

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const getFocusableElements = () => {
  if (!drawerRef.value) {
    return [];
  }

  return Array.from(
    drawerRef.value.querySelectorAll(
      [
        "a[href]",
        "button:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
      ].join(","),
    ),
  );
};

const onKeydown = (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    close();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusableElements = getFocusableElements();

  if (!focusableElements.length) {
    event.preventDefault();
    drawerRef.value?.focus();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
};

watch(
  () => props.modelValue,
  async (isOpen) => {
    if (typeof document === "undefined") {
      return;
    }

    if (isOpen) {
      previouslyFocusedElement = document.activeElement;

      lockScroll();

      await nextTick();

      closeButtonRef.value?.focus({ preventScroll: true });
      refreshWaypoints();
    } else {
      unlockScroll();

      await nextTick();

      previouslyFocusedElement?.focus?.({ preventScroll: true });
      previouslyFocusedElement = null;
    }
  },
);

onBeforeUnmount(() => {
  if (typeof document !== "undefined") {
    unlockScroll();
  }
  if (rafId !== null && typeof window !== "undefined") {
    window.cancelAnimationFrame(rafId);
  }
});
</script>

<style scoped>
.drawer-overlay-enter-active,
.drawer-overlay-leave-active {
  transition: opacity 200ms ease;
}

.drawer-overlay-enter-from,
.drawer-overlay-leave-to {
  opacity: 0;
}

.drawer-right-enter-active,
.drawer-right-leave-active,
.drawer-left-enter-active,
.drawer-left-leave-active {
  transition: transform 300ms ease;
}

.drawer-right-enter-from,
.drawer-right-leave-to {
  transform: translateX(100%);
}

.drawer-left-enter-from,
.drawer-left-leave-to {
  transform: translateX(-100%);
}
</style>
