import{_ as a}from"./Search-B50fQZ1k.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-u50yI3p6.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Search",component:a,parameters:{backgrounds:{default:"light"}}},o=t=>({components:{Search:a},setup(){return{args:t}},template:'<Search v-bind="args" />'}),e={args:{},render:o,play:async({canvas:t})=>{await r(t.getByText("What are you looking for?")).toBeVisible()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  render,
  play: async ({
    canvas
  }) => {
    // Assert the prompt text is visible (skip Algolia interaction)
    await expect(canvas.getByText("What are you looking for?")).toBeVisible();
  }
}`,...e.parameters?.docs?.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,p as default};
