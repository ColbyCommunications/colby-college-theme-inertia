import r from"./MediaContextSection-h6GFH-c1.js";import"./iframe-D1TRqHE-.js";import"./preload-helper-CNn__nYE.js";import"./MediaContext-BzD0N8_V.js";import"./Video-Dui4AY6p.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-CjponWZl.js";import"./Picture-BWhDh5AU.js";import"./HlsBackground-ClHj1DE3.js";import"./Context-BhwruPb4.js";import"./TextGroup-BXXXlLUd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BEqEnnhX.js";import"./Button-CVTvSmCO.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,B={title:"Blocks/Media Context Section",component:r,tags:["!autodocs"],argTypes:{items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}}}},o=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],e={name:"Media Context Section",args:{type:"wide",items:o},play:async({canvas:t})=>{await a(t.getByText("A World-Class Education")).toBeInTheDocument(),await a(t.getByText("Undergraduate Research")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const _=["Wide"];export{e as Wide,_ as __namedExportsOrder,B as default};
