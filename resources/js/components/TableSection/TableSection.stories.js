import TableSection from "./TableSection.vue";

export default {
  title: "Core Components/Table Section",
  component: TableSection,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    table: {
      heading: "Directory",
      renderApi: true,
      externalItems: false,
    },
  },
};
