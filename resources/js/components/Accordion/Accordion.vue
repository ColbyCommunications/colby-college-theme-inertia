<template>
  <div class="accordion mx-auto w-full max-w-screen-2xl" role="accordion">
    <div class="colby-accordion-block border-b border-gray-300">
      <div
        v-for="(panel, index) in panels"
        :key="index"
        class="accordion__panel border-t border-solid border-gray-300"
        role="region"
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
                class="icon-container transition-all duration-200 ease-in-out"
                :class="isActive(index) ? 'rotate-90' : '-rotate-90'"
              >
                <Icon name="chevron" class="w-1.5 fill-azure" />
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
              <div v-html="panel.content" class="
                text-indigo-800 
                [&_h2]:font-extended [&_h2]:font-normal [&_h2]:text-24 [&_h2]:leading-110 [&_h2]:-tracking-3 [&_h2]:text-indigo [&_h2+p]:mt-2 [&_h2+ul]:mt-4 [&_h2+ol]:mt-4
                [&_h3]:font-extended [&_h3]:font-bold [&_h3]:text-18 [&_h3]:text-indigo [&_h3+p]:mt-2 [&_h3+ul]:mt-4 [&_h3+ol]:mt-4 [&_h3+table]:mt-5
                [&_h4]:font-extended [&_h4]:font-normal [&_h4]:text-20 [&_h4]:leading-110 [&_h4]:-tracking-3 [&_h4]:text-indigo [&_h4+p]:mt-2 [&_h4+ul]:mt-2 [&_h4+ol]:mt-2
                [&_h5]:font-extended [&_h5]:font-bold [&_h5]:text-14 [&_h5]:leading-130 [&_h5]:tracking-8 [&_h5]:text-azure [&_h5]:uppercase [&_h5+p]:mt-2 [&_h5+ul]:mt-2 [&_h5+ol]:mt-2
                [&_h6]:font-extended [&_h6]:font-bold [&_h6]:text-12 [&_h6]:tracking-8 [&_h6]:text-azure [&_h6]:uppercase [&_h6+p]:mt-2
                [&_p]:font-body [&_p]:font-normal [&_p]:text-16 [&_p]:leading-130 [&_p]:text-indigo-800
                [&_p>a]:underline [&_p>a:hover]:no-underline [&_p>a:hover]:[&_p>a]:text-indigo
                [&_ul+h2]:mt-20
                [&_ul>li]:font-body [&_ul>li]:font-normal [&_ul>li]:text-16 [&_ul>li]:leading-130 [&_ul>li]:text-indigo-800 [&_ul>li]:list-disc [&_ul>li]:list-outside [&_ul>li]:ml-3 [&_ul>li+li]:mt-2
                [&_ul>li>a]:underline [&_ul>li>a:hover]:no-underline [&_ul>li>a:hover]:text-indigo
                [&_ol+h2]:mt-20
                [&_ol>li]:font-body [&_ol>li]:font-normal [&_ol>li]:text-16 [&_ol>li]:leading-130 [&_ol>li]:text-indigo-800 [&_ol>li]:list-decimal [&_ol>li]:list-outside [&_ol>li]:ml-3 [&_ol>li+li]:mt-2
                [&_ol>li>a]:underline [&_ol>li>a:hover]:no-underline [&_ol>li>a:hover]:text-indigo
                [&_div+div]:mt-20 md:[&_div+div]:mt-[100px] [&_div+figure]:mt-20 md:[&_div+figure]:mt-[100px] [&_div+h2]:mt-16 md:[&_div+h2]:mt-20
                [&_figure+figure]:mt-20 md:[&_figure+figure]:mt-[100px] [&_figure+div]:mt-20 md:[&_figure+div]:mt-[100px] [&_figure+h2]:mt-16 md:[&_figure+h2]:mt-20
                [&_p+div]:mt-10 md:[&_p+div]:mt-[50px] [&_p+h2]:mt-20 [&_p+h3]:mt-6 [&_p+p]:mt-6 [&_p+ul]:mt-6 [&_p+table]:mt-10 md:[&_p+table]:mt-[50px]
                [&_hr]:border-t [&_hr]:border-solid [&_hr]:border-indigo-300 [&_hr]:my-16 
                "></div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Icon from "@/js/components/Icon/Icon.vue";

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
  open_by_default: {
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
  if (props.open_by_default && props.panels.length > 0) {
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
