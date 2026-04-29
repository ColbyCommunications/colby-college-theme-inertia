import r from"./Paragraph-DkHKxQfY.js";import"./iframe-0N6o4Hv8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-DoCPrjsL.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,m={title:"Blocks/Paragraph",component:r,tags:["!autodocs"],argTypes:{paragraph_text:{name:"Text",control:"text",table:{category:"Wordpress Fields"}}}},e={name:"Paragraph",args:{paragraph_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis."},play:async({canvas:t})=>{await a(t.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Paragraph",
  args: {
    paragraph_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,m as default};
