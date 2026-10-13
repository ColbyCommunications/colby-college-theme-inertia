import{_ as s}from"./AdvancedAccordionPanel-CzrtlWwA.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Icon-Reaz2zb1.js";import"./ComponentRouter-BVL1uiFa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-D7P7r8Ko.js";import"./Context-BbEtaWPo.js";import"./TextGroup-o3sNFTrc.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";import"./Picture-DroALuPx.js";import"./HomeHero-CQFRf6t0.js";import"./HlsBackground-EK-DvTuS.js";import"./OverlayHero-CEOKOfEF.js";import"./Video-B5_Yduz1.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w,waitFor:I}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Advanced Accordion Panel",component:s,tags:["autodocs"]},e={name:"Default",args:{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},play:async({canvas:o})=>{}},n={name:"Open",args:{...e.args,open:!0},play:async({canvas:o})=>{}},a={name:"Toggle Open",args:{heading:"Click to expand",content:"<p>This content appears after toggle.</p>",open:!1},play:async({canvas:o,userEvent:r})=>{}},t={name:"Toggle Closed",args:{heading:"Click to collapse",content:"<p>This content will be hidden.</p>",open:!0},play:async({canvas:o,userEvent:r})=>{}},C=["Default","Open","ToggleOpen","ToggleClosed"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "What is the application deadline?",
    content: "<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("What is the application deadline?")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Open",
  args: {
    ...Default.args,
    open: true
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("What is the application deadline?")).toBeInTheDocument();
    await expect(canvas.getByText("The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Toggle Open",
  args: {
    heading: "Click to expand",
    content: "<p>This content appears after toggle.</p>",
    open: false
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await waitFor(() => {
      expect(canvas.getByText("This content appears after toggle.")).toBeVisible();
    });
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Toggle Closed",
  args: {
    heading: "Click to collapse",
    content: "<p>This content will be hidden.</p>",
    open: true
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("This content will be hidden.")).toBeVisible();
    const button = canvas.getByRole("button");
    await userEvent.click(button);
  }
}`,...t.parameters?.docs?.source}}};export{e as Default,n as Open,t as ToggleClosed,a as ToggleOpen,C as __namedExportsOrder,_ as default};
