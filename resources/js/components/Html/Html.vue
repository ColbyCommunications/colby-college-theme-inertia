<template>
  <div ref="htmlContainer" class="custom-html-block" v-html="content"></div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, computed } from "vue";

const props = defineProps({
  html: {
    type: String,
    default: "",
  },
  renderedHtml: {
    type: String,
    default: "",
  },
});

const htmlContainer = ref(null);

// Fallback to capture the data regardless of how ComponentRouter maps it
const content = computed(() => props.renderedHtml || props.html || "");

const executeScripts = () => {
  if (!htmlContainer.value) return;

  const scripts = htmlContainer.value.querySelectorAll("script");

  scripts.forEach((oldScript) => {
    const newScript = document.createElement("script");

    Array.from(oldScript.attributes).forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
    });

    if (oldScript.innerHTML) {
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    }

    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
};

onMounted(async () => {
  await nextTick();
  executeScripts();
});

watch(content, async () => {
  await nextTick();
  executeScripts();
});
</script>
