import t from"./AdvancedAccordion-DaLx1XHv.js";import"./iframe-CLBMR5NA.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-8d7dZBuL.js";import"./Icon-BdkwpNfT.js";import"./ComponentRouter-BwR_n91X.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-CEZ-t2dg.js";import"./Context-LLpQe4QK.js";import"./TextGroup-B6w_lD0A.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DbQqC42i.js";import"./Button-B44w8G7S.js";import"./Picture-YG75oZ0D.js";import"./HomeHero-CHLj8S3r.js";import"./HlsBackground-CDZIFijs.js";import"./OverlayHero-D93cbYEj.js";import"./Video-CRFc8Is7.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
