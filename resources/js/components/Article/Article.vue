<template>
  <article
    :class="[
      'article space-y-4',
      { 'border-t-2 border-solid border-indigo-600 pt-1': !!border },
    ]"
  >
    <div
      :class="{
        'flex items-start space-x-4': apiSource === 'media_coverage',
        'flex-col space-y-4': apiSource !== 'media_coverage',
      }"
    >
      <template v-if="image">
        <a
          v-if="hasButtons"
          class="article__image relative block overflow-hidden"
          :class="[
            { article__image__person: postType === 'people' },
            // Conditionally apply media coverage specific image sizing and shrink properties
            isMediaCoverageClass,
          ]"
          :href="buttons[0].button.url"
          :aria-label="ariaLabel"
        >
          <picture v-if="useDesktopMobile">
            <source media="(min-width:768px)" :srcset="image.sizes.desktop" />
            <img
              class="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
              :src="image.sizes.mobile || image.src"
              :alt="image?.alt || ''"
            />
          </picture>
          <picture v-else>
            <source media="(min-width:768px)" :srcset="image.srcset" />
            <img
              class="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
              :src="image.src"
              :alt="image?.alt || ''"
            />
          </picture>
        </a>
        <div
          v-else
          class="article__image relative"
          :class="[
            { article__image__person: postType === 'people' },
            // Conditionally apply media coverage specific image sizing and shrink properties
            isMediaCoverageClass,
          ]"
        >
          <picture v-if="useDesktopMobile">
            <source media="(min-width:768px)" :srcset="image.sizes.desktop" />
            <img
              class="w-full object-cover"
              :src="image.sizes.mobile || image.src"
              :alt="image?.alt || ''"
            />
          </picture>
          <picture v-else>
            <source media="(min-width:768px)" :srcset="image.srcset" />
            <img
              class="w-full object-cover"
              :src="image?.src"
              :alt="image.alt || ''"
            />
          </picture>
        </div>
      </template>

      <TextGroup
        :class="{ 'min-w-0 flex-grow': apiSource === 'media_coverage' }"
        :size="size || 'small'"
        :static="true"
        :subheading="subheading"
        :heading="heading"
        :paragraph="paragraph"
      />
    </div>

    <ButtonGroup
      v-if="hasButtons"
      :items="buttons"
      :align="'left'"
      :size="size || 'medium'"
    />
  </article>
</template>

<script setup>
import { computed } from "vue";
import TextGroup from "../TextGroup/TextGroup.vue";
import ButtonGroup from "../ButtonGroup/ButtonGroup.vue";

const props = defineProps({
  apiSource: { type: String, default: "" },
  border: { type: [Boolean, String], default: false },
  image: { type: Object, default: null },
  buttons: { type: Array, default: () => [] }, // [{ button: { url, title, target } }]
  postType: { type: String, default: "" }, // 'people' | ...
  heading: { type: String, default: "" },
  subheading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  size: { type: String, default: "small" },
  imageSize: { type: String, default: "thumbnail" },
  inComponentLibrary: { type: Boolean, default: false }, // kept for parity, if you need it
});

const hasButtons = computed(
  () =>
    Array.isArray(props.buttons) &&
    props.buttons.length > 0 &&
    props.buttons[0].button?.url,
);

const useDesktopMobile = computed(
  () => !!props.image?.sizes?.desktop || !!props.image?.sizes?.mobile,
);

const ariaLabel = computed(() => {
  const raw = props.heading || "";
  const stripped = raw.replace(/<[^>]*>/g, "");
  return stripped.replace(/"/g, "").toLowerCase();
});

// RENAMED: Changed the name of the computed property to reflect its usage as a class string
// The logic remains the same for media_coverage sizing.
const isMediaCoverageClass = computed(() => {
  if (props.image && props.apiSource === "media_coverage") {
    // Add flex-shrink-0 to prevent the image from shrinking when using flex layout
    return "h-[75px] w-[75px] lg:h-[96px] lg:w-[96px] object-cover flex-shrink-0";
  }
  // This class was only used in the img tag before, but now we're putting it on the wrapper <a>/<div>
  return "w-full";
});
</script>
