import t from"./AdvancedAccordion-CHeUGFRs.js";import"./iframe-D-PRYcM1.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-2T8m9GVL.js";import"./Icon-BEiBsKgo.js";import"./ComponentRouter-BvZq6wt8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-CjapS2de.js";import"./Context-BqnrMBP6.js";import"./TextGroup-nT1GbHg8.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CexbGMf3.js";import"./Button-CAUQq-dM.js";import"./Picture-CvY7AVVW.js";import"./HomeHero-BGMfkBoc.js";import"./HlsBackground-QMjuXN0N.js";import"./OverlayHero-DFq7S94I.js";import"./Video-m1lJAoze.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
