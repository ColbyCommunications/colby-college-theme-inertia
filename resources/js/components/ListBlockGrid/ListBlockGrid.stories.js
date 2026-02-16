import ListBlockGrid from "./ListBlockGrid.vue";

export default {
  title: "Core Components/List Block Grid",
  component: ListBlockGrid,
  tags: ["autodocs"],
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
};

export const ThreeColumns = {
  name: "Three Columns",
  args: {
    columns: 3,
    items: [sampleItem, sampleItem, sampleItem],
  },
};
