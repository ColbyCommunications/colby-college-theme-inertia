import Header from "./SiteHeader.vue";

// Import subcomponents to ensure the story renders correctly.
// If your build system handles global components, you can remove these imports
// and the 'components' list in the Template.
import ColbyLogo from "../Logos/ColbyLogo.vue";
import Hamburger from "../Hamburger/Hamburger.vue";
import UtilityMenu from "../Menus/UtilityMenu.vue";
import MainMenu from "../Menus/MainMenu.vue";
import MobileMenu from "../Menus/MobileMenu.vue";

export default {
  title: "Core Components/Header",
  component: Header,
  parameters: {
    // Header should usually span the full width without default Storybook padding
    layout: "fullscreen",
    backgrounds: {
      default: "light",
    },
  },
  argTypes: {
    url: {
      control: "text",
      description: "URL for the main Logo link",
    },
    menus: {
      control: "object",
      description: "Object containing 'main' and 'utility' arrays",
    },
  },
};

const Template = (args) => ({
  components: {
    Header,
    ColbyLogo,
    Hamburger,
    UtilityMenu,
    MainMenu,
    MobileMenu,
  },
  setup() {
    return { args };
  },
  template: '<Header v-bind="args" />',
});

// --- Sample Data ---

const sampleMenus = {
  utility: [
    { title: "Directory", url: "#" },
    { title: "News", url: "#" },
    { title: "Events", url: "#" },
    { title: "Offices", url: "#" },
    { title: "myColby", url: "#" },
  ],
  main: [
    { title: "Admissions & Aid", url: "#" },
    { title: "Academics", url: "#" },
    { title: "Life at Colby", url: "#" },
    { title: "Athletics", url: "#" },
    { title: "Museum of Art", url: "#" },
  ],
};

// --- Stories ---

// 1. Desktop View
export const Default = Template.bind({});
Default.args = {
  url: "https://www.colby.edu",
  menus: sampleMenus,
};
