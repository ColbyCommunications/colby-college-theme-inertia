import t from"./AdvancedAccordion-C7v0Uz2o.js";import"./iframe-DIN3921Q.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-D1NgPHiN.js";import"./Icon-BZ3D5eWD.js";import"./ComponentRouter-Cnp-c8J9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-CJbOQeBH.js";import"./Context-BEbJ65ju.js";import"./TextGroup-Q1FxYWTn.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-ChnjIgdb.js";import"./Button-D9tmgkZX.js";import"./Picture-8eiS2Juw.js";import"./HomeHero-Ch56BNn3.js";import"./HlsBackground-DECjvy8n.js";import"./OverlayHero-BcJRvDBK.js";import"./Video-CBD5jNrk.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("What is the application deadline?")).toBeInTheDocument();
    await expect(canvas.getByText("What standardized tests are required?")).toBeInTheDocument();
    await expect(canvas.getByText("How do I schedule a campus visit?")).toBeInTheDocument();

    // Click first panel to trigger onPanelToggle
    const buttons = canvas.getAllByRole("button");
    await userEvent.click(buttons[0]);
  }
}`,...e.parameters?.docs?.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,E as default};
