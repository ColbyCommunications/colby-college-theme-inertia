<template>
  <div class="overlay-wide-image mx-auto my-0 max-w-screen-2xl">
    <div class="overlay-wide-image__inner relative md:pb-[45.45454545454545%]">
      <div
        class="overlay-wide-image__overlay z-10 relative md:absolute top-0 left-0 flex items-center w-full h-full p-9 md:p-24 bg-snow"
      >
        <Context
          size="medium"
          type="light"
          :subheading="subheading"
          :heading="heading"
          :paragraph="paragraph"
          :buttons="buttonData"
        />
      </div>
      <Picture
        class="absolute top-0 left-0 h-full w-full object-cover md:top-auto md:left-auto"
        :src="image.url"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Context from "@/js/components/Context/Context.vue";
import Picture from "@/js/components/Picture/Picture.vue";

const props = defineProps({
  subheading: { type: String, default: "" },
  heading: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  buttons: { type: Array, default: () => [] },
  image: { type: Object, default: () => ({}) },
});

const buttonData = computed(() => {
  if (!props.buttons || !Array.isArray(props.buttons)) {
    return { items: [] };
  }

  return {
    items: props.buttons.map((btn) => {
      // If the ACF repeater row already contains the nested 'button' link array
      if (btn.button && btn.button.url) {
        return btn;
      }

      // Fallback if ACF returns the link array directly on the row, or flat fields
      const linkObj = btn.link || btn;

      return {
        button: {
          url: linkObj.url || "",
          title: linkObj.title || "",
          target: linkObj.target || "",
        },
      };
    }),
  };
});
</script>
