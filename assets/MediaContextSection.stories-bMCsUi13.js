import{_ as s}from"./MediaContextSection-DVZvplH4.js";import"./iframe-Di8xBzWi.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-DL2Zxmhe.js";import"./Video-BfWIFp75.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Icon-BK_00Y1J.js";import"./Picture-DIFQtweN.js";import"./Context-D7oI_R7O.js";import"./TextGroup-_YFythC-.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Cpz_Lunt.js";import"./Button-DPwMTzc0.js";const{expect:x}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Media Context Section",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["wide","narrow"]}}},a=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Wide",args:{type:"wide",items:a},play:async({canvas:r})=>{}},t={name:"Narrow",args:{type:"narrow",items:a},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
