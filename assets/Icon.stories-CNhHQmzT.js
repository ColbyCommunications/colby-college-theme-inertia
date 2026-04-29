import{_ as i}from"./Icon-c0bLvYw7.js";import"./iframe-YkMtoKZp.js";import"./preload-helper-PPVm8Dsz.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Icons",component:i},t={args:{name:"fax"},render:e=>({components:{Icon:i},setup(){return{args:e}},template:`
        <div style="display: flex;">
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'fax'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'phone'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'instagram'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'email'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'chevron'" /></div>
        </div>
      `}),play:async({canvasElement:e})=>{}},n={name:"Invalid Icon Name",render:()=>({components:{Icon:i},template:'<div style="width: 48px; height: 48px;"><Icon name="nonexistent-icon-xyz" /></div>'}),play:async({canvasElement:e})=>{}},a={name:"Empty Name",render:()=>({components:{Icon:i},template:'<div style="width: 48px; height: 48px;"><Icon name="" /></div>'}),play:async({canvasElement:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    const iconContainers = canvasElement.querySelectorAll('div[style*="width: 48px"]');
    await expect(iconContainers.length).toBe(5);
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    const container = canvasElement.querySelector("div");
    await expect(container).not.toBeNull();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    const container = canvasElement.querySelector("div");
    await expect(container).not.toBeNull();
  }
}`,...a.parameters?.docs?.source}}};const c=["Primary","InvalidName","EmptyName"];export{a as EmptyName,n as InvalidName,t as Primary,c as __namedExportsOrder,p as default};
