import BorderedArticleRow from "./BorderedArticleRow.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Bordered Article Row",
  component: BorderedArticleRow,
};

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

export const Primary = {
  name: "Default",
  args: {
    items: mockItems,
  },
};
