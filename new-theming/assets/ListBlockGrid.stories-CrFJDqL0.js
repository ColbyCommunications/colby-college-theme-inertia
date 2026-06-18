import{_ as m}from"./ListBlockGrid-BU5tFeRP.js";import"./iframe-NsvklkjI.js";import"./preload-helper-DmLEtdH0.js";import"./ListBlock-DX08wY-Q.js";import"./Context-DjCa28BA.js";import"./TextGroup-B4ew4SfD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-B8JoLnfH.js";import"./Button-DiOn1jYY.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/List Block Grid",component:m,tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]}}},e={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},s={name:"Two Columns",args:{columns:2,items:[e,e,e,e]},play:async({canvas:o})=>{}},t={name:"Three Columns",args:{columns:3,items:[e,e,e]},play:async({canvas:o})=>{}},a={name:"Four Columns",args:{columns:4,items:[e,e,e,e]},play:async({canvas:o})=>{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const C=["TwoColumns","ThreeColumns","FourColumns"];export{a as FourColumns,t as ThreeColumns,s as TwoColumns,C as __namedExportsOrder,T as default};
