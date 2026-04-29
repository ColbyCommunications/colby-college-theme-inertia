import r from"./DarkInterstitial-lyY7IhoJ.js";import"./iframe-0N6o4Hv8.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-COvLgF_a.js";import"./TextGroup-DoCPrjsL.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DaovXEXO.js";import"./Button-DSZAs70f.js";import"./Picture-Dnz64lhi.js";import"./index-D4-8ALNT.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,b={title:"Blocks/Dark Interstitial",component:r,tags:["!autodocs"],argTypes:{icon:{name:"Icon",control:"boolean",table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},facts:{name:"Facts",control:"object",table:{category:"Wordpress Fields"}},images:{name:"Images",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Dark Interstitial",args:{icon:!0,subheading:"Lorem ipsum",heading:"Lorem ipsum",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:t})=>{const o=t.getAllByText("Lorem ipsum");await a(o.length).toBeGreaterThanOrEqual(2),await a(t.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Dark Interstitial",
  args: {
    icon: true,
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const h=["Primary"];export{e as Primary,h as __namedExportsOrder,b as default};
