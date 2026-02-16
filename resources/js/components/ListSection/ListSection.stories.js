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
};
