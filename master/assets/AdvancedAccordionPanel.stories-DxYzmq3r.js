import{_ as s}from"./AdvancedAccordionPanel-BseAV8Sw.js";import"./iframe-CslUPaOB.js";import"./preload-helper-CNn__nYE.js";import"./Icon-BPp6zmKL.js";import"./ComponentRouter-CZb791Sh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-WaVqGEn1.js";import"./Context-DEO1djzJ.js";import"./TextGroup-BYy3mHmQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-DVt5TExg.js";import"./Button-BbUUyv2C.js";import"./Picture-aUyDkxGp.js";import"./HomeHero-DXp8MgDM.js";import"./HlsBackground-DcphDtnv.js";import"./OverlayHero-35cdM-_W.js";import"./Video-Dkg37eAB.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w,waitFor:I}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Advanced Accordion Panel",component:s,tags:["autodocs"]},e={name:"Default",args:{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},play:async({canvas:o})=>{}},a={name:"Open",args:{...e.args,open:!0},play:async({canvas:o})=>{}},t={name:"Toggle Open",args:{heading:"Click to expand",content:"<p>This content appears after toggle.</p>",open:!1},play:async({canvas:o,userEvent:r})=>{}},n={name:"Toggle Closed",args:{heading:"Click to collapse",content:"<p>This content will be hidden.</p>",open:!0},play:async({canvas:o,userEvent:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const C=["Default","Open","ToggleOpen","ToggleClosed"];export{e as Default,a as Open,n as ToggleClosed,t as ToggleOpen,C as __namedExportsOrder,_ as default};
