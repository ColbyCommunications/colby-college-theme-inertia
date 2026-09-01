import { expect, spyOn, waitFor } from "storybook/test";
import axios from "axios";
import FeaturedEvents from "../FeaturedEvents.vue";
import { createMockEvents } from "../../__test-utils__/mock-data";

// --- Mock Data for Carousel ---
const mockItems = [
  {
    heading: "Keynote Speaker: Dr. Jane Goodall",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "October 15, 2024",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
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
    heading: "Colby Symphony Orchestra",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "November 3, 2024",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
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
    heading: "Museum Exhibition Opening",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "December 10, 2024",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
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
  title: "Blocks/Featured Events",
  component: FeaturedEvents,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    display_posts_method: {
      name: "Display Posts Method",
      control: {
        type: "select",
        labels: {
          api: "External API",
          manual: "Add Posts Manually",
        },
      },
      options: ["api", "manual"],
      table: { category: "Wordpress Fields" },
    },
    render_api: {
      name: "Render API",
      control: { type: "boolean" },
      if: { arg: "display_posts_method", eq: "api" },
      table: { category: "Wordpress Fields" },
    },
    api: {
      name: "API",
      control: "inline-radio",
      options: ["Latest News"],
      if: { arg: "display_posts_method", eq: "api" },
      table: { category: "Wordpress Fields" },
    },
    heading: {
      name: "Heading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    paragraph: {
      name: "Paragraph",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    items: {
      name: "Items",
      control: "object",
      if: { arg: "display_posts_method", eq: "manual" },
      table: { category: "Wordpress Fields" },
    },
  },

};

const render = (args) => ({
  components: { FeaturedEvents },
  setup() {
    return { args };
  },
  template: "<FeaturedEvents v-bind='args' />",
});

export const Default = {
  name: "Featured Events",
  render,
  args: {
    display_posts_method: "manual",
    render_api: false,
    api: "Latest News",
    heading: "Featured Events",
    paragraph:
      "Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",
    items: mockItems,
  },
};
