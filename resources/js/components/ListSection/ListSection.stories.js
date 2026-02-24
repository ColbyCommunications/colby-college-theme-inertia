import { expect } from "storybook/test";
import ListSection from "./ListSection.vue";

export default {
  title: "Core Components/List Section",
  component: ListSection,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
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

export const WithUrlFallback = {
  name: "With URL Fallback",
  args: {
    lists: [
      {
        heading: "Resources",
        items: [
          { link: { title: "Library", url: "#" } },
          { url: "#", link: { title: "IT Help Desk" } },
          { link: { title: "Campus Map", url: "#" } },
        ],
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    await expect(canvas.getByText("IT Help Desk")).toBeInTheDocument();
  },
};
