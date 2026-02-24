import ButtonGroup from "./ButtonGroup.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/Button Group",
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
  play: async ({ canvas }) => {
    await expect(canvas.getByText("button1")).toBeInTheDocument();
    await expect(canvas.getByText("button2")).toBeInTheDocument();
    await expect(canvas.getByText("button3")).toBeInTheDocument();
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
  play: async ({ canvas }) => {
    await expect(canvas.getByText("button1")).toBeInTheDocument();
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
  play: async ({ canvas }) => {
    await expect(canvas.getByText("button1")).toBeInTheDocument();
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
  play: async ({ canvas }) => {
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  },
};
