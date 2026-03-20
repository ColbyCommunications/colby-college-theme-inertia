import HomeHero from "./HomeHero.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/Home Hero",
  component: HomeHero,
};

export const Primary = {
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    caption: "waterville maine",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      alt: "this is an alt tag",
    },
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  },
};

export const Video = {
  name: "With Video",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    caption: "waterville maine",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
      alt: "this is an alt tag",
    },
    video: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled.mp4",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  },
};

export const WithoutCaption = {
  name: "Without Caption",
  args: {
    subheading: "Welcome to",
    heading: "Colby College",
    caption: "",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
      alt: "campus view",
    },
    paragraph: "A top liberal arts college in Waterville, Maine.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  },
};

