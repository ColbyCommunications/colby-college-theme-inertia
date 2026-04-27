import { expect } from "storybook/test";
import InsetWidget from "../InsetWidget.vue";

export default {
  title: "Blocks/Inset Widget",
  component: InsetWidget,
  tags: ["!autodocs"],
  argTypes: {
    inset: {
      type: "boolean",
      name: "Inset",
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
    size: { table: { disable: true } },
  },
};

export const Default = {
  name: "Inset Widget",
  args: {
    inset: false,
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
