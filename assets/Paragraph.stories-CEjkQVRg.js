import t from"./Paragraph-CVV0uxUj.js";import"./iframe-DB-IlEva.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-D8Nnlgfk.js";import"./Button-Cgl1rc3T.js";import"./TextGroup-DdPHF-Hr.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,n={title:"Core Components/Paragraph",component:t,tags:["autodocs"]},e={name:"Default",args:{paragraph_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis."},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    paragraph_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,n as default};
