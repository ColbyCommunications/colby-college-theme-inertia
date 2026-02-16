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
};
