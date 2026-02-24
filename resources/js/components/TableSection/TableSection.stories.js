import { expect } from "storybook/test";
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
    await expect(canvas.getByText("Departments and Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
  },
};
