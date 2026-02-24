import{_ as r}from"./AdvancedAccordionPanel-Ca7uBYRq.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BG0snce_.js";const{expect:a,waitFor:l}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/Advanced Accordion Panel",component:r,tags:["autodocs"]},n={name:"Default",args:{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},play:async({canvas:e})=>{await a(e.getByText("What is the application deadline?")).toBeInTheDocument()}},t={name:"Open",args:{...n.args,open:!0},play:async({canvas:e})=>{await a(e.getByText("What is the application deadline?")).toBeInTheDocument(),await a(e.getByText("The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.")).toBeInTheDocument()}},o={name:"Toggle Open",args:{heading:"Click to expand",content:"<p>This content appears after toggle.</p>",open:!1},play:async({canvas:e,userEvent:i})=>{const c=e.getByRole("button");await i.click(c),await l(()=>{a(e.getByText("This content appears after toggle.")).toBeVisible()})}},s={name:"Toggle Closed",args:{heading:"Click to collapse",content:"<p>This content will be hidden.</p>",open:!0},play:async({canvas:e,userEvent:i})=>{await a(e.getByText("This content will be hidden.")).toBeVisible();const c=e.getByRole("button");await i.click(c)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "What is the application deadline?",
    content: "<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("What is the application deadline?")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Open",
  args: {
    ...Default.args,
    open: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("What is the application deadline?")).toBeInTheDocument();
    await expect(canvas.getByText("The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await waitFor(() => {
      expect(canvas.getByText("This content appears after toggle.")).toBeVisible();
    });
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("This content will be hidden.")).toBeVisible();
    const button = canvas.getByRole("button");
    await userEvent.click(button);
  }
}`,...s.parameters?.docs?.source}}};const m=["Default","Open","ToggleOpen","ToggleClosed"];export{n as Default,t as Open,s as ToggleClosed,o as ToggleOpen,m as __namedExportsOrder,y as default};
