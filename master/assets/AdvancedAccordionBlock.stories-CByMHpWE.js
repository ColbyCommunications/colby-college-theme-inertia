import i from"./AdvancedAccordion-DfwZdF8I.js";import"./iframe-BAs6q_sz.js";import"./preload-helper-CNn__nYE.js";import"./AdvancedAccordionPanel-BZbZhuT0.js";import"./Icon-CkWTyprp.js";import"./ComponentRouter-s2uu3iSG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-D0yTiZdW.js";import"./Context-r-673oOh.js";import"./TextGroup-DbWf8UBh.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DxPuqVAQ.js";import"./Button-99EF_HJL.js";import"./Picture-BPjJ_Tvf.js";import"./HomeHero-DV2xH5L1.js";import"./HlsBackground-CQ2fMX8O.js";import"./OverlayHero-QQUqehQd.js";import"./Video-kRGB3cVE.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,_={title:"Blocks/Advanced Accordion",component:i,tags:["!autodocs"]},t={name:"Advanced Accordion",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:e,userEvent:a})=>{await n(e.getByText("What is the application deadline?")).toBeInTheDocument(),await n(e.getByText("What standardized tests are required?")).toBeInTheDocument(),await n(e.getByText("How do I schedule a campus visit?")).toBeInTheDocument();const o=e.getAllByRole("button");await a.click(o[0])}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
