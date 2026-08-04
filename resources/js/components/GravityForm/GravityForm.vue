<template>
  <div class="gravity-form-container mx-auto mt-10">
    <iframe
      v-if="formId"
      ref="gfIframe"
      :src="`/?gf_iframe_id=${formId}`"
      class="w-full"
      :style="{
        height: iframeHeight + 'px',
        border: 'none',
        overflow: 'hidden',
      }"
      scrolling="no"
    ></iframe>
    <div v-else class="p-5 text-red-500">
      Error: No Gravity Form ID provided.
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  blockAttrs: {
    type: Object,
    default: () => ({}),
  },
  renderedHtml: {
    type: String,
    default: "",
  },
});

const iframeHeight = ref(800);
const formId = computed(() => props.blockAttrs?.formId || null);

const handleMessage = (event) => {
  if (event.data && event.data.type === "gf_iframe_resize") {
    iframeHeight.value = event.data.height + 20; // 20px buffer to prevent cutoffs
  }
};

onMounted(() => {
  window.addEventListener("message", handleMessage);
});

onUnmounted(() => {
  window.removeEventListener("message", handleMessage);
});
</script>
<style scoped>
:deep(.gform_wrapper) {
  input:not([type="file"]):not([type="submit"]) {
    border: 1px solid #b7c2d5;
    border-radius: 3px;
  }
  textarea {
    border: 1px solid #b7c2d5;
    border-radius: 3px;
  }
  select {
    border: 1px solid #b7c2d5;
    border-radius: 3px;
    padding: 5px;
  }
  input[type="submit"] {
    background-color: #002878;
    border: 2px solid #002878;
    color: #fff;
    padding: 5px 12px;
    cursor: pointer;
    border-radius: 4px;
  }
  input[type="submit"]:hover {
    background-color: #fff;
    border: 2px solid #002878;
    color: #003878;
    padding: 5px 12px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: underline;
  }
  input[type="submit"]:focus {
    background-color: #fff;
    border: 2px solid #002878;
    color: #003878;
    padding: 5px 12px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: underline;
  }
  .remove-field {
    margin-bottom: 2rem;
    label {
      margin-left: 0.5rem;
    }
  }

  .gchoice {
    label {
      margin-left: 0.5rem;
    }
  }
}

/* Password Protection Styles */
:deep(.post-password-form) input[type="password"] {
  border: 1px solid #ccc;
}

:deep(.post-password-form) input[type="submit"] {
  border: 1px solid #002878;
  background-color: #002878;
  color: #fff;
  padding: 1px 10px;
}
</style>
