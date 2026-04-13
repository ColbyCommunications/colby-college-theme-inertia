import ContextSection from "../ContextSection.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Context Section",
  component: ContextSection,
  tags: ["!autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    align: "left",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph:
      "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Anthropology")).toBeInTheDocument();
  },
};
