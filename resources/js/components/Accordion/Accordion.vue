<template>
  <div class="accordion mx-auto w-full max-w-screen-2xl">
    <div class="colby-accordion-block border-b border-gray-300">
      <div
        v-for="(panel, index) in panels"
        :key="index"
        class="accordion__panel border-t border-solid border-gray-300"
      >
        <div class="accordion__header">
          <button
            class="accordion__button flex items-center justify-between gap-x-3 !px-0 !py-6"
            type="button"
            :aria-expanded="isActive(index)"
            @click="toggle(index)"
          >
            <h3 class="font-body !text-18 leading-120 font-bold text-indigo">
              {{ panel.heading }}
            </h3>

            <div
              class="flex h-9 w-11 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100"
            >
              <div
                class="-rotate-90 transition-all duration-200 ease-in-out"
                :class="{ '!rotate-90': isActive(index) }"
              >
                <svg
                  class="w-1.5 fill-azure"
                  viewBox="0 0 10.5 6.4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.2 6.4L0 1.1 1.1 0l4.2 4.2L9.4 0l1.1 1.1z" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        <Transition
          name="accordion"
          @enter="onEnter"
          @after-enter="onAfterEnter"
          @leave="onLeave"
        >
          <div v-show="isActive(index)" class="accordion__window">
            <div class="accordion__content">
              <div v-html="panel.content"></div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  panels: {
    type: Array,
    required: true,
    default: () => [],
  },
  single: {
    type: Boolean,
    default: false,
  },
  openByDefault: {
    type: Boolean,
    default: false,
  },
});

// State to track active panel indices
const activePanels = ref([]);

// Check if a specific index is active
const isActive = (index) => activePanels.value.includes(index);

// Toggle logic
const toggle = (index) => {
  if (isActive(index)) {
    // If open, close it
    activePanels.value = activePanels.value.filter((i) => i !== index);
  } else {
    // If closed, open it
    if (props.single) {
      // If single mode, close others and open this one
      activePanels.value = [index];
    } else {
      // If multi mode, just add this one
      activePanels.value.push(index);
    }
  }
};

// Animation Hooks for smooth height transition
const onEnter = (el) => {
  el.style.height = "0";
  el.style.visibility = "hidden"; // Match original CSS logic

  // Force reflow
  el.offsetHeight;

  el.style.height = el.scrollHeight + "px";
  el.style.visibility = "visible";
};

const onAfterEnter = (el) => {
  el.style.height = "auto"; // Allow resizing if content changes
};

const onLeave = (el) => {
  el.style.height = el.scrollHeight + "px";
  el.style.visibility = "visible";

  // Force reflow
  el.offsetHeight;

  el.style.height = "0";
  el.style.visibility = "hidden";
};

// Handle Open By Default
onMounted(() => {
  if (props.openByDefault && props.panels.length > 0) {
    activePanels.value.push(0);
  }
});
</script>

<style lang="scss" scoped>
/* We define the transition class locally.
   The base styles from _accordion.scss are included below, 
   but cleaned up to remove dependencies on external variables/mixins 
*/

.accordion {
  &__panel + &__panel {
    // border-top: 1px solid #dcdcdc; // Handled by Tailwind classes in template
  }

  &__header {
    margin: 0;
  }

  &__button {
    z-index: 10;
    position: relative;
    margin: 0;
    border: 0;
    padding: 20px 14px;
    width: 100%;
    text-align: left;
    appearance: none;
    cursor: pointer;
  }

  &__window {
    margin: 0;
    overflow: hidden;
    /* The transition property is critical for the JS hooks to animate smoothly */
    transition:
      height 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
  }

  &__content {
    padding: 20px 14px;
  }

  // Styles for content injected via v-html
  :deep(p:nth-child(1)) {
    margin-top: 0;
  }
}
</style>
