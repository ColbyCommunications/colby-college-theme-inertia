import{_ as a}from"./ListBlock-CNnzuqtO.js";import"./iframe-smcTNgWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-DqAioVFh.js";import"./TextGroup-WtWkjzc1.js";import"./ButtonGroup-0OSwBJFl.js";import"./Button-BaqycuYP.js";const l={title:"Core Components/List Block",component:a,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},e={name:"Default",args:{subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit. Nunc lobortis ullamcorper aucto.",buttons:[{url:"https://www.colby.edu",title:"Read Bylaws"}]}},r={name:"Dark",args:{...e.args,type:"dark"}},t={name:"Light",args:{...e.args,type:"light"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "Bylaws",
    heading: "Lorem ipsum dolor sit amet, consectet lorem ipsum",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipi elit. Nunc lobortis ullamcorper aucto.",
    buttons: [{
      url: "https://www.colby.edu",
      title: "Read Bylaws"
    }]
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Dark",
  args: {
    ...Default.args,
    type: "dark"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Light",
  args: {
    ...Default.args,
    type: "light"
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","Dark","Light"];export{r as Dark,e as Default,t as Light,u as __namedExportsOrder,l as default};
