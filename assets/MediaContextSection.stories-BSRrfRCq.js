import{_ as s}from"./MediaContextSection-DbzlsEj1.js";import"./iframe-BJWP1wmu.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-CUEI2hXE.js";import"./Video-wjCK2aK8.js";import"./_commonjsHelpers-DsqdWQfm.js";import"./Icon-Ci0rra_1.js";import"./Picture-Ct9TPMyV.js";import"./HlsBackground-zS7oIHW_.js";import"./Context-Cs__4V4x.js";import"./TextGroup-NVv6rCrE.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CFxZXFtS.js";import"./Button-E8jHxdGS.js";const{expect:v}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/Media Context Section",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["wide","narrow"]}}},a=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Wide",args:{type:"wide",items:a},play:async({canvas:r})=>{}},t={name:"Narrow",args:{type:"narrow",items:a},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
