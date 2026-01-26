import Button from "./Button.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Button",
  component: Button,
};

export const Primary = {
  name: "Primary",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
  },
};

export const small = {
  name: "Small",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "small",
  },
};

export const medium = {
  name: "Medium",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "medium",
  },
};

export const large = {
  name: "Large",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "large",
  },
};

export const dark = {
  name: "Dark",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    type: "dark",
  },
};

export const withArrow = {
  name: "With Arrow",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    arrow: true,
  },
};

export const reverse = {
  name: "Reverse",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    arrow: true,
    reverse: true,
  },
};

export const transparent = {
  name: "Transparent Background",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    transparentBg: true,
  },
};
