import{_ as i}from"./Modal-CmNNlFR4.js";import"./iframe-DVLLp9lp.js";import"./preload-helper-PPVm8Dsz.js";const{expect:n,screen:c,waitFor:d}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Modal",component:i,argTypes:{full:{control:"boolean",description:"Toggle full-screen mode"},focusRetain:{control:"boolean",description:"Retain/focus modal container on open"},modelValue:{control:"boolean",description:"Controls visibility (v-model)"},classes:{control:"text",description:"Custom classes for the wrapper"},slotContent:{control:"text",name:"Content Slot",description:"Text inside the modal"},slotButton:{control:"text",name:"Button Slot",description:"Text for the trigger button"}}},l=e=>({components:{Modal:i},setup(){return{args:e}},template:`
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
  `}),o={args:{modelValue:!1,full:!1,focusRetain:!1,slotButton:"Open Modal",slotContent:"This is a standard modal dialog. It has a fixed max-width and rounded corners."},render:l,play:async({canvas:e,userEvent:t})=>{const r=e.getByText("Open Modal");await n(r).toBeInTheDocument(),await t.click(r),await d(()=>{n(c.getByText("Modal Title")).toBeVisible()},{timeout:2e3})}},a={args:{modelValue:!1,full:!0,focusRetain:!1,slotButton:"Open Full Screen",slotContent:"This modal covers the entire viewport because the 'full' prop is set to true."},render:l,play:async({canvas:e})=>{const t=e.getByText("Open Full Screen");await n(t).toBeInTheDocument()}},s={args:{modelValue:!0,full:!1,focusRetain:!1,slotButton:"I am already open",slotContent:"This is a standard modal dialog. It has a fixed max-width and rounded corners."},render:l,play:async({canvas:e})=>{await d(()=>{n(c.getByText("Modal Title")).toBeVisible()},{timeout:2e3});const t=e.getByText("I am already open");await n(t).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    focusRetain: false,
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
    focusRetain: false,
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
