import t from"./AdvancedAccordion-CO8bf1_H.js";import"./iframe-hahkjGbH.js";import"./preload-helper-CNn__nYE.js";import"./AdvancedAccordionPanel-5ccyFgPw.js";import"./Icon-C3ueqd8S.js";import"./ComponentRouter-DojIoEoM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-uwCwMIAZ.js";import"./Context-oTEcS9Vl.js";import"./TextGroup-CSyozXfI.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-MipgAr2U.js";import"./Button-CRKSVVkE.js";import"./Picture-BfWVNTYR.js";import"./HomeHero-aY4M2a6-.js";import"./HlsBackground-CLShgn5z.js";import"./OverlayHero--wUVJld0.js";import"./Video-TzN1W2fH.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:E}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
