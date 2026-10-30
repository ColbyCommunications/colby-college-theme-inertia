<template>
  <div
    ref="cardRef"
    class="media-context-card group relative w-full overflow-hidden bg-indigo select-none"
    :class="[
      ratioClass,
      hasContext && reveal_style !== 'static' ? 'cursor-pointer' : '',
      isActive ? 'is-active' : '',
    ]"
    :style="{
      '--mcc-bg-rgb': currentTheme.rgb,
      '--mcc-peek-duration': peekTransitionDuration,
      '--mcc-body-max-h': `${maxBodyHeightPx}px`,
    }"
    :tabindex="hasContext && reveal_style !== 'static' ? 0 : undefined"
    @click="handleCardClick"
    @keydown.enter.self="isActive = !isActive"
    @mouseleave="isActive = false"
  >
    <!-- 1. LOOPING VIDEO -->
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
        hasContext ? 'group-hover:scale-105' : '',
        isActive ? 'scale-105' : '',
      ]"
      @loadedmetadata="handleMediaLoad"
      @loadeddata="handleMediaLoad"
    />

    <!-- 2. IMAGE -->
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
        hasContext ? 'group-hover:scale-105' : '',
        isActive ? 'scale-105' : '',
      ]"
      @load="handleMediaLoad"
    />

    <!-- 3. OPTIONAL CONTEXT OVERLAY -->
    <template v-if="hasContext">
      <!-- STYLE A: PEEK (Clamped 1fr track so heading never jumps early) -->
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
            v-if="paragraph || (buttons && buttons.length)"
            class="grid transition-[grid-template-rows,opacity] ease-out"
            :style="{ transitionDuration: peekTransitionDuration }"
            :class="
              isActive
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-hover:grid-rows-[1fr] group-hover:opacity-100'
            "
          >
            <!-- min-h-0 allows 0fr collapse; max-h-[var(--mcc-body-max-h)] stops 1fr from exceeding card height -->
            <div class="min-h-0 overflow-hidden">
              <div
                class="no-scrollbar overflow-y-auto"
                :style="{ maxHeight: 'var(--mcc-body-max-h)' }"
                @click.stop
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

      <!-- STYLE B: STATIC, SLIDE-UP, SLIDE-LEFT, OR FADE -->
      <div
        v-else
        class="media-context-card__overlay absolute inset-0 flex flex-col overflow-hidden p-6 transition-all duration-500 ease-out md:p-8"
        :class="[
          `media-context-card__overlay--${reveal_style}`,
          overlayVisibilityClasses,
        ]"
      >
        <div
          class="no-scrollbar mt-auto max-h-full w-full overflow-y-auto"
          @click.stop
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
const cardRef = ref(null);
const peekContentRef = ref(null);
const peekHeaderRef = ref(null);
const peekBodyRef = ref(null);

const maxBodyHeightPx = ref(200);
const travelDistancePx = ref(100);
let resizeObserver = null;

const imageUrl = computed(() => props.image?.url || props.image?.src || "");
const videoUrl = computed(() => props.video?.url || props.video?.src || "");

const hasContext = computed(() =>
  Boolean(
    props.heading ||
    props.subheading ||
    props.paragraph ||
    (props.buttons && props.buttons.length),
  ),
);

// Constant movement speed in pixels per second (lower = slower, higher = faster)
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

  // Measure actual bottom/top padding of the content container
  let verticalPadding = 48;
  if (peekContentRef.value) {
    const styles = window.getComputedStyle(peekContentRef.value);
    const padBottom = parseFloat(styles.paddingBottom) || 24;
    // Use padBottom * 2 so partial-gradient's extra top feather padding doesn't shrink available scroll space
    verticalPadding = padBottom * 2;
  }

  // Exact maximum height the body is allowed to occupy inside the card
  const availableRoom = Math.max(
    60,
    cardHeight - headerHeight - verticalPadding,
  );
  maxBodyHeightPx.value = availableRoom;

  // Because the inner scroll div is capped at availableRoom, 1fr only travels min(naturalHeight, availableRoom)
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
      return isActive.value
        ? "translate-y-0 opacity-100"
        : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100";

    case "slide-left":
      return isActive.value
        ? "translate-x-0 opacity-100"
        : "-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100";

    case "fade":
    default:
      return isActive.value
        ? "opacity-100"
        : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100";
  }
});

const handleCardClick = (e) => {
  if (!hasContext.value || props.reveal_style === "static") return;
  if (e.target.closest("a, button")) return;
  isActive.value = !isActive.value;
};
</script>

<style scoped>
/* Bypass TextGroup's scroll-based Waypoint opacity: 0 lock inside interactive overlay cards */
.media-context-card :deep(.text-group--animated .text-group__subheading),
.media-context-card :deep(.text-group--animated .text-group__heading),
.media-context-card :deep(.text-group--animated .text-group__p),
.media-context-card :deep(.text-group--animated ul),
.media-context-card :deep(.text-group--animated ol),
.media-context-card :deep(.text-group--animated .word-wrap) {
  opacity: 1 !important;
  transform: none !important;
}

/* Hide scrollbars across Chrome, Safari, Edge, and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* PEEK GRADIENT VARIANTS (Multi-stop eased gradients) */
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

/* PEEK TRANSITION STATE (Hover / Focus / Active) */
.media-context-card:hover .media-context-card__peek,
.media-context-card:focus-within .media-context-card__peek,
.media-context-card.is-active .media-context-card__peek {
  background: rgba(var(--mcc-bg-rgb), 0.88);
}

.media-context-card:hover .media-context-card__peek-content,
.media-context-card:focus-within .media-context-card__peek-content,
.media-context-card.is-active .media-context-card__peek-content {
  background: transparent;
  padding-top: 1.5rem;
}

@media (min-width: 768px) {
  .media-context-card:hover .media-context-card__peek-content,
  .media-context-card:focus-within .media-context-card__peek-content,
  .media-context-card.is-active .media-context-card__peek-content {
    padding-top: 2rem;
  }
}

/* OTHER REVEAL STYLES (Static, Slide-Up, Slide-Left, Fade) */
.media-context-card__overlay--static {
  background: linear-gradient(
    to top,
    rgba(var(--mcc-bg-rgb), 0.94) 0%,
    rgba(var(--mcc-bg-rgb), 0.7) 28%,
    rgba(var(--mcc-bg-rgb), 0.38) 55%,
    rgba(var(--mcc-bg-rgb), 0.12) 78%,
    rgba(var(--mcc-bg-rgb), 0) 100%
  );
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
