<template>
  <div class="embed">
    <div class="embed__main">
      <div class="
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
      [&>div>div_span.lw-event-name]:text-indigo" ref="embedContainer" v-html="embed"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref, watch, nextTick } from "vue";

const props = defineProps({
  embed: {
    type: String,
    default: "",
  },
});

const embedContainer = ref(null);

// This function finds script tags that Vue ignored and forces them to run
const executeScripts = () => {
  if (!embedContainer.value) return;

  // 1. Find all script tags inside the container
  const scripts = embedContainer.value.querySelectorAll("script");

  scripts.forEach((oldScript) => {
    // 2. Create a new script element (the browser will execute this one)
    const newScript = document.createElement("script");

    // 3. Copy all attributes (src, async, id, etc.) from the old script
    Array.from(oldScript.attributes).forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
    });

    // 4. Copy the inline code (innerHTML)
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));

    // 5. Replace the "dead" script with the "live" one in the DOM
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });

  // --- SPECIAL HANDLING FOR KNOWN WIDGETS ---
  // Some widgets (like WeatherWidget.io or Twitter) won't re-run if their
  // script is already loaded globally. We manually trigger them here.

  // Twitter / X
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load();
  }

  // Instagram
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
};

// Run on mount
onMounted(() => {
  executeScripts();
});

// Run if the embed string changes dynamically
watch(
  () => props.embed,
  async () => {
    await nextTick(); // Wait for v-html to update the DOM
    executeScripts();
  },
);
</script>
