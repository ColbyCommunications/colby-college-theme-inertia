import HomeHero from "../HomeHero.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Home Hero",
  component: HomeHero,
  tags: ["!autodocs"],
  argTypes: {
    heading: {
      name: "Heading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    caption: {
      name: "Caption",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    video: {
      name: "Video",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    image: {
      name: "Image",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    buttons: {
      name: "Buttons",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    subheading: { table: { disable: true } },
    paragraph: { table: { disable: true } },
    poster: { table: { disable: true } },
  },
};

export const Primary = {
  name: "Home Hero",
  args: {
    heading: "Lorem ipsum",
    caption: "waterville maine",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square:
          "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile:
          "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  },
};
