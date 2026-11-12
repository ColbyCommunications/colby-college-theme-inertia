import a from"./ListBlockGrid-InihF52e.js";import"./iframe-4HAiBMit.js";import"./preload-helper-CNn__nYE.js";import"./ListBlock-yWKnRnGA.js";import"./Context-DE0hm3e4.js";import"./TextGroup-CAMHCgeJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-Cw-m8yM0.js";import"./Button-DmYcRcsq.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,B={title:"Blocks/List Block Grid",component:a,tags:["!autodocs"],argTypes:{columns:{name:"Columns",control:"inline-radio",options:[2,3],table:{category:"Wordpress Fields"}},type:{name:"Type",control:{type:"inline-radio",labels:{light:"Light",dark:"Dark"}},options:["light","dark"],table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},t={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},e={name:"List Block Grid",args:{columns:2,type:"light",items:[t,t,t,t]},play:async({canvas:o})=>{const s=o.getAllByText("Lorem ipsum dolor sit amet");await r(s.length).toBe(4)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
