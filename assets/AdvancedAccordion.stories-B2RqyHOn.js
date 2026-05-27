import t from"./AdvancedAccordion-DPflLclV.js";import"./iframe-Dexjh89f.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-Cnk0Lk5N.js";import"./Icon-C8H6A5cT.js";import"./ComponentRouter-DwdshAhx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-Bm1vC-le.js";import"./Context-u7InRh0Z.js";import"./TextGroup-PXVNJR4P.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CpP9Kt1U.js";import"./Button-D8yHTbe4.js";import"./Picture-BxsTEzVi.js";import"./HomeHero-BoDLrZdg.js";import"./HlsBackground-uGAVYXX6.js";import"./OverlayHero-BwwXIG7k.js";import"./Video-DpROo6Ui.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
