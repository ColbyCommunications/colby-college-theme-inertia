import { expect } from "storybook/test";
import SectionNav from "./SectionNav.vue";

export default {
  title: "Core Components/Section Nav",
  component: SectionNav,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    title: "Academics",
    items: [
      { link: { title: "Majors & Minors", url: "#" } },
      { link: { title: "Departments & Programs", url: "#" } },
      { link: { title: "Areas of Distinction", url: "#" } },
      { link: { title: "Course Catalog", url: "#" } },
      { link: { title: "Research", url: "#" } },
      { link: { title: "Registrar", url: "#" } },
      { link: { title: "Academic Calendar", url: "#" } },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Majors & Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Course Catalog")).toBeInTheDocument();
    await expect(canvas.getByText("Academic Calendar")).toBeInTheDocument();
  },
};

export const WithIcons = {
  name: "With Icons",
  args: {
    title: "Resources",
    items: [
      { link: { title: "Library", url: "#" }, icon_class: "book" },
      { link: { title: "IT Support", url: "#" }, icon_class: "computer" },
      { link: { title: "Contact", url: "#" }, icon_class: "phone" },
      { link: { title: "FAQ", url: "#" } },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    await expect(canvas.getByText("FAQ")).toBeInTheDocument();
  },
};
