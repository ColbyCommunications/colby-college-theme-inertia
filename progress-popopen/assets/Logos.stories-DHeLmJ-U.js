import{_ as r}from"./ColbyLogo-DYgzEsBm.js";import{A as a}from"./AthleticsLogo-HsTjdNsP.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:p}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Logos",tags:["autodocs"]},o={name:"Colby Logo (Dark)",render:()=>({components:{ColbyLogo:r},template:'<ColbyLogo url="/" fillColor="--color-indigo" />'}),play:async({canvasElement:t})=>{}},e={name:"Colby Logo (White)",render:()=>({components:{ColbyLogo:r},template:'<div class="bg-indigo p-10"><ColbyLogo url="/" fillColor="--color-white" /></div>'}),play:async({canvasElement:t})=>{}},n={name:"Athletics Logo",render:()=>({components:{AthleticsLogo:a},template:'<div class="relative bg-indigo p-10 h-20"><AthleticsLogo /></div>'}),play:async({canvasElement:t})=>{}},y=["ColbyLogoDark","ColbyLogoWhite","AthleticsLogoDefault"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Colby Logo (Dark)",
  render: () => ({
    components: {
      ColbyLogo
    },
    template: '<ColbyLogo url="/" fillColor="--color-indigo" />'
  }),
  play: async ({
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvasElement.querySelector("a");
    await expect(link).toBeTruthy();
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Colby Logo (White)",
  render: () => ({
    components: {
      ColbyLogo
    },
    template: '<div class="bg-indigo p-10"><ColbyLogo url="/" fillColor="--color-white" /></div>'
  }),
  play: async ({
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvasElement.querySelector("a");
    await expect(link).toBeTruthy();
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Athletics Logo",
  render: () => ({
    components: {
      AthleticsLogo
    },
    template: '<div class="relative bg-indigo p-10 h-20"><AthleticsLogo /></div>'
  }),
  play: async ({
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const svg = canvasElement.querySelector("svg");
    await expect(svg).toBeTruthy();
  }
}`,...n.parameters?.docs?.source}}};export{n as AthleticsLogoDefault,o as ColbyLogoDark,e as ColbyLogoWhite,y as __namedExportsOrder,g as default};
