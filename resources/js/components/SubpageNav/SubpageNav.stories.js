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
};
