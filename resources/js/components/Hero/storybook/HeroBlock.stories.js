import Hero from "../Hero.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Hero",
  component: Hero,
  tags: ["!autodocs"],
  argTypes: {
    image_orientation: {
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
    buttons: { table: { disable: true } },
    image: { table: { disable: true } },
    caption: {
      name: "Caption",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    date: { table: { disable: true } },
    images: { table: { disable: true } },
    priority: { table: { disable: true } },
    columns: { table: { disable: true } },
  },
};

export const Primary = {
  name: "Hero",
  args: {
    image_orientation: "square",
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
      url: "https://news.colby.edu/wp-content/uploads/2026/08/New-Residence-Hall_primary.jpg",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      caption: "This is a caption for the image.",
      sizes: {
        Square: "https://news.colby.edu/wp-content/uploads/2026/08/New-Residence-Hall_primary.jpg",
        Rectangle: "https://news.colby.edu/wp-content/uploads/2026/08/New-Residence-Hall_primary.jpg",
        Portrait: "https://news.colby.edu/wp-content/uploads/2026/08/New-Residence-Hall_primary.jpg",
      },
    },
    
    columns: 3,
  },
};
