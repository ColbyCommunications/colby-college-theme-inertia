import{_ as t}from"./BlockQuote-DYlKMZe6.js";import"./iframe-CbvIQUE5.js";import"./preload-helper-DmLEtdH0.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,c={title:"Core Components/Block Quote",component:t},e={name:"Default",args:{quote:"The only thing we have to fear is fear itself"},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
