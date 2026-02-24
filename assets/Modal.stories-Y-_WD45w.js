import{_ as i}from"./Modal-DGXlUgKX.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const{expect:n,screen:d,waitFor:c}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Modal",component:i,argTypes:{full:{control:"boolean",description:"Toggle full-screen mode"},modelValue:{control:"boolean",description:"Controls visibility (v-model)"},classes:{control:"text",description:"Custom classes for the wrapper"},slotContent:{control:"text",name:"Content Slot",description:"Text inside the modal"},slotButton:{control:"text",name:"Button Slot",description:"Text for the trigger button"}}},r=e=>({components:{Modal:i},setup(){return{args:e}},template:`
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
  `}),o={args:{modelValue:!1,full:!1,slotButton:"Open Modal",slotContent:"This is a standard modal dialog. It has a fixed max-width and rounded corners."},render:r,play:async({canvas:e,userEvent:t})=>{const l=e.getByText("Open Modal");await n(l).toBeInTheDocument(),await t.click(l),await c(()=>{n(d.getByText("Modal Title")).toBeVisible()},{timeout:2e3})}},a={args:{modelValue:!1,full:!0,slotButton:"Open Full Screen",slotContent:"This modal covers the entire viewport because the 'full' prop is set to true."},render:r,play:async({canvas:e})=>{const t=e.getByText("Open Full Screen");await n(t).toBeInTheDocument()}},s={args:{modelValue:!0,full:!1,slotButton:"I am already open",slotContent:"This is a standard modal dialog. It has a fixed max-width and rounded corners."},render:r,play:async({canvas:e})=>{await c(()=>{n(d.getByText("Modal Title")).toBeVisible()},{timeout:2e3});const t=e.getByText("I am already open");await n(t).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    full: false,
    slotButton: "Open Modal",
    slotContent: "This is a standard modal dialog. It has a fixed max-width and rounded corners."
  },
  render,
  play: async ({
    canvas,
    userEvent
  }) => {
    const triggerButton = canvas.getByText("Open Modal");
    await expect(triggerButton).toBeInTheDocument();
    await userEvent.click(triggerButton);
    // Modal renders via a portal outside the story canvas, so use screen (global query) instead of canvas
    await waitFor(() => {
      expect(screen.getByText("Modal Title")).toBeVisible();
    }, {
      timeout: 2000
    });
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    full: true,
    slotButton: "Open Full Screen",
    slotContent: "This modal covers the entire viewport because the 'full' prop is set to true."
  },
  render,
  play: async ({
    canvas
  }) => {
    // Only verify the trigger renders; opening the full-screen modal triggers
    // a vue-final-modal focus-trap error in the test environment.
    const triggerButton = canvas.getByText("Open Full Screen");
    await expect(triggerButton).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    full: false,
    slotButton: "I am already open",
    slotContent: "This is a standard modal dialog. It has a fixed max-width and rounded corners."
  },
  render,
  play: async ({
    canvas
  }) => {
    // Modal renders via a portal outside the story canvas, so use screen (global query) instead of canvas
    await waitFor(() => {
      expect(screen.getByText("Modal Title")).toBeVisible();
    }, {
      timeout: 2000
    });
    const triggerButton = canvas.getByText("I am already open");
    await expect(triggerButton).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","FullScreen","OpenByDefault"];export{o as Default,a as FullScreen,s as OpenByDefault,f as __namedExportsOrder,g as default};
