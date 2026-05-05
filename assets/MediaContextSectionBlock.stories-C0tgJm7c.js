import{_ as r}from"./MediaContextSection-cUcT6yi3.js";import"./iframe-ZgD72vb3.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-BlhyC5CK.js";import"./Video-DBq5Fl6Z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Icon-DJaRYW11.js";import"./Picture-B5NOex8M.js";import"./Context-DxM4LGoc.js";import"./TextGroup-C_n8axnr.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BypY4L85.js";import"./Button-CQufTAeH.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,b={title:"Blocks/Media Context Section",component:r,tags:["!autodocs"],argTypes:{items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}}}},o=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Media Context Section",args:{type:"wide",items:o},play:async({canvas:t})=>{await a(t.getByText("A World-Class Education")).toBeInTheDocument(),await a(t.getByText("Undergraduate Research")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
