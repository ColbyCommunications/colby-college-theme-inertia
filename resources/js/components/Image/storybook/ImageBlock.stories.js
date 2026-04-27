import { expect } from "storybook/test";
import Image from "../Image.vue";

export default {
  title: "Blocks/Image",
  component: Image,
  tags: ["!autodocs"],
  argTypes: {
    image: {
      control: "object",
      name: "Image",
      table: { category: "Wordpress Fields" },
    },
    alignCenter: {
      name: "Align Center",
      control: {
        type: "check",
        labels: {
          yes: "Align Image Center",
        },
      },
      options: ["yes"],
      table: { category: "Wordpress Fields" },
    },
    imageScale: {
      control: "select",
      name: "Image Scale",
      options: ["100", "75", "50", "25"],
      table: { category: "Wordpress Fields" },
    },
    imagePath: {
      name: "Image Path",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    caption: { table: { disable: true } },
  },
};

export const Default = {
  name: "Image",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    alignCenter: "",
    imageScale: "100",
    imagePath: "",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("An example image caption"),
    ).toBeInTheDocument();
  },
};
