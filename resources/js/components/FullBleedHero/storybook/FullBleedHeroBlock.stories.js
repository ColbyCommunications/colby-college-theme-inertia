import { expect } from "storybook/test";
import FullBleedHero from "../FullBleedHero.vue";

export default {
  title: "Blocks/Full Bleed Hero",
  component: FullBleedHero,
  tags: ["!autodocs"],
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
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  },
};
