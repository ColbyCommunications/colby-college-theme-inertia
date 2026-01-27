import Search from "./Search.vue";

// ⚠️ MOCKING: If you don't have the Button component in your standalone test env,
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

const Template = (args) => ({
  components: { Search },
  setup() {
    return { args };
  },
  template: '<Search v-bind="args" />',
});

// 1. Default State
// Displays the "What are you looking for?" prompt
export const Default = Template.bind({});
Default.args = {};
