import { expect, spyOn, waitFor, userEvent } from "storybook/test";
import axios from "axios";
import EndpointFilter from "../EndpointFilter.vue";
import { createMockEvents } from "../../__test-utils__/mock-data";

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
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockEvents(6),
    });
    return () => spy.mockRestore();
  },
};

const render = (args) => ({
  components: { EndpointFilter },
  setup() {
    return { args };
  },
  template: '<EndpointFilter v-bind="args" />',
});

// --- Story 1: Default (Light Mode) ---
export const Default = {
  render,
  args: {
    type: "light",
    limit: 6,
  },
  play: async ({ canvas }) => {
    // Assert the filter bar renders
    const filterHeading = await canvas.findByText("Event types:");
    await expect(filterHeading).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Assert mock event titles render
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();

    const event2 = await canvas.findByText("Faculty Lecture: Climate Change");
    await expect(event2).toBeVisible();

    // Assert "Learn More" buttons render for each event
    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(6);
  },
};

// --- Story 2: Dark Mode ---
export const DarkMode = {
  render: (args) => ({
    components: { EndpointFilter },
    setup() {
      return { args };
    },
    template: `
      <div class="bg-indigo-900 py-10">
        <EndpointFilter v-bind="args" />
      </div>
    `,
  }),
  args: {
    type: "dark",
    limit: 6,
  },
  play: async ({ canvas }) => {
    const filterHeading = await canvas.findByText("Event types:");
    await expect(filterHeading).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Assert mock events render in dark mode
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();

    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(6);
  },
};

// --- Story 3: No Filter Menu ---
export const NoFilters = {
  render,
  args: {
    type: "light",
    limit: 3,
    filters: false,
    initialEndpoint:
      "https://events.colby.edu/live/json/events/group/Athletics",
  },
  play: async ({ canvas, canvasElement }) => {
    // The filter bar is hidden (filters=false)
    const headings = canvas.queryAllByText("Event types:");
    await expect(headings.length).toBe(0);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://events.colby.edu/live/json/events/group/Athletics",
      );
    });

    // Verify mock events still render
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();

    // Assert limit=3 is respected
    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(3);
  },
};

// --- Story 4: Custom Filters ---
export const CustomFilterList = {
  render,
  args: {
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
  },
  play: async ({ canvas }) => {
    // Assert the custom filter buttons render
    const allEventsButton = await canvas.findByText("All Events");
    await expect(allEventsButton).toBeVisible();

    const athleticsButton = await canvas.findByText("Just Athletics");
    await expect(athleticsButton).toBeVisible();

    // Assert events rendered from initial load
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://events.colby.edu/live/json/events",
      );
    });

    // Click a filter button and verify axios is called with the new URL
    await userEvent.click(athleticsButton);
    await expect(axios.get).toHaveBeenCalledWith(
      "https://events.colby.edu/live/json/events/group/Athletics",
    );
  },
};

// --- Story 5: Limit Controls ---
export const WithLimit = {
  render,
  args: {
    type: "light",
    limit: 2,
    filters: false,
    initialEndpoint: "https://events.colby.edu/live/json/events",
  },
  play: async ({ canvas }) => {
    // Assert only 2 events render despite 6 being returned
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://events.colby.edu/live/json/events",
      );
    });

    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(2);
  },
};
