import { image } from "superagent/lib/node/parsers";
import Hero from "../Hero.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Hero",
  component: Hero,
  tags: ["!autodocs"],
  argTypes: {
    imageOrientation: {
      name: "Image Orientation",
      control: {
        type: "radio",
        labels: {
          square: "Square",
          portrait: "Portrait",
        },
      },
      options: ["square", "portrait"],
      table: { category: "Wordpress Fields" },
    },
    align: {
      name: "Align",
      control: {
        type: "radio",
        labels: {
          default: "Default",
          center: "Center",
        },
      },
      options: ["default", "center"],
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
    image: {
      name: "Image",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    caption: {
      name: "Caption",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    columns: {
      name: "Columns",
      control: "inline-radio",
      options: [2, 3],
      table: { category: "Wordpress Fields" },
    },
    date: { table: { disable: true } },
    images: { table: { disable: true } },
  },
};

export const Primary = {
  name: "Hero",
  args: {
    imageOrientation: "square",
    align: "default",
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttons: [
      {
        button: {
          title: "Learn More",
          url: "https://www.colby.edu",
        },
      },
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
    caption: "This is a caption for the image.",
    columns: 3,
  },
  play: async ({ canvas }) => {
    // Both subheading (h1) and heading (h2) are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(
      canvas.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ),
    ).toBeInTheDocument();
  },
};
