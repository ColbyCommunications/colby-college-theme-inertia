import{_ as s}from"./MediaContextSection-2J00ZfbQ.js";import"./iframe-C_TCIMzD.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-Cg2cr0bq.js";import"./Video-DBkbXT0C.js";import"./_commonjsHelpers-DsqdWQfm.js";import"./Icon-COw6VJ9e.js";import"./Picture-Bf60KfaG.js";import"./HlsBackground-B4BA-7NT.js";import"./Context-BA1Fe2R-.js";import"./TextGroup-DC2naARp.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DILhTYQr.js";import"./Button-C3er0bmR.js";const{expect:v}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/Media Context Section",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["wide","narrow"]}}},a=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Wide",args:{type:"wide",items:a},play:async({canvas:r})=>{}},t={name:"Narrow",args:{type:"narrow",items:a},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Wide",
  args: {
    type: "wide",
    items: sampleItems
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("A World-Class Education")).toBeInTheDocument();
    await expect(canvas.getByText("Undergraduate Research")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Narrow",
  args: {
    type: "narrow",
    items: sampleItems
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("A World-Class Education")).toBeInTheDocument();
    await expect(canvas.getByText("Undergraduate Research")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const _=["Wide","Narrow"];export{t as Narrow,e as Wide,_ as __namedExportsOrder,T as default};
