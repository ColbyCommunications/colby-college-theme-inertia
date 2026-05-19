import t from"./AdvancedAccordion-DS16_NJq.js";import"./iframe-CVsC1NHQ.js";import"./preload-helper-PPVm8Dsz.js";import"./AdvancedAccordionPanel-CxXgo3MB.js";import"./Icon-oiSM4b0m.js";import"./ComponentRouter-La-4VyPy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-CLqEIlkj.js";import"./Context-BGCNBukw.js";import"./TextGroup-CVB5CBbt.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-LntAtt7g.js";import"./Button-DYapneu4.js";import"./Picture-BwpjUAlr.js";import"./HomeHero-BESYpDo9.js";import"./HlsBackground-C2g3wz1F.js";import"./OverlayHero-Bh8TLt2f.js";import"./Video-e0YgxkIv.js";import"./_commonjsHelpers-DsqdWQfm.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
