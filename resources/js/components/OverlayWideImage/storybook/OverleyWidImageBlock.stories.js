import { expect } from "storybook/test";
import OverlayWideImage from "../OverlayWideImage.vue";

export default {
  title: "Blocks/Overlay Wide Image",
  component: OverlayWideImage,
  tags: ["!autodocs"],
  argTypes: {
    align: {
      name: "Align",
      control: {
        type: "inline-radio",
        labels: {
          left: "Left",
          center: "Center",
        },
      },
      options: ["left", "center"],
      table: { category: "Wordpress Fields" },
    },
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
    image: {
      name: "Image",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Default = {
  name: "Overlay Wide Image",
  args: {
    align: "left",
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
