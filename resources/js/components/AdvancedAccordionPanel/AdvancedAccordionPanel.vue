<template>
  <article class="advanced-accordion__panel border-t border-gray-300">
    <div class="advanced-accordion__header">
      <button
        class="advanced-accordion__button flex w-full items-center justify-between gap-x-3 !px-0 !py-6 text-left"
        @click="toggle"
      >
        <h3 class="!text-18 leading-120 text-indigo">
          {{ heading }}
        </h3>

        <div
          class="flex h-9 w-11 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100"
        >
          <div
            class="icon-container transition-all duration-200 ease-in-out"
            :class="isOpen ? 'rotate-90' : '-rotate-90'"
          >
            <Icon name="chevron" class="w-1.5 fill-azure" />
          </div>
        </div>
      </button>
    </div>

    <div
      ref="windowEl"
      class="advanced-accordion__window overflow-hidden transition-all duration-250 ease-in-out"
      :style="{
        height: windowHeight,
        visibility: isOpen ? 'visible' : 'hidden',
      }"
      role="region"
    >
      <div
        ref="contentEl"
        class="advanced-accordion__content pb-6 font-body text-indigo-900"
      >
        <ComponentRouter :components="blocks" />
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import Icon from "@/js/components/Icon/Icon.vue";
import ComponentRouter from "../ComponentRouter/ComponentRouter.vue";

const props = defineProps({
  heading: { type: String, default: "" },
  blocks: { type: Array, default: () => [] },
  open: { type: Boolean, default: false },
});

console.log(props);
const emit = defineEmits(["toggle"]);

const isOpen = ref(props.open);
const windowEl = ref(null);
const contentEl = ref(null);
const windowHeight = ref(props.open ? "auto" : "0px");

const toggle = () => {
  isOpen.value = !isOpen.value;
  emit("toggle", isOpen.value);
};

watch(isOpen, async (open) => {
  await nextTick();

  if (open) {
    const h = contentEl.value?.offsetHeight || 0;
    windowHeight.value = `${h}px`;

    setTimeout(() => {
      windowHeight.value = "auto";
    }, 250);
  } else {
    const h = contentEl.value?.offsetHeight || 0;
    windowHeight.value = `${h}px`;

    requestAnimationFrame(() => {
      windowHeight.value = "0px";
    });
  }
});
</script>