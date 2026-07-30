<template>
  <div class="gravity-form-container mx-auto mt-10 max-w-screen-xl">
    <div ref="formContainer" v-html="renderedHtml"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

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

const formContainer = ref(null);

onMounted(async () => {
  await nextTick();

  if (!formContainer.value) return;

  const scripts = formContainer.value.querySelectorAll("script");

  scripts.forEach((script) => {
    const newScript = document.createElement("script");

    if (script.src) {
      newScript.src = script.src;
    } else {
      newScript.textContent = script.innerText;
    }

    document.body.appendChild(newScript);
    script.remove();
  });
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
