import BgInsetMediaContext from "../BgInsetMediaContext.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Background Inset Media Context",
  component: BgInsetMediaContext,
};


export const Primary = {
  // 👇 Rename this story
  name: "Default",
  tags: ["!autodocs"],
  args: {
    heading: "Lorem Ipsum",
    subheading: "Veritatis sit voluptatem",
    image: {
      url: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
    },
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};
