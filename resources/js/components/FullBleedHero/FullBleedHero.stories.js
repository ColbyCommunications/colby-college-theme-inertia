import { expect } from "storybook/test";
import FullBleedHero from "./FullBleedHero.vue";

export default {
  title: "Core Components/Full Bleed Hero",
  component: FullBleedHero,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["dark", "light"],
    },
  },
};

export const Dark = {
  name: "Dark",
  args: {
    type: "dark",
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum dolor sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    image: {
      src: "https://placehold.co/480x480",
      srcset: "https://placehold.co/1280x700",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/1280x700",
        Rectangle: "https://placehold.co/480x480",
      },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(
      canvas.getByText("Lorem ipsum dolor sit amet"),
    ).toBeInTheDocument();
    await expect(
      canvas.getByAltText("Placeholder image"),
    ).toBeInTheDocument();
  },
};

export const Light = {
  name: "Light",
  args: {
    ...Dark.args,
    type: "light",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Lorem ipsum dolor sit amet"),
    ).toBeInTheDocument();
  },
};

export const WithButtons = {
  name: "With Buttons",
  args: {
    ...Dark.args,
    buttons: [
      { url: "#apply", title: "Apply Now", target: "_blank" },
      { url: "#info", title: "Learn More", target: "" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Apply Now")).toBeInTheDocument();
    await expect(canvas.getByText("Learn More")).toBeInTheDocument();
  },
};

export const WithCaption = {
  name: "With Image Caption",
  args: {
    ...Dark.args,
    image: {
      ...Dark.args.image,
      caption: "Colby College campus in winter",
    },
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Colby College campus in winter"),
    ).toBeInTheDocument();
  },
};

export const NoImage = {
  name: "No Image",
  args: {
    type: "dark",
    heading: "Text Only",
    paragraph: "No image provided.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Text Only")).toBeInTheDocument();
  },
};
