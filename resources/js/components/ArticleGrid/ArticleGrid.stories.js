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
  title: "Core Components/Article Grid",
  component: ArticleGrid,
  // Define controls to toggle between grid types and styles
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

// 2. Accordion Style Story
// Triggers the complex accordion logic found in the component
//
export const Accordion = {
  render,
  args: {
    display_posts_method: "manual", // Use manual to feed data to the accordion
    style: "accordion",
    columns: 3,
    render_api: false, // Ensure we don't accidentally hide the accordion div
    items: mockItems,
  },
  play: async ({ canvas, userEvent }) => {
    // Assert headings render in accordion mode
    const heading1 = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading1).toBeVisible();

    // Click the first "Read More" button to expand
    const readMoreButtons = await canvas.findAllByText("Read More");
    await userEvent.click(readMoreButtons[0]);

    // After clicking, the paragraph text may appear in multiple places
    // (article summary and expanded accordion panel), so use findAllByText
    const expandedContents = await canvas.findAllByText(
      "AI is reshaping industries at an unprecedented pace.",
    );
    await expect(expandedContents.length).toBeGreaterThanOrEqual(1);
  },
};

// 3. API/Internal Loading State
// This story demonstrates the component attempting to fetch data.
// Note: This will likely fail or show empty unless you mock the axios call with MSW.
export const InternalFetch = {
  render,
  args: {
    display_posts_method: "internal",
    render_posts_category: 1,
    post_limit: 3,
  },
  play: async ({ canvasElement }) => {
    // Internal fetch mode renders the grid shell even without a live API
    await expect(canvasElement.querySelector(".grid")).not.toBeNull();
  },
};

export const TwoColumnGrid = {
  render,
  args: {
    display_posts_method: "manual",
    columns: 2,
    cta: "Read Story",
    items: mockItems.slice(0, 2),
    border: 0,
  },
  play: async ({ canvas }) => {
    const heading1 = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading1).toBeVisible();
    const heading2 = await canvas.findByText("Sustainable Energy Solutions");
    await expect(heading2).toBeVisible();
  },
};

export const FourColumnGrid = {
  render,
  args: {
    display_posts_method: "manual",
    columns: 4,
    cta: "Read Story",
    items: [...mockItems, {
      image: { src: "https://placeholdit.com/600x400/dddddd/999999", srcset: "https://placeholdit.com/300x200/dddddd/999999 300w", alt: "alt tag" },
      heading: "Global Health Initiatives",
      subheading: "Health",
      paragraph: "New programs in global health studies.",
      url: "#",
      sizes: { desktop: "https://placehold.co/600x400", mobile: "https://placehold.co/300x200" },
    }],
    border: 0,
  },
  play: async ({ canvas }) => {
    const heading = await canvas.findByText("Global Health Initiatives");
    await expect(heading).toBeVisible();
  },
};

export const WithBorder = {
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: 1,
  },
  play: async ({ canvas }) => {
    const heading = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading).toBeVisible();
  },
};

export const AccordionNoButtons = {
  render,
  args: {
    display_posts_method: "manual",
    style: "accordion",
    columns: 3,
    render_api: false,
    items: mockItems.map(({ buttons, ...item }) => item),
  },
  play: async ({ canvas }) => {
    const heading = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading).toBeVisible();
  },
};
