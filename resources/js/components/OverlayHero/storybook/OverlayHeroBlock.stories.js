import { expect } from "storybook/test";
import OverlayHero from "../OverlayHero.vue";

export default {
  title: "Blocks/Overlay Hero",
  component: OverlayHero,
  tags: ["!autodocs"],
  argTypes: {
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
    buttons: {
      name: "Buttons",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    videoLoop: {
      name: "Video Loop",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    image: {
      name: "Image",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    video: {
      name: "Video",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    fromPage: { table: { disable: true } },
    size: { table: { disable: true } },
  },
};

export const WithImage = {
  name: "Overlay Hero",
  args: {
    subheading: "Welcome to",
    heading: "Colby College",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttons: [{ button: { url: "#", title: "Learn More", target: "" } }],
    videoLoop: { video: "ExampleVideo.mp4" },
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Campus view",
      sizes: { Hero: "https://placehold.co/1280x720" },
    },
    video: null,
    fromPage: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Welcome to")).toBeInTheDocument();
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
    await expect(canvas.getByAltText("Campus view")).toBeInTheDocument();
  },
};
