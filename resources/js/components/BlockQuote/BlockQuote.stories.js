import BlockQuote from "./BlockQuote.vue";
import { expect } from "storybook/test";

export default {
  title: "Core Components/Block Quote",
  component: BlockQuote,
};

export const Primary = {
  name: "Default",
  args: {
    quote: "The only thing we have to fear is fear itself",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("The only thing we have to fear is fear itself"),
    ).toBeInTheDocument();
  },
};
