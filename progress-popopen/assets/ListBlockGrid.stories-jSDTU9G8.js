import o from"./ListBlockGrid-CtNTIK-J.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./ListBlock-CEWyWwEb.js";import"./Context-BbEtaWPo.js";import"./TextGroup-o3sNFTrc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";const{expect:T}=__STORYBOOK_MODULE_TEST__,C={title:"Core Components/List Block Grid",component:o,tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]}}},e={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},s={name:"Two Columns",args:{columns:2,items:[e,e,e,e]},play:async({canvas:a})=>{}},n={name:"Three Columns",args:{columns:3,items:[e,e,e]},play:async({canvas:a})=>{}},t={name:"Four Columns",args:{columns:4,items:[e,e,e,e]},play:async({canvas:a})=>{}},v=["TwoColumns","ThreeColumns","FourColumns"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Two Columns",
  args: {
    columns: 2,
    items: [sampleItem, sampleItem, sampleItem, sampleItem]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const headings = canvas.getAllByText("Lorem ipsum dolor sit amet");
    await expect(headings.length).toBe(4);
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Three Columns",
  args: {
    columns: 3,
    items: [sampleItem, sampleItem, sampleItem]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const headings = canvas.getAllByText("Lorem ipsum dolor sit amet");
    await expect(headings.length).toBe(3);
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Four Columns",
  args: {
    columns: 4,
    items: [sampleItem, sampleItem, sampleItem, sampleItem]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const headings = canvas.getAllByText("Lorem ipsum dolor sit amet");
    await expect(headings.length).toBe(4);
  }
}`,...t.parameters?.docs?.source}}};export{t as FourColumns,n as ThreeColumns,s as TwoColumns,v as __namedExportsOrder,C as default};
