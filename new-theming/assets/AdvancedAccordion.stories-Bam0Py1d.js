import t from"./AdvancedAccordion-CxaLzxJ1.js";import"./iframe-974SVNrB.js";import"./preload-helper-DmLEtdH0.js";import"./AdvancedAccordionPanel-BEp9Qbzt.js";import"./Icon-IzBgpnxD.js";import"./ComponentRouter-L3-hXn9o.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-DPuWhUYK.js";import"./Context-azuWemlN.js";import"./TextGroup-DPiV4w1S.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-cWZ4qCHT.js";import"./Button-CGiYW2-U.js";import"./Picture-eASRMUGg.js";import"./HomeHero-qFULHkpS.js";import"./HlsBackground-CHIrX5v-.js";import"./OverlayHero-DASAfra6.js";import"./Video-DY7kH4zV.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
