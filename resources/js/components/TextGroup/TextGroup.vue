<template>
  <div
    class="text-group--animated"
    ref="container"
    :class="{ 'is-bot-visitor': isBot }"
  >
    <section class="text-group text-group--animated">
      <component
        v-if="subheading"
        :is="subheadingTag"
        class="text-group__subheading mb-2 font-extended font-bold whitespace-nowrap uppercase md:mb-0"
        :class="[
          subheadingSize,
          'leading-130',
          'tracking-8',
          textAlign,
          subheadingColor,
        ]"
        v-html="subheading"
      />

      <component
        v-if="heading"
        :is="headingTag"
        class="text-group__heading my-2 font-extended"
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
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import "waypoints/lib/noframework.waypoints";

const container = ref(null);
const isBot = ref(false);
let waypointInstance = null;
let hasEmittedAnimationComplete = false;

const emit = defineEmits(["animation-complete"]);

const props = defineProps({
  size: { type: String, default: "medium" },
  align: { type: String, default: "left" },
  type: { type: String, default: "dark" },
  subheading: String,
  heading: String,
  paragraph: String,
  static: { type: Boolean, default: false },
  hero: { type: Boolean, default: false },
  date: { type: Boolean, default: false },
  disableAnimations: { type: Boolean, default: false },
});

let gsapInstance = null;

async function getGsap() {
  if (gsapInstance) return gsapInstance;
  const mod = await import("gsap");
  gsapInstance = mod.gsap;
  return gsapInstance;
}

/* --- sizing system unchanged --- */
const sizes = computed(() => {
  const s = props.size;
  const isStatic = props.static === true;

  if (s === "xlarge")
    return {
      sub: "text-24",
      head: "md:text-48",
      headMobile: "text-48",
      weight: "font-normal",
      p: "md:text-20",
      pMobile: "text-20",
    };

  if (s === "large")
    return {
      sub: "text-18",
      head: "md:text-36",
      headMobile: "text-28",
      weight: "font-normal",
      p: "md:text-18",
      pMobile: "text-18",
    };

  if (s === "medium")
    return {
      sub: "text-14",
      head: "md:text-24",
      headMobile: "text-28",
      weight: "font-normal",
      p: "md:text-16",
      pMobile: "text-18",
    };

  if (s === "small" && isStatic)
    return {
      sub: "text-12",
      head: "text-20",
      headMobile: "",
      weight: "font-normal",
      p: "text-14",
      pMobile: "",
    };

  if (s === "small")
    return {
      sub: "text-12",
      head: "md:text-20",
      headMobile: "text-28",
      weight: "font-normal",
      p: "md:text-14",
      pMobile: "text-18",
    };

  if (s === "xsmall")
    return {
      sub: "text-12",
      head: "md:text-18",
      headMobile: "text-24",
      weight: "font-bold",
      p: "md:text-12",
      pMobile: "text-12",
    };

  return {
    sub: "",
    head: "",
    headMobile: "",
    weight: "font-normal",
    p: "",
    pMobile: "",
  };
});

const textAlign = computed(() =>
  props.align === "center" ? "text-center" : "text-left",
);

const subheadingColor = computed(() =>
  props.type === "light" ? "text-canary" : "text-azure",
);

const headingColor = computed(() =>
  props.type === "light" ? "text-white" : "text-indigo",
);

const paragraphColor = computed(() =>
  props.type === "light" ? "text-[#eef4ff]" : "text-indigo-800",
);

/* ----------------------------
   SEMANTIC FIX (core change)
----------------------------- */

const subheadingTag = computed(() => "h2");

const headingTag = computed(() => {
  if (props.hero) {
    return "h1";
  } else if (props.subheading) {
    return "h3";
  } else {
    return "h2";
  }
});

const subheadingSize = computed(() => sizes.value.sub);
const headingSize = computed(() => sizes.value.head);
const headingSizeMobile = computed(() => sizes.value.headMobile || "");
const headingWeight = computed(() => sizes.value.weight);
const paragraphSize = computed(() => sizes.value.p);
const paragraphSizeMobile = computed(() => sizes.value.pMobile || "");

const strippedHeading = computed(() => props.heading || "");

const paragraphWithClasses = computed(() => {
  let html = String(props.paragraph || "");

  const startsWithBlockTag = /^\s*<(p|ul|ol)\b/i.test(html.trim());
  if (!startsWithBlockTag) html = `<p>${html}</p>`;

  // 1. Identify and inject classes into "lone links"
  const loneClasses = "inline-flex items-center min-h-[44px]";

  // Define structural boundaries that separate lines/blocks
  const blockBoundaries =
    /<p[^>]*>|<\/p>|<li[^>]*>|<\/li>|<br\s*\/?>|<ul[^>]*>|<\/ul>|<ol[^>]*>|<\/ol>|<div[^>]*>|<\/div>/i;

  // Find every anchor tag in the HTML string
  html = html.replace(/<a\b[^>]*>.*?<\/a>/gi, (anchor, offset, fullString) => {
    // Safety check to prevent duplicate class injection
    if (anchor.includes("min-h-[44px]")) return anchor;

    const before = fullString.slice(0, offset);

    // Check if the link is inside an <li> tag.
    // If the number of opening <li> tags is greater than closing </li> tags, we are inside a list.
    const liOpenCount = (before.match(/<li[^>]*>/gi) || []).length;
    const liCloseCount = (before.match(/<\/li>/gi) || []).length;
    if (liOpenCount > liCloseCount) {
      return anchor;
    }

    const after = fullString.slice(offset + anchor.length);

    // Isolate the fragment between the previous block boundary and this anchor
    const beforeFragment = before.split(blockBoundaries).pop() || "";

    // Isolate the fragment between this anchor and the next block boundary
    const afterFragment = after.split(blockBoundaries).shift() || "";

    // Strip HTML tags from those fragments to check for actual text characters
    const hasTextBefore =
      beforeFragment.replace(/<[^>]+>/g, "").trim().length > 0;
    const hasTextAfter =
      afterFragment.replace(/<[^>]+>/g, "").trim().length > 0;

    // If there is no standard text on either side, it qualifies as a lone link
    if (!hasTextBefore && !hasTextAfter) {
      if (/class\s*=\s*["']/i.test(anchor)) {
        return anchor.replace(/(class\s*=\s*["'])/i, `$1${loneClasses} `);
      } else {
        return anchor.replace(/<a\b/i, `<a class="${loneClasses}"`);
      }
    }

    // If text was found, return the inline link unmodified
    return anchor;
  });

  // 2. Base Typography Classes (ADDED list-spacing to ulCls and olCls)
  const pCls = `text-group__p font-body font-normal ${paragraphSizeMobile.value} ${paragraphSize.value} leading-[1.75] ${textAlign.value} ${paragraphColor.value} mb-4 [&_a]:underline [&_a:hover]:no-underline`;
  const ulCls = `list-spacing list-disc font-body font-normal ${paragraphSizeMobile.value} ${paragraphSize.value} leading-130 ${paragraphColor.value} mt-2 my-4 pl-6 [&_a]:underline [&_a:hover]:no-underline`;
  const olCls = `list-spacing list-decimal font-body font-normal ${paragraphSizeMobile.value} ${paragraphSize.value} leading-130 ${paragraphColor.value} mt-2 my-4 pl-6 [&_a]:underline [&_a:hover]:no-underline`;
  const liCls = `${paragraphColor.value} mx-4 list-disc [&>ul]:pl-4 [&>ul>li]:list-[circle] [&>p]:leading-[1.5] [&_a]:underline [&_a:hover]:no-underline`;

  // Helper function to safely inject classes into tags, preserving existing CMS attributes
  const injectClasses = (htmlString, tagName, classNames) => {
    const regex = new RegExp(`<${tagName}\\b([^>]*)>`, "gi");
    return htmlString.replace(regex, (match, attributes) => {
      if (/class\s*=\s*["']/i.test(attributes)) {
        return match.replace(/(class\s*=\s*["'])/i, `$1${classNames} `);
      } else {
        return `<${tagName} class="${classNames}"${attributes}>`;
      }
    });
  };

  html = injectClasses(html, "p", pCls);
  html = injectClasses(html, "ul", ulCls);
  html = injectClasses(html, "ol", olCls);
  html = injectClasses(html, "li", liCls);

  return html;
});

/* --- animations unchanged --- */

const animateSubheading = async () => {
  if (!container.value || isBot.value) return;
  const gsap = await getGsap();
  const target = container.value.querySelectorAll(
    ".text-group__subheading > .word-wrap",
  );

  gsap.to(target, {
    duration: 0.5,
    stagger: 0.1,
    opacity: 1,
    ease: "power3.easeInOut",
    onComplete: () => {
      animateHeading();
      animateParagraph();
    },
  });
};

const animateHeading = async () => {
  if (!container.value || isBot.value) return;
  const gsap = await getGsap();
  const target = container.value.querySelectorAll(".text-group__heading span");

  gsap.to(target, {
    duration: 0.2,
    stagger: 0.1,
    opacity: 1,
    y: 0,
    ease: "power3.easeInOut",
  });
};

const animateParagraph = async () => {
  if (!container.value || isBot.value) return;
  const gsap = await getGsap();
  const target = container.value.querySelectorAll(".text-group__p");

  gsap.to(target, {
    delay: 0.4,
    duration: 0.4,
    stagger: 0.08,
    opacity: 1,
    ease: "Circ.easeIn",
  });
};

onMounted(() => {
  isBot.value =
    window.colby.DISABLE_ANIMATIONS === true || props.disableAnimations;

  if (!container.value) return;
  if (isBot.value || props.disableAnimations) return;

  const subheading = container.value.querySelector(".text-group__subheading");
  const paragraph = container.value.querySelector(".text-group__p");
  const heading = container.value.querySelector(".text-group__heading");

  if (subheading) {
    let words = subheading.innerHTML.split(" ");
    subheading.innerHTML = "";
    words.forEach((word) => {
      let wordWrap = document.createElement("span");
      wordWrap.classList.add("word-wrap");
      wordWrap.innerHTML = word;
      subheading.append(wordWrap);
      subheading.append(" ");
    });
  }

  if (heading) {
    let headingText = heading.innerHTML.split(" ");
    heading.innerHTML = "";
    headingText.forEach((word) => {
      let wordWrap = document.createElement("span");
      wordWrap.innerHTML = word;
      heading.append(wordWrap);
      heading.append(" ");
    });
  }

  waypointInstance = new window.Waypoint({
    element: container.value,
    handler: function () {
      if (subheading) {
        animateSubheading();
      } else if (heading) {
        animateHeading();
        animateParagraph();
      } else if (paragraph) {
        animateParagraph();
      }
      this.destroy();
    },
    offset: "bottom-in-view",
  });
});

onBeforeUnmount(() => {
  if (waypointInstance?.destroy) waypointInstance.destroy();
});
</script>

<style lang="scss">
.text-group__subheading span {
  display: inline-block;
}

.text-group--animated {
  .text-group__subheading span {
    display: inline-block;
    opacity: 0;
  }

  .text-group__heading span {
    display: inline-block;
    opacity: 0;
    transform: translate(0, 10px);
  }

  .text-group__p {
    opacity: 0;
  }
}

.is-bot-visitor {
  .text-group__subheading,
  .text-group__heading,
  .text-group__p,
  .text-group__heading span,
  .text-group__subheading span {
    opacity: 1 !important;
    transform: none !important;
    display: block !important;
  }

  .text-group__subheading span {
    display: inline-block !important;
  }
}
</style>
