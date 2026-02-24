import { expect } from "storybook/test";
import OverlayHero from "./OverlayHero.vue";

export default {
  title: "Core Components/Overlay Hero",
  component: OverlayHero,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["large", "medium"] },
  },
};

export const WithImage = {
  name: "With Image",
  args: {
    subheading: "Welcome to",
    heading: "Colby College",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttons: [{ button: { url: "#", title: "Learn More", target: "" } }],
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Campus view",
      sizes: { Hero: "https://placehold.co/1280x720" },
    },
    fromPage: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Welcome to")).toBeInTheDocument();
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
    await expect(canvas.getByAltText("Campus view")).toBeInTheDocument();
  },
};

export const Medium = {
  name: "Medium Size",
  args: {
    ...WithImage.args,
    size: "medium",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  },
};

export const WithVideo = {
  name: "With YouTube Video",
  args: {
    subheading: "Watch our",
    heading: "Campus Tour",
    paragraph: "Explore Colby College campus.",
    buttons: [{ button: { url: "#", title: "Explore" } }],
    video: { id: "dQw4w9WgXcQ" },
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Campus view",
      sizes: { Hero: "https://placehold.co/1280x720" },
    },
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("Watch")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Tour")).toBeInTheDocument();
    const watchBtn = canvas.getByText("Watch").closest("button");
    await userEvent.click(watchBtn);
  },
};

export const WithVideoLoop = {
  name: "With Video Loop",
  args: {
    subheading: "Experience",
    heading: "Colby in Motion",
    paragraph: "A looping background video.",
    buttons: [],
    videoLoop: "https://example.com/campus-loop.mp4",
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Fallback image",
      sizes: { Hero: "https://placehold.co/1280x720" },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Colby in Motion")).toBeInTheDocument();
  },
};

export const NoMedia = {
  name: "No Image or Video",
  args: {
    heading: "Text Only Hero",
    paragraph: "No media provided.",
    fromPage: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Text Only Hero")).toBeInTheDocument();
  },
};
