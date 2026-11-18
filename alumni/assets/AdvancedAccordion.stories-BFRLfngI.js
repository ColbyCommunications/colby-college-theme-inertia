import t from"./AdvancedAccordion-2YkMlmQR.js";import"./iframe-VI30tm46.js";import"./preload-helper-DK9VPF6O.js";import"./AdvancedAccordionPanel-4dnJEFng.js";import"./Icon-ew0rFxHB.js";import"./ComponentRouter-rMjsvGTT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-BDugRs9M.js";import"./Context-Dmg4xf2e.js";import"./TextGroup-BzHcVw05.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-C40EpSQq.js";import"./Button-DJYrGopA.js";import"./Picture-BRWGOnhY.js";import"./HomeHero-Dma3K1TU.js";import"./HlsBackground-C4hhC9CU.js";import"./OverlayHero-C8kleJRF.js";import"./Video-rvZZ9BkJ.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:E}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,_ as default};
