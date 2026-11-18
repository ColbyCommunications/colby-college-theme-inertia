import t from"./TableSection-BbzOkAju.js";import"./iframe-VI30tm46.js";import"./preload-helper-DK9VPF6O.js";import"./Table-DKdxr2df.js";import"./Modal-CNLmgy4R.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,i={title:"Core Components/Table Section",component:t,tags:["autodocs"]},e={name:"Default",args:{table:{renderApi:!1,api:"Departments",externalItems:[{post_title:"Biology",post_name:"biology"},{post_title:"Chemistry",post_name:"chemistry"},{post_title:"Computer Science",post_name:"computer-science"}]}},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Departments and Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,i as default};
