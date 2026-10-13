import{_ as i}from"./Icon-Reaz2zb1.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Icons",component:i},e={args:{name:"fax"},render:n=>({components:{Icon:i},setup(){return{args:n}},template:`
        <div style="display: flex;">
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'fax'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'phone'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'instagram'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'email'" /></div>
            <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'chevron'" /></div>
        </div>
      `}),play:async({canvasElement:n})=>{}},t={name:"Invalid Icon Name",render:()=>({components:{Icon:i},template:'<div style="width: 48px; height: 48px;"><Icon name="nonexistent-icon-xyz" /></div>'}),play:async({canvasElement:n})=>{}},a={name:"Empty Name",render:()=>({components:{Icon:i},template:'<div style="width: 48px; height: 48px;"><Icon name="" /></div>'}),play:async({canvasElement:n})=>{}},c=["Primary","InvalidName","EmptyName"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{a as EmptyName,t as InvalidName,e as Primary,c as __namedExportsOrder,p as default};
