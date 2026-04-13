import { expect } from "storybook/test";
import SectionNav from "../SectionNav.vue";

export default {
  title: "Blocks/Section Navigation",
  component: SectionNav,
  tags: ["!autodocs"],
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
