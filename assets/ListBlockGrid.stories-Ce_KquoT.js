import{_ as m}from"./ListBlockGrid-CovaEx1C.js";import"./iframe-DOryDeA1.js";import"./preload-helper-PPVm8Dsz.js";import"./ListBlock-CfU1POJa.js";import"./Context-D_wMQt7T.js";import"./TextGroup-B-t4YA3v.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-PK7aQfgP.js";import"./Button-Dtq2-5hO.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,h={title:"Core Components/List Block Grid",component:m,tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]}}},e={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},s={name:"Two Columns",args:{columns:2,items:[e,e,e,e]},play:async({canvas:o})=>{}},t={name:"Three Columns",args:{columns:3,items:[e,e,e]},play:async({canvas:o})=>{}},a={name:"Four Columns",args:{columns:4,items:[e,e,e,e]},play:async({canvas:o})=>{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const T=["TwoColumns","ThreeColumns","FourColumns"];export{a as FourColumns,t as ThreeColumns,s as TwoColumns,T as __namedExportsOrder,h as default};
