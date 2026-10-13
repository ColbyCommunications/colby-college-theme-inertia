import{_ as e}from"./Breadcrumbs-CZ1vJOx3.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Icon-Reaz2zb1.js";const{expect:c}=__STORYBOOK_MODULE_TEST__,i={title:"Core Components/Breadcrumbs",component:e},t={name:"Default",args:{items:[{title:"Admissions",url:"https://www.colby.edu"},{title:"Museum",url:"https://www.colby.edu"},{title:"myColby",url:"https://www.colby.edu"},{title:"Office of Communications",url:"https://www.colby.edu"}]},play:async({canvas:n})=>{}},m=["Primary"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    items: [{
      title: "Admissions",
      url: "https://www.colby.edu"
    }, {
      title: "Museum",
      url: "https://www.colby.edu"
    }, {
      title: "myColby",
      url: "https://www.colby.edu"
    }, {
      title: "Office of Communications",
      url: "https://www.colby.edu"
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Museum")).toBeInTheDocument();
    await expect(canvas.getByText("myColby")).toBeInTheDocument();
    await expect(canvas.getByText("Office of Communications")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};export{t as Primary,m as __namedExportsOrder,i as default};
