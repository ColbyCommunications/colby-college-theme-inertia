import { expect, waitFor } from "storybook/test";
import AdvancedAccordionPanel from "./AdvancedAccordionPanel.vue";

export default {
  title: "Core Components/Advanced Accordion Panel",
  component: AdvancedAccordionPanel,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    heading: "What is the application deadline?",
    content:
      "<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("What is the application deadline?"),
    ).toBeInTheDocument();
  },
};

export const Open = {
  name: "Open",
  args: {
    ...Default.args,
    open: true,
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("What is the application deadline?"),
    ).toBeInTheDocument();
    await expect(
      canvas.getByText(
        "The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.",
      ),
    ).toBeInTheDocument();
  },
};

export const ToggleOpen = {
  name: "Toggle Open",
  args: {
    heading: "Click to expand",
    content: "<p>This content appears after toggle.</p>",
    open: false,
  },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await waitFor(() => {
      expect(
        canvas.getByText("This content appears after toggle."),
      ).toBeVisible();
    });
  },
};

export const ToggleClosed = {
  name: "Toggle Closed",
  args: {
    heading: "Click to collapse",
    content: "<p>This content will be hidden.</p>",
    open: true,
  },
  play: async ({ canvas, userEvent }) => {
    await expect(
      canvas.getByText("This content will be hidden."),
    ).toBeVisible();
    const button = canvas.getByRole("button");
    await userEvent.click(button);
  },
};
