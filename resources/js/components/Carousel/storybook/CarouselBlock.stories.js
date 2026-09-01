import Carousel from "../Carousel.vue";

const sharedButtons = [{ url: "https://www.colby.edu", title: "All News" }];

const mockItems = [
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
    },
    heading: "Future of Artificial Intelligence",
    subheading: "Technology",
    paragraph: "AI is reshaping industries at an unprecedented pace.",
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
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
    },
    heading: "Sustainable Energy Solutions",
    subheading: "Environment",
    paragraph: "Solar and wind energy are becoming more accessible than ever.",
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
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
    },
    heading: "Modern Architecture Trends",
    subheading: "Design",
    paragraph: "Exploring the intersection of function and aesthetics in 2024.",
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
  title: "Blocks/Carousel",
  component: Carousel,
  tags: ["!autodocs"],
  
  render: (args) => ({
    components: { Carousel },
    setup() {
      return { args };
    },
    template: '<Carousel :key="JSON.stringify(args)" v-bind="args" />',
  }),

  argTypes: {
    render_api: { table: { disable: true } },
    type:  { table: { disable: true } },
    size: {
      name: "Size",
      control: "inline-radio",
      options: ["small", "medium", "large"],
      table: { category: "Wordpress Fields" },
    },
    heading: {
      name: "Heading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    subheading: {
      name: "Subheading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    paragraph: {
      name: "Paragraph",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    items: { table: { disable: true } },
    buttons: { table: { disable: true } },
    api: { table: { disable: true } },
    cta: { table: { disable: true } },
    gap: { table: { disable: true } },
    FAbuttons: { table: { disable: true } },
    perView: { table: { disable: true } },
    autoplay: { table: { disable: true } },
    interval: { table: { disable: true } },
    initial_items: { table: { disable: true } },
    hydrated_from_server: { table: { disable: true } },
    should_client_refresh: { table: { disable: true } },
  },
};

export const Primary = {
  name: "Carousel",
  args: {
    render_api: false,
    items: mockItems,
    buttons: sharedButtons,
    type: 'dark',
    subheading: "Veritatis sit voluptatem",
    heading: "Lorem Ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
};