<template>
  <div class="embed">
    <div class="embed__main">
      <div
        ref="embedContainer"
        class="
          [&>div>div_span.lw-event-date]:text-sm
          [&>div>div_span.lw-event-date]:uppercase
          [&>div>div_span.lw-event-date]:tracking-wider
          [&>div>div_span.lw-event-date]:leading-[2]
          [&>div>div_span.lw-event-date]:text-[#366bcf]

          [&>div>div_span.lw-event-time]:text-[#365185]
          [&>div>div_span.lw-event-time]:font-body
          [&>div>div_span.lw-event-time]:text-sm
          [&>div>div_span.lw-event-time]:font-normal

          [&>div>div_span.lw-event-name]:font-extended
          [&>div>div_span.lw-event-name]:font-bold
          [&>div>div_span.lw-event-name]:leading-[1.5]
          [&>div>div_span.lw-event-name]:underline
          [&>div>div_span.lw-event-name]:hover:no-underline
          [&>div>div_span.lw-event-name]:tracking-tight
          [&>div>div_span.lw-event-name]:text-lg
          [&>div>div_span.lw-event-name]:text-indigo
        "
        v-html="processedEmbed"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";

const props = defineProps({
  embed: {
    type: String,
    default: "",
  },

  iframeTitle: {
    type: String,
    default: "Embedded content",
  },
});

const embedContainer = ref(null);

function getIframeTitle(iframe, index) {
  const src = iframe.getAttribute("src") || "";

  if (src.includes("youtube.com") || src.includes("youtu.be")) {
    return `YouTube video ${index + 1}`;
  }

  if (src.includes("vimeo.com")) {
    return `Vimeo video ${index + 1}`;
  }

  if (src.includes("calendar") || src.includes("events")) {
    return `Calendar embed ${index + 1}`;
  }

  if (src.includes("map") || src.includes("google.com/maps")) {
    return `Map embed ${index + 1}`;
  }

  return `${props.iframeTitle} ${index + 1}`;
}

const processedEmbed = computed(() => {
  if (!props.embed || typeof window === "undefined") {
    return props.embed || "";
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(props.embed, "text/html");

  doc.querySelectorAll("iframe").forEach((iframe, index) => {
    if (!iframe.getAttribute("title")) {
      iframe.setAttribute("title", getIframeTitle(iframe, index));
    }

    if (!iframe.getAttribute("loading")) {
      iframe.setAttribute("loading", "lazy");
    }
  });

  return doc.body.innerHTML;
});

const executeScripts = () => {
  if (!embedContainer.value) return;

  const scripts = embedContainer.value.querySelectorAll("script");

  scripts.forEach((oldScript) => {
    const newScript = document.createElement("script");

    Array.from(oldScript.attributes).forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
    });

    newScript.appendChild(document.createTextNode(oldScript.innerHTML));

    oldScript.parentNode.replaceChild(newScript, oldScript);
  });

  if (window.twttr?.widgets) {
    window.twttr.widgets.load();
  }

  if (window.instgrm?.Embeds) {
    window.instgrm.Embeds.process();
  }
};

onMounted(async () => {
  await nextTick();
  executeScripts();
});

watch(
  () => processedEmbed.value,
  async () => {
    await nextTick();
    executeScripts();
  },
);
</script>