import{_ as o}from"./Alert-CSHUswtb.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Alert",component:o,argTypes:{type:{control:"select",options:["info","emergency"]},buttonType:{control:"select",options:["dark","light"]},buttonSize:{control:"select",options:["small","medium","large"]}}},n={label:"Alert",primary:!0,heading:"Alert",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}],buttonType:"dark",buttonSize:"small"},e={name:"Info",args:{...n,type:"info"},play:async({canvas:a})=>{}},t={name:"Emergency",args:{...n,type:"emergency"},play:async({canvas:a})=>{}},u=["Primary","Secondary"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{e as Primary,t as Secondary,u as __namedExportsOrder,p as default};
