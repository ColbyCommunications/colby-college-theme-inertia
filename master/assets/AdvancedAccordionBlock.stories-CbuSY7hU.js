import i from"./AdvancedAccordion-DNMCSG5x.js";import"./iframe-CslUPaOB.js";import"./preload-helper-CNn__nYE.js";import"./AdvancedAccordionPanel-BseAV8Sw.js";import"./Icon-BPp6zmKL.js";import"./ComponentRouter-CZb791Sh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-WaVqGEn1.js";import"./Context-DEO1djzJ.js";import"./TextGroup-BYy3mHmQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-DVt5TExg.js";import"./Button-BbUUyv2C.js";import"./Picture-aUyDkxGp.js";import"./HomeHero-DXp8MgDM.js";import"./HlsBackground-DcphDtnv.js";import"./OverlayHero-35cdM-_W.js";import"./Video-Dkg37eAB.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,f={title:"Blocks/Advanced Accordion",component:i,tags:["!autodocs"]},t={name:"Advanced Accordion",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:e,userEvent:a})=>{await n(e.getByText("What is the application deadline?")).toBeInTheDocument(),await n(e.getByText("What standardized tests are required?")).toBeInTheDocument(),await n(e.getByText("How do I schedule a campus visit?")).toBeInTheDocument();const o=e.getAllByRole("button");await a.click(o[0])}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Advanced Accordion",
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
    await expect(canvas.getByText("What is the application deadline?")).toBeInTheDocument();
    await expect(canvas.getByText("What standardized tests are required?")).toBeInTheDocument();
    await expect(canvas.getByText("How do I schedule a campus visit?")).toBeInTheDocument();

    // Click first panel to trigger onPanelToggle
    const buttons = canvas.getAllByRole("button");
    await userEvent.click(buttons[0]);
  }
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,f as default};
