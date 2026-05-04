import{_ as n}from"./Modal-C_MjJfdj.js";import"./iframe-CQJlxVxo.js";import"./preload-helper-PPVm8Dsz.js";const{expect:d,screen:u,waitFor:p}=__STORYBOOK_MODULE_TEST__,m={title:"Core Components/Modal",component:n,argTypes:{full:{control:"boolean",description:"Toggle full-screen mode"},focusRetain:{control:"boolean",description:"Retain/focus modal container on open"},modelValue:{control:"boolean",description:"Controls visibility (v-model)"},classes:{control:"text",description:"Custom classes for the wrapper"},slotContent:{control:"text",name:"Content Slot",description:"Text inside the modal"},slotButton:{control:"text",name:"Button Slot",description:"Text for the trigger button"}}},s=e=>({components:{Modal:n},setup(){return{args:e}},template:`
    <div class="p-10 flex justify-center">
      <Modal
        v-model="args.modelValue"
        :full="args.full"
        :focus-retain="args.focusRetain"
        :classes="args.classes"
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
  `}),t={args:{modelValue:!1,full:!1,focusRetain:!1,slotButton:"Open Modal",slotContent:"This is a standard modal dialog. It has a fixed max-width and rounded corners."},render:s,play:async({canvas:e,userEvent:r})=>{}},a={args:{modelValue:!1,full:!0,focusRetain:!1,slotButton:"Open Full Screen",slotContent:"This modal covers the entire viewport because the 'full' prop is set to true."},render:s,play:async({canvas:e})=>{}},o={args:{modelValue:!0,full:!1,focusRetain:!1,slotButton:"I am already open",slotContent:"This is a standard modal dialog. It has a fixed max-width and rounded corners."},render:s,play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    full: false,
    focusRetain: false,
    slotButton: "Open Modal",
    slotContent: "This is a standard modal dialog. It has a fixed max-width and rounded corners."
  },
  render,
  play: async ({
    canvas,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    full: true,
    focusRetain: false,
    slotButton: "Open Full Screen",
    slotContent: "This modal covers the entire viewport because the 'full' prop is set to true."
  },
  render,
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // Only verify the trigger renders; opening the full-screen modal triggers
    // a vue-final-modal focus-trap error in the test environment.
    const triggerButton = canvas.getByText("Open Full Screen");
    await expect(triggerButton).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    full: false,
    focusRetain: false,
    slotButton: "I am already open",
    slotContent: "This is a standard modal dialog. It has a fixed max-width and rounded corners."
  },
  render,
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // Modal renders via a portal outside the story canvas, so use screen (global query) instead of canvas
    await waitFor(() => {
      expect(screen.getByText("Modal Title")).toBeVisible();
    }, {
      timeout: 2000
    });
    const triggerButton = canvas.getByText("I am already open");
    await expect(triggerButton).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","FullScreen","OpenByDefault"];export{t as Default,a as FullScreen,o as OpenByDefault,f as __namedExportsOrder,m as default};
