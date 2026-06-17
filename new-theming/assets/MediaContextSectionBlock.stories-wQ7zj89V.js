import{_ as r}from"./MediaContextSection-D97gUK0W.js";import"./iframe-Dp_NUtrm.js";import"./preload-helper-DmLEtdH0.js";import"./MediaContext-B1b4l0Wx.js";import"./Video-C3HFku4p.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-Binlolgq.js";import"./Picture-D-m0Zjnr.js";import"./HlsBackground-nmkSA5-0.js";import"./Context-CGiSIhKZ.js";import"./TextGroup-Bs7rbLBU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CHhb2OQN.js";import"./Button-Dmp_VKRW.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,_={title:"Blocks/Media Context Section",component:r,tags:["!autodocs"],argTypes:{items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}}}},o=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Media Context Section",args:{type:"wide",items:o},play:async({canvas:t})=>{await a(t.getByText("A World-Class Education")).toBeInTheDocument(),await a(t.getByText("Undergraduate Research")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const B=["Wide"];export{e as Wide,B as __namedExportsOrder,_ as default};
