import { expect } from "storybook/test";
import ListContext from "./ListContext.vue";

export default {
  title: "Core Components/List Context",
  component: ListContext,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium"],
    },
  },
};

export const Default = {
  name: "Default",
  args: {
    heading: "More from [Program]",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{ url: "#", title: "Read More" }],
    items: [
      { link: { url: "#", title: "Majors and Minors" } },
      { link: { url: "#", title: "Current Courses" } },
      { link: { url: "#", title: "Research" } },
      { link: { url: "#", title: "Facilities" } },
      { link: { url: "#", title: "Honors & Programs" } },
      { title: "Career Pathways" },
      { link: { url: "#", title: "Faculty & Staff" } },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("More from [Program]")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Read More")).toBeInTheDocument();
  },
};

export const Small = {
  name: "Small",
  args: {
    ...Default.args,
    size: "small",
    buttons: [],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("More from [Program]")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  },
};
