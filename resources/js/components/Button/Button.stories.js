import Button from "./Button.vue";
import { expect } from "storybook/test";

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
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link", { name: "Button Title" });
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", "https://www.colby.edu");
  },
};

export const small = {
  name: "Small",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "small",
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link", { name: "Button Title" });
    await expect(link).toBeInTheDocument();
  },
};

export const medium = {
  name: "Medium",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "medium",
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link", { name: "Button Title" });
    await expect(link).toBeInTheDocument();
  },
};

export const large = {
  name: "Large",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "large",
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link", { name: "Button Title" });
    await expect(link).toBeInTheDocument();
  },
};

export const dark = {
  name: "Dark",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    type: "dark",
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link", { name: "Button Title" });
    await expect(link).toBeInTheDocument();
  },
};

export const withArrow = {
  name: "With Arrow",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    arrow: true,
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link", { name: "Button Title" });
    await expect(link).toBeInTheDocument();
    await expect(link.querySelector("svg")).not.toBeNull();
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
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link", { name: "Button Title" });
    await expect(link).toBeInTheDocument();
    await expect(link.querySelector("svg")).not.toBeNull();
  },
};

export const transparent = {
  name: "Transparent Background",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    transparentBg: true,
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link", { name: "Button Title" });
    await expect(link).toBeInTheDocument();
  },
};
