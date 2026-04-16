import { createApp, h } from "vue";
import { createInertiaApp, Head, Link, router } from "@inertiajs/vue3";
import { InertiaProgress } from "@inertiajs/progress";
// import InstantSearch from "vue-instantsearch/vue3/es";
import axios from "./plugins/axios"; // Import your configured instance, NOT the raw library
import "../css/app.css";
import "@fontsource/material-symbols-sharp";

function ensureColbyGlobals() {
  window.colby = window.colby || {};

  if (typeof window.colby.DISABLE_ANIMATIONS !== "boolean") {
    window.colby.DISABLE_ANIMATIONS = false;
  }

  if (typeof window.colby.PRIMARY_DOMAIN !== "string" || !window.colby.PRIMARY_DOMAIN) {
    window.colby.PRIMARY_DOMAIN = window.location.hostname;
  }

  if (typeof window.colby.isLocal !== "boolean") {
    const host = window.location.hostname;
    window.colby.isLocal =
      host === "localhost" ||
      host === "127.0.0.1" ||
      host.endsWith(".lndo.site") ||
      host.endsWith(".local");
  }
}

ensureColbyGlobals();

InertiaProgress.init();

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./pages/**/*.vue", { eager: true });
    const page = pages[`./pages/${name}.vue`];

    return page;
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) });
    app.use(plugin);
    // app.use(InstantSearch);
    app.component("Head", Head);
    app.component("Link", Link);
    app.mount(el);
  },
});
