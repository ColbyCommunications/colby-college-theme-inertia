import { expect } from "storybook/test";
import OverlayWideImage from "./OverlayWideImage.vue";

export default {
  title: "Core Components/Overlay Wide Image",
  component: OverlayWideImage,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    subheading: "Green Colby",
    heading: "Sustainability and Stewardship",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [
      {
        url: "#",
        title: "Go Green at Colby",
      },
    ],
    image: {
      srcset: "https://placehold.co/880x400",
      src: "https://placehold.co/400x400",
      alt: "Placeholder image",
      sizes: {
        Landscape: "https://placehold.co/880x400",
      },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Green Colby")).toBeInTheDocument();
    await expect(
      canvas.getByText("Sustainability and Stewardship"),
    ).toBeInTheDocument();
    await expect(canvas.getByText("Go Green at Colby")).toBeInTheDocument();
  },
};
