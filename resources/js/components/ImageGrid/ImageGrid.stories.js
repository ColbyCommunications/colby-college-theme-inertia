import { expect } from "storybook/test";
import ImageGrid from "./ImageGrid.vue";

export default {
  title: "Core Components/Image Grid",
  component: ImageGrid,
  tags: ["autodocs"],
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

export const Landscape = {
  name: "Landscape",
  args: {
    images: [sampleImages[0]],
    imageOrientation: "landscape",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
  },
};

export const NoCaptions = {
  name: "No Captions",
  args: {
    images: sampleImages.map(({ caption, ...img }) => img),
    imageOrientation: "square",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder 2")).toBeInTheDocument();
  },
};

export const Rectangle = {
  name: "Rectangle",
  args: {
    images: sampleImages,
    imageOrientation: "rectangle",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
  },
};

export const Portrait = {
  name: "Portrait",
  args: {
    images: sampleImages,
    imageOrientation: "portrait",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
  },
};
