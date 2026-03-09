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
       <AnimatedBorder/>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const border = canvasElement.querySelector("[class*='col-span-12']");
    await expect(border).not.toBeNull();
  },
  decorators: [
    () => ({
      setup() {
        // Set the global mock before the story renders
        window.colby = window.colby || {};
        window.colby.DISABLE_ANIMATIONS = false;
      },
      // Use the 'story' component provided by Storybook
      template: '<story />',
    }),
  ],
};

export const NoAnimation = {
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
        <AnimatedBorder />
      </div>
    `,
  }),
  decorators: [
    () => ({
      setup() {
        // Set the global mock before the story renders
        window.colby = window.colby || {};
        window.colby.DISABLE_ANIMATIONS = true;
      },
      // Use the 'story' component provided by Storybook
      template: '<story />',
    }),
  ],
};
