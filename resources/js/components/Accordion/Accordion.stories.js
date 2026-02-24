import { expect, waitFor } from "storybook/test";
import Accordion from "./Accordion.vue";

export default {
  title: "Core Components/Accordion",
  component: Accordion,
  argTypes: {
    single: {
      control: "boolean",
      description: "If true, opening one panel automatically closes others.",
    },
    openByDefault: {
      control: "boolean",
      description:
        "If true, the first panel will be open when the component mounts.",
    },
    panels: {
      control: "object",
      description: "Array of content objects. Content accepts HTML strings.",
    },
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

const render = (args) => ({
  components: { Accordion },
  setup() {
    return { args };
  },
  template: `
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  `,
});

// --- Mock Data ---

const basicPanels = [
  {
    heading: "Admissions & Aid",
    content:
      "<p>Learn about our application process, financial aid options, and deadlines for the upcoming academic year..</p>",
  },
  {
    heading: "Academics",
    content:
      "<p>Explore our diverse range of majors, minors, and research opportunities available to undergraduate students.</p>",
  },
  {
    heading: "Campus Life",
    content:
      "<p>Discover student organizations, housing options, and the vibrant community events happening on campus.</p>",
  },
];

const richContentPanels = [
  {
    heading: "Rich HTML Content",
    content: `
      <p class="mb-4">Since this component uses <strong>v-html</strong>, you can pass full markup:</p>
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>Bulleted lists</li>
        <li><a href="#" class="text-indigo underline">Links</a></li>
        <li>Images</li>
      </ul>
      <p>Just be careful to sanitize user input if this data comes from an untrusted source.</p>
    `,
  },
];

// --- Stories ---

// 1. Default (Multi-Expand)
// Allows multiple panels to be open at once.
export const Default = {
  args: {
    panels: basicPanels,
    single: false,
    openByDefault: false,
  },
  render,
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole("button");
    const firstButton = buttons[0];
    const secondButton = buttons[1];
    const thirdButton = buttons[2];

    // Click first panel, assert it expanded
    await userEvent.click(firstButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");

    // Click second panel, assert both are expanded (multi-expand mode)
    await userEvent.click(secondButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");

    // Click third panel, assert all three are expanded
    await userEvent.click(thirdButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");

    // Click first again, assert it collapsed while others stay open
    await userEvent.click(firstButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");

    // Collapse third, assert it collapsed
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "false");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
  },
};

// 2. Single Expand Mode (Classic Accordion)
// Opening one panel closes the others.
export const SingleMode = {
  args: {
    panels: basicPanels,
    single: true,
    openByDefault: false,
  },
  render,
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole("button");
    const firstButton = buttons[0];
    const secondButton = buttons[1];
    const thirdButton = buttons[2];

    // Click first panel, assert it expanded
    await userEvent.click(firstButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");

    // Click second panel, assert first auto-closes
    await userEvent.click(secondButton);
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");

    // Click third panel, assert second auto-closes
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton).toHaveAttribute("aria-expanded", "false");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");

    // Click third again to collapse it, assert all are now closed
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "false");
    await expect(secondButton).toHaveAttribute("aria-expanded", "false");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");
  },
};

// 3. Open By Default
// Useful for FAQ pages where the first answer should be visible immediately.
export const PreOpened = {
  args: {
    panels: basicPanels,
    single: true, // Usually pairs well with single mode
    openByDefault: true,
  },
  render,
  play: async ({ canvas, userEvent }) => {
    const buttons = canvas.getAllByRole("button");
    const firstButton = buttons[0];
    const thirdButton = buttons[2];

    // Assert first panel starts expanded
    await waitFor(() => {
      expect(firstButton).toHaveAttribute("aria-expanded", "true");
    });

    // Click third panel, assert first auto-closes (single mode)
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");
  },
};
