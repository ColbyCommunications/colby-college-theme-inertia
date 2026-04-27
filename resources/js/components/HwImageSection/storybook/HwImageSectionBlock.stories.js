import { expect } from "storybook/test";
import HwImageSection from "../HwImageSection.vue";

export default {
  title: "Blocks/Half Width Image Section",
  component: HwImageSection,
  tags: ["!autodocs"],
  argTypes: {
    reverse: {
      control: { type: "boolean" },
      name: "Reverse",
      table: { category: "Wordpress Fields" },
    },
    image: {
      control: "object",
      name: "Image",
      table: { category: "Wordpress Fields" },
    },
    subheading: {
      control: "text",
      name: "Subheading",
      table: { category: "Wordpress Fields" },
    },
    heading: {
      control: "text",
      name: "Heading",
      table: { category: "Wordpress Fields" },
    },
    paragraph: {
      control: "text",
      name: "Paragraph",
      table: { category: "Wordpress Fields" },
    },
    buttons: {
      control: "object",
      name: "Buttons",
      table: { category: "Wordpress Fields" },
    },
    type: { table: { disable: true } },
    size: { table: { disable: true } },
    hero: { table: { disable: true } },
    imageOrientation: { table: { disable: true } },
  },
};

export const Default = {
  name: "Half Width Image Section",
  args: {
    reverse: false,
    image: {
      srcset: "https://placehold.co/760x430",
      src: "https://placehold.co/480x480",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/760x430",
        Square: "https://placehold.co/480x480",
      },
    },
    subheading: "Academics",
    heading: "Majors and Minors",
    paragraph:
      "Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",
    buttons: [{ url: "#", title: "Majors and Minor at Colby" }],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(
      canvas.getByText("Majors and Minor at Colby"),
    ).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  },
};
