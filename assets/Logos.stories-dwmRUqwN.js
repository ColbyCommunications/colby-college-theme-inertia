import{_ as a}from"./ColbyLogo-WDpBipLr.js";import{A as s}from"./AthleticsLogo-DE0zNGpw.js";import"./iframe-BgQXPfKC.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:p}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Logos",tags:["autodocs"]},o={name:"Colby Logo (Dark)",render:()=>({components:{ColbyLogo:a},template:'<ColbyLogo url="/" fillColor="--color-indigo" />'}),play:async({canvasElement:r})=>{}},e={name:"Colby Logo (White)",render:()=>({components:{ColbyLogo:a},template:'<div class="bg-indigo p-10"><ColbyLogo url="/" fillColor="--color-white" /></div>'}),play:async({canvasElement:r})=>{}},t={name:"Athletics Logo",render:()=>({components:{AthleticsLogo:s},template:'<div class="relative bg-indigo p-10 h-20"><AthleticsLogo /></div>'}),play:async({canvasElement:r})=>{}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ColbyLogoDark","ColbyLogoWhite","AthleticsLogoDefault"];export{t as AthleticsLogoDefault,o as ColbyLogoDark,e as ColbyLogoWhite,y as __namedExportsOrder,g as default};
