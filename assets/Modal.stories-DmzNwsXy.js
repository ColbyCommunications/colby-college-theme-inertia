import{_ as s}from"./Modal-CfVtmXx_.js";import"./iframe-g8QkBjID.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Core Components/Modal",component:s,argTypes:{full:{control:"boolean",description:"Toggle full-screen mode"},modelValue:{control:"boolean",description:"Controls visibility (v-model)"},classes:{control:"text",description:"Custom classes for the wrapper"},slotContent:{control:"text",name:"Content Slot",description:"Text inside the modal"},slotButton:{control:"text",name:"Button Slot",description:"Text for the trigger button"}}},o=l=>({components:{Modal:s},setup(){return{args:l}},template:`
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
  `}),t=o.bind({});t.args={modelValue:!1,full:!1,slotButton:"Open Modal",slotContent:"This is a standard modal dialog. It has a fixed max-width and rounded corners."};const e=o.bind({});e.args={modelValue:!1,full:!0,slotButton:"Open Full Screen",slotContent:"This modal covers the entire viewport because the 'full' prop is set to true."};const n=o.bind({});n.args={...t.args,modelValue:!0,slotButton:"I am already open"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Modal
  },
  setup() {
    return {
      args
    };
  },
  // We use v-model="args.modelValue" to sync the open state with the Controls panel
  template: \`
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
  \`
})`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Modal
  },
  setup() {
    return {
      args
    };
  },
  // We use v-model="args.modelValue" to sync the open state with the Controls panel
  template: \`
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
  \`
})`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Modal
  },
  setup() {
    return {
      args
    };
  },
  // We use v-model="args.modelValue" to sync the open state with the Controls panel
  template: \`
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
  \`
})`,...n.parameters?.docs?.source}}};const p=["Default","FullScreen","OpenByDefault"];export{t as Default,e as FullScreen,n as OpenByDefault,p as __namedExportsOrder,i as default};
