import { expect } from "storybook/test";
import UtilityMenu from "./UtilityMenu.vue";

export default {
  title: "Core Components/Menus/UtilityMenu",
  component: UtilityMenu,
  parameters: {
    layout: "fullscreen",
  },
};

const sampleMenu = [
  { title: "Directory", url: "#directory" },
  { title: "News", url: "#news" },
  { title: "Events", url: "#events" },
  { title: "Offices", url: "#offices" },
];

const render = (args) => ({
  components: { UtilityMenu },
  setup() {
    return { args };
  },
  template: '<UtilityMenu v-bind="args" />',
});

export const Default = {
  render,
  args: {
    menu: sampleMenu,
  },
  play: async ({ canvas }) => {
    // These are hardcoded in the component template (not prop-driven)
    await expect(canvas.getByText("myColby")).toBeInTheDocument();
    await expect(canvas.getByText("Search")).toBeInTheDocument();

    // These come from the menu prop
    await expect(canvas.getByText("Directory")).toBeInTheDocument();
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("Events")).toBeInTheDocument();
    await expect(canvas.getByText("Offices")).toBeInTheDocument();
  },
};
