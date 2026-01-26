import Modal from "./Modal.vue"; // Adjust path as needed

export default {
  title: "Core Components/Modal",
  component: Modal,
  // Define controls for props and helper controls for slots
  argTypes: {
    full: { control: "boolean", description: "Toggle full-screen mode" },
    modelValue: {
      control: "boolean",
      description: "Controls visibility (v-model)",
    },
    classes: { control: "text", description: "Custom classes for the wrapper" },
    // Slot controls (helper args to inject text into templates)
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

const Template = (args) => ({
  components: { Modal },
  setup() {
    return { args };
  },
  // We use v-model="args.modelValue" to sync the open state with the Controls panel
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
export const Default = Template.bind({});
Default.args = {
  modelValue: false, // Start closed
  full: false,
  slotButton: "Open Modal",
  slotContent:
    "This is a standard modal dialog. It has a fixed max-width and rounded corners.",
};

// 2. Full Screen Modal
export const FullScreen = Template.bind({});
FullScreen.args = {
  modelValue: false,
  full: true,
  slotButton: "Open Full Screen",
  slotContent:
    "This modal covers the entire viewport because the 'full' prop is set to true.",
};

// 3. Pre-Opened
// Useful for visual regression testing or quick styling checks
export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  ...Default.args,
  modelValue: true,
  slotButton: "I am already open",
};
