import t from"./AdvancedAccordion-DDBqx0LK.js";import"./iframe-BnJGupwc.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-BLIPh6yr.js";import"./Icon-CSfpvrBh.js";import"./ComponentRouter-BOHMXs0M.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-BuBPoFr2.js";import"./Context-Ci8rrjN9.js";import"./TextGroup-D_U8savK.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CRMEvZTi.js";import"./Button-BoIOZF_O.js";import"./Picture-CJb3175J.js";import"./HomeHero-DjQw8uGb.js";import"./HlsBackground-BujbD5EI.js";import"./OverlayHero-CB9FXT5E.js";import"./Video-COo0Xs6Y.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
