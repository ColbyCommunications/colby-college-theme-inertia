import { expect } from "storybook/test";
import AnimatedBorder from "./AnimatedBorder.vue";

export default {
  title: "Core Components/Animated Border",
  component: AnimatedBorder,
  argTypes: {
    color: {
      control: "select",
      options: ["bg-azure", "bg-indigo"],
    },
  },
};

export const Primary = {
  args: {
    color: "bg-azure",
  },
  render: (args) => ({
    components: { AnimatedBorder },
    setup() {
      return { args };
    },
    template: `
      <div>
      <div style="height: 25vh;"></div>
       <AnimatedBorder
          :class="['block col-span-12 w-0 h-px', args.color]"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const border = canvasElement.querySelector("[class*='col-span-12']");
    await expect(border).not.toBeNull();
  },
};
