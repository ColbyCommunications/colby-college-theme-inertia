import { expect } from "storybook/test";
import IconSection from "./IconSection.vue";

export default {
  title: "Core Components/Icon Section",
  component: IconSection,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    subheading: "Why Join",
    heading: "A global online community awaits.",
    paragraph:
      "Join an exclusive network of talented alumni to build and expand professional relationships.",
    buttons: [
      {
        url: "#",
        title: "Join Now",
      },
    ],
    items: [
      {
        image: { src: "https://placehold.co/160x160", alt: "Connect" },
        heading: "Connect",
        paragraph:
          "Find and reminisce with fellow graduates, see what they have been up to and stay in touch.",
      },
      {
        image: { src: "https://placehold.co/160x160", alt: "Give back" },
        heading: "Give back",
        paragraph:
          "Introduce, employ and offer to act as a mentor to our graduating students.",
      },
      {
        image: { src: "https://placehold.co/160x160", alt: "Expand" },
        heading: "Expand",
        paragraph:
          "Leverage your professional network to get introduced to people you should know.",
      },
      {
        image: {
          src: "https://placehold.co/160x160",
          alt: "Re-connect",
        },
        heading: "Re-connect with classmates",
        paragraph:
          "Colby Connect allows you to use the trusted Colby College environment to expand your professional network.",
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("A global online community awaits."),
    ).toBeInTheDocument();
    await expect(canvas.getByText("Connect")).toBeInTheDocument();
    await expect(canvas.getByText("Give back")).toBeInTheDocument();
    await expect(canvas.getByText("Join Now")).toBeInTheDocument();
  },
};
