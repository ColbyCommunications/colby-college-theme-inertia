import { expect } from "storybook/test";
import Search from "./Search.vue";

// If you don't have the Button component in your standalone test env,
// you might need to register a global stub in preview.js, or ensure the file exists.
// For now, we assume standard imports work.

export default {
  title: "Core Components/Search",
  component: Search,
  parameters: {
    // Optional: Adjust background to see the modal clearly if it's white-on-white
    backgrounds: {
      default: "light",
    },
  },
};

const render = (args) => ({
  components: { Search },
  setup() {
    return { args };
  },
  template: '<Search v-bind="args" />',
});

// 1. Default State
// Displays the "What are you looking for?" prompt
export const Default = {
  args: {},
  render,
  play: async ({ canvas }) => {
    // Assert the prompt text is visible (skip Algolia interaction)
    await expect(
      canvas.getByText("What are you looking for?"),
    ).toBeVisible();
  },
};
