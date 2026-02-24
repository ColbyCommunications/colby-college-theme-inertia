import { expect } from "storybook/test";
import Icon from "./Icon.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Icons",
  component: Icon,
};

export const Primary = {
  args: { name: "fax" },
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args };
    },
    template: `
        <div style="display: flex;">
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'fax'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'phone'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'instagram'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'email'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'chevron'" /></div>
        </div>
      `,
  }),
  play: async ({ canvasElement }) => {
    const iconContainers = canvasElement.querySelectorAll(
      'div[style*="width: 48px"]',
    );
    await expect(iconContainers.length).toBe(5);
  },
};

export const InvalidName = {
  name: "Invalid Icon Name",
  render: () => ({
    components: { Icon },
    template: '<div style="width: 48px; height: 48px;"><Icon name="nonexistent-icon-xyz" /></div>',
  }),
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector("div");
    await expect(container).not.toBeNull();
  },
};

export const EmptyName = {
  name: "Empty Name",
  render: () => ({
    components: { Icon },
    template: '<div style="width: 48px; height: 48px;"><Icon name="" /></div>',
  }),
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector("div");
    await expect(container).not.toBeNull();
  },
};
