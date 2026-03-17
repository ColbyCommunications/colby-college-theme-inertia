
import ContextArticleGrid from "./ContextArticleGrid.vue";

export default {
  title: "Blocks/Context Article Grid",
  component: ContextArticleGrid,
  argTypes: {
    heading: { control: "text", name: 'Heading', table: { category: "Wordpress Fields" } },
    subheading: { control: "text", name: 'Subheading', table: { category: "Wordpress Fields" } },
    paragraph: { control: "text", name: 'Paragraph', table: { category: "Wordpress Fields" } },


    // disabled controls
    renderApi: { table: { disable: true } },
    items: { table: { disable: true } },
    api: { table: { disable: true } },
    cta: { table: { disable: true } },
    perPage: { table: { disable: true } },
  },
  parameters: {
    layout: "padded",
  },
  tags: ['!autodocs'],
};

const render = (args) => ({
  components: { ContextArticleGrid },
  setup() {
    window.colby = window.colby || {};
    window.colby.DISABLE_ANIMATIONS = true;
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
    buttons: [],
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
};