import EndpointFilter from "./EndpointFilter.vue";

export default {
  title: "Core Components/Endpoint Filter",
  component: EndpointFilter,
  argTypes: {
    // Visual Style
    type: {
      control: "radio",
      options: ["light", "dark"],
      description: "Controls text colors for light or dark backgrounds",
    },

    // Data Logic
    limit: {
      control: { type: "number", min: 1, max: 12 },
      description: "Limits the number of items displayed",
    },
    initialEndpoint: {
      control: "text",
      description: "The API URL to fetch on mount",
    },

    // Filters Configuration
    filters: {
      control: "object",
      description: "Array of filter objects or `false` to hide the menu",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { EndpointFilter },
  setup() {
    return { args };
  },
  template: '<EndpointFilter v-bind="args" />',
});

// --- Story 1: Default (Light Mode) ---
export const Default = Template.bind({});
Default.args = {
  type: "light",
  limit: 6,
  // Rely on default props for filters and endpoint
};

// --- Story 2: Dark Mode ---
// We wrap this in a dark container so the "dark" mode text (white/canary) is visible
export const DarkMode = (args) => ({
  components: { EndpointFilter },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-indigo-900 py-10"> 
      <EndpointFilter v-bind="args" />
    </div>
  `,
});
DarkMode.args = {
  type: "dark",
  limit: 6,
};

// --- Story 3: No Filter Menu ---
// Useful if you just want to show a specific feed without letting the user switch
export const NoFilters = Template.bind({});
NoFilters.args = {
  type: "light",
  limit: 3,
  filters: false, // Hides the navigation bar
  initialEndpoint: "https://events.colby.edu/live/json/events/group/Athletics", // Specific feed
};

// --- Story 4: Custom Filters ---
// Overriding the default filter list with a smaller subset
export const CustomFilterList = Template.bind({});
CustomFilterList.args = {
  type: "light",
  limit: 6,
  filters: [
    {
      title: "All Events",
      url: "https://events.colby.edu/live/json/events",
    },
    {
      title: "Just Athletics",
      url: "https://events.colby.edu/live/json/events/group/Athletics",
    },
  ],
  initialEndpoint: "https://events.colby.edu/live/json/events",
};
