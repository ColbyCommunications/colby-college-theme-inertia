import { expect } from "storybook/test";
import InsetWidget from "../InsetWidget.vue";

export default {
  title: "Blocks/Inset Widget",
  component: InsetWidget,
  tags: ["!autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export const Default = {
  name: "Default",
  args: {
    subheading: "Get Involved",
    heading: "Ready to Learn More?",
    paragraph:
      "Connect with our admissions team to learn more about Colby College.",
    buttons: [
      { url: "#", title: "Request Information" },
      { url: "#", title: "Schedule a Visit" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Get Involved")).toBeInTheDocument();
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
    await expect(canvas.getByText("Request Information")).toBeInTheDocument();
    await expect(canvas.getByText("Schedule a Visit")).toBeInTheDocument();
  },
};
