import t from"./AdvancedAccordion-DVV3pmzS.js";import"./iframe-DFyA5U2M.js";import"./preload-helper-DmLEtdH0.js";import"./AdvancedAccordionPanel-DwWtjKb5.js";import"./Icon-DXuqEMm6.js";import"./ComponentRouter-BwQo1_B6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-DKHbmCfO.js";import"./Context-CsRHjFsa.js";import"./TextGroup-D7AQzRPJ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-D4v6exr0.js";import"./Button-BKrGXej8.js";import"./Picture-DY102DHN.js";import"./HomeHero-DhxLIeeV.js";import"./HlsBackground-CimABvrI.js";import"./OverlayHero-EFqL2JmX.js";import"./Video-BoTOhj-_.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
