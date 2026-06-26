import t from"./AdvancedAccordion-DTX2Qh1s.js";import"./iframe-CfFXb649.js";import"./preload-helper-CNn__nYE.js";import"./AdvancedAccordionPanel-D7-3Iea6.js";import"./Icon-fnI2vTS7.js";import"./ComponentRouter-Bl1b-0lE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-B-7Hr-h-.js";import"./Context-CVK_NjvR.js";import"./TextGroup-CZmT9OIj.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BEqab592.js";import"./Button-DAN1nQQI.js";import"./Picture-KdhwM3Ol.js";import"./HomeHero-DkE3lVd9.js";import"./HlsBackground-V94s5Gir.js";import"./OverlayHero-DsTtENvy.js";import"./Video-TLjnXfSl.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
