import RelatedContent from "./RelatedContent.vue";

export default {
  title: "Core Components/Related Content",
  component: RelatedContent,
  tags: ["autodocs"],
};

const sampleItems = [
  {
    heading: "Campus Life at Colby",
    subheading: "Student Life",
    paragraph: "Explore the vibrant campus life at Colby College.",
    url: "#",
    image: {
      sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
      alt: "Campus life",
    },
  },
  {
    heading: "Research Opportunities",
    subheading: "Academics",
    paragraph: "Discover research opportunities for undergraduates.",
    url: "#",
    image: {
      sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
      alt: "Research",
    },
  },
  {
    heading: "Athletic Programs",
    subheading: "Athletics",
    paragraph: "Join one of our many varsity and club sports teams.",
    url: "#",
    image: {
      sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
      alt: "Athletics",
    },
  },
  {
    heading: "Alumni Network",
    subheading: "Community",
    paragraph: "Stay connected with the Colby alumni community.",
    url: "#",
    image: {
      sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
      alt: "Alumni",
    },
  },
];

export const Default = {
  name: "Default",
  args: {
    heading: "Related Content",
    items: sampleItems,
  },
};
