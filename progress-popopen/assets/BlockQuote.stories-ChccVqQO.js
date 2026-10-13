import t from"./BlockQuote-bmaFhcmA.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:"Core Components/Block Quote",component:t},e={name:"Default",args:{quote:"The only thing we have to fear is fear itself"},play:async({canvas:a})=>{}},i=["Primary"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};export{e as Primary,i as __namedExportsOrder,c as default};
