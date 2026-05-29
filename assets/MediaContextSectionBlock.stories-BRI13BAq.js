import{_ as r}from"./MediaContextSection-B4hRco3q.js";import"./iframe-BeFdV9vL.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-hr0SmltF.js";import"./Video-Cr-HJkU1.js";import"./_commonjsHelpers-DsqdWQfm.js";import"./Icon-XHdq_rnJ.js";import"./Picture-E7nEjJJp.js";import"./HlsBackground-DNLXnkJS.js";import"./Context-BwyKCd7H.js";import"./TextGroup-lkErle6S.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-FYF5r83H.js";import"./Button-DKS7ljQH.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,T={title:"Blocks/Media Context Section",component:r,tags:["!autodocs"],argTypes:{items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}}}},o=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Media Context Section",args:{type:"wide",items:o},play:async({canvas:t})=>{await a(t.getByText("A World-Class Education")).toBeInTheDocument(),await a(t.getByText("Undergraduate Research")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const _=["Wide"];export{e as Wide,_ as __namedExportsOrder,T as default};
