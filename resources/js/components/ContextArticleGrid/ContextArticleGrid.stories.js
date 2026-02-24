import { expect } from "storybook/test";
import ContextArticleGrid from "./ContextArticleGrid.vue"; // Adjust path as needed

export default {
  title: "Core Components/Context Article Grid",
  component: ContextArticleGrid,
  // Define controls for the inputs
  argTypes: {
    // Content Strings
    heading: { control: "text" },
    subheading: { control: "text" },
    paragraph: { control: "text" },
    cta: { control: "text" },

    // Logic Switches
    renderApi: {
      control: "boolean",
      description:
        "If true, fetches data from WP API. If false, uses 'items' prop.",
    },
    api: {
      control: "select",
      options: ["", "Arts", "Alumni"],
      description: "Changes the WP API endpoint filter",
      if: { arg: "renderApi", eq: true }, // Only show if renderApi is true
    },
    perPage: { control: { type: "number", min: 1, max: 6 } },

    // Data Object
    items: { control: "object" },
  },
  parameters: {
    layout: "padded",
  },
};

const render = (args) => ({
  components: { ContextArticleGrid },
  setup() {
    return { args };
  },
  template: '<ContextArticleGrid v-bind="args" />',
});

// --- Mock Data for Manual Mode ---
const mockItems = [
  {
    image: {
      sizes: {
        desktop:
          "https://placehold.co/600x400/012169/ffffff?text=Desktop+Image+1",
        mobile:
          "https://placehold.co/300x300/012169/ffffff?text=Mobile+Image+1",
      },
      alt: "Abstract academic concept",
    },
    subheading: "Academics",
    heading: "Innovative Research in Biology",
    paragraph:
      "Students and faculty collaborate on groundbreaking research that reshapes our understanding of local ecosystems.",
    buttons: [{ button: { url: "#", title: "Read Article" } }],
  },
  {
    image: {
      sizes: {
        desktop:
          "https://placehold.co/600x400/366bcf/ffffff?text=Desktop+Image+2",
      },
      alt: "Art gallery display",
    },
    subheading: "The Arts",
    heading: "New Gallery Exhibition Opens",
    paragraph:
      "The museum presents a collection of modern works that challenge perspective and form.",
    buttons: [{ button: { url: "#", title: "View Gallery" } }],
  },
  {
    image: {
      sizes: {
        desktop: "https://placehold.co/600x400/gray/white?text=Desktop+Image+3",
      },
      alt: "Alumni event",
    },
    subheading: "Community",
    heading: "Alumni Weekend 2024",
    paragraph:
      "Join us for a weekend of celebration, networking, and reconnecting with old friends.",
    buttons: [], // Fallback to global CTA
  },
];

// --- Story 1: Manual Mode (Static Data) ---
export const ManualData = {
  render,
  args: {
    renderApi: false,
    subheading: "Latest Updates",
    heading: "News & Stories",
    paragraph: "Explore the latest happenings from around the campus and beyond.",
    cta: "Read Story",
    items: mockItems,
  },
  play: async ({ canvas }) => {
    // Assert the section heading renders
    const heading = await canvas.findByText("News & Stories");
    await expect(heading).toBeVisible();

    // Assert article content from mock data renders
    const articleHeading = await canvas.findByText("Innovative Research in Biology");
    await expect(articleHeading).toBeVisible();

    const articleHeading2 = await canvas.findByText("New Gallery Exhibition Opens");
    await expect(articleHeading2).toBeVisible();
  },
};

// --- Story 2: API Mode (Default / General) ---
// Note: This relies on the live API endpoint defined in your component.
// If CORS is blocked in your local environment, this might show an error.
export const ApiGeneral = {
  render,
  args: {
    renderApi: true,
    api: "", // Default endpoint
    perPage: 3,
    subheading: "From the Feed",
    heading: "Latest News (Live API)",
    paragraph: "These items are fetched directly from news.colby.edu.",
    cta: "Read Full Story",
  },
  play: async ({ canvas }) => {
    // API variant: just assert the heading renders (skip API interaction)
    const heading = await canvas.findByText("Latest News (Live API)");
    await expect(heading).toBeVisible();
  },
};

// --- Story 3: API Mode (Arts Filter) ---
export const ApiArts = {
  render,
  args: {
    renderApi: true,
    api: "Arts",
    perPage: 3,
    subheading: "From the Feed",
    heading: "Arts & Culture (Live API)",
    paragraph: "Fetching posts with the Arts category tag.",
    cta: "Read Full Story",
  },
  play: async ({ canvas }) => {
    // API variant: just assert the heading renders (skip API interaction)
    const heading = await canvas.findByText("Arts & Culture (Live API)");
    await expect(heading).toBeVisible();
  },
};

// --- Story 4: API Mode (Alumni Filter) ---
export const ApiAlumni = {
  render,
  args: {
    renderApi: true,
    api: "Alumni",
    perPage: 3,
    subheading: "From the Feed",
    heading: "Alumni News (Live API)",
    paragraph: "Fetching posts with the Alumni category tag.",
    cta: "Read Full Story",
  },
  play: async ({ canvas }) => {
    // API variant: just assert the heading renders (skip API interaction)
    const heading = await canvas.findByText("Alumni News (Live API)");
    await expect(heading).toBeVisible();
  },
};
