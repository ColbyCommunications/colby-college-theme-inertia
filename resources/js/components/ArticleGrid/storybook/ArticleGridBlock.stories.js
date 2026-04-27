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
  title: "Blocks/Article Grid",
  component: ArticleGrid,
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
    /* --------------------------------- FIELDS USED BY ALL METHODS --------------------------------- */
    size: {
      name: "Size",
      control: { type: "inline-radio" },
      options: ["small", "xsmall"],
      table: { category: "Wordpress Fields" },
    },
    columns: {
      name: "Columns",
      control: { type: "inline-radio" },
      options: [2, 3, 4],
      table: { category: "Wordpress Fields" },
    },
    image_orientation: {
      name: "Image Orientation",
      control: { type: "inline-radio" },
      options: ["rectangle", "square", "portrait"],
      table: { category: "Wordpress Fields" },
    },
    border: {
      name: "Border",
      control: { type: "boolean" },
      table: { category: "Wordpress Fields" },
    },
    /* --------------------------------- MANUAL ONLY (ACF) --------------------------------- */
    style: {
      name: "Style",
      control: { type: "inline-radio" },
      options: ["default", "accordion"],
      if: { arg: "display_posts_method", eq: "manual" },
      table: { category: "Wordpress Fields" },
    },
    items: {
      name: "Items",
      control: "object",
      if: { arg: "display_posts_method", eq: "manual" },
      table: { category: "Wordpress Fields" },
    },
    /* --------------------------------- API ONLY (ACF) --------------------------------- */
    api_source: {
      control: { type: "select" },
      name: "API Source",
      options: ["News - Media Coverage"],
      if: { arg: "display_posts_method", eq: "api" },
      table: { category: "Wordpress Fields" },
    },
    external_media_api: {
      name: "Media Coverage Type (Tag)",
      control: { type: "select" },
      options: [
        "All Media Coverage",
        "Highlights",
        "Office of the President Media Coverage",
      ],
      if: { arg: "display_posts_method", eq: "api" },
      table: { category: "Wordpress Fields" },
    },
    range: {
      name: "Number of Posts",
      control: { type: "range", min: 3, max: 25 },
      if: { arg: "display_posts_method", eq: "api" },
      table: { category: "Wordpress Fields" },
    },
    /* --------------------------------- INTERNAL ONLY (ACF) --------------------------------- */
    render_posts_category: {
      name: "Category",
      control: "text",
      if: { arg: "display_posts_method", eq: "internal" },
      table: { category: "Wordpress Fields" },
    },
    post_limit: {
      name: "Post Limit",
      control: { type: "number", min: -1 },
      if: { arg: "display_posts_method", eq: "internal" },
      table: { category: "Wordpress Fields" },
    },
    exclude_internal_posts: {
      name: "Exclude Posts",
      control: "object",
      if: { arg: "display_posts_method", eq: "internal" },
      table: { category: "Wordpress Fields" },
    },
    hydrated_from_server: {
      table: { disable: true },
    },
    initial_visible_count: { table: { disable: true } },
    initial_items: { table: { disable: true } },
    should_client_refresh: { table: { disable: true } },
    cta: { table: { disable: true } },
    render_api: { table: { disable: true } },
  },
};
const render = (args) => ({
  components: { ArticleGrid },
  setup() {
    return { args };
  },
  template: "<ArticleGrid v-bind='args' />",
});
export const Default = {
  name: "Article Grid",
  render,
  args: {
    display_posts_method: "internal",
    api_source: "News - Media Coverage",
    external_media_api: "All Media Coverage",
    range: 5,
    style: "default",
    items: mockItems,
    size: "small",
    columns: 2,
    image_orientation: "rectangle",
    border: false,
    render_posts_category: "",
    post_limit: -1,
    exclude_internal_posts: [],
  },
};
