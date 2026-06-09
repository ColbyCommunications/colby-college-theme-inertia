import t from"./AdvancedAccordion-ZSH0j594.js";import"./iframe-DICbE6rK.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-CUZ7spXu.js";import"./Icon-Cg6YRNNe.js";import"./ComponentRouter-C1yIWZGM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-H1hHe7P2.js";import"./Context-S0l-2h8U.js";import"./TextGroup-CEFK4Axj.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DToTJN4L.js";import"./Button-T82--6lM.js";import"./Picture-CxV1Uol8.js";import"./HomeHero-DGZCWotp.js";import"./HlsBackground-BfH9wqwZ.js";import"./OverlayHero-B7VbNu7t.js";import"./Video-DM1bLHbb.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
