import { expect } from "storybook/test";
import ArticleGrid from "./ArticleGrid.vue";

const mockItems = [
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
    },
    heading: "Future of Artificial Intelligence",
    subheading: "Technology",
    paragraph: "AI is reshaping industries at an unprecedented pace.",
    url: "#",
    // Structure required for Accordion style images
    //
    sizes: {
      desktop: "https://placehold.co/600x400",
      mobile: "https://placehold.co/300x200",
    },
  },
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
    },
    heading: "Sustainable Energy Solutions",
    subheading: "Environment",
    paragraph: "Solar and wind energy are becoming more accessible than ever.",
    url: "#",
    sizes: {
      desktop: "https://placehold.co/600x400",
      mobile: "https://placehold.co/300x200",
    },
  },
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
    },
    heading: "Modern Architecture Trends",
    subheading: "Design",
    paragraph: "Exploring the intersection of function and aesthetics in 2024.",
    url: "#",
    sizes: {
      desktop: "https://placehold.co/600x400",
      mobile: "https://placehold.co/300x200",
    },
  },
];

export default {
  title: "Blocks/Article Grid",
  component: ArticleGrid,
  argTypes: {
    display_posts_method: {
      control: "select",
      options: ["manual", "internal", "api"],
    },
    style: {
      control: "select",
      options: ["", "accordion"],
    },
    columns: {
      control: "select",
      options: [2, 3, 4],
    },
    render_api: { control: "boolean" },
    border: { control: "boolean" },
    cta: { control: "text" },
    items: { control: "object" },
  },
};

const render = (args) => ({
  components: { ArticleGrid },
  setup() {
    return { args };
  },
  template: '<ArticleGrid v-bind="args" />',
});

// 1. Manual Grid Story
// Uses 'manual' method to bypass API calls and render passed items immediately
export const ManualGrid = {
  render,
  args: {
    display_posts_method: "manual",
    style: "",
    render_api: false,
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: 0,
  },
  play: async ({ canvas }) => {
    const heading1 = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading1).toBeVisible();

    const heading2 = await canvas.findByText("Sustainable Energy Solutions");
    await expect(heading2).toBeVisible();

    const heading3 = await canvas.findByText("Modern Architecture Trends");
    await expect(heading3).toBeVisible();
  },
};
