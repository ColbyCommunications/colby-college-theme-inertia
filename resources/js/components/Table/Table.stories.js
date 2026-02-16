import Table from "./Table.vue";

export default {
  title: "Core Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export const Static = {
  name: "Static (External Items)",
  args: {
    renderApi: false,
    api: "Departments",
    externalItems: [
      { post_title: "Biology", post_name: "biology" },
      { post_title: "Chemistry", post_name: "chemistry" },
      { post_title: "Computer Science", post_name: "computer-science" },
      { post_title: "Economics", post_name: "economics" },
      { post_title: "English", post_name: "english" },
    ],
  },
};
