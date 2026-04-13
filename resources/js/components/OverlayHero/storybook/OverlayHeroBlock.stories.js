import { expect } from "storybook/test";
import OverlayHero from "../OverlayHero.vue";

export default {
  title: "Blocks/Overlay Hero",
  component: OverlayHero,
  tags: ["!autodocs"],
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
