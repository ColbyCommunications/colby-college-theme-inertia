import FactsFigures from "../FactsFigures.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Facts and Figures",
  component: FactsFigures,
  tags: ["!autodocs"],
  argTypes: {
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
    buttons: {
      name: "Buttons",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    facts: {
      name: "Facts",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    image: {
      name: "Image",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    paragraph: {
      name: "Paragraph",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Primary = {
  name: "Facts and Figures",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttons: [
      {
        button: {
          title: "Learn More",
          url: "#",
        },
      },
    ],
    facts: [
      { figure: "100%", paragraph: "consectetur adipiscing elit" },
      { figure: "100%", paragraph: "consectetur adipiscing elit" },
    ],
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/600x400",
        Square_mobile: "https://placehold.co/400x300",
      },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  },
};
