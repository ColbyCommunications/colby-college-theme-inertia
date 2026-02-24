import { expect } from "storybook/test";
import Context from "./Context.vue";

export default {
  title: "Core Components/Context",
  component: Context,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xlarge", "large", "medium", "small", "xsmall"],
    },
    align: { control: "select", options: ["left", "center"] },
    type: { control: "select", options: ["dark", "light"] },
    subheading: { control: "text" },
    heading: { control: "text" },
    paragraph: { control: "text" },
    isStatic: { control: "boolean" },
    hero: { control: "boolean" },
    buttons: { control: "object" },
  },
};

const render = (args) => ({
  components: { Context },
  setup() {
    return { args };
  },
  template: `<div :class="args.type === 'light' ? 'bg-indigo p-10' : 'bg-white p-10'"><Context v-bind="args" /></div>`,
});

export const Default = {
  name: "Default",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Academics",
    heading: "Explore Our Programs",
    paragraph: "Colby offers more than 60 majors and minors across the liberal arts and sciences.",
    buttons: {
      items: [
        { button: { url: "#", title: "Learn More", target: "" } },
      ],
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Explore Our Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Learn More")).toBeInTheDocument();
  },
};

export const WithMultipleButtons = {
  name: "Multiple Buttons",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Admissions",
    heading: "Apply to Colby",
    paragraph: "Begin your journey at one of America's top liberal arts colleges.",
    buttons: {
      items: [
        { button: { url: "#", title: "Apply Now", target: "" } },
        { button: { url: "#", title: "Request Info", target: "" } },
      ],
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Apply to Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Apply Now")).toBeInTheDocument();
    await expect(canvas.getByText("Request Info")).toBeInTheDocument();
  },
};

export const Centered = {
  name: "Centered",
  render,
  args: {
    size: "large",
    align: "center",
    type: "dark",
    subheading: "Mission",
    heading: "Our Purpose",
    paragraph: "Colby is dedicated to the education of thoughtful, capable citizens of the world.",
    buttons: {
      items: [
        { button: { url: "#", title: "Read More", target: "" } },
      ],
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Mission")).toBeInTheDocument();
    await expect(canvas.getByText("Our Purpose")).toBeInTheDocument();

    const subheading = canvas.getByText("Mission");
    await expect(subheading.className).toMatch(/text-center/);
  },
};

export const LightType = {
  name: "Light Type",
  render,
  args: {
    size: "large",
    align: "left",
    type: "light",
    subheading: "Spotlight",
    heading: "Faculty Achievements",
    paragraph: "Celebrating the accomplishments of our distinguished faculty.",
    buttons: {
      items: [
        { button: { url: "#", title: "View All", target: "" } },
      ],
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Spotlight")).toBeInTheDocument();
    await expect(canvas.getByText("Faculty Achievements")).toBeInTheDocument();

    const subheading = canvas.getByText("Spotlight");
    await expect(subheading.className).toMatch(/text-canary/);

    const heading = canvas.getByText("Faculty Achievements");
    await expect(heading.className).toMatch(/text-white/);
  },
};

export const NoButtons = {
  name: "No Buttons",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Research",
    heading: "Student-Faculty Collaboration",
    paragraph: "Every year, hundreds of students collaborate with faculty on original research projects.",
    buttons: { items: [] },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Research")).toBeInTheDocument();
    await expect(canvas.getByText("Student-Faculty Collaboration")).toBeInTheDocument();
  },
};

export const WithHero = {
  name: "Hero Mode",
  render,
  args: {
    size: "xlarge",
    align: "center",
    type: "dark",
    hero: true,
    subheading: "Welcome",
    heading: "Colby College",
    paragraph: "A top liberal arts college in Waterville, Maine.",
    buttons: {
      items: [
        { button: { url: "#", title: "Explore", target: "" } },
      ],
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Welcome")).toBeInTheDocument();
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  },
};

export const StaticMode = {
  name: "Static Mode",
  render,
  args: {
    size: "small",
    align: "left",
    type: "dark",
    isStatic: true,
    subheading: "Notice",
    heading: "Campus Alert",
    paragraph: "Important information for the campus community.",
    buttons: { items: [] },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Notice")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Alert")).toBeInTheDocument();
  },
};
