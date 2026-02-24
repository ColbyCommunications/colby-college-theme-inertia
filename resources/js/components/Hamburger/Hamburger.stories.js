import { expect } from "storybook/test";
import Hamburger from "./Hamburger.vue";

export default {
  title: "Core Components/Hamburger",
  component: Hamburger,
};

export const Primary = {
  args: {},
  render: (args) => ({
    components: { Hamburger },
    setup() {
      return { args };
    },
    template: `
      <div>
          <p>Use the change viewport button above to demo this component</p>
          <Hamburger />
      </div>
    `,
  }),
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByLabelText("Toggle menu");
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(button);
    await expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(button);
    await expect(button).toHaveAttribute("aria-expanded", "false");
  },
};
