import ContextSection from "../ContextSection.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Blocks/Context Section",
  component: ContextSection,
  tags: ["!autodocs"],
  argTypes: {
    hero: {
      name: "Hero Mode",
      control: "boolean",
      table: { category: "Wordpress Fields" },
    },
    align: {
      name: "Align",
      control: {
        type: "radio",
        labels: {
          left: "Left",
          center: "Center",
        },
      },
      options: ["left", "center"],
      table: { category: "Wordpress Fields" },
    },
    size: {
      name: "Size",
      control: {
        type: "inline-radio",
        labels: {
          medium: "Medium",
          large: "Large",
        },
      },
      options: ["medium", "large"],
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
    buttons: { table: { disable: true } },
  },
};

export const Default = {
  name: "Context Section",
  args: {
    hero: false,
    align: "left",
    size: "medium",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph:
      "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",
    buttons: [ {button: { url: "#", title: "Test Button" }}],
  },
};
