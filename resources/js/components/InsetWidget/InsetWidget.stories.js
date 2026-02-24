import { expect } from "storybook/test";
import InsetWidget from "./InsetWidget.vue";

export default {
  title: "Core Components/Inset Widget",
  component: InsetWidget,
  tags: ["autodocs"],
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
    paragraph: "Connect with our admissions team to learn more about Colby College.",
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

export const Inset = {
  name: "Inset",
  args: {
    ...Default.args,
    inset: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
  },
};

export const Small = {
  name: "Small",
  args: {
    ...Default.args,
    size: "small",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
  },
};

export const Large = {
  name: "Large",
  args: {
    ...Default.args,
    size: "large",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
  },
};

export const WithoutButtons = {
  name: "Without Buttons",
  args: {
    subheading: "Notice",
    heading: "Information Only",
    paragraph: "No action buttons in this variant.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Information Only")).toBeInTheDocument();
  },
};

export const WithoutButtonTarget = {
  name: "Without Button Target",
  args: {
    subheading: "Action",
    heading: "Take Action",
    paragraph: "Buttons without target attribute.",
    buttons: [
      { url: "#", title: "Click Here" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Take Action")).toBeInTheDocument();
    await expect(canvas.getByText("Click Here")).toBeInTheDocument();
  },
};
