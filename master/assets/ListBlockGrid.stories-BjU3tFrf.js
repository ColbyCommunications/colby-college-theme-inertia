import{_ as m}from"./ListBlockGrid-CH2_zjFR.js";import"./iframe-UG1tqv5q.js";import"./preload-helper-CNn__nYE.js";import"./ListBlock-BVBSxk0j.js";import"./Context-U_mJbKUQ.js";import"./TextGroup-WbN4nyp8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-4xxxY5Rx.js";import"./Button-0VdR6W-G.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/List Block Grid",component:m,tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]}}},e={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},s={name:"Two Columns",args:{columns:2,items:[e,e,e,e]},play:async({canvas:o})=>{}},t={name:"Three Columns",args:{columns:3,items:[e,e,e]},play:async({canvas:o})=>{}},a={name:"Four Columns",args:{columns:4,items:[e,e,e,e]},play:async({canvas:o})=>{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
