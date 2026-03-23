import{_ as o}from"./ListBlock-BG3T1C2r.js";import"./iframe-qn9ebuhk.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-zu6BnEJv.js";import"./TextGroup-Jc2jy6rj.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CoN_pgMt.js";import"./Button-zNl_wLY1.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/List Block",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},a={name:"Default",args:{subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit. Nunc lobortis ullamcorper aucto.",buttons:[{url:"https://www.colby.edu",title:"Read Bylaws"}]},play:async({canvas:e})=>{await n(e.getByText("Bylaws")).toBeInTheDocument(),await n(e.getByText("Read Bylaws")).toBeInTheDocument()}},t={name:"Dark",args:{...a.args,type:"dark"},play:async({canvas:e})=>{await n(e.getByText("Bylaws")).toBeInTheDocument()}},s={name:"Light",args:{...a.args,type:"light"},play:async({canvas:e})=>{await n(e.getByText("Bylaws")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const B=["Default","Dark","Light"];export{t as Dark,a as Default,s as Light,B as __namedExportsOrder,d as default};
