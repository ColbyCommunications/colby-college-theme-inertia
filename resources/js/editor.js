import "../css/app.css";
import "../css/editor.css";
import { createApp, defineAsyncComponent, h } from "vue";
import { blockRegistry, blockNameToAcfSlug } from "./editor-block-registry";

const PREVIEW_SELECTOR = ".vue-block-preview";
const MOUNT_SELECTOR = ".vue-block-preview__mount";
const mountedPreviews = new WeakMap();

function ensureEditorPreviewGlobals() {
  window.colby = window.colby || {};

  if (typeof window.colby.DISABLE_ANIMATIONS !== "boolean") {
    window.colby.DISABLE_ANIMATIONS = true;
  }

  if (typeof window.colby.PRIMARY_DOMAIN !== "string" || !window.colby.PRIMARY_DOMAIN) {
    window.colby.PRIMARY_DOMAIN = window.location.hostname;
  }

  if (typeof window.colby.isLocal !== "boolean") {
    window.colby.isLocal = false;
  }
}

function getPreviewWrappers(root) {
  if (!root) {
    return [];
  }

  if (root instanceof Document) {
    return [...root.querySelectorAll(PREVIEW_SELECTOR)];
  }

  if (!(root instanceof Element)) {
    return [];
  }

  return root.matches(PREVIEW_SELECTOR)
    ? [root, ...root.querySelectorAll(PREVIEW_SELECTOR)]
    : [...root.querySelectorAll(PREVIEW_SELECTOR)];
}

function getPreviewPayload(wrapper) {
  const raw = wrapper.dataset.vueProps;

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn("[Colby Editor] Failed to parse preview payload", error, wrapper);

    return null;
  }
}

function mountPreview(wrapper, { force = false } = {}) {
  if (!(wrapper instanceof Element)) {
    return;
  }

  if (mountedPreviews.has(wrapper)) {
    if (!force) {
      return;
    }

    unmountPreview(wrapper);
  }

  const payload = getPreviewPayload(wrapper);
  const blockName = payload?.blockName || wrapper.dataset.blockName || "";
  const mountTarget = wrapper.querySelector(MOUNT_SELECTOR);
  const loader = blockRegistry[blockName];

  if (!mountTarget || !loader) {
    return;
  }

  const BlockComponent = defineAsyncComponent(loader);
  const app = createApp({
    render: () => h(BlockComponent, payload?.props ?? {}),
  });

  app.provide("isEditorPreview", true);
  app.mount(mountTarget);

  mountedPreviews.set(wrapper, app);
  wrapper.dataset.vuePreviewMounted = "true";
}

function mountPreviewTree(root, options) {
  getPreviewWrappers(root).forEach((wrapper) => {
    mountPreview(wrapper, options);
  });
}

function unmountPreview(wrapper) {
  if (!(wrapper instanceof Element)) {
    return;
  }

  const app = mountedPreviews.get(wrapper);

  if (!app) {
    return;
  }

  app.unmount();
  mountedPreviews.delete(wrapper);
  delete wrapper.dataset.vuePreviewMounted;
}

function unmountPreviewTree(root) {
  getPreviewWrappers(root).forEach((wrapper) => {
    unmountPreview(wrapper);
  });
}

function normalizeAcfElement(element) {
  if (element instanceof Element) {
    return element;
  }

  if (element?.jquery && element[0] instanceof Element) {
    return element[0];
  }

  if (Array.isArray(element) && element[0] instanceof Element) {
    return element[0];
  }

  return null;
}

function registerAcfPreviewHooks() {
  const acf = window.acf;

  if (!acf?.addAction) {
    return false;
  }

  Object.keys(blockRegistry)
    .filter((blockName) => blockName.startsWith("acf/"))
    .forEach((blockName) => {
      acf.addAction(
        `render_block_preview/type=${blockNameToAcfSlug(blockName)}`,
        (element) => {
          const root = normalizeAcfElement(element);

          if (root) {
            mountPreviewTree(root, { force: true });
          }
        },
      );
    });

  return true;
}

function observePreviewMutations() {
  const observer = new MutationObserver((records) => {
    records.forEach((record) => {
      record.removedNodes.forEach((node) => {
        unmountPreviewTree(node);
      });

      record.addedNodes.forEach((node) => {
        mountPreviewTree(node);
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function bootstrapEditorPreviews() {
  ensureEditorPreviewGlobals();
  mountPreviewTree(document);
  registerAcfPreviewHooks();

  if (document.body) {
    observePreviewMutations();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrapEditorPreviews, {
    once: true,
  });
} else {
  bootstrapEditorPreviews();
}
