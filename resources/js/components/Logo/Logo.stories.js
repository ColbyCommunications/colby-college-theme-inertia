import { expect } from "storybook/test";
import Logo from "./Logo.vue";

export default {
  title: "Core Components/Logo",
  component: Logo,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    url: "/",
  },
  play: async ({ canvasElement }) => {
    const link = canvasElement.querySelector("a");
    await expect(link).toBeTruthy();
    await expect(link.getAttribute("href")).toBe("/");
  },
};

export const White = {
  name: "White (Dark Background)",
  args: {
    url: "/",
    svgClass: "w-[120px] md:w-[100px] fill-white",
  },
  render: (args) => ({
    components: { Logo },
    setup() {
      return { args };
    },
    template: '<div class="bg-indigo p-10"><Logo v-bind="args" /></div>',
  }),
  play: async ({ canvasElement }) => {
    const link = canvasElement.querySelector("a");
    await expect(link).toBeTruthy();
    await expect(link.getAttribute("href")).toBe("/");
  },
};
