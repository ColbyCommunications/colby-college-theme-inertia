import t from"./AdvancedAccordion-B6OG6yS3.js";import"./iframe-CP08bHsR.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-C9dBVifM.js";import"./Icon-B2MxY8y3.js";import"./ComponentRouter-CjTjyPWc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-DKo6XHA2.js";import"./Context-BwvRva0W.js";import"./TextGroup-DJdXz2Ek.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BLbQSroy.js";import"./Button-DgLT-UWw.js";import"./Picture-EdSPcfCG.js";import"./HomeHero-CheRz3lb.js";import"./HlsBackground-BW1Yk38B.js";import"./OverlayHero-Ch7kDyud.js";import"./Video-ibBSRaDq.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
