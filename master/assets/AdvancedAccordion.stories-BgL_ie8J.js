import t from"./AdvancedAccordion-SYtdm8Cg.js";import"./iframe-_0QUABCw.js";import"./preload-helper-CNn__nYE.js";import"./AdvancedAccordionPanel-CSUoH3xD.js";import"./Icon-D49fIVR7.js";import"./ComponentRouter-DYeCvHuK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-C15yavzr.js";import"./Context-D-BCrhz4.js";import"./TextGroup-DHzjnflj.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Bm_WHhor.js";import"./Button-DCkS8znm.js";import"./Picture-C6sAmR0k.js";import"./HomeHero-Ds5j3ETh.js";import"./HlsBackground-CqwpryNh.js";import"./OverlayHero-CKePFqOd.js";import"./Video-BoUYZL_D.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
