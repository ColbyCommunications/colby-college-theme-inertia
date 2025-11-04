import { createApp, h } from "vue";
import { createInertiaApp, Head, Link, router } from "@inertiajs/vue3";
import { InertiaProgress } from "@inertiajs/progress";
import InstantSearch from "vue-instantsearch/vue3/es";
import "../css/app.css";

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
    app.use(InstantSearch);
    app.component("Head", Head);
    app.component("Link", Link);
    app.mount(el);
  },
});
