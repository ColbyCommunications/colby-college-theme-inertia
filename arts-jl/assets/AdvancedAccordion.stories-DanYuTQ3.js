import t from"./AdvancedAccordion-DuYNnRb9.js";import"./iframe-C9OBhi-4.js";import"./preload-helper-Nb-6AGzV.js";import"./AdvancedAccordionPanel-BKrDHrFA.js";import"./Icon-DNke4jh8.js";import"./ComponentRouter-JcWNEDH8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-BrSqw5Je.js";import"./Context-C1ZUlKK0.js";import"./TextGroup-D0FdCONB.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-CsdjN3XP.js";import"./Button-MwIR3mEA.js";import"./Picture-DoapttFC.js";import"./HomeHero-DCgRmjhd.js";import"./HlsBackground-DYyUtp-2.js";import"./OverlayHero-Bm4AQLRy.js";import"./Video-BahSYe_e.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:E}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,_ as default};
