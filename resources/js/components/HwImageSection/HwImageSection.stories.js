import { expect } from "storybook/test";
import HwImageSection from "./HwImageSection.vue";

export default {
  title: "Core Components/Half Width Image Section",
  component: HwImageSection,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["dark", "light"],
    },
  },
};

export const Default = {
  name: "Default",
  args: {
    heading: "Majors and Minors",
    paragraph:
      "Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",
    buttons: [{ url: "#", title: "Majors and Minor at Colby" }],
    image: {
      srcset: "https://placehold.co/760x430",
      src: "https://placehold.co/480x480",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/760x430",
        Square: "https://placehold.co/480x480",
      },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(
      canvas.getByText("Majors and Minor at Colby"),
    ).toBeInTheDocument();
    await expect(
      canvas.getByAltText("Placeholder image"),
    ).toBeInTheDocument();
  },
};

export const Reverse = {
  name: "Reverse",
  args: {
    ...Default.args,
    reverse: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  },
};

export const Light = {
  name: "Light (Dark Background)",
  args: {
    ...Default.args,
    type: "light",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  },
};
