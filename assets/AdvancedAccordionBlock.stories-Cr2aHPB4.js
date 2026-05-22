import i from"./AdvancedAccordion-C7v0Uz2o.js";import"./iframe-DIN3921Q.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-D1NgPHiN.js";import"./Icon-BZ3D5eWD.js";import"./ComponentRouter-Cnp-c8J9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-CJbOQeBH.js";import"./Context-BEbJ65ju.js";import"./TextGroup-Q1FxYWTn.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-ChnjIgdb.js";import"./Button-D9tmgkZX.js";import"./Picture-8eiS2Juw.js";import"./HomeHero-Ch56BNn3.js";import"./HlsBackground-DECjvy8n.js";import"./OverlayHero-BcJRvDBK.js";import"./Video-CBD5jNrk.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,_={title:"Blocks/Advanced Accordion",component:i,tags:["!autodocs"]},t={name:"Advanced Accordion",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:e,userEvent:a})=>{await n(e.getByText("What is the application deadline?")).toBeInTheDocument(),await n(e.getByText("What standardized tests are required?")).toBeInTheDocument(),await n(e.getByText("How do I schedule a campus visit?")).toBeInTheDocument();const o=e.getAllByRole("button");await a.click(o[0])}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
