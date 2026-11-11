<template>
  <component
    :is="url ? 'a' : 'div'"
    :href="url || undefined"
    :target="url && new_tab ? '_blank' : undefined"
    :rel="url && new_tab ? 'noopener noreferrer' : undefined"
    class="media-item block w-full focus:outline focus:outline-2 focus:outline-gold"
    :class="url ? 'group cursor-pointer' : ''"
    :style="url ? { '--mi-bg-rgb': currentTheme.rgb } : undefined"
  >
    <div
      v-if="image?.url || image?.src"
      class="relative w-full overflow-hidden bg-gray-100"
      :class="ratioClass"
    >
      <img
        :src="image.url || image.src"
        :alt="image.alt || ''"
        :width="image.width || undefined"
        :height="image.height || undefined"
        loading="lazy"
        class="block w-full transition-transform duration-500 ease-out"
        :class="[
          ratio && ratio !== 'original' ? 'h-full object-cover' : 'h-auto',
          url ? 'group-hover:scale-105' : '',
        ]"
        @load="$emit('load')"
      />

      <span
        v-if="url"
        aria-hidden="true"
        class="media-item__cue pointer-events-none absolute top-0 right-0 z-10 flex h-5 w-5 items-center justify-center border backdrop-blur-md transition-colors duration-300 ease-out md:top-0 md:right-0 md:h-5 md:w-5"
        :class="cueThemeClasses"
      >
        <svg
          class="h-3 w-3 overflow-visible md:h-[12px] md:w-[12px]"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Stationary Box -->
          <path
            d="M13.5 9.83333V13.5C13.5 14.0523 13.0523 14.5 12.5 14.5H4.5C3.94772 14.5 3.5 14.0523 3.5 13.5V5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H8.16667"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- Animated Outward Arrow -->
          <path
            class="transition-transform duration-300 ease-out group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
            d="M10.8333 3.5H14.5M14.5 3.5V7.16667M14.5 3.5L7.83333 10.1667"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  image: { type: Object, default: () => ({}) },
  url: { type: String, default: "" },
  url_icon_color: { type: String, default: "indigo" },
  new_tab: { type: [Boolean, Number], default: false },
  ratio: { type: String, default: "original" },
});

defineEmits(["load"]);

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
  () => themeMap[props.url_icon_color] || themeMap.indigo,
);

const cueThemeClasses = computed(() => {
  const isLightText = currentTheme.value.contextType === "light";
  return isLightText
    ? "border-white/30 text-white shadow-sm group-hover:border-white/60"
    : "border-indigo/25 text-indigo shadow-sm group-hover:border-indigo/50";
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
</script>

<style scoped>
.media-item__cue {
  background-color: rgba(var(--mi-bg-rgb), 0.68);
}

.media-item:hover .media-item__cue,
.media-item:focus-visible .media-item__cue {
  background-color: rgba(var(--mi-bg-rgb), 0.92);
}
</style>
