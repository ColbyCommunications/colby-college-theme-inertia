import{_ as e}from"./Breadcrumbs-BmN7-iiw.js";import"./iframe-lCgBM3L3.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-ZS6riMzK.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,m={title:"Core Components/Breadcrumbs",component:e},t={name:"Default",args:{items:[{title:"Admissions",url:"https://www.colby.edu"},{title:"Museum",url:"https://www.colby.edu"},{title:"myColby",url:"https://www.colby.edu"},{title:"Office of Communications",url:"https://www.colby.edu"}]},play:async({canvas:s})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const n=["Primary"];export{t as Primary,n as __namedExportsOrder,m as default};
