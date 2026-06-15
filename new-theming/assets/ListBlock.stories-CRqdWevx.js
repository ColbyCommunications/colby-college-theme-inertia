import{_ as s}from"./ListBlock-B2sGKeq8.js";import"./iframe-DHqX89XJ.js";import"./preload-helper-DmLEtdH0.js";import"./Context-CElOjEtP.js";import"./TextGroup-CMmGLRbR.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-B-9A9OGO.js";import"./Button-CQf8clnV.js";const{expect:g}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/List Block",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},e={name:"Default",args:{subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit. Nunc lobortis ullamcorper aucto.",buttons:[{url:"https://www.colby.edu",title:"Read Bylaws"}]},play:async({canvas:r})=>{}},a={name:"Dark",args:{...e.args,type:"dark"},play:async({canvas:r})=>{}},t={name:"Light",args:{...e.args,type:"light"},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
