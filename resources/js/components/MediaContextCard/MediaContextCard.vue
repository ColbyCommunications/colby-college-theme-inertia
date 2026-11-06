<template>
  <div
    ref="cardRef"
    class="media-context-card group relative w-full overflow-hidden bg-indigo select-none"
    :class="[
      ratioClass,
      hasInteractiveReveal ? 'is-interactive cursor-pointer' : '',
      isActive ? 'is-active' : '',
      forceClosed ? 'is-force-closed' : '',
    ]"
    :style="{
      '--mcc-bg-rgb': currentTheme.rgb,
      '--mcc-peek-duration': peekTransitionDuration,
      '--mcc-body-max-h': `${maxBodyHeightPx}px`,
    }"
    :tabindex="hasInteractiveReveal ? 0 : undefined"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @click="handleCardClick"
    @keydown.enter.self="toggleCard"
    @keydown.space.self.prevent="toggleCard"
    @mouseleave="handleMouseLeave"
  >
    <video
      v-if="media_type === 'video' && videoUrl"
      :src="videoUrl"
      autoplay
      loop
      muted
      playsinline
      class="block w-full transition-transform duration-700 ease-out"
      :class="[
        ratio && ratio !== 'original' ? 'h-full object-cover' : 'h-auto',
        hasInteractiveReveal && !forceClosed ? 'group-hover:scale-105' : '',
        isActive ? 'scale-105' : '',
      ]"
      @loadedmetadata="handleMediaLoad"
      @loadeddata="handleMediaLoad"
    />
    <img
      v-else-if="imageUrl"
      :src="imageUrl"
      :alt="image?.alt || heading || ''"
      :width="image?.width || undefined"
      :height="image?.height || undefined"
      loading="lazy"
      class="block w-full transition-transform duration-700 ease-out"
      :class="[
        ratio && ratio !== 'original' ? 'h-full object-cover' : 'h-auto',
        hasInteractiveReveal && !forceClosed ? 'group-hover:scale-105' : '',
        isActive ? 'scale-105' : '',
      ]"
      @load="handleMediaLoad"
    />
    <button
      v-if="hasInteractiveReveal"
      type="button"
      :aria-label="isActive ? 'Close card details' : 'Reveal card details'"
      :aria-expanded="isActive ? 'true' : 'false'"
      class="media-context-card__cue absolute top-4 right-4 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ease-out focus:outline focus:outline-2 focus:outline-gold md:top-5 md:right-5 md:h-9 md:w-9"
      :class="cueThemeClasses"
      @click.stop="toggleCard"
    >
      <svg
        class="media-context-card__cue-icon h-3.5 w-3.5 transition-transform duration-300 ease-out md:h-4 md:w-4"
        :class="[
          isActive
            ? 'rotate-45'
            : !forceClosed
              ? 'group-focus-within:rotate-45 group-hover:rotate-45'
              : '',
        ]"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 2.5V13.5M2.5 8H13.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <template v-if="hasContext">
      <div
        v-if="reveal_style === 'peek'"
        class="media-context-card__peek absolute inset-0 flex flex-col overflow-hidden transition-colors"
        :class="`media-context-card__peek--${gradient === 'none' ? 'none' : 'partial'}`"
        :style="{ transitionDuration: peekTransitionDuration }"
      >
        <div
          ref="peekContentRef"
          class="media-context-card__peek-content mt-auto flex max-h-full w-full flex-col overflow-hidden p-6 transition-colors md:p-8"
          :style="{ transitionDuration: peekTransitionDuration }"
        >
          <div
            v-if="heading || subheading"
            ref="peekHeaderRef"
            class="shrink-0"
            :class="hasInteractiveReveal ? 'pr-8' : ''"
          >
            <TextGroup
              size="small"
              :type="currentTheme.contextType"
              :subheading="subheading"
              :heading="heading"
              :static="true"
              :disableAnimations="true"
            />
          </div>

          <div
            v-if="hasPeekBody"
            class="grid transition-[grid-template-rows,opacity] ease-out"
            :style="{ transitionDuration: peekTransitionDuration }"
            :class="
              isActive
                ? 'grid-rows-[1fr] opacity-100'
                : forceClosed
                  ? 'grid-rows-[0fr] opacity-0'
                  : 'grid-rows-[0fr] opacity-0 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-hover:grid-rows-[1fr] group-hover:opacity-100'
            "
          >
            <div class="min-h-0 overflow-hidden">
              <div
                class="no-scrollbar overflow-y-auto"
                :style="{ maxHeight: 'var(--mcc-body-max-h)' }"
              >
                <div ref="peekBodyRef" class="pt-4">
                  <Context
                    size="small"
                    :type="currentTheme.contextType"
                    :paragraph="paragraph"
                    :buttons="{ items: buttons }"
                    :isStatic="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="media-context-card__overlay absolute inset-0 flex flex-col overflow-hidden transition-all duration-500 ease-out"
        :class="[
          `media-context-card__overlay--${reveal_style}`,
          reveal_style === 'static'
            ? `media-context-card__overlay--static-${gradient === 'none' ? 'none' : 'partial'}`
            : 'p-6 md:p-8',
          overlayVisibilityClasses,
        ]"
      >
        <div
          class="media-context-card__overlay-content no-scrollbar mt-auto max-h-full w-full overflow-y-auto"
          :class="reveal_style === 'static' ? 'p-6 md:p-8' : ''"
        >
          <Context
            size="small"
            :type="currentTheme.contextType"
            :heading="heading"
            :subheading="subheading"
            :paragraph="paragraph"
            :buttons="{ items: buttons }"
            :isStatic="true"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import {
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
} from "vue";
import Context from "@/js/components/Context/Context.vue";
import TextGroup from "@/js/components/TextGroup/TextGroup.vue";

const props = defineProps({
  media_type: { type: String, default: "image" },
  image: { type: Object, default: () => ({}) },
  video: { type: Object, default: () => ({}) },
  ratio: { type: String, default: "original" },
  reveal_style: { type: String, default: "peek" },
  context_bg: { type: String, default: "indigo" },
  gradient: { type: String, default: "partial" },
  heading: { type: String, default: "" },
  subheading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
});

const emit = defineEmits(["load"]);

const isActive = ref(false);
const forceClosed = ref(false);
const cardRef = ref(null);
const peekContentRef = ref(null);
const peekHeaderRef = ref(null);
const peekBodyRef = ref(null);

const DRAG_THRESHOLD_PX = 8;
let pointerStartX = 0;
let pointerStartY = 0;
let wasDragged = false;
let lastPointerType = "mouse";

const maxBodyHeightPx = ref(200);
const travelDistancePx = ref(100);
let resizeObserver = null;

const imageUrl = computed(() => props.image?.url || props.image?.src || "");
const videoUrl = computed(() => props.video?.url || props.video?.src || "");

const hasPeekBody = computed(() =>
  Boolean(props.paragraph || (props.buttons && props.buttons.length)),
);

const hasContext = computed(() =>
  Boolean(
    props.heading ||
    props.subheading ||
    props.paragraph ||
    (props.buttons && props.buttons.length),
  ),
);

const hasInteractiveReveal = computed(() => {
  if (!hasContext.value || props.reveal_style === "static") return false;
  if (props.reveal_style === "peek") return hasPeekBody.value;
  return true;
});

const VELOCITY_PX_PER_SEC = 700;

const peekTransitionDuration = computed(() => {
  const durationMs = Math.round(
    (travelDistancePx.value / VELOCITY_PX_PER_SEC) * 1000,
  );
  return `${Math.max(400, durationMs)}ms`;
});

const updatePeekMetrics = () => {
  if (!cardRef.value || !peekBodyRef.value) return;

  const cardHeight = cardRef.value.clientHeight || 0;
  const headerHeight = peekHeaderRef.value?.offsetHeight || 0;

  let verticalPadding = 48;
  if (peekContentRef.value) {
    const styles = window.getComputedStyle(peekContentRef.value);
    const padBottom = parseFloat(styles.paddingBottom) || 24;
    verticalPadding = padBottom * 2;
  }

  const availableRoom = Math.max(
    60,
    cardHeight - headerHeight - verticalPadding,
  );
  maxBodyHeightPx.value = availableRoom;

  const naturalBodyHeight = peekBodyRef.value.offsetHeight || 0;
  travelDistancePx.value = Math.min(naturalBodyHeight, availableRoom);
};

const handleMediaLoad = () => {
  updatePeekMetrics();
  emit("load");
};

onMounted(() => {
  updatePeekMetrics();

  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(() => {
      updatePeekMetrics();
    });

    if (cardRef.value) resizeObserver.observe(cardRef.value);
    if (peekBodyRef.value) resizeObserver.observe(peekBodyRef.value);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});

watch(
  () => [props.paragraph, props.buttons, props.heading, props.subheading],
  async () => {
    await nextTick();
    updatePeekMetrics();
  },
  { deep: true },
);

const themeMap = {
  indigo: { rgb: "1, 33, 105", contextType: "light" },
  gold: { rgb: "238, 184, 8", contextType: "dark" },
  azure: { rgb: "6, 70, 195", contextType: "light" },
  snow: { rgb: "242, 246, 249", contextType: "dark" },
  cloud: { rgb: "238, 244, 255", contextType: "dark" },
  stone: { rgb: "181, 181, 181", contextType: "dark" },
  slate: { rgb: "102, 102, 102", contextType: "light" },
  coal: { rgb: "15, 15, 15", contextType: "light" },
};

const currentTheme = computed(
  () => themeMap[props.context_bg] || themeMap.indigo,
);

const cueThemeClasses = computed(() => {
  const isLightText = currentTheme.value.contextType === "light";
  return isLightText
    ? "border-white/30 text-white shadow-sm hover:border-white/60"
    : "border-indigo/25 text-indigo shadow-sm hover:border-indigo/50";
});

const ratioClass = computed(() => {
  const ratios = {
    original: "",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    landscape: "aspect-[4/3]",
  };
  return ratios[props.ratio] || "";
});

const overlayVisibilityClasses = computed(() => {
  switch (props.reveal_style) {
    case "static":
      return "opacity-100";

    case "slide-up":
      if (isActive.value) return "translate-y-0 opacity-100";
      if (forceClosed.value) return "translate-y-full opacity-0";
      return "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100";

    case "slide-left":
      if (isActive.value) return "translate-x-0 opacity-100";
      if (forceClosed.value) return "-translate-x-full opacity-0";
      return "-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100";

    case "fade":
    default:
      if (isActive.value) return "opacity-100";
      if (forceClosed.value) return "opacity-0";
      return "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100";
  }
});

const handlePointerDown = (e) => {
  lastPointerType = e.pointerType || "mouse";
  pointerStartX = e.clientX;
  pointerStartY = e.clientY;
  wasDragged = false;
};

const handlePointerMove = (e) => {
  if (wasDragged) return;
  const dx = Math.abs(e.clientX - pointerStartX);
  const dy = Math.abs(e.clientY - pointerStartY);
  if (dx > DRAG_THRESHOLD_PX || dy > DRAG_THRESHOLD_PX) {
    wasDragged = true;
  }
};

const blurInsideCard = () => {
  if (
    document.activeElement &&
    cardRef.value?.contains(document.activeElement)
  ) {
    document.activeElement.blur();
  }
};

const toggleCard = () => {
  if (!hasInteractiveReveal.value) return;

  const isMouseHoverOpen =
    lastPointerType === "mouse" &&
    !isActive.value &&
    !forceClosed.value &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    cardRef.value?.matches(":hover");

  if (isActive.value || isMouseHoverOpen) {
    isActive.value = false;
    forceClosed.value = true;
    blurInsideCard();
  } else {
    forceClosed.value = false;
    isActive.value = true;
  }
};

const handleCardClick = (e) => {
  if (!hasInteractiveReveal.value) return;

  // Ignore if the user dragged/scrolled or highlighted text
  if (wasDragged) {
    wasDragged = false;
    return;
  }
  const selection = window.getSelection?.();
  if (selection && selection.toString().length > 0) {
    return;
  }

  if (e.target.closest("a, button")) return;

  toggleCard();
};

const handleMouseLeave = () => {
  forceClosed.value = false;
};
</script>

<style scoped>
.media-context-card :deep(.text-group--animated .text-group__subheading),
.media-context-card :deep(.text-group--animated .text-group__heading),
.media-context-card :deep(.text-group--animated .text-group__p),
.media-context-card :deep(.text-group--animated ul),
.media-context-card :deep(.text-group--animated ol),
.media-context-card :deep(.text-group--animated .word-wrap) {
  opacity: 1 !important;
  transform: none !important;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.media-context-card__cue {
  background-color: rgba(var(--mcc-bg-rgb), 0.68);
}

.media-context-card.is-active .media-context-card__cue {
  background-color: rgba(var(--mcc-bg-rgb), 0.92);
}

@media (hover: hover) and (pointer: fine) {
  .media-context-card.is-interactive:hover:not(.is-force-closed)
    .media-context-card__cue {
    background-color: rgba(var(--mcc-bg-rgb), 0.92);
  }
}

.media-context-card__peek--partial .media-context-card__peek-content {
  background: linear-gradient(
    to top,
    rgba(var(--mcc-bg-rgb), 0.92) 0%,
    rgba(var(--mcc-bg-rgb), 0.78) 30%,
    rgba(var(--mcc-bg-rgb), 0.5) 55%,
    rgba(var(--mcc-bg-rgb), 0.22) 75%,
    rgba(var(--mcc-bg-rgb), 0.06) 90%,
    rgba(var(--mcc-bg-rgb), 0) 100%
  );
  padding-top: 4.5rem;
}

.media-context-card__peek--none {
  background-color: transparent;
}

.media-context-card.is-active .media-context-card__peek,
.media-context-card.is-interactive:focus-within:not(.is-force-closed)
  .media-context-card__peek {
  background: rgba(var(--mcc-bg-rgb), 0.88);
}

.media-context-card.is-active .media-context-card__peek-content,
.media-context-card.is-interactive:focus-within:not(.is-force-closed)
  .media-context-card__peek-content {
  background: transparent;
  padding-top: 1.5rem;
}

@media (hover: hover) and (pointer: fine) {
  .media-context-card.is-interactive:hover:not(.is-force-closed)
    .media-context-card__peek {
    background: rgba(var(--mcc-bg-rgb), 0.88);
  }

  .media-context-card.is-interactive:hover:not(.is-force-closed)
    .media-context-card__peek-content {
    background: transparent;
    padding-top: 1.5rem;
  }
}

@media (min-width: 768px) {
  .media-context-card.is-active .media-context-card__peek-content,
  .media-context-card.is-interactive:focus-within:not(.is-force-closed)
    .media-context-card__peek-content {
    padding-top: 2rem;
  }

  @media (hover: hover) and (pointer: fine) {
    .media-context-card.is-interactive:hover:not(.is-force-closed)
      .media-context-card__peek-content {
      padding-top: 2rem;
    }
  }
}

.media-context-card__overlay--static-partial
  .media-context-card__overlay-content {
  background: linear-gradient(
    to top,
    rgba(var(--mcc-bg-rgb), 0.92) 0%,
    rgba(var(--mcc-bg-rgb), 0.78) 30%,
    rgba(var(--mcc-bg-rgb), 0.5) 55%,
    rgba(var(--mcc-bg-rgb), 0.22) 75%,
    rgba(var(--mcc-bg-rgb), 0.06) 90%,
    rgba(var(--mcc-bg-rgb), 0) 100%
  );
  padding-top: 4.5rem;
}

.media-context-card__overlay--static-none {
  background-color: transparent;
}

.media-context-card__overlay--slide-up {
  background: linear-gradient(
    to top,
    rgba(var(--mcc-bg-rgb), 0.95) 0%,
    rgba(var(--mcc-bg-rgb), 0.85) 55%,
    rgba(var(--mcc-bg-rgb), 0.6) 100%
  );
}

.media-context-card__overlay--slide-left,
.media-context-card__overlay--fade {
  background-color: rgba(var(--mcc-bg-rgb), 0.88);
}
</style>
