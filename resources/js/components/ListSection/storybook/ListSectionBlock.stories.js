import { expect } from "storybook/test";
import ListSection from "../ListSection.vue";

export default {
  title: "Blocks/List Section",
  component: ListSection,
  tags: ["!autodocs"],
  argTypes: {
    lists: {
      name: "Lists",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Default = {
  name: "List Section",
  args: {
    lists: [
      {
        heading: "Sciences",
        items: [
          { link: { title: "Biology", url: "#" } },
          { link: { title: "Chemistry", url: "#" } },
          { link: { title: "Computer Science", url: "#" } },
          { link: { title: "Physics", url: "#" } },
        ],
      },
      {
        heading: "Humanities",
        items: [
          { link: { title: "English", url: "#" } },
          { link: { title: "History", url: "#" } },
          { link: { title: "Philosophy", url: "#" } },
          { link: { title: "Art", url: "#" } },
        ],
      },
      {
        heading: "Social Sciences",
        items: [
          { link: { title: "Economics", url: "#" } },
          { link: { title: "Government", url: "#" } },
          { link: { title: "Psychology", url: "#" } },
          { link: { title: "Sociology", url: "#" } },
        ],
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Sciences")).toBeInTheDocument();
    await expect(canvas.getByText("Humanities")).toBeInTheDocument();
    await expect(canvas.getByText("Social Sciences")).toBeInTheDocument();
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
    await expect(canvas.getByText("Economics")).toBeInTheDocument();
  },
};
