import t from"./TableSection-BcVipUc-.js";import"./iframe-BQ2bmCqi.js";import"./preload-helper-C8FH-Zdq.js";import"./Table-CY3HlD4H.js";import"./Modal-BJPoVPIZ.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,i={title:"Core Components/Table Section",component:t,tags:["autodocs"]},e={name:"Default",args:{table:{renderApi:!1,api:"Departments",externalItems:[{post_title:"Biology",post_name:"biology"},{post_title:"Chemistry",post_name:"chemistry"},{post_title:"Computer Science",post_name:"computer-science"}]}},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
