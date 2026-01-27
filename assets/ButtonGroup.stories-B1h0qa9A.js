import{_ as s}from"./ButtonGroup-Dc6wBa06.js";import"./iframe-BET2YoQW.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Clv9Uku5.js";const m={title:"Core Components/Button Group",component:s},n=[{button:{title:"button1",url:"https://www.colby.edu"}},{button:{title:"button2",url:"https://www.colby.edu"}},{button:{title:"button3",url:"https://www.colby.edu"}}],t={name:"Primary",args:{title:"Button Title",url:"https://www.colby.edu",items:n}},e={name:"Align Column",args:{title:"Button Title",url:"https://www.colby.edu",items:n,align:"column"}},r={name:"Big Buttons",args:{title:"Button Title",url:"https://www.colby.edu",items:n,size:"large"}},o={name:"Dark",args:{title:"Button Title",url:"https://www.colby.edu",items:n,type:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Align Column",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
    align: "column"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Big Buttons",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
    size: "large"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Dark",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    items: globalItems,
    type: "dark"
  }
}`,...o.parameters?.docs?.source}}};const c=["Primary","AlignCol","BigButtonGroup","Dark"];export{e as AlignCol,r as BigButtonGroup,o as Dark,t as Primary,c as __namedExportsOrder,m as default};
