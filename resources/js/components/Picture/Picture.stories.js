import { expect } from "storybook/test";
import Picture from "./Picture.vue";

export default {
  title: "Core Components/Picture",
  component: Picture,
};

export const Primary = {
  args: {
    alt: "this is an alt",
    class: "w-full h-auto rounded",
    sizeMobile: "https://placehold.co/600x400/gray/white?text=Mobile+Size",
    sizeDesktop: "https://placehold.co/1200x600/gray/white?text=Desktop+Size",
  },
  render: (args) => ({
    components: { Picture },
    setup() {
      return { args };
    },
    template: `
        <Picture v-bind="args" />
      `,
  }),
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("this is an alt")).toBeInTheDocument();
  },
};
