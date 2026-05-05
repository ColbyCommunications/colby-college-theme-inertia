import{_ as r}from"./MediaContextSection-7Q4BAVRB.js";import"./iframe-CHQ7Z_bq.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-D7Jtbnsw.js";import"./Video-BEoKAqTN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Icon-CzjDGebw.js";import"./Picture-BXLOigy3.js";import"./Context-LbuBVS-d.js";import"./TextGroup-D5t4lGek.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CsuHJvv7.js";import"./Button-Emnb7RcT.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,b={title:"Blocks/Media Context Section",component:r,tags:["!autodocs"],argTypes:{items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}}}},o=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Media Context Section",args:{type:"wide",items:o},play:async({canvas:t})=>{await a(t.getByText("A World-Class Education")).toBeInTheDocument(),await a(t.getByText("Undergraduate Research")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
