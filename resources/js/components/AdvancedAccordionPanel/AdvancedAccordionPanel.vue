<template>
  <article class="advanced-accordion__panel border-t border-gray-300">
    <div class="advanced-accordion__header">
      <button
        class="advanced-accordion__button flex items-center justify-between !py-6 !px-0 gap-x-3 w-full text-left"
        @click="toggle"
      >
        <h3 class="!text-18 leading-120 text-indigo">
          {{ heading }}
        </h3>
        <div
          class="flex shrink-0 items-center justify-center w-11 h-9 bg-gray-100 border border-gray-300 rounded-sm"
        >
          <div
            class="icon-container transition-all duration-200 ease-in-out"
            :class="isOpen ? 'rotate-90' : '-rotate-90'"
          >
            <Icon name="chevron" class="fill-azure w-1.5" />
          </div>
        </div>
      </button>
    </div>
    <div
      ref="windowEl"
      class="advanced-accordion__window overflow-hidden transition-all duration-250 ease-in-out"
      :style="{ height: windowHeight, visibility: isOpen ? 'visible' : 'hidden' }"
    >
      <div
        ref="contentEl"
        class="font-body text-indigo-900 advanced-accordion__content pb-6"
        v-html="content"
      ></div>
    </div>
  </article>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import Icon from "@/js/components/Icon/Icon.vue";

const props = defineProps({
  heading: { type: String, default: "" },
  content: { type: String, default: "" },
  open: { type: Boolean, default: false },
});

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
