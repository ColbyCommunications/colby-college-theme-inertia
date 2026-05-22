import t from"./AdvancedAccordion-C1Dlq_at.js";import"./iframe-5rNfxY4Q.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-Da9XOf9l.js";import"./Icon-oRx2isJ0.js";import"./ComponentRouter-DNp6IP0U.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-BSuQnR7H.js";import"./Context-DAzWuFy8.js";import"./TextGroup-D7qXRt5w.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Dwuxb6Iu.js";import"./Button-B-6zxQC3.js";import"./Picture-BpUAlf7c.js";import"./HomeHero-BlAAu2hf.js";import"./HlsBackground-DPh2ua_S.js";import"./OverlayHero-ByzZ9lEq.js";import"./Video-B52F_Thl.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
