import { expect } from "storybook/test";
import ImageGrid from "../ImageGrid.vue";

export default {
  title: "Blocks/Image Grid",
  component: ImageGrid,
  tags: ["!autodocs"],
  argTypes: {
    imageOrientation: {
      name: "Image Orientation",
      control: {
        type: "radio",
        labels: {
          square: "Square",
          rectangle: "Rectangle",
          portrait: "Portrait",
          landscape: "Landscape",
        },
      },
      options: ["square", "rectangle", "portrait", "landscape"],
      table: { category: "Wordpress Fields" },
    },
    images: {
      name: "Images",
      control: "object",
      table: { category: "Wordpress Fields" },
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
  name: "Image Grid",
  args: {
    imageOrientation: "square",
    images: sampleImages,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder 2")).toBeInTheDocument();
  },
};
