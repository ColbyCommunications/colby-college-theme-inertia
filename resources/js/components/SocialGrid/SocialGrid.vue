<template>
  <div class="social-grid">
    <div
      class="social-grid__inner mx-auto my-0 w-full max-w-screen-2xl"
      :class="alignment === 'center' ? 'text-center' : 'text-left'"
    >
      <Context
        v-if="header || subheading || paragraph"
        :size="size"
        type="dark"
        :heading="header"
        :subheading="subheading"
        :paragraph="paragraph"
        :align="alignment"
      />

      <div
        v-if="icons && icons.length"
        class="social-grid__icons mt-8 flex flex-wrap"
        :class="[
          alignment === 'center' ? 'justify-center' : 'justify-start',
          hasLabels ? 'gap-x-4 gap-y-6' : 'gap-6',
        ]"
      >
        <a
          v-for="(item, i) in icons"
          :key="i"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-grid__item group inline-flex flex-col items-center gap-2 text-center transition-opacity hover:opacity-80"
          :class="hasLabels ? currentSize.itemWidth : ''"
        >
          <div
            class="social-grid__icon-wrapper flex shrink-0 items-center justify-center transition-transform group-hover:scale-105"
            :class="[currentSize.wrapper, currentStyle]"
            :style="{
              backgroundColor:
                background_style !== 'none'
                  ? item.background_color
                  : 'transparent',
              color: item.icon_color || '#FFFFFF',
            }"
          >
            <Icon
              :name="getIconName(item.icon)"
              class="block fill-current"
              :class="currentSize.icon"
            />
          </div>

          <span
            v-if="item.label"
            class="w-full font-body text-12 leading-140 font-normal break-words text-indigo"
            :style="{ color: item.label_color || undefined }"
          >
            {{ item.label }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import Icon from "../Icon/Icon.vue";

const props = defineProps({
  alignment: {
    type: String,
    default: "center",
  },
  size: {
    type: String,
    default: "medium",
  },
  header: {
    type: String,
    default: "",
  },
  subheading: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    default: "",
  },
  background_style: {
    type: String,
    default: "none",
  },
  icons: {
    type: Array,
    default: () => [],
  },
});

const hasLabels = computed(() =>
  props.icons?.some((item) => item.label && item.label.trim() !== ""),
);

const currentSize = computed(() => {
  const hasBg = props.background_style !== "none";

  const sizes = {
    small: {
      itemWidth: "w-16",
      wrapper: hasBg ? "h-10 w-10" : "",
      squareRadius: "rounded-md",
      icon: hasBg ? "h-5 w-5" : "h-7 w-7",
    },
    medium: {
      itemWidth: "w-20",
      wrapper: hasBg ? "h-14 w-14" : "",
      squareRadius: "rounded-lg",
      icon: hasBg ? "h-7 w-7" : "h-10 w-10",
    },
    large: {
      itemWidth: "w-24",
      wrapper: hasBg ? "h-20 w-20" : "",
      squareRadius: "rounded-xl",
      icon: hasBg ? "h-10 w-10" : "h-14 w-14",
    },
  };

  return sizes[props.size] || sizes.medium;
});

const currentStyle = computed(() => {
  const styles = {
    none: "",
    circle: "rounded-full",
    square: currentSize.value.squareRadius,
  };

  return styles[props.background_style] || "";
});

const iconMap = {
  facebook: "facebook",
  instagram: "instagram",
  youtube: "youtube",
  tiktok: "tiktok",
  x: "x",
  vimeo: "vimeo",
  linkedin: "linkedin",
  mail: "mail",
};

const getIconName = (network) => iconMap[network] || network;
</script>
