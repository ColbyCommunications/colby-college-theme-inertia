import o from"./Paragraph-D8elJT1d.js";import"./iframe-39R7LRN1.js";import"./preload-helper-DmLEtdH0.js";import"./ButtonGroup-DAetcp4H.js";import"./Button-4-wOrEpL.js";import"./TextGroup-CcG_xy5d.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:n,waitFor:s}=__STORYBOOK_MODULE_TEST__,h={title:"Blocks/Paragraph",component:o,tags:["!autodocs"],argTypes:{paragraph_text:{name:"Text",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",table:{category:"Wordpress Fields"}}}},r="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.",a={name:"Paragraph",args:{paragraph_text:r},play:async({canvas:t})=>{await n(t.getByText(r)).toBeInTheDocument()}},e={name:"With Buttons",args:{paragraph_text:r,buttons:[{button:{url:"#",title:"Learn More",target:""}}]},play:async({canvas:t})=>{await n(t.getByText(r)).toBeInTheDocument(),await s(async()=>{await n(t.getByText("Learn More")).toBeVisible()},{timeout:3e3})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Paragraph",
  args: {
    paragraph_text: paragraphText
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(paragraphText)).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "With Buttons",
  args: {
    paragraph_text: paragraphText,
    buttons: [{
      button: {
        url: "#",
        title: "Learn More",
        target: ""
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(paragraphText)).toBeInTheDocument();
    await waitFor(async () => {
      await expect(canvas.getByText("Learn More")).toBeVisible();
    }, {
      timeout: 3000
    });
  }
}`,...e.parameters?.docs?.source}}};const B=["Default","WithButtons"];export{a as Default,e as WithButtons,B as __namedExportsOrder,h as default};
