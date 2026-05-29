import i from"./AdvancedAccordion-J7CqRX3K.js";import"./iframe-BeFdV9vL.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-Biy7lfeN.js";import"./Icon-XHdq_rnJ.js";import"./ComponentRouter-ZEOE0NZW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-BJMnL-wP.js";import"./Context-BwyKCd7H.js";import"./TextGroup-lkErle6S.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-FYF5r83H.js";import"./Button-DKS7ljQH.js";import"./Picture-E7nEjJJp.js";import"./HomeHero-YXWFkm72.js";import"./HlsBackground-DNLXnkJS.js";import"./OverlayHero-DLjKAw_N.js";import"./Video-Cr-HJkU1.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,_={title:"Blocks/Advanced Accordion",component:i,tags:["!autodocs"]},t={name:"Advanced Accordion",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:e,userEvent:a})=>{await n(e.getByText("What is the application deadline?")).toBeInTheDocument(),await n(e.getByText("What standardized tests are required?")).toBeInTheDocument(),await n(e.getByText("How do I schedule a campus visit?")).toBeInTheDocument();const o=e.getAllByRole("button");await a.click(o[0])}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Advanced Accordion",
  args: {
    panels: [{
      heading: "What is the application deadline?",
      content: "<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"
    }, {
      heading: "What standardized tests are required?",
      content: "<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"
    }, {
      heading: "How do I schedule a campus visit?",
      content: "<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"
    }]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("What is the application deadline?")).toBeInTheDocument();
    await expect(canvas.getByText("What standardized tests are required?")).toBeInTheDocument();
    await expect(canvas.getByText("How do I schedule a campus visit?")).toBeInTheDocument();

    // Click first panel to trigger onPanelToggle
    const buttons = canvas.getAllByRole("button");
    await userEvent.click(buttons[0]);
  }
}`,...t.parameters?.docs?.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,_ as default};
