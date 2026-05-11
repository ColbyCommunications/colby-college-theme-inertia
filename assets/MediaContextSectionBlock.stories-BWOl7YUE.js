import{_ as r}from"./MediaContextSection-rWXn16mz.js";import"./iframe-DBe6kLE_.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-Db9hgSC9.js";import"./Video-CLNa3BOA.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-Dfmg1bD2.js";import"./Picture-VmEs-xnd.js";import"./Context-7WVCg6j8.js";import"./TextGroup-CIP-n5XM.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DWi1K0bA.js";import"./Button-CZwP07jv.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,b={title:"Blocks/Media Context Section",component:r,tags:["!autodocs"],argTypes:{items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}}}},o=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Media Context Section",args:{type:"wide",items:o},play:async({canvas:t})=>{await a(t.getByText("A World-Class Education")).toBeInTheDocument(),await a(t.getByText("Undergraduate Research")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Media Context Section",
  args: {
    type: "wide",
    items: sampleItems
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("A World-Class Education")).toBeInTheDocument();
    await expect(canvas.getByText("Undergraduate Research")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const T=["Wide"];export{e as Wide,T as __namedExportsOrder,b as default};
