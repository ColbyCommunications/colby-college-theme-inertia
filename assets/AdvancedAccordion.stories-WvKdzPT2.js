import t from"./AdvancedAccordion-WSvQhlkm.js";import"./iframe-CX4_OVIX.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-EqXp7Ywo.js";import"./Icon-CeRMIKmf.js";import"./ComponentRouter-K8K8hPEW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-BLtxgl-Z.js";import"./Context-DGvxhYvE.js";import"./TextGroup-BZJmnb6K.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-COTU-JGx.js";import"./Button-GXku6M3k.js";import"./Picture-D0vPjo1V.js";import"./HomeHero-uJ56iWrX.js";import"./HlsBackground-D4_0Ltxs.js";import"./OverlayHero-Cny4DNT8.js";import"./Video-D71rscfM.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
