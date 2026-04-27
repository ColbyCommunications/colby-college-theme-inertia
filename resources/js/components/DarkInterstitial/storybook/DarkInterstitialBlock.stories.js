import DarkInterstitial from "../DarkInterstitial.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Dark Interstitial",
  component: DarkInterstitial,
  tags: ["!autodocs"],
  argTypes: {
    icon: {
      name: "Icon",
      control: "boolean",
      table: { category: "Wordpress Fields" },
    },
    subheading: {
      name: "Subheading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    heading: {
      name: "Heading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    paragraph: {
      name: "Paragraph",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    buttons: {
      name: "Buttons",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    facts: {
      name: "Facts",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    images: {
      name: "Images",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Primary = {
  name: "Dark Interstitial",
  args: {
    icon: true,
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(
      canvas.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ),
    ).toBeInTheDocument();
  },
};
