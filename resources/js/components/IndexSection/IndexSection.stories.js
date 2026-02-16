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
      heading: "Directory",
      renderApi: true,
      externalItems: false,
    },
  },
};
