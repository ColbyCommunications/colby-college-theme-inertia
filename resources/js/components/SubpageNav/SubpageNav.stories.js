import { expect } from "storybook/test";
import SubpageNav from "./SubpageNav.vue";

export default {
  title: "Core Components/Subpage Nav",
  component: SubpageNav,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    heading: "Academics",
    parentPermalink: "#",
    items: [
      { title: "Majors & Minors", url: "#", active: true },
      { title: "Departments & Programs", url: "#" },
      { title: "Areas of Distinction", url: "#" },
      { title: "Course Catalog", url: "#" },
      { title: "Research", url: "#" },
      { title: "Registrar", url: "#" },
      { title: "Academic Calendar", url: "#" },
    ],
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Majors & Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Registrar")).toBeInTheDocument();
    // Click heading to toggle mobile menu
    const heading = canvas.getByText("Academics");
    await userEvent.click(heading);
  },
};

export const AllInactive = {
  name: "All Inactive",
  args: {
    heading: "Resources",
    parentPermalink: "#",
    items: [
      { title: "Library", url: "#" },
      { title: "IT Support", url: "#" },
      { title: "Campus Map", url: "#" },
    ],
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    // Toggle menu open then closed
    const heading = canvas.getByText("Resources");
    await userEvent.click(heading);
    await userEvent.click(heading);
  },
};
