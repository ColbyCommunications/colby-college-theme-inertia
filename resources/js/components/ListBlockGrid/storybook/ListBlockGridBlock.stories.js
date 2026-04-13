import { expect } from "storybook/test";
import ListBlockGrid from "../ListBlockGrid.vue";

export default {
  title: "Blocks/List Block Grid",
  component: ListBlockGrid,
  tags: ["!autodocs"],
  argTypes: {
    columns: {
      control: "select",
      options: [2, 3, 4],
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
  name: "Two Columns",
  args: {
    columns: 2,
    items: [sampleItem, sampleItem, sampleItem, sampleItem],
  },
  play: async ({ canvas }) => {
    const headings = canvas.getAllByText("Lorem ipsum dolor sit amet");
    await expect(headings.length).toBe(4);
  },
};
