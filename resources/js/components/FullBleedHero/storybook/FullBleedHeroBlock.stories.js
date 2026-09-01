import { expect } from "storybook/test";
import FullBleedHero from "../FullBleedHero.vue";

export default {
  title: "Blocks/Full Bleed Hero",
  component: FullBleedHero,
  tags: ["!autodocs"],
  argTypes: {
    type: {
      name: "Type",
      control: {
        type: "inline-radio",
        labels: {
          dark: "Dark",
          light: "Light",
        },
      },
      options: ["dark", "light"],
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
    buttons: { table: { disable: true } },
    image: { table: { disable: true } },
    hero: { table: { disable: true } },
  },
};

export const Dark = {
  name: "Full Bleed Hero",
  args: {
    type: "dark",
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum dolor sit amet",
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
      url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
      srcset: "https://placehold.co/1280x700",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/1280x700",
        Rectangle: "https://placehold.co/480x480",
      },
    },
  },
};
