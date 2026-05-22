import t from"./AdvancedAccordion-0dP2rD7p.js";import"./iframe-CtI3EDAH.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-UntbBmbC.js";import"./Icon-CXkYv2Jt.js";import"./ComponentRouter-BM7qZ9-T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-ByMfi5NM.js";import"./Context-CZ2G3ZZf.js";import"./TextGroup-6mdlhyuw.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Dtpu33B4.js";import"./Button-gP0bzYym.js";import"./Picture-YExyyviJ.js";import"./HomeHero-BVTQHVnS.js";import"./HlsBackground-Dicl3f8V.js";import"./OverlayHero-KAXcpo0B.js";import"./Video-BSWGaXjP.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
