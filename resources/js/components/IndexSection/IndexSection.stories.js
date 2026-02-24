import { expect } from "storybook/test";
import IndexSection from "./IndexSection.vue";

export default {
  title: "Core Components/Index Section",
  component: IndexSection,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    heading: "Faculty & Staff Directory",
    nav: {
      heading: "Academics",
      parentPermalink: "#",
      items: [
        { title: "Departments & Programs", url: "#", active: true },
        { title: "Faculty Directory", url: "#", active: false },
        { title: "Course Catalog", url: "#", active: false },
        { title: "Academic Calendar", url: "#", active: false },
      ],
    },
    table: {
      renderApi: false,
      api: "Departments",
      externalItems: [
        { post_title: "Biology", post_name: "biology" },
        { post_title: "Chemistry", post_name: "chemistry" },
        { post_title: "Computer Science", post_name: "computer-science" },
      ],
    },
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Faculty & Staff Directory"),
    ).toBeInTheDocument();
    await expect(
      canvas.getByText("Departments & Programs"),
    ).toBeInTheDocument();
  },
};
