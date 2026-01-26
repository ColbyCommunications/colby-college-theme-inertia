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

const Template = (args) => ({
  components: { ArticleGrid },
  setup() {
    return { args };
  },
  template: '<ArticleGrid v-bind="args" />',
});

// 1. Manual Grid Story
// Uses 'manual' method to bypass API calls and render passed items immediately
export const ManualGrid = Template.bind({});
ManualGrid.args = {
  display_posts_method: "manual",
  columns: 3,
  cta: "Read Story",
  items: mockItems,
  border: 0,
};

// 2. Accordion Style Story
// Triggers the complex accordion logic found in the component
//
export const Accordion = Template.bind({});
Accordion.args = {
  display_posts_method: "manual", // Use manual to feed data to the accordion
  style: "accordion",
  columns: 3,
  render_api: false, // Ensure we don't accidentally hide the accordion div
  items: mockItems,
};

// 3. API/Internal Loading State
// This story demonstrates the component attempting to fetch data.
// Note: This will likely fail or show empty unless you mock the axios call with MSW.
export const InternalFetch = Template.bind({});
InternalFetch.args = {
  display_posts_method: "internal",
  render_posts_category: 1,
  post_limit: 3,
};
