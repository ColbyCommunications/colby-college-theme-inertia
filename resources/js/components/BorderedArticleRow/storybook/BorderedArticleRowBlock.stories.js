import BorderedArticleRow from "../BorderedArticleRow.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Bordered Article Row",
  component: BorderedArticleRow,
  argTypes: {
    items: {
      name: "Items",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

const mockItems = [
  {
    image: {
      url: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt",
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
      url: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt",
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
      url: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt",
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

export const Primary = {
  name: "Bordered Article Row",
  tags: ["!autodocs"],
  args: {
    items: mockItems,
  },
};
