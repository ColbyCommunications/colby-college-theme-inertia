import { expect } from "storybook/test";
import Image from "../Image.vue";

export default {
  title: "Blocks/Image",
  component: Image,
  tags: ["!autodocs"],
  argTypes: {
    imageScale: {
      control: "select",
      options: ["100", "75", "50", "25"],
    },
  },
};

export const Default = {
  name: "Image",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    caption: "An example image caption",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("An example image caption"),
    ).toBeInTheDocument();
  },
};
