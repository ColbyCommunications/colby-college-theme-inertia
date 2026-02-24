import { expect } from "storybook/test";
import MainMenu from "./MainMenu.vue";
import MobileMenu from "./MobileMenu.vue";
import SocialMenu from "./SocialMenu.vue";
import ActionMenu from "./ActionMenu.vue";

export default {
  title: "Core Components/Menus",
  tags: ["autodocs"],
};

const mainMenuItems = [
  { id: 1, title: "Academics", url: "#", target: "" },
  { id: 2, title: "Admissions", url: "#", target: "" },
  { id: 3, title: "Campus Life", url: "#", target: "" },
  { id: 4, title: "Research", url: "#", target: "" },
  { id: 5, title: "About", url: "#", target: "" },
];

const utilityMenuItems = [
  { id: 1, title: "Alumni", url: "#" },
  { id: 2, title: "Parents", url: "#" },
  { id: 3, title: "Giving", url: "#" },
  { id: 4, title: "Athletics", url: "#" },
  { id: 5, title: "News", url: "#" },
];

const socialMenuItems = [
  { id: 1, title: "Facebook", url: "#" },
  { id: 2, title: "Twitter", url: "#" },
  { id: 3, title: "Instagram", url: "#" },
  { id: 4, title: "YouTube", url: "#" },
];

const actionMenuItems = [
  { id: 1, title: "Facebook", url: "#" },
  { id: 2, title: "Twitter", url: "#" },
  { id: 3, title: "Instagram", url: "#" },
];

export const MainMenuDefault = {
  name: "Main Menu",
  render: () => ({
    components: { MainMenu },
    setup() {
      const isCurrent = (item) => item.title === "Academics";
      return { menu: mainMenuItems, isCurrent };
    },
    template: '<MainMenu :menu="menu" :isCurrent="isCurrent" />',
  }),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Life")).toBeInTheDocument();
    await expect(canvas.getByText("Research")).toBeInTheDocument();
    await expect(canvas.getByText("About")).toBeInTheDocument();
  },
};

export const MobileMenuDefault = {
  name: "Mobile Menu",
  render: () => ({
    components: { MobileMenu },
    setup() {
      const isCurrent = (item) => item.title === "Academics";
      return {
        menus: { main: mainMenuItems, utility: utilityMenuItems },
        isCurrent,
      };
    },
    template: '<div class="w-[375px] bg-white"><MobileMenu :menus="menus" :isCurrent="isCurrent" /></div>',
  }),
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Alumni")).toBeInTheDocument();
    await expect(canvas.getByText("Parents")).toBeInTheDocument();
  },
};

export const SocialMenuDefault = {
  name: "Social Menu",
  render: () => ({
    components: { SocialMenu },
    setup() {
      return { menu: socialMenuItems };
    },
    template: '<div class="bg-indigo p-4"><SocialMenu :menu="menu" /></div>',
  }),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Facebook")).toBeInTheDocument();
    await expect(canvas.getByText("Twitter")).toBeInTheDocument();
    await expect(canvas.getByText("Instagram")).toBeInTheDocument();
    await expect(canvas.getByText("YouTube")).toBeInTheDocument();
  },
};

export const ActionMenuDefault = {
  name: "Action Menu",
  render: () => ({
    components: { ActionMenu },
    setup() {
      return { menu: actionMenuItems };
    },
    template: '<div class="bg-indigo p-4"><ActionMenu :menu="menu" /></div>',
  }),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Facebook")).toBeInTheDocument();
    await expect(canvas.getByText("Twitter")).toBeInTheDocument();
    await expect(canvas.getByText("Instagram")).toBeInTheDocument();
  },
};
