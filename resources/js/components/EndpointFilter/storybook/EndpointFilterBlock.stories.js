import { expect, spyOn, waitFor, userEvent } from "storybook/test";
import axios from "axios";
import EndpointFilter from "../EndpointFilter.vue";
import { createMockEvents } from "../../__test-utils__/mock-data";

export default {
  title: "Blocks/Endpoint Filter",
  component: EndpointFilter,
  tags: ["!autodocs"],
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
  name: "Endpoint Filter",
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
