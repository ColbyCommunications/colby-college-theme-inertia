import t from"./AdvancedAccordion-CsRJ4xsu.js";import"./iframe-CY47nwoP.js";import"./preload-helper-DmLEtdH0.js";import"./AdvancedAccordionPanel-BKoFmePs.js";import"./Icon-BEDWyXuQ.js";import"./ComponentRouter-CA3Of67z.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-CbGOJG4V.js";import"./Context-WvD54V9n.js";import"./TextGroup-CNISaqJ4.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-NRnw2AVC.js";import"./Button-Dwr70A3O.js";import"./Picture-tccTaB_4.js";import"./HomeHero-LS1FQ3gz.js";import"./HlsBackground--2FIiKWw.js";import"./OverlayHero-e9VesuUi.js";import"./Video-DW6FvIN1.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
