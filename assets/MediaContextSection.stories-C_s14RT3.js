import{_ as s}from"./MediaContextSection-Mj406H6Z.js";import"./iframe-DAsnk83b.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-C5UQSmN6.js";import"./Video-BFkvCHxE.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-BfxmZd_m.js";import"./Picture-CJAzcxhc.js";import"./HlsBackground-DI42NqAs.js";import"./Context-CndsJk52.js";import"./TextGroup-Cjq_dFuI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BukZTuxa.js";import"./Button-3yFMyosy.js";const{expect:T}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Media Context Section",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["wide","narrow"]}}},a=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Wide",args:{type:"wide",items:a},play:async({canvas:r})=>{}},t={name:"Narrow",args:{type:"narrow",items:a},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const b=["Wide","Narrow"];export{t as Narrow,e as Wide,b as __namedExportsOrder,_ as default};
