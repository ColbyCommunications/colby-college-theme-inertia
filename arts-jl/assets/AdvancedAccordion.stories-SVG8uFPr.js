import t from"./AdvancedAccordion-B4QJp16t.js";import"./iframe-f_uzlTSv.js";import"./preload-helper-Nb-6AGzV.js";import"./AdvancedAccordionPanel-CGegwvgJ.js";import"./Icon-BIwdjlnx.js";import"./ComponentRouter-6i56JxA3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-CyvnkySG.js";import"./Context-D3je83ae.js";import"./TextGroup-Cd4wpLmv.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-DkGin3Q_.js";import"./Button-bl--v9kR.js";import"./Picture-DFiOGev-.js";import"./HomeHero-CMWIDgel.js";import"./HlsBackground-KiYqG8a2.js";import"./OverlayHero-CWjSNUUD.js";import"./Video-CGOxcBah.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:E}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
