import ArticleGrid from "../ArticleGrid.vue";

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
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
    },
    heading: "Modern Trends in Technology",
    subheading: "Tech",
    paragraph: "Exploring the all the Tech.",
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
  // Define controls to toggle between grid types and styles
  parameters: {
    disableAnimations: false,
  },

  argTypes: {
    post_limit: {
      name: "Post Limit",
      control: { type: "number", min: -1 },
    },
    range: {
      name: "Number of Posts",
      control: { type: "range", min: 3, max: 25, step: 1 },
    },
    size: {
      name: "Size",
      control: { type: "inline-radio" },
      options: ["small", "xsmall"],
    },
    columns: {
      name: "Columns",
      control: { type: "inline-radio" },
      options: [2, 3, 4],
    },
    image_orientation: {
      name: "Image Orientation",
      control: { type: "select" },
      options: ["rectangle", "square", "portrait"],
    },
    border: {
      name: "Border",
      control: { type: "boolean" },
    },
  },
};

const render = (args) => ({
  components: { ArticleGrid },
  setup() {
    return { args };
  },
  template: '<ArticleGrid v-bind="args" />',
});

export const ManualGrid = {
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: false,
  },
  tags: ["!autodocs"],
};
