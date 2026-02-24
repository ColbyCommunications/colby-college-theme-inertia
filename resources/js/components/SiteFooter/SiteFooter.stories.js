import { expect } from "storybook/test";
import Footer from "./SiteFooter.vue";

// Import subcomponents to ensure the story renders correctly.
// If you have these available globally, you can remove these imports
// and the 'components' list in the render function.
import ColbyLogo from "../Logos/ColbyLogo.vue";
import AthleticsLogo from "../Logos/AthleticsLogo.vue";
import ActionMenu from "../Menus/ActionMenu.vue";
import Button from "../Button/Button.vue";
import SocialMenu from "../Menus/SocialMenu.vue";

export default {
  title: "Core Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen", // Removes default padding so the footer spans the full width
    backgrounds: {
      default: "light",
    },
  },
};

const render = (args) => ({
  components: {
    Footer,
    ColbyLogo,
    AthleticsLogo,
    ActionMenu,
    Button,
    SocialMenu,
  },
  setup() {
    return { args };
  },
  template: '<Footer v-bind="args" />',
});

// Sample Data Structure based on your template usage
const sampleMenus = {
  footer: [
    { title: "Admissions", url: "#" },
    { title: "Academics", url: "#" },
    { title: "Campus Life", url: "#" },
    { title: "Athletics", url: "#" },
    { title: "Museum of Art", url: "#" },
    { title: "Libraries", url: "#" },
    { title: "Administration", url: "#" },
    { title: "Alumni", url: "#" },
  ],
  action: [
    { title: "Contact Colby", url: "#" },
    { title: "Support Colby", url: "#" },
  ],
  social: [
    { title: "Facebook", url: "#", icon: "facebook" },
    { title: "Twitter", url: "#", icon: "twitter" },
    { title: "Instagram", url: "#", icon: "instagram" },
  ],
};

const sampleAddress = {
  text: "4000 Mayflower Hill<br>Waterville, ME 04901",
};

export const Default = {
  args: {
    url: "https://www.colby.edu",
    phone: "207-859-4000",
    address: sampleAddress,
    menus: sampleMenus,
  },
  render,
  play: async ({ canvas }) => {
    // Assert footer menu items render
    await expect(canvas.getByText("Admissions")).toBeVisible();
    await expect(canvas.getByText("Academics")).toBeVisible();
    await expect(canvas.getByText("Campus Life")).toBeVisible();
    await expect(canvas.getByText("Alumni")).toBeVisible();

    // Assert action menu items render
    await expect(canvas.getByText("Contact Colby")).toBeVisible();
    await expect(canvas.getByText("Support Colby")).toBeVisible();

    // Assert phone number renders
    await expect(canvas.getByText("207-859-4000")).toBeVisible();
  },
};
