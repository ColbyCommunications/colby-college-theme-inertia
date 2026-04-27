import { expect } from "storybook/test";
import MediaAside from "../MediaAside.vue";

export default {
  title: "Blocks/Media Aside",
  component: MediaAside,
  tags: ["!autodocs"],
  argTypes: {
    carousel: {
      name: "Carousel",
      control: "boolean",
      table: { category: "Wordpress Fields" },
    },
    image: {
      name: "Image",
      control: "object",
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
    items: { table: { disable: true } },
  },
};

export const Static = {
  name: "Media Aside",
  args: {
    carousel: false,
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "Placeholder image",
      caption:
        "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    heading: "Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
    buttons: [{ url: "#", title: "Read Story" }],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
    await expect(canvas.getByText("Read Story")).toBeInTheDocument();
  },
};
