import MediaContext from "../MediaContext.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Media Context",
  component: MediaContext,
  tags: ["!autodocs"],
  argTypes: {
    inset: {
      name: "Inset",
      control: "boolean",
      table: { category: "Wordpress Fields" },
    },
    size: {
      name: "Size",
      control: {
        type: "inline-radio",
        labels: {
          medium: "Medium",
          large: "Large",
        },
      },
      options: ["medium", "large"],
      table: { category: "Wordpress Fields" },
    },
    reverse: {
      name: "Reverse",
      control: "boolean",
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
    buttons: {
      name: "Buttons",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

const globalArgs = {
  inset: false,
  size: "medium",
  reverse: false,
  image: {
    src: "https://placeholdit.com/600x400/dddddd/999999",
    srcset:
      "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
    alt: "this is an alt tag",
    sizes: {
      Hero: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      mobile: "https://placehold.co/300x200",
    },
  },
  video: {
    id: "1234",
  },
  subheading: "Veritatis sit voluptatem",
  heading: "Lorem Ipsum",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  buttons: [
    {
      button: {
        title: "Learn More",
        url: "https://www.colby.edu/academics",
      },
    },
  ],
};

const assertHeadingAndParagraph = async ({ canvas }) => {
  await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
  await expect(canvas.getByText(globalArgs.paragraph)).toBeInTheDocument();
};

export const Primary = {
  name: "Media Context",
  args: {
    ...globalArgs,
  },
  play: assertHeadingAndParagraph,
};
