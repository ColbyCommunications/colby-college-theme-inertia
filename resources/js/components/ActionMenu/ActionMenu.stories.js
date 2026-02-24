import { expect } from "storybook/test";
import ActionMenu from "./ActionMenu.vue";

export default {
  title: "Core Components/Action Menu",
  component: ActionMenu,
  tags: ["autodocs"],
};

const render = (args) => ({
  components: { ActionMenu },
  setup() {
    return { args };
  },
  template: '<div class="bg-indigo p-10"><ActionMenu v-bind="args" /></div>',
});

export const Default = {
  name: "Default",
  args: {
    menu: [
      { title: "Apply", url: "#" },
      { title: "Visit", url: "#" },
      { title: "Give", url: "#" },
      { title: "Contact", url: "#" },
    ],
  },
  render,
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Apply")).toBeInTheDocument();
    await expect(canvas.getByText("Visit")).toBeInTheDocument();
    await expect(canvas.getByText("Give")).toBeInTheDocument();
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
  },
};
