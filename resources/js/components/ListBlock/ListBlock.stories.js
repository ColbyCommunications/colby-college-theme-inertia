import { expect } from "storybook/test";
import ListBlock from "./ListBlock.vue";

export default {
  title: "Core Components/List Block",
  component: ListBlock,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["dark", "light"],
    },
  },
};

export const Default = {
  name: "Default",
  args: {
    subheading: "Bylaws",
    heading: "Lorem ipsum dolor sit amet, consectet lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Nunc lobortis ullamcorper aucto.",
    buttons: [
      {
        url: "https://www.colby.edu",
        title: "Read Bylaws",
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Bylaws")).toBeInTheDocument();
    await expect(canvas.getByText("Read Bylaws")).toBeInTheDocument();
  },
};

export const Dark = {
  name: "Dark",
  args: {
    ...Default.args,
    type: "dark",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Bylaws")).toBeInTheDocument();
  },
};

export const Light = {
  name: "Light",
  args: {
    ...Default.args,
    type: "light",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Bylaws")).toBeInTheDocument();
  },
};
