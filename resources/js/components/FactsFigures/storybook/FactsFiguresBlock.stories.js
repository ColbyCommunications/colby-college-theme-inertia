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
    buttons: { table: { disable: true } },
    facts: { table: { disable: true } },
    image: { table: { disable: true } },
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
      { figure: "71%", paragraph: "consectetur adipiscing elit" },
      { figure: "10:1", paragraph: "consectetur adipiscing elit" },
      { figure: "500", paragraph: "consectetur adipiscing elit" },
    ],
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
      },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  },
};
