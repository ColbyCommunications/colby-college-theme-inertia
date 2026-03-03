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
  play: async ({ canvas, canvasElement, userEvent }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Majors & Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Registrar")).toBeInTheDocument();

    const menu = canvasElement.querySelector(".subpage-nav__items");
    const toggle = canvasElement.querySelector(".subpage-nav h2 > div");

    await expect(menu).toHaveClass("hidden");
    await expect(toggle).not.toBeNull();
    await userEvent.click(toggle);
    await expect(menu).not.toHaveClass("hidden");
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
  play: async ({ canvas, canvasElement, userEvent }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();

    const menu = canvasElement.querySelector(".subpage-nav__items");
    const toggle = canvasElement.querySelector(".subpage-nav h2 > div");

    await expect(menu).toHaveClass("hidden");
    await expect(toggle).not.toBeNull();
    await userEvent.click(toggle);
    await expect(menu).not.toHaveClass("hidden");
    await userEvent.click(toggle);
    await expect(menu).toHaveClass("hidden");
  },
};
