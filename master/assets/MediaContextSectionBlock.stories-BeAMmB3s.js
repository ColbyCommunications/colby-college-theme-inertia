import r from"./MediaContextSection-DPc-m29k.js";import"./iframe-CmYDPWfz.js";import"./preload-helper-CNn__nYE.js";import"./MediaContext-WNfpZH1q.js";import"./Video-DxezthW6.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-D6nSbWvf.js";import"./Picture-BOWX2ZH3.js";import"./HlsBackground-zaofvThb.js";import"./Context-B_3tl25l.js";import"./TextGroup-B6ErysHg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-DY5PtgUV.js";import"./Button-B0cSkk5D.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,_={title:"Blocks/Media Context Section",component:r,tags:["!autodocs"],argTypes:{items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}}}},o=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Media Context Section",args:{type:"wide",items:o},play:async({canvas:t})=>{await a(t.getByText("A World-Class Education")).toBeInTheDocument(),await a(t.getByText("Undergraduate Research")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const C=["Wide"];export{e as Wide,C as __namedExportsOrder,_ as default};
