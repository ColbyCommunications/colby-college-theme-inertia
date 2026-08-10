import a from"./ListBlockGrid-Cw2kfdpU.js";import"./iframe-DmW2PlUC.js";import"./preload-helper-CNn__nYE.js";import"./ListBlock-DtwkuZBO.js";import"./Context-DJ5F4vv9.js";import"./TextGroup-DuPqozvk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-5pZdAtee.js";import"./Button-D7C23jjK.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,B={title:"Blocks/List Block Grid",component:a,tags:["!autodocs"],argTypes:{columns:{name:"Columns",control:"inline-radio",options:[2,3],table:{category:"Wordpress Fields"}},type:{name:"Type",control:{type:"inline-radio",labels:{light:"Light",dark:"Dark"}},options:["light","dark"],table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},t={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},e={name:"List Block Grid",args:{columns:2,type:"light",items:[t,t,t,t]},play:async({canvas:o})=>{const s=o.getAllByText("Lorem ipsum dolor sit amet");await r(s.length).toBe(4)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "List Block Grid",
  args: {
    columns: 2,
    type: "light",
    items: [sampleItem, sampleItem, sampleItem, sampleItem]
  },
  play: async ({
    canvas
  }) => {
    const headings = canvas.getAllByText("Lorem ipsum dolor sit amet");
    await expect(headings.length).toBe(4);
  }
}`,...e.parameters?.docs?.source}}};const _=["TwoColumns"];export{e as TwoColumns,_ as __namedExportsOrder,B as default};
