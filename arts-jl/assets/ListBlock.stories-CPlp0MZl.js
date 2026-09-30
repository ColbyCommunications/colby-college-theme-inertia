import{_ as s}from"./ListBlock-B0ypd1Zq.js";import"./iframe-C0zpQ7G8.js";import"./preload-helper-Nb-6AGzV.js";import"./Context-DpL3ZwkN.js";import"./TextGroup-C95z08FT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-BadXwnl8.js";import"./Button-DLoo02Xf.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,h={title:"Core Components/List Block",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},e={name:"Default",args:{subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit. Nunc lobortis ullamcorper aucto.",buttons:[{url:"https://www.colby.edu",title:"Read Bylaws"}]},play:async({canvas:r})=>{}},a={name:"Dark",args:{...e.args,type:"dark"},play:async({canvas:r})=>{}},t={name:"Light",args:{...e.args,type:"light"},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const B=["Default","Dark","Light"];export{a as Dark,e as Default,t as Light,B as __namedExportsOrder,h as default};
