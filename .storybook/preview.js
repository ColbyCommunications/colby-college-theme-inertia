/** @type { import('@storybook/vue3-vite').Preview } */

import "../resources/css/app.css";

// .storybook/preview.js
import { setup } from "@storybook/vue3";
import InstantSearch from "vue-instantsearch/vue3/es";

// Import your global CSS/Tailwind here so styles look right
// import '../src/assets/tailwind.css';

setup((app) => {
  app.use(InstantSearch);
});

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
