import t from"./Paragraph-Dupz-nYm.js";import"./iframe-D1TRqHE-.js";import"./preload-helper-CNn__nYE.js";import"./ButtonGroup-BEqEnnhX.js";import"./Button-CVTvSmCO.js";import"./TextGroup-BXXXlLUd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:p}=__STORYBOOK_MODULE_TEST__,n={title:"Core Components/Paragraph",component:t,tags:["autodocs"]},e={name:"Default",args:{paragraph_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis."},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,n as default};
