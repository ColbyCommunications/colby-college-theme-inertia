import{_ as s}from"./ColbyLogo-CQg9vJtx.js";import{A as l}from"./AthleticsLogo-CZTvxau5.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/Logos",tags:["autodocs"]},t={name:"Colby Logo (Dark)",render:()=>({components:{ColbyLogo:s},template:'<ColbyLogo url="/" fillColor="--color-indigo" />'}),play:async({canvasElement:o})=>{const e=o.querySelector("a");await r(e).toBeTruthy()}},n={name:"Colby Logo (White)",render:()=>({components:{ColbyLogo:s},template:'<div class="bg-indigo p-10"><ColbyLogo url="/" fillColor="--color-white" /></div>'}),play:async({canvasElement:o})=>{const e=o.querySelector("a");await r(e).toBeTruthy()}},a={name:"Athletics Logo",render:()=>({components:{AthleticsLogo:l},template:'<div class="relative bg-indigo p-10 h-20"><AthleticsLogo /></div>'}),play:async({canvasElement:o})=>{const e=o.querySelector("svg");await r(e).toBeTruthy()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    const link = canvasElement.querySelector("a");
    await expect(link).toBeTruthy();
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    const link = canvasElement.querySelector("a");
    await expect(link).toBeTruthy();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    const svg = canvasElement.querySelector("svg");
    await expect(svg).toBeTruthy();
  }
}`,...a.parameters?.docs?.source}}};const d=["ColbyLogoDark","ColbyLogoWhite","AthleticsLogoDefault"];export{a as AthleticsLogoDefault,t as ColbyLogoDark,n as ColbyLogoWhite,d as __namedExportsOrder,y as default};
