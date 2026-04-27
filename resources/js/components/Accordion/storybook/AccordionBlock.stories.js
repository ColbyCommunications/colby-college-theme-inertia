import { expect, waitFor } from "storybook/test";
import Accordion from "../Accordion.vue";

export default {
  title: "Blocks/Accordion",
  component: Accordion,
  tags: ["!autodocs"],
  argTypes: {
    single: {
      control: "boolean",
      description: "If true, opening one panel automatically closes others.",
      table: { category: "Wordpress Fields" },
    },
    openByDefault: {
      control: "boolean",
      description:
        "If true, the first panel will be open when the component mounts.",
      table: { category: "Wordpress Fields" },
    },
    panels: {
      control: "object",
      description: "Array of content objects. Content accepts HTML strings.",
      table: { category: "Wordpress Fields" },
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

// 1. Default (Multi-Expand)
export const Default = {
  name: "Accordion",
  args: {
    panels: basicPanels,
    single: false,
    openByDefault: false,
  },
  render,
};
