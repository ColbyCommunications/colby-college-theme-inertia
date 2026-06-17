import{_ as o}from"./TableSection-C7fNdKsN.js";import"./iframe-Dp_NUtrm.js";import"./preload-helper-DmLEtdH0.js";import"./Table-D8YB-7S7.js";import"./Modal-B7AXgWov.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,m={title:"Blocks/Table Section",component:o,tags:["!autodocs"]},e={name:"Table Section",args:{table:{renderApi:!1,api:"Departments",externalItems:[{post_title:"Biology",post_name:"biology"},{post_title:"Chemistry",post_name:"chemistry"},{post_title:"Computer Science",post_name:"computer-science"}]}},play:async({canvas:t})=>{await n(t.getByText("Departments and Programs")).toBeInTheDocument(),await n(t.getByText("Biology")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Table Section",
  args: {
    table: {
      renderApi: false,
      api: "Departments",
      externalItems: [{
        post_title: "Biology",
        post_name: "biology"
      }, {
        post_title: "Chemistry",
        post_name: "chemistry"
      }, {
        post_title: "Computer Science",
        post_name: "computer-science"
      }]
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Departments and Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,m as default};
