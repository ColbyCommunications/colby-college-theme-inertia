import BgInsetMediaContext from "../BgInsetMediaContext.vue";


// The default export metadata for your component
export default {
  title: "Blocks/Background Inset Media Context",
  component: BgInsetMediaContext,

  render: (args) => ({
    components: { BgInsetMediaContext },
    setup() {
      return { args };
    },
    // The :key forces Vue to destroy and recreate the component when controls change
    template: '<BgInsetMediaContext :key="JSON.stringify(args)" v-bind="args" />',
  }),

  argTypes: {
    inset: {
      name: "Inset",
      control: "boolean",
      table: { category: "Wordpress Fields" },
    },
    size: {
      name: "Size",
      control: "inline-radio",
      options: ["medium", "large"],
      table: { category: "Wordpress Fields" },
    },
    reverse: {
      name: "Reverse",
      control: "boolean",
      table: { category: "Wordpress Fields" },
    },
    heading: {
      name: "Heading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    subheading: {
      name: "Subheading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    paragraph: {
      name: "Paragraph",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    image: { table: { disable: true } },
    video: { table: { disable: true } },
  },
};

export const Primary = {
  name: "Background Inset Media Context",
  tags: ["!autodocs"],
  args: {
    image: {
      url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
    },
    video: {},
    subheading: "Veritatis sit voluptatem",
    heading: "Lorem Ipsum",
    inset: false,
    reverse: false,
    size: 'medium',
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};