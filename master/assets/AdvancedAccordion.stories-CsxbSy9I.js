import t from"./AdvancedAccordion-BsDFW9V9.js";import"./iframe-PnxsUGvc.js";import"./preload-helper-CNn__nYE.js";import"./AdvancedAccordionPanel-2gqS1oIp.js";import"./Icon-BsqlzFsK.js";import"./ComponentRouter-CUlsHOJi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-Dc3qFnGw.js";import"./Context-awy24xgS.js";import"./TextGroup-BBiYS2Yt.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DshEoX2x.js";import"./Button-B48f7O_d.js";import"./Picture-CWWODBJ7.js";import"./HomeHero-ClviHy1p.js";import"./HlsBackground-BFrNi2UD.js";import"./OverlayHero-CylzFYR9.js";import"./Video-De-40xmU.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
