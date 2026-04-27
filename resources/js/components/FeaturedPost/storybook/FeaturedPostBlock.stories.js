import { expect } from "storybook/test";
import FeaturedPost from "../FeaturedPost.vue";

export default {
  title: "Blocks/Featured Post",
  component: FeaturedPost,
  tags: ["!autodocs"],
  argTypes: {
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
    caption: {
      name: "Caption",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    buttons: {
      name: "Buttons",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    post: {
      name: "Post",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Default = {
  name: "Featured Post",
  args: {
    heading: "Events",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    caption: "Allen & Benner",
    buttons: [{ url: "#", title: "All Events" }],
    post: {
      date: "June 24, 2022",
      heading: "Lorem ipsum dolor sit amet, consectet.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
      buttons: [{ url: "#", title: "All Events" }],
      image: {
        srcset: "https://placehold.co/760x430",
        src: "https://placehold.co/410x290",
        alt: "Featured post image",
        sizes: {
          Rectangle: "https://placehold.co/760x430",
        },
      },
    },
  },
};
