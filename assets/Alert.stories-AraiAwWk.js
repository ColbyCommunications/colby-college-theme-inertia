import{_ as r}from"./Alert-NgwyfYNP.js";import"./iframe-C7X5tlWl.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-B8H4lOk3.js";import"./Button-C5A2mqmI.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Alert",component:r,argTypes:{type:{control:"select",options:["info","emergency"]},buttonType:{control:"select",options:["dark","light"]},buttonSize:{control:"select",options:["small","medium","large"]}}},a={label:"Alert",primary:!0,heading:"Alert",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}],buttonType:"dark",buttonSize:"small"},o={name:"Info",args:{...a,type:"info"},play:async({canvas:e})=>{await t(e.getByText("Alert:")).toBeInTheDocument(),await t(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument(),await t(e.getByText("button1")).toBeInTheDocument()}},n={name:"Emergency",args:{...a,type:"emergency"},play:async({canvas:e})=>{await t(e.getByText("Alert:")).toBeInTheDocument(),await t(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Info",
  args: {
    ...globalArgs,
    type: "info"
  },
  play: async ({
    canvas
  }) => {
    // The Alert component renders heading with a trailing colon: "Alert:"
    await expect(canvas.getByText("Alert:")).toBeInTheDocument();
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Emergency",
  args: {
    ...globalArgs,
    type: "emergency"
  },
  play: async ({
    canvas
  }) => {
    // The Alert component renders heading with a trailing colon: "Alert:"
    await expect(canvas.getByText("Alert:")).toBeInTheDocument();
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const d=["Primary","Secondary"];export{o as Primary,n as Secondary,d as __namedExportsOrder,u as default};
