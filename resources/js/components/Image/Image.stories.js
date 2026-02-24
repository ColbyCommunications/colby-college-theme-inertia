import { expect } from "storybook/test";
import Image from "./Image.vue";

export default {
  title: "Core Components/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    imageScale: {
      control: "select",
      options: ["100", "75", "50", "25"],
    },
  },
};

export const Default = {
  name: "Default",
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

export const Scaled75 = {
  name: "75% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    imageScale: "75",
    caption: "Image at 75% scale",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Image at 75% scale")).toBeInTheDocument();
  },
};

export const Scaled50 = {
  name: "50% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    imageScale: "50",
    caption: "Image at 50% scale",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Image at 50% scale")).toBeInTheDocument();
  },
};

export const Centered = {
  name: "Centered",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    imageScale: "50",
    alignCenter: true,
    caption: "Centered image at 50% scale",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Centered image at 50% scale"),
    ).toBeInTheDocument();
  },
};

export const WithPath = {
  name: "With Image Path",
  args: {
    imagePath: "https://placehold.co/800x500",
    caption: "Image loaded via path",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Image loaded via path"),
    ).toBeInTheDocument();
  },
};

export const Scaled25 = {
  name: "25% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    imageScale: "25",
    caption: "Image at 25% scale",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Image at 25% scale")).toBeInTheDocument();
  },
};

export const NoCaption = {
  name: "No Caption",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "No caption image",
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("No caption image")).toBeInTheDocument();
  },
};
