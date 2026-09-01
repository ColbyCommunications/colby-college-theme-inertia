import { expect } from "storybook/test";
import FullBleedImage from "../FullBleedImage.vue";

export default {
  title: "Blocks/Full Bleed Image",
  component: FullBleedImage,
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
    buttons: { table: { disable: true } },
    image: { table: { disable: true } },
  },
};

export const Default = {
  name: "Full Bleed Image",
  args: {
    heading: "Areas of Distinction",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [
      {
        button: {
          url: "#",
          title: "Areas of Distinction",
        }
      },
    ],
    image: {
      url: "https://news.colby.edu/wp-content/uploads/2026/08/New-Residence-Hall_primary.jpg",
      alt: "Placeholder image",
    },
  },
};
