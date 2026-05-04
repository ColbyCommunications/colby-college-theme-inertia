import{_ as s}from"./ListBlock-CJhWlMTU.js";import"./iframe-JoPPn0qi.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-DgQAGTsW.js";import"./TextGroup-DU2HigOJ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BQDJ09HQ.js";import"./Button-DCjJTd33.js";const{expect:g}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/List Block",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},e={name:"Default",args:{subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit. Nunc lobortis ullamcorper aucto.",buttons:[{url:"https://www.colby.edu",title:"Read Bylaws"}]},play:async({canvas:r})=>{}},a={name:"Dark",args:{...e.args,type:"dark"},play:async({canvas:r})=>{}},t={name:"Light",args:{...e.args,type:"light"},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Bylaws")).toBeInTheDocument();
    await expect(canvas.getByText("Read Bylaws")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Dark",
  args: {
    ...Default.args,
    type: "dark"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Bylaws")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Light",
  args: {
    ...Default.args,
    type: "light"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Bylaws")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const d=["Default","Dark","Light"];export{a as Dark,e as Default,t as Light,d as __namedExportsOrder,y as default};
