/** @type { import('@storybook/vue3-vite').Preview } */


import "../resources/css/app.css";

// .storybook/preview.js
import { setup } from "@storybook/vue3";
import InstantSearch from "vue-instantsearch/vue3/es";


import { useGlobalLoader } from '../resources/js/composables/useGlobalLoader.js';
import { ref } from 'vue';

setup((app) => {
  app.use(InstantSearch);
});

const preview = {
  tags: ["autodocs"],
  parameters: {
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
      options: {
        runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice', 'wcag2aaa'],
      },
    },
  },
};


// create a dummy ref and grab reset()
const dummy = ref(false)
const { reset } = useGlobalLoader(dummy, {
  className: 'loader',
  hiddenClassName: 'hidden',
})

export const decorators = [
  (story, context) => {
    window.colby = window.colby || {};

    // 1. Check if the story has a specific parameter set.
    // 2. If not, default to the global value (true for Vitest, etc.)
    const storyOverride = context.parameters.disableAnimations;

    if (typeof storyOverride !== 'undefined') {
      window.colby.DISABLE_ANIMATIONS = storyOverride;
    } else {
      // Your global default logic
      window.colby.DISABLE_ANIMATIONS = true; 
    }

    return {
      components: { story },
      template: '<main id="main-content"><story /></main>',
    };
  },
];

export const parameters = {
  controls: { expanded: true },
}

export default preview;
