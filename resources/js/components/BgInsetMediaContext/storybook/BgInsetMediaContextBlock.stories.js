import { type } from "superagent/lib/utils";
import BgInsetMediaContext from "../BgInsetMediaContext.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Background Inset Media Context",
  component: BgInsetMediaContext,

  argTypes: {
    type: {
      name: "Type",
      control: "inline-radio",
      options: ["Dark", "Light"],
      table: { category: "Wordpress Fields" },
    },
    inset: {
      name: "Inset",
      control: "check",
      options: ["Inset"],
      table: { category: "Wordpress Fields" },
    },
    size: {
      name: "Size",
      control: "inline-radio",
      options: ["Medium", "Large"],
      table: { category: "Wordpress Fields" },
    },
    reverse: {
      name: "Reverse",
      control: "check",
      options: ["Reverse"],
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
    image: {
      name: "Image",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    video: {
      name: "Video",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Primary = {
  name: "Background Inset Media Context",
  tags: ["!autodocs"],
  args: {
    type: "Dark",
    inset: "",
    size: "Medium",
    reverse: "",
    image: {
      url: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
    },
    video: {},
    subheading: "Veritatis sit voluptatem",
    heading: "Lorem Ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};
