import { expect } from "storybook/test";
import ImageGrid from "../ImageGrid.vue";

export default {
  title: "Blocks/Image Grid",
  component: ImageGrid,
  tags: ["!autodocs"],
  argTypes: {
    imageOrientation: {
      control: "select",
      options: ["square", "rectangle", "portrait", "landscape"],
    },
  },
};

const sampleImages = [
  {
    srcset: "https://placehold.co/600x600",
    src: "https://placehold.co/600x600",
    alt: "Placeholder 1",
    caption: "Caption lorem ipsum dolor sit amet.",
  },
  {
    srcset: "https://placehold.co/600x600",
    src: "https://placehold.co/600x600",
    alt: "Placeholder 2",
    caption: "Caption lorem ipsum dolor sit amet.",
  },
];

export const Square = {
  name: "Square",
  args: {
    images: sampleImages,
    imageOrientation: "square",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder 2")).toBeInTheDocument();
  },
};
