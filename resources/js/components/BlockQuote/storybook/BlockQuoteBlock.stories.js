import BlockQuote from "../BlockQuote.vue";

export default {
  title: "Blocks/Block Quote",
  component: BlockQuote,
  argTypes: {
    quote: {
      name: "Quote",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Primary = {
  name: "Block Quote Live Demo",
  args: {
    quote: "The only thing we have to fear is fear itself",
  },
  tags: ["!autodocs"],
};
