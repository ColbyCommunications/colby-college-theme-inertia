import t from"./AdvancedAccordion-afvxPSUO.js";import"./iframe-Ch-F7mRI.js";import"./preload-helper-DK9VPF6O.js";import"./AdvancedAccordionPanel-CDSbV_TF.js";import"./Icon-BFTjqFax.js";import"./ComponentRouter-Be1CBHnY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-kKzKCQl7.js";import"./Context-BT2jSdVb.js";import"./TextGroup-CstJfdRV.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-CiX96mvA.js";import"./Button-CFu-p7gn.js";import"./Picture-B-XzAAwP.js";import"./HomeHero-DjRgkr_H.js";import"./HlsBackground-C_igSLiZ.js";import"./OverlayHero-D2Y1lLg_.js";import"./Video-DcFJp-yt.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:E}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:a,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
