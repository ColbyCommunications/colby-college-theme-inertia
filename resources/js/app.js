import { createApp, h } from "vue";
import { createInertiaApp, Head, Link, router } from "@inertiajs/vue3";
import axios from "./plugins/axios";
import "../css/app.css";
import "@fontsource/material-symbols-sharp";

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
  progress: {
    delay: 250,
    color: "#29d",
    includeCSS: true,
    showSpinner: false,
  },
});
