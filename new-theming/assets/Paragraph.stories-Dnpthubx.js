import t from"./Paragraph-DvCaD08-.js";import"./iframe-CnrjvFls.js";import"./preload-helper-DmLEtdH0.js";import"./ButtonGroup-DkbncDde.js";import"./Button-7VUkjaD3.js";import"./TextGroup-CmaI_y-9.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,n={title:"Core Components/Paragraph",component:t,tags:["autodocs"]},e={name:"Default",args:{paragraph_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis."},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
