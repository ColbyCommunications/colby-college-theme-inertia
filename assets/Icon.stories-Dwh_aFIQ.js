import{_ as o}from"./Icon-BG0snce_.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,m={title:"Core Components/Icons",component:o},t={args:{name:"fax"},render:n=>({components:{Icon:o},setup(){return{args:n}},template:`
        <div style="display: flex;">
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'fax'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'phone'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'instagram'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'email'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'chevron'" /></div>
        </div>
      `}),play:async({canvasElement:n})=>{const e=n.querySelectorAll('div[style*="width: 48px"]');await r(e.length).toBe(5)}},a={name:"Invalid Icon Name",render:()=>({components:{Icon:o},template:'<div style="width: 48px; height: 48px;"><Icon name="nonexistent-icon-xyz" /></div>'}),play:async({canvasElement:n})=>{const e=n.querySelector("div");await r(e).not.toBeNull()}},i={name:"Empty Name",render:()=>({components:{Icon:o},template:'<div style="width: 48px; height: 48px;"><Icon name="" /></div>'}),play:async({canvasElement:n})=>{const e=n.querySelector("div");await r(e).not.toBeNull()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: "fax"
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <div style="display: flex;">
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'fax'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'phone'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'instagram'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'email'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'chevron'" /></div>
        </div>
      \`
  }),
  play: async ({
    canvasElement
  }) => {
    const iconContainers = canvasElement.querySelectorAll('div[style*="width: 48px"]');
    await expect(iconContainers.length).toBe(5);
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Invalid Icon Name",
  render: () => ({
    components: {
      Icon
    },
    template: '<div style="width: 48px; height: 48px;"><Icon name="nonexistent-icon-xyz" /></div>'
  }),
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector("div");
    await expect(container).not.toBeNull();
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Empty Name",
  render: () => ({
    components: {
      Icon
    },
    template: '<div style="width: 48px; height: 48px;"><Icon name="" /></div>'
  }),
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector("div");
    await expect(container).not.toBeNull();
  }
}`,...i.parameters?.docs?.source}}};const d=["Primary","InvalidName","EmptyName"];export{i as EmptyName,a as InvalidName,t as Primary,d as __namedExportsOrder,m as default};
