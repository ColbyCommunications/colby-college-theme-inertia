<!-- resources/js/components/TextGroup.vue -->
<template>
  <section class="text-group text-group--animated">
    <component
      v-if="subheading"
      :is="subheadingTag"
      class="text-group__subheading mr-4 mb-2 font-extended font-bold whitespace-nowrap uppercase md:mb-0"
      :class="[
        subheadingSize,
        'leading-130',
        'tracking-8',
        textAlign,
        subheadingColor,
      ]"
    >
      {{ subheading }}
    </component>

    <component
      v-if="heading"
      :is="headingTag"
      class="text-group__heading mt-2 font-extended"
      :class="[
        headingWeight,
        headingSizeMobile,
        headingSize,
        'leading-110',
        '-tracking-3',
        textAlign,
        headingColor,
      ]"
      v-html="strippedHeading"
    />

    <div v-if="paragraph" v-html="paragraphWithClasses" />
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: { type: String, default: "medium" }, // 'xlarge'|'large'|'medium'|'small'|'xsmall'
  align: { type: String, default: "left" }, // 'left'|'center'
  type: { type: String, default: "dark" }, // 'light'|'dark' (default from twig else branch looked “dark-ish”)
  subheading: String,
  heading: String,
  paragraph: String, // may contain HTML already
  static: { type: Boolean, default: false },
  hero: { type: Boolean, default: false },
  date: { type: Boolean, default: false },
});

/* size mappings */
const sizes = computed(() => {
  const s = props.size;
  const isStatic = props.static === true;
  if (s === "xlarge") {
    return {
      sub: "text-24",
      head: "md:text-48",
      headMobile: "text-48",
      weight: "font-normal",
      p: "md:text-20",
      pMobile: "text-20",
    };
  } else if (s === "large") {
    return {
      sub: "text-18",
      head: "md:text-36",
      headMobile: "text-28",
      weight: "font-normal",
      p: "md:text-18",
      pMobile: "text-18",
    };
  } else if (s === "medium") {
    return {
      sub: "text-14",
      head: "md:text-24",
      headMobile: "text-28",
      weight: "font-normal",
      p: "md:text-16",
      pMobile: "text-18",
    };
  } else if (s === "small" && isStatic) {
    return {
      sub: "text-12",
      head: "text-20",
      headMobile: "",
      weight: "font-normal",
      p: "text-14",
      pMobile: "",
    };
  } else if (s === "small") {
    return {
      sub: "text-12",
      head: "md:text-20",
      headMobile: "text-28",
      weight: "font-normal",
      p: "md:text-14",
      pMobile: "text-18",
    };
  } else if (s === "xsmall") {
    return {
      sub: "text-12",
      head: "md:text-18",
      headMobile: "text-24",
      weight: "font-bold",
      p: "md:text-12",
      pMobile: "text-12",
    };
  }
  return {
    sub: "",
    head: "",
    headMobile: "",
    weight: "font-normal",
    p: "",
    pMobile: "",
  };
});

/* align */
const textAlign = computed(() =>
  props.align === "center" ? "text-center" : "text-left",
);

/* type colors */
const subheadingColor = computed(() =>
  props.type === "light" ? "text-canary" : "text-azure",
);
const headingColor = computed(() =>
  props.type === "light" ? "text-white" : "text-indigo",
);
const paragraphColor = computed(() =>
  props.type === "light" ? "text-indigo-200" : "text-indigo-800",
);

/* tags */
const subheadingTag = computed(() => {
  if (props.hero) return props.date ? "div" : "h1";
  if (props.heading) return "div";
  return "h2";
});
const headingTag = computed(() => (props.date ? "h1" : "h2"));

/* class pieces */
const subheadingSize = computed(() => sizes.value.sub);
const headingSize = computed(() => sizes.value.head);
const headingSizeMobile = computed(() => sizes.value.headMobile || "");
const headingWeight = computed(() => sizes.value.weight);
const paragraphSize = computed(() => sizes.value.p);
const paragraphSizeMobile = computed(() => sizes.value.pMobile || "");

/* strip tags from heading like Twig |striptags */
const strippedHeading = computed(() =>
  (props.heading || "").replace(/<[^>]*>/g, ""),
);

/* paragraph HTML: wrap in <p> if no tags, then inject classes on p/ul/ol/li like Twig replace */
const paragraphWithClasses = computed(() => {
  const htmlTagRegex = /<[^>]*>/; // Regex to find ANY HTML tag

  // FIX: Explicitly convert to string before defaulting
  let html = String(props.paragraph || "");

  // 1. ALWAYS wrap in a <p> tag if it doesn't already start with one.
  // We check if it starts with any block-level tag (<p, <ul, <ol).
  const startsWithBlockTag = /^\s*<(p|ul|ol)\b/i.test(html.trim());

  if (!startsWithBlockTag) {
    // If it's just raw text, or text with only inline tags (<i>, <em>), wrap it in <p>
    html = `<p>${html}</p>`;
  }

  // 2. Inject classes
  const pCls = `text-group__p font-body font-normal ${paragraphSizeMobile.value} ${paragraphSize.value} leading-130 ${textAlign.value} ${paragraphColor.value} mt-2`;
  const ulCls = `list-disc font-body font-normal ${paragraphSizeMobile.value} ${paragraphSize.value} leading-130 ${paragraphColor.value} mt-2`;
  const olCls = `list-decimal font-body font-normal ${paragraphSizeMobile.value} ${paragraphSize.value} leading-130 ${paragraphColor.value} mt-2`;
  const liCls = `${paragraphColor.value}`;

  return html
    .replaceAll("<p>", `<p class="${pCls}">`)
    .replaceAll("<ul>", `<ul class="${ulCls}">`)
    .replaceAll("<ol>", `<ol class="${olCls}">`)
    .replaceAll("<li>", `<li class="${liCls}">`);
});
</script>
