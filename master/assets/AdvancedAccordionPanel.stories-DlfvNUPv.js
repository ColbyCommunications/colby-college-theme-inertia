import{_ as s}from"./AdvancedAccordionPanel-Cjb_MJQq.js";import"./iframe-Hw4Sfx-_.js";import"./preload-helper-CNn__nYE.js";import"./Icon-CwDM_ULx.js";import"./ComponentRouter-IzIP5ds5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-BJ-OX3nM.js";import"./Context-BcHCzSb_.js";import"./TextGroup-BIRUotlN.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BAulf2VQ.js";import"./Button-DzQCkOfP.js";import"./Picture-BXMEI32u.js";import"./HomeHero-DZLtMs0k.js";import"./HlsBackground-DV35m-dt.js";import"./OverlayHero-fM18oh2Z.js";import"./Video-DSJtUv0J.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:B,waitFor:w}=__STORYBOOK_MODULE_TEST__,I={title:"Core Components/Advanced Accordion Panel",component:s,tags:["autodocs"]},e={name:"Default",args:{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},play:async({canvas:o})=>{}},a={name:"Open",args:{...e.args,open:!0},play:async({canvas:o})=>{}},t={name:"Toggle Open",args:{heading:"Click to expand",content:"<p>This content appears after toggle.</p>",open:!1},play:async({canvas:o,userEvent:r})=>{}},n={name:"Toggle Closed",args:{heading:"Click to collapse",content:"<p>This content will be hidden.</p>",open:!0},play:async({canvas:o,userEvent:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const _=["Default","Open","ToggleOpen","ToggleClosed"];export{e as Default,a as Open,n as ToggleClosed,t as ToggleOpen,_ as __namedExportsOrder,I as default};
