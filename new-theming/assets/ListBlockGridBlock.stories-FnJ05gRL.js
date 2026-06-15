import{_ as a}from"./ListBlockGrid-lhd1G4Wl.js";import"./iframe-CnrjvFls.js";import"./preload-helper-DmLEtdH0.js";import"./ListBlock-B5CxW0Ic.js";import"./Context-D5cZySbU.js";import"./TextGroup-CmaI_y-9.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DkbncDde.js";import"./Button-7VUkjaD3.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,y={title:"Blocks/List Block Grid",component:a,tags:["!autodocs"],argTypes:{columns:{name:"Columns",control:"inline-radio",options:[2,3],table:{category:"Wordpress Fields"}},type:{name:"Type",control:{type:"inline-radio",labels:{light:"Light",dark:"Dark"}},options:["light","dark"],table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},e={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},t={name:"List Block Grid",args:{columns:2,type:"light",items:[e,e,e,e]},play:async({canvas:o})=>{const s=o.getAllByText("Lorem ipsum dolor sit amet");await r(s.length).toBe(4)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const h=["TwoColumns"];export{t as TwoColumns,h as __namedExportsOrder,y as default};
