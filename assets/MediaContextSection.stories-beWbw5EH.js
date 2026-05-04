import{_ as s}from"./MediaContextSection-rAwxAyGI.js";import"./iframe-JoPPn0qi.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-DWkCSXBL.js";import"./Video-8lyCUWn7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Icon-13TYNSVs.js";import"./Picture-CngznvIr.js";import"./Context-DgQAGTsW.js";import"./TextGroup-DU2HigOJ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BQDJ09HQ.js";import"./Button-DCjJTd33.js";const{expect:x}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Media Context Section",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["wide","narrow"]}}},a=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Wide",args:{type:"wide",items:a},play:async({canvas:r})=>{}},t={name:"Narrow",args:{type:"narrow",items:a},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const T=["Wide","Narrow"];export{t as Narrow,e as Wide,T as __namedExportsOrder,v as default};
