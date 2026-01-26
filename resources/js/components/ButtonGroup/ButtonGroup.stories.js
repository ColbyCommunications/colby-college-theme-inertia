import ButtonGroup from "./ButtonGroup.vue";

// The default export metadata for your component
export default {
  title: "Button Group",
  component: ButtonGroup,
};

const globalItems = [
  { button: { title: "button1", url: "https://www.colby.edu" } },
  { button: { title: "button2", url: "https://www.colby.edu" } },
  { button: { title: "button3", url: "https://www.colby.edu" } },
];
export const Primary = {
  name: "Primary",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
  },
};

export const AlignCol = {
  name: "Align Column",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
    align: "column",
  },
};

export const BigButtonGroup = {
  name: "Big Buttons",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
    size: "large",
  },
};

export const Dark = {
  name: "Dark",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
    type: "dark",
  },
};
