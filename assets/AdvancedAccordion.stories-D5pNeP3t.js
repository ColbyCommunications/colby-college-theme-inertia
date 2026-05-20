import t from"./AdvancedAccordion-CN2kYpZu.js";import"./iframe-CKmhJ6Bl.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-7fnFoE5E.js";import"./Icon-CQJ8KUay.js";import"./ComponentRouter-6sqd3Uue.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-B2Lu4u_p.js";import"./Context-CVC3v1qH.js";import"./TextGroup-BWvaZwE3.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-D678G-h0.js";import"./Button-DdgAeBT9.js";import"./Picture-CUyAD5Dz.js";import"./HomeHero-Ba5f6TEJ.js";import"./HlsBackground-DdOAu5hr.js";import"./OverlayHero-vavsflKu.js";import"./Video-CPC5hfx2.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
