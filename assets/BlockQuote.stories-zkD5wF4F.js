import{_ as t}from"./BlockQuote-B1lS5SEY.js";import"./iframe-BgQXPfKC.js";import"./preload-helper-PPVm8Dsz.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,c={title:"Core Components/Block Quote",component:t},e={name:"Default",args:{quote:"The only thing we have to fear is fear itself"},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    quote: "The only thing we have to fear is fear itself"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("The only thing we have to fear is fear itself")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const i=["Primary"];export{e as Primary,i as __namedExportsOrder,c as default};
