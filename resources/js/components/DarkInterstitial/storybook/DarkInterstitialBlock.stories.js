import DarkInterstitial from "../DarkInterstitial.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Dark Interstitial",
  component: DarkInterstitial,
  tags: ["!autodocs"],
  argTypes: {
    icon: {
      name: "Background",
      control: "boolean",
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
    facts: { table: { disable: true } },
    images: { table: { disable: true } },
  },
};

export const Primary = {
  name: "Dark Interstitial",
  args: {
    icon: true,
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const withImages = {
  name: "Dark Interstitial with Images",
  args: {
    icon: true,
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      {
        image: {
          url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
          alt: "this is an alt tag",
        }
      },
      {
        image: {
          url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
          alt: "this is an alt tag",
        }
      },
      {
        image: {
          url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
          alt: "this is an alt tag",
        }
      }
    ]
  },
};
