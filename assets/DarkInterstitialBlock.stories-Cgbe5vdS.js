import r from"./DarkInterstitial-D7hWXefK.js";import"./iframe-3sEi0eTh.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-DxsAmysj.js";import"./TextGroup-Bz1jVrJj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DyPH3ZN2.js";import"./Button-DwMN5f-Z.js";import"./Picture-CgVeth7Z.js";import"./index-D4-8ALNT.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,h={title:"Blocks/Dark Interstitial",component:r,tags:["!autodocs"],argTypes:{icon:{name:"Icon",control:"boolean",table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},facts:{name:"Facts",control:"object",table:{category:"Wordpress Fields"}},images:{name:"Images",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Dark Interstitial",args:{icon:!0,subheading:"Lorem ipsum",heading:"Lorem ipsum",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:t})=>{const a=t.getAllByText("Lorem ipsum");await o(a.length).toBeGreaterThanOrEqual(2),await o(t.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const y=["Primary"];export{e as Primary,y as __namedExportsOrder,h as default};
