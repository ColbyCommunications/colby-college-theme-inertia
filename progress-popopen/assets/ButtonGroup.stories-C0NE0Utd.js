import{_ as s}from"./ButtonGroup-bnX3L9r1.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Button-BBOumCWS.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Button Group",component:s},r=[{button:{title:"button1",url:"https://www.colby.edu"}},{button:{title:"button2",url:"https://www.colby.edu"}},{button:{title:"button3",url:"https://www.colby.edu"}}],t={name:"Primary",args:{title:"Button Title",url:"https://www.colby.edu",items:r},play:async({canvas:o})=>{}},e={name:"Align Column",args:{title:"Button Title",url:"https://www.colby.edu",items:r,align:"column"},play:async({canvas:o})=>{}},n={name:"Big Buttons",args:{title:"Button Title",url:"https://www.colby.edu",items:r,size:"large"},play:async({canvas:o})=>{}},a={name:"Dark",args:{title:"Button Title",url:"https://www.colby.edu",items:r,type:"dark"},play:async({canvas:o})=>{}},w=["Primary","AlignCol","BigButtonGroup","Dark"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{e as AlignCol,n as BigButtonGroup,a as Dark,t as Primary,w as __namedExportsOrder,p as default};
