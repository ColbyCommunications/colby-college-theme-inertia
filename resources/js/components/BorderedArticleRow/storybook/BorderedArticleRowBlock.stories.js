import BorderedArticleRow from "../BorderedArticleRow.vue";


// The default export metadata for your component
export default {
  title: "Blocks/Bordered Article Row",
  component: BorderedArticleRow,
  argTypes: {
    items: { table: { disable: true } },
  },
};

const mockItems = [
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt",
    },
    heading: "Future of Artificial Intelligence",
    subheading: "Technology",
    paragraph: "AI is reshaping industries at an unprecedented pace.",
    url: "#",
  },
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt",
    },
    heading: "Sustainable Energy Solutions",
    subheading: "Environment",
    paragraph: "Solar and wind energy are becoming more accessible than ever.",
    url: "#",
  },
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt",
    },
    heading: "Modern Architecture Trends",
    subheading: "Design",
    paragraph: "Exploring the intersection of function and aesthetics in 2024.",
    url: "#",
  },
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt",
    },
    heading: "Art and What It Does to the Soul",
    subheading: "Technology",
    paragraph: "AI is reshaping industries at an unprecedented pace.",
    url: "#",
  },
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt",
    },
    heading: "Sustainable Farming",
    subheading: "Environment",
    paragraph: "Solar and wind energy are becoming more accessible than ever.",
    url: "#",
  },
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt",
    },
    heading: "Paint Colors of 2026 and Beyond",
    subheading: "Design",
    paragraph: "Exploring the intersection of function and aesthetics in 2024.",
    url: "#",
  },
];

export const Primary = {
  name: "Bordered Article Row",
  tags: ["!autodocs"],
  args: {
    items: mockItems,
  },
};
