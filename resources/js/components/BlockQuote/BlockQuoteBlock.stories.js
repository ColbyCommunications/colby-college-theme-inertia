import BlockQuote from "./BlockQuote.vue";

export default {
  title: "Blocks/Block Quote",
  component: BlockQuote,
};

export const Primary = {
  name: "Default",
  args: {
    quote: "The only thing we have to fear is fear itself",
  },
  tags: ['!autodocs'],
};
