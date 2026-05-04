import{_ as r}from"./Alert-6XFCorDr.js";import"./iframe-o8pGYXWK.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-BbLweHth.js";import"./Button-DTHgAldo.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Alert",component:r,argTypes:{type:{control:"select",options:["info","emergency"]},buttonType:{control:"select",options:["dark","light"]},buttonSize:{control:"select",options:["small","medium","large"]}}},a={label:"Alert",primary:!0,heading:"Alert",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}],buttonType:"dark",buttonSize:"small"},e={name:"Info",args:{...a,type:"info"},play:async({canvas:o})=>{}},t={name:"Emergency",args:{...a,type:"emergency"},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Info",
  args: {
    ...globalArgs,
    type: "info"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // The Alert component renders heading with a trailing colon: "Alert:"
    await expect(canvas.getByText("Alert:")).toBeInTheDocument();
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Emergency",
  args: {
    ...globalArgs,
    type: "emergency"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // The Alert component renders heading with a trailing colon: "Alert:"
    await expect(canvas.getByText("Alert:")).toBeInTheDocument();
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const u=["Primary","Secondary"];export{e as Primary,t as Secondary,u as __namedExportsOrder,p as default};
