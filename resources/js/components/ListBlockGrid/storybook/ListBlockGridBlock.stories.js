import { expect } from "storybook/test";
import ListBlockGrid from "../ListBlockGrid.vue";

export default {
  title: "Blocks/List Block Grid",
  component: ListBlockGrid,
  tags: ["!autodocs"],
  argTypes: {
    columns: {
      name: "Columns",
      control: "inline-radio",
      options: [2, 3],
      table: { category: "Wordpress Fields" },
    },
    type: {
      name: "Type",
      control: {
        type: "inline-radio",
        labels: {
          light: "Light",
          dark: "Dark",
        },
      },
      options: ["light", "dark"],
      table: { category: "Wordpress Fields" },
    },
    items: {
      name: "Items",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

const sampleItem = {
  subheading: "Bylaws",
  heading: "Lorem ipsum dolor sit amet",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  buttons: [{ url: "#", title: "Read More" }],
};

export const TwoColumns = {
  name: "List Block Grid",
  args: {
    columns: 2,
    type: "light",
    items: [sampleItem, sampleItem, sampleItem, sampleItem],
  },
  play: async ({ canvas }) => {
    const headings = canvas.getAllByText("Lorem ipsum dolor sit amet");
    await expect(headings.length).toBe(4);
  },
};
