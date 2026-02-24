import{_ as u}from"./ButtonGroup-DeVPz35K.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-u50yI3p6.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Button Group",component:u},r=[{button:{title:"button1",url:"https://www.colby.edu"}},{button:{title:"button2",url:"https://www.colby.edu"}},{button:{title:"button3",url:"https://www.colby.edu"}}],n={name:"Primary",args:{title:"Button Title",url:"https://www.colby.edu",items:r},play:async({canvas:t})=>{await e(t.getByText("button1")).toBeInTheDocument(),await e(t.getByText("button2")).toBeInTheDocument(),await e(t.getByText("button3")).toBeInTheDocument()}},a={name:"Align Column",args:{title:"Button Title",url:"https://www.colby.edu",items:r,align:"column"},play:async({canvas:t})=>{await e(t.getByText("button1")).toBeInTheDocument()}},o={name:"Big Buttons",args:{title:"Button Title",url:"https://www.colby.edu",items:r,size:"large"},play:async({canvas:t})=>{await e(t.getByText("button1")).toBeInTheDocument()}},s={name:"Dark",args:{title:"Button Title",url:"https://www.colby.edu",items:r,type:"dark"},play:async({canvas:t})=>{await e(t.getByText("button1")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("button1")).toBeInTheDocument();
    await expect(canvas.getByText("button2")).toBeInTheDocument();
    await expect(canvas.getByText("button3")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const w=["Primary","AlignCol","BigButtonGroup","Dark"];export{a as AlignCol,o as BigButtonGroup,s as Dark,n as Primary,w as __namedExportsOrder,p as default};
