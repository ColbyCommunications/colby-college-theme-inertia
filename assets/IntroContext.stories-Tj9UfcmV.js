import{_ as r}from"./IntroContext-MSU4v9QM.js";import"./iframe-Bmd2UPGG.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BWJjFeeZ.js";import"./TextGroup-DijtnC4I.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-mkQ2kZah.js";import"./Button-BRb3G0IJ.js";const{expect:g}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Intro Context",component:r,tags:["autodocs"]},e={name:"Default",args:{size:"medium",subheading:"Dare Northward Overview",heading:"We are taking an integrated, values-led approach to this campaign to reflect the realities of the world we're trying to better.",text:"<p>In 1818, Colby's early faculty and students sailed up the Kennebec on the sloop Hero to start a college, far north of the established centers of higher learning. Many daring moves followed as Colby grew, struggled, and prospered.</p><p>Dare Northward leverages our existing strengths to enhance our student's experiences, improve their outcomes, and produce generations of leaders to tackle the world's greatest challenges.</p>",buttons:[{url:"#",title:"Colby Impact"}]},play:async({canvas:a})=>{}},t={name:"Inset",args:{...e.args,inset:!0,size:"large"},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    size: "medium",
    subheading: "Dare Northward Overview",
    heading: "We are taking an integrated, values-led approach to this campaign to reflect the realities of the world we're trying to better.",
    text: "<p>In 1818, Colby's early faculty and students sailed up the Kennebec on the sloop Hero to start a college, far north of the established centers of higher learning. Many daring moves followed as Colby grew, struggled, and prospered.</p><p>Dare Northward leverages our existing strengths to enhance our student's experiences, improve their outcomes, and produce generations of leaders to tackle the world's greatest challenges.</p>",
    buttons: [{
      url: "#",
      title: "Colby Impact"
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Dare Northward Overview")).toBeInTheDocument();
    await expect(canvas.getByText("Colby Impact")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Inset",
  args: {
    ...Default.args,
    inset: true,
    size: "large"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Dare Northward Overview")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","Inset"];export{e as Default,t as Inset,m as __namedExportsOrder,u as default};
