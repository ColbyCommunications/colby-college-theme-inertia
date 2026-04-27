import ArticleSection from "../ArticleSection.vue";
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
    sizes: {
      desktop: "https://placehold.co/600x400",
      mobile: "https://placehold.co/300x200",
    },
    buttons: [
      {
        button: {
          title: "Read Story",
          url: "https://www.colby.edu",
        },
      },
    ],
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
    buttons: [
      {
        button: {
          title: "Learn More",
          url: "https://www.colby.edu/academics",
        },
      },
    ],
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
    buttons: [
      {
        button: {
          title: "Read Story",
          url: "https://www.colby.edu/news",
        },
      },
    ],
  },
];
export default {
  title: "Blocks/Article Section",
  component: ArticleSection,
  tags: ["!autodocs"],
  argTypes: {
    display_posts_method: {
      name: "Display Posts Method",
      control: {
        type: "select",
        labels: {
          internal: "Internal Posts",
          api: "External API",
          manual: "Add Posts Manually",
        },
      },
      options: ["internal", "api", "manual"],
      table: { category: "Wordpress Fields" },
    },
    carousel: {
      name: "Carousel",
      control: "boolean",
      if: { arg: "display_posts_method", neq: "api" },
      table: { category: "Wordpress Fields" },
    },
    subheading: {
      name: "Subheading",
      control: "text",
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
    /* ---------------- API MODE ---------------- */
    render_api: {
      name: "Render API",
      control: "boolean",
      if: { arg: "display_posts_method", eq: "api" },
      table: { category: "Wordpress Fields" },
    },
    api: {
      name: "API",
      control: { type: "select" },
      options: ["Academic News", "Faculty Accomplishments"],
      if: { arg: "display_posts_method", eq: "api" },
      table: { category: "Wordpress Fields" },
    },

    /* ---------------- MANUAL MODE ---------------- */
    items: {
      name: "Items",
      control: "object",
      if: { arg: "display_posts_method", eq: "manual" },
      table: { category: "Wordpress Fields" },
    },

    /* ---------------- INTERNAL MODE ---------------- */
    render_posts: {
      name: "Render Posts",
      control: "boolean",
      if: { arg: "display_posts_method", eq: "internal" },
      table: { category: "Wordpress Fields" },
    },
    render_posts_category: {
      name: "Render Posts Category",
      control: "array",
      if: { arg: "display_posts_method", eq: "internal" },
      table: { category: "Wordpress Fields" },
    },
    gridProps: { items: mockItems },

    /* ---------------- SYSTEM ---------------- */
    hydrated_from_server: { table: { disable: true } },
    initial_visible_count: { table: { disable: true } },
    initial_items: { table: { disable: true } },
    should_client_refresh: { table: { disable: true } },
    cta: { table: { disable: true } },
    perView: { table: { disable: true } },
    gap: { table: { disable: true } },
    buttons: { table: { disable: true } },
    type: { table: { disable: true } },
    gridProps: { table: { disable: true } },
  },
};

const render = (args) => ({
  components: { ArticleSection },
  setup() {
    return { args };
  },
  template: "<ArticleSection v-bind='args' />",
});

export const Default = {
  name: "Article Section",
  render,
  args: {
    display_posts_method: "internal",
    carousel: true,
    render_api: true,
    api: "Academic News",
    subheading: "Article Section subheading",
    heading: "Article Section Title",
    paragraph: "Discover recent updates from Colby College.",
    render_posts: true,
    items: mockItems,
    render_posts_category: [],
  },
};
