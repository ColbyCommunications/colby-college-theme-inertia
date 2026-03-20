import { expect, spyOn, waitFor } from "storybook/test";
import axios from "axios";
import FeaturedEvents from "./FeaturedEvents.vue";
import { createMockEvents } from "../__test-utils__/mock-data";

// --- Mock Data for Carousel ---
const mockItems = [
  {
    title: "Keynote Speaker: Dr. Jane Goodall",
    date: "October 15, 2024",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
      alt: "this is an alt tag",
    },
    url: "#",
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  {
    title: "Colby Symphony Orchestra",
    date: "November 3, 2024",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
      alt: "this is an alt tag",
    },
    url: "#",
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  {
    title: "Museum Exhibition Opening",
    date: "December 10, 2024",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
      alt: "this is an alt tag",
    },
    url: "#",
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
];

export default {
  title: "Core Components/Featured Events",
  component: FeaturedEvents,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    heading: { control: "text" },
    paragraph: { control: "text" },
    items: { control: "object" },
  },
  // Mock the EndpointFilter's axios call (fires on mount)
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockEvents(3),
    });
    return () => spy.mockRestore();
  },
};

const render = (args) => ({
  components: { FeaturedEvents },
  setup() {
    return { args };
  },
  template: '<FeaturedEvents v-bind="args" />',
});

export const Default = {
  render,
  args: {
    heading: "Featured Events",
    paragraph:
      "Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",
    items: mockItems,
  },
  play: async ({ canvas }) => {
    // Assert carousel heading renders
    const heading = await canvas.findByText("Featured Events");
    await expect(heading).toBeInTheDocument();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Assert mock events from EndpointFilter render
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();

    const event2 = await canvas.findByText("Faculty Lecture: Climate Change");
    await expect(event2).toBeVisible();

    // Assert "Learn More" buttons from EndpointFilter render
    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(3);
  },
};

export const WithoutCarouselItems = {
  render,
  args: {
    heading: "Upcoming Schedule",
    paragraph: "Check below for the full list of events from our live calendar.",
    items: [],
  },
  play: async ({ canvas }) => {
    const heading = await canvas.findByText("Upcoming Schedule");
    await expect(heading).toBeInTheDocument();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Events from EndpointFilter should still render even with empty carousel
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
  },
};

export const Minimal = {
  render,
  args: {
    heading: "Events",
    items: [mockItems[0]],
  },
  play: async ({ canvas }) => {
    const heading = await canvas.findByText("Events");
    await expect(heading).toBeInTheDocument();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Assert events from EndpointFilter render
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
  },
};
