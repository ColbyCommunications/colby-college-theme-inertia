import{_ as n}from"./ButtonGroup-CtXH7SIf.js";import"./iframe-lCgBM3L3.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-wOxxjB09.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Button Group",component:n},o=[{button:{title:"button1",url:"https://www.colby.edu"}},{button:{title:"button2",url:"https://www.colby.edu"}},{button:{title:"button3",url:"https://www.colby.edu"}}],t={name:"Primary",args:{title:"Button Title",url:"https://www.colby.edu",items:o},play:async({canvas:s})=>{}},e={name:"Align Column",args:{title:"Button Title",url:"https://www.colby.edu",items:o,align:"column"},play:async({canvas:s})=>{}},a={name:"Big Buttons",args:{title:"Button Title",url:"https://www.colby.edu",items:o,size:"large"},play:async({canvas:s})=>{}},r={name:"Dark",args:{title:"Button Title",url:"https://www.colby.edu",items:o,type:"dark"},play:async({canvas:s})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("button1")).toBeInTheDocument();
    await expect(canvas.getByText("button2")).toBeInTheDocument();
    await expect(canvas.getByText("button3")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Align Column",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
    align: "column"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Big Buttons",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
    size: "large"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Dark",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
    type: "dark"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const w=["Primary","AlignCol","BigButtonGroup","Dark"];export{e as AlignCol,a as BigButtonGroup,r as Dark,t as Primary,w as __namedExportsOrder,p as default};
