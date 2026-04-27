import { expect } from "storybook/test";
import StatGroup from "../StatGroup.vue";

export default {
  title: "Blocks/Stat Group",
  component: StatGroup,
  tags: ["!autodocs"],
  argTypes: {
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
    items: {
      name: "Items",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Default = {
  name: "Stat Group",
  args: {
    subheading: "By the Numbers",
    heading: "Colby at a Glance",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{ url: "#", title: "Full Statistics", target: "_blank" }],
    items: [
      { heading: "2,000", paragraph: "Students from around the world" },
      { heading: "56", paragraph: "Majors across the arts and sciences" },
      { heading: "35", paragraph: "Minors to complement any major" },
      { heading: "9:1", paragraph: "Student-to-faculty ratio" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Colby at a Glance")).toBeInTheDocument();
    await expect(canvas.getByText("2,000")).toBeInTheDocument();
    await expect(canvas.getByText("56")).toBeInTheDocument();
    await expect(canvas.getByText("9:1")).toBeInTheDocument();
    await expect(canvas.getByText("Full Statistics")).toBeInTheDocument();
  },
};
