import{_ as a}from"./BlockQuote-DZN46b1m.js";import"./iframe-BwF8kxoK.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,i={title:"Core Components/Block Quote",component:a},e={name:"Default",args:{quote:"The only thing we have to fear is fear itself"},play:async({canvas:t})=>{await o(t.getByText("The only thing we have to fear is fear itself")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    quote: "The only thing we have to fear is fear itself"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("The only thing we have to fear is fear itself")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,i as default};
