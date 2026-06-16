<template>
  <div class="wysiwyg-content" v-html="processedHtml"></div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  html: { type: String, default: "" },
  size: { type: String, default: "medium" },
  align: { type: String, default: "left" },
  type: { type: String, default: "dark" },
  static: { type: Boolean, default: false },
});

const sizeConfig = {
  xlarge: { p: "md:text-20", pMobile: "text-20" },
  large: { p: "md:text-18", pMobile: "text-18" },
  medium: { p: "md:text-16", pMobile: "text-18" },
  small: { p: "md:text-14", pMobile: "text-18" },
  xsmall: { p: "md:text-12", pMobile: "text-12" },
};

const sizes = computed(() => {
  if (props.size === "small" && props.static) {
    return { p: "text-14", pMobile: "" };
  }
  return sizeConfig[props.size] || { p: "", pMobile: "" };
});

const textAlign = computed(() =>
  props.align === "center" ? "text-center" : "text-left",
);

const paragraphColor = computed(() =>
  props.type === "light" ? "text-[#eef4ff]" : "text-indigo-800",
);

// Hoisted constants & pre-compiled RegEx to prevent recreation on every render
const blockStartsRegex = /^\s*<(p|ul|ol)\b/i;
const loneClasses = "inline-flex items-center min-h-[44px]";
const blockBoundariesRegex =
  /<p[^>]*>|<\/p>|<li[^>]*>|<\/li>|<br\s*\/?>|<ul[^>]*>|<\/ul>|<ol[^>]*>|<\/ol>|<div[^>]*>|<\/div>/i;
const anchorRegex = /<a\b[^>]*>.*?<\/a>/gi;
const liOpenRegex = /<li[^>]*>/gi;
const liCloseRegex = /<\/li>/gi;
const stripTagsRegex = /<[^>]+>/g;
const classAttrRegex = /class\s*=\s*["']/i;
const classInjectionRegex = /(class\s*=\s*["'])/i;

const processedHtml = computed(() => {
  let content = String(props.html || "");

  if (!blockStartsRegex.test(content.trim())) {
    content = `<p>${content}</p>`;
  }

  content = content.replace(anchorRegex, (anchor, offset, fullString) => {
    if (anchor.includes("min-h-[44px]")) return anchor;

    const before = fullString.slice(0, offset);
    const liOpenCount = (before.match(liOpenRegex) || []).length;
    const liCloseCount = (before.match(liCloseRegex) || []).length;

    if (liOpenCount > liCloseCount) {
      return anchor;
    }

    const after = fullString.slice(offset + anchor.length);
    const beforeFragment = before.split(blockBoundariesRegex).pop() || "";
    const afterFragment = after.split(blockBoundariesRegex).shift() || "";

    const hasTextBefore =
      beforeFragment.replace(stripTagsRegex, "").trim().length > 0;
    const hasTextAfter =
      afterFragment.replace(stripTagsRegex, "").trim().length > 0;

    if (!hasTextBefore && !hasTextAfter) {
      if (classAttrRegex.test(anchor)) {
        return anchor.replace(classInjectionRegex, `$1${loneClasses} `);
      } else {
        return anchor.replace(/<a\b/i, `<a class="${loneClasses}"`);
      }
    }

    return anchor;
  });

  // Cached proxy accesses
  const pSizeMob = sizes.value.pMobile || "";
  const pSize = sizes.value.p;
  const pAlign = textAlign.value;
  const pColor = paragraphColor.value;

  // Consolidated repetitive template strings
  const sharedLinkCls = "[&_a]:underline [&_a:hover]:no-underline";
  const sharedListCls = `list-spacing font-body font-normal ${pSizeMob} ${pSize} leading-130 ${pColor} mt-2 my-4 pl-6 ${sharedLinkCls}`;

  const pCls = `text-group__p font-body font-normal ${pSizeMob} ${pSize} leading-[1.75] ${pAlign} ${pColor} mb-4 ${sharedLinkCls}`;
  const ulCls = `${sharedListCls} list-disc`;
  const olCls = `${sharedListCls} list-decimal`;
  const liCls = `${pColor} mx-4 list-disc [&>ul]:pl-4 [&>ul>li]:list-[circle] [&>p]:leading-[1.5] ${sharedLinkCls}`;

  const injectClasses = (htmlString, tagName, classNames) => {
    const regex = new RegExp(`<${tagName}\\b([^>]*)>`, "gi");
    return htmlString.replace(regex, (match, attributes) => {
      if (classAttrRegex.test(attributes)) {
        return match.replace(classInjectionRegex, `$1${classNames} `);
      } else {
        return `<${tagName} class="${classNames}"${attributes}>`;
      }
    });
  };

  content = injectClasses(content, "p", pCls);
  content = injectClasses(content, "ul", ulCls);
  content = injectClasses(content, "ol", olCls);
  content = injectClasses(content, "li", liCls);

  return content;
});
</script>
