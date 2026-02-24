import { expect } from "storybook/test";
import FullBleedImage from "./FullBleedImage.vue";

export default {
  title: "Core Components/Full Bleed Image",
  component: FullBleedImage,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    heading: "Areas of Distinction",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [
      {
        url: "#",
        title: "Areas of Distinction",
      },
    ],
    image: {
      srcset: "https://placehold.co/1280x700",
      src: "https://placehold.co/480x480",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/1280x700",
        Square: "https://placehold.co/480x480",
      },
    },
  },
  play: async ({ canvas }) => {
    // "Areas of Distinction" appears in both the heading and button, so use getAllByText
    const elements = canvas.getAllByText("Areas of Distinction");
    await expect(elements.length).toBeGreaterThanOrEqual(1);
    await expect(
      canvas.getByAltText("Placeholder image"),
    ).toBeInTheDocument();
  },
};
