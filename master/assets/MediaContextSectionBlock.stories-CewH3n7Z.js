import r from"./MediaContextSection-B9WjsAPI.js";import"./iframe-4HAiBMit.js";import"./preload-helper-CNn__nYE.js";import"./MediaContext-D2h8paAC.js";import"./Video-BDDraqKK.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-D0uN3RK1.js";import"./Picture-BZpVOJSK.js";import"./HlsBackground-C7WSnS9f.js";import"./Context-DE0hm3e4.js";import"./TextGroup-CAMHCgeJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-Cw-m8yM0.js";import"./Button-DmYcRcsq.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,_={title:"Blocks/Media Context Section",component:r,tags:["!autodocs"],argTypes:{items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}}}},o=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Media Context Section",args:{type:"wide",items:o},play:async({canvas:t})=>{await a(t.getByText("A World-Class Education")).toBeInTheDocument(),await a(t.getByText("Undergraduate Research")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
