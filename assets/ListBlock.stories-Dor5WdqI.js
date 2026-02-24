import{_ as o}from"./ListBlock-BzLlKYQi.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-Dp7yX81d.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/List Block",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},a={name:"Default",args:{subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit. Nunc lobortis ullamcorper aucto.",buttons:[{url:"https://www.colby.edu",title:"Read Bylaws"}]},play:async({canvas:e})=>{await n(e.getByText("Bylaws")).toBeInTheDocument(),await n(e.getByText("Read Bylaws")).toBeInTheDocument()}},t={name:"Dark",args:{...a.args,type:"dark"},play:async({canvas:e})=>{await n(e.getByText("Bylaws")).toBeInTheDocument()}},s={name:"Light",args:{...a.args,type:"light"},play:async({canvas:e})=>{await n(e.getByText("Bylaws")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "Bylaws",
    heading: "Lorem ipsum dolor sit amet, consectet lorem ipsum",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipi elit. Nunc lobortis ullamcorper aucto.",
    buttons: [{
      url: "https://www.colby.edu",
      title: "Read Bylaws"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Bylaws")).toBeInTheDocument();
    await expect(canvas.getByText("Read Bylaws")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Dark",
  args: {
    ...Default.args,
    type: "dark"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Bylaws")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Light",
  args: {
    ...Default.args,
    type: "light"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Bylaws")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const g=["Default","Dark","Light"];export{t as Dark,a as Default,s as Light,g as __namedExportsOrder,y as default};
