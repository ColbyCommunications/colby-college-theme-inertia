import { expect } from "storybook/test";
import TextGroup from "./TextGroup.vue";

export default {
  title: "Core Components/Text Group",
  component: TextGroup,
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
    static: { control: "boolean" },
    hero: { control: "boolean" },
    date: { control: "boolean" },
  },
};

const render = (args) => ({
  components: { TextGroup },
  setup() {
    return { args };
  },
  template: `<div :class="args.type === 'light' ? 'bg-indigo p-10' : 'bg-white p-10'"><TextGroup v-bind="args" /></div>`,
});

export const Medium = {
  name: "Medium (Default)",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Academics",
    heading: "Explore Our Programs",
    paragraph: "Colby offers more than 60 majors and minors across the liberal arts and sciences.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Explore Our Programs")).toBeInTheDocument();

    const subheading = canvas.getByText("Academics");
    await expect(subheading.className).toMatch(/text-azure/);
    await expect(subheading.className).toMatch(/uppercase/);

    const heading = canvas.getByText("Explore Our Programs");
    await expect(heading.className).toMatch(/text-indigo/);
  },
};

export const XLarge = {
  name: "Extra Large",
  render,
  args: {
    size: "xlarge",
    align: "left",
    type: "dark",
    subheading: "Welcome",
    heading: "Colby College",
    paragraph: "A leading liberal arts college in Waterville, Maine.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();

    const subheading = canvas.getByText("Welcome");
    await expect(subheading.className).toMatch(/text-24/);

    const heading = canvas.getByText("Colby College");
    await expect(heading.className).toMatch(/text-48/);
  },
};

export const Large = {
  name: "Large",
  render,
  args: {
    size: "large",
    align: "left",
    type: "dark",
    subheading: "Featured",
    heading: "Student Research",
    paragraph: "Undergraduate research is a hallmark of the Colby experience.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Featured")).toBeInTheDocument();
    await expect(canvas.getByText("Student Research")).toBeInTheDocument();
  },
};

export const Small = {
  name: "Small",
  render,
  args: {
    size: "small",
    align: "left",
    type: "dark",
    subheading: "News",
    heading: "Campus Update",
    paragraph: "The latest news and events from around campus.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Update")).toBeInTheDocument();
  },
};

export const XSmall = {
  name: "Extra Small",
  render,
  args: {
    size: "xsmall",
    align: "left",
    type: "dark",
    subheading: "Category",
    heading: "Article Title",
    paragraph: "A brief description of the article content.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Article Title")).toBeInTheDocument();

    const heading = canvas.getByText("Article Title");
    await expect(heading.className).toMatch(/font-bold/);
    await expect(heading.className).toMatch(/text-18/);
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
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Mission")).toBeInTheDocument();
    await expect(canvas.getByText("Our Purpose")).toBeInTheDocument();

    const subheading = canvas.getByText("Mission");
    await expect(subheading.className).toMatch(/text-center/);

    const heading = canvas.getByText("Our Purpose");
    await expect(heading.className).toMatch(/text-center/);
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

export const SmallStatic = {
  name: "Small Static",
  render,
  args: {
    size: "small",
    align: "left",
    type: "dark",
    static: true,
    subheading: "Static Label",
    heading: "Static Heading",
    paragraph: "This uses the small+static size branch.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Static Heading")).toBeInTheDocument();
  },
};

export const HeroWithDate = {
  name: "Hero with Date",
  render,
  args: {
    size: "large",
    align: "left",
    type: "dark",
    hero: true,
    date: true,
    subheading: "January 15, 2025",
    heading: "Campus Event",
    paragraph: "A special event on campus.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Campus Event")).toBeInTheDocument();
    await expect(canvas.getByText("January 15, 2025")).toBeInTheDocument();
  },
};

export const HeroNoDate = {
  name: "Hero without Date",
  render,
  args: {
    size: "large",
    align: "left",
    type: "dark",
    hero: true,
    date: false,
    subheading: "Welcome",
    heading: "Colby College",
    paragraph: "A premier liberal arts college.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  },
};

export const HeadingOnly = {
  name: "Heading Only (no subheading)",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    heading: "Just a Heading",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Just a Heading")).toBeInTheDocument();
  },
};

export const WithHtmlParagraph = {
  name: "With HTML Paragraph",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Resources",
    heading: "Helpful Links",
    paragraph: "<ul><li>Library</li><li>IT Support</li></ul>",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Helpful Links")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
  },
};
