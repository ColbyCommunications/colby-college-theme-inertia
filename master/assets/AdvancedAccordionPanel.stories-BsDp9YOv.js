import{_ as s}from"./AdvancedAccordionPanel-DOq8_KTj.js";import"./iframe-et_0dC0y.js";import"./preload-helper-CNn__nYE.js";import"./Icon-J6Rse5U_.js";import"./ComponentRouter-DKetGkMd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Hero-DSPJDGIv.js";import"./Context-B_C-TZJb.js";import"./TextGroup-BlhMCULi.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-Dj0PjP7s.js";import"./Button-eHYYr99x.js";import"./Picture-D9AQoHRm.js";import"./HomeHero-BnMfsATY.js";import"./HlsBackground-Bz_Ef8t-.js";import"./OverlayHero-C2Q7jIvK.js";import"./Video-Dup3JCTH.js";import"./_commonjsHelpers-CE1G-McA.js";const{expect:w,waitFor:I}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Advanced Accordion Panel",component:s,tags:["autodocs"]},e={name:"Default",args:{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},play:async({canvas:o})=>{}},a={name:"Open",args:{...e.args,open:!0},play:async({canvas:o})=>{}},t={name:"Toggle Open",args:{heading:"Click to expand",content:"<p>This content appears after toggle.</p>",open:!1},play:async({canvas:o,userEvent:r})=>{}},n={name:"Toggle Closed",args:{heading:"Click to collapse",content:"<p>This content will be hidden.</p>",open:!0},play:async({canvas:o,userEvent:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
