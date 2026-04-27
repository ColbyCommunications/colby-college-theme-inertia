import { expect } from "storybook/test";
import ListContext from "../ListContext.vue";

export default {
  title: "Blocks/List Context",
  component: ListContext,
  tags: ["!autodocs"],
  argTypes: {
    size: {
      name: "Size",
      control: {
        type: "inline-radio",
        labels: {
          default: "Default",
          small: "Small",
        },
      },
      options: ["default", "small"],
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
    items: {
      name: "Items",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Default = {
  name: "List Context",
  args: {
    size: "default",
    subheading: "Subheading",
    heading: "More from [Program]",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{ url: "#", title: "Read More" }],
    items: [
      { link: { url: "#", title: "Majors and Minors" } },
      { link: { url: "#", title: "Current Courses" } },
      { link: { url: "#", title: "Research" } },
      { link: { url: "#", title: "Facilities" } },
      { link: { url: "#", title: "Honors & Programs" } },
      { title: "Career Pathways" },
      { link: { url: "#", title: "Faculty & Staff" } },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("More from [Program]")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Read More")).toBeInTheDocument();
  },
};
