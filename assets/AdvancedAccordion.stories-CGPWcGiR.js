import t from"./AdvancedAccordion-BexbST9y.js";import"./iframe-Dcx2Cqm2.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-CCKjA96A.js";import"./Icon-BW5rqKg-.js";import"./ComponentRouter-B5yzEIqs.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-CVnlJQlM.js";import"./Context-CiW0P2Cn.js";import"./TextGroup-B-EjZ36w.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-tHj6i5w_.js";import"./Button-BOwIyUqU.js";import"./Picture-DQl5ART9.js";import"./HomeHero-CY5vrXmJ.js";import"./HlsBackground-CKfE35aG.js";import"./OverlayHero-DaHc6a2h.js";import"./Video-BX7wQoo8.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
