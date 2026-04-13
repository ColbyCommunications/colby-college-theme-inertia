import { expect } from "storybook/test";
import ImageText from "../ImageText.vue";

export default {
  title: "Blocks/Image with Text",
  component: ImageText,
  tags: ["!autodocs"],
  argTypes: {
    imageScale: {
      control: "select",
      options: ["100", "75", "50", "25"],
    },
    wrappingText: {
      control: "select",
      options: ["wrap", "no-wrap"],
    },
    alignImage: {
      control: "select",
      options: ["left", "right"],
    },
    alignText: {
      control: "select",
      options: ["left", "center"],
    },
  },
};

const sampleText =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla. Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue.</p>";

export const Default = {
  name: "Default",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Placeholder image",
    },
    imageScale: "50",
    alignImage: "left",
    wrappingText: "no-wrap",
    paragraphText: sampleText,
    mediaCaption: "Image caption here",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  },
};
