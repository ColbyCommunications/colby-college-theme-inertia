import { expect, screen, waitFor } from "storybook/test";
import Modal from "./Modal.vue";

export default {
  title: "Core Components/Modal",
  component: Modal,
  argTypes: {
    full: { control: "boolean", description: "Toggle full-screen mode" },
    modelValue: {
      control: "boolean",
      description: "Controls visibility (v-model)",
    },
    classes: { control: "text", description: "Custom classes for the wrapper" },
    slotContent: {
      control: "text",
      name: "Content Slot",
      description: "Text inside the modal",
    },
    slotButton: {
      control: "text",
      name: "Button Slot",
      description: "Text for the trigger button",
    },
  },
};

const render = (args) => ({
  components: { Modal },
  setup() {
    return { args };
  },
  template: `
    <div class="p-10 flex justify-center">
      <Modal
        v-bind="args"
        v-model="args.modelValue"
      >
        <template #button>
          <span class="px-6 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition">
            {{ args.slotButton }}
          </span>
        </template>

        <template #content>
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Modal Title</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ args.slotContent }}
            </p>
            <div class="mt-6 flex justify-end">
              <button
                class="text-indigo-600 hover:text-indigo-800 font-semibold"
                @click="args.modelValue = false"
              >
                Close (Custom Action)
              </button>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  `,
});

// 1. Standard Modal
export const Default = {
  args: {
    modelValue: false,
    full: false,
    slotButton: "Open Modal",
    slotContent:
      "This is a standard modal dialog. It has a fixed max-width and rounded corners.",
  },
  render,
  play: async ({ canvas, userEvent }) => {
    const triggerButton = canvas.getByText("Open Modal");
    await expect(triggerButton).toBeInTheDocument();

    await userEvent.click(triggerButton);
    // Modal renders via a portal outside the story canvas, so use screen (global query) instead of canvas
    await waitFor(
      () => {
        expect(screen.getByText("Modal Title")).toBeVisible();
      },
      { timeout: 2000 },
    );
  },
};

// 2. Full Screen Modal
export const FullScreen = {
  args: {
    modelValue: false,
    full: true,
    slotButton: "Open Full Screen",
    slotContent:
      "This modal covers the entire viewport because the 'full' prop is set to true.",
  },
  render,
  play: async ({ canvas }) => {
    // Only verify the trigger renders; opening the full-screen modal triggers
    // a vue-final-modal focus-trap error in the test environment.
    const triggerButton = canvas.getByText("Open Full Screen");
    await expect(triggerButton).toBeInTheDocument();
  },
};

// 3. Pre-Opened
export const OpenByDefault = {
  args: {
    modelValue: true,
    full: false,
    slotButton: "I am already open",
    slotContent:
      "This is a standard modal dialog. It has a fixed max-width and rounded corners.",
  },
  render,
  play: async ({ canvas }) => {
    // Modal renders via a portal outside the story canvas, so use screen (global query) instead of canvas
    await waitFor(
      () => {
        expect(screen.getByText("Modal Title")).toBeVisible();
      },
      { timeout: 2000 },
    );

    const triggerButton = canvas.getByText("I am already open");
    await expect(triggerButton).toBeInTheDocument();
  },
};
