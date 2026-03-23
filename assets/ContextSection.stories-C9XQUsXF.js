import{_ as s}from"./ContextSection-BcAMCzhh.js";import"./iframe-qn9ebuhk.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-zu6BnEJv.js";import"./TextGroup-Jc2jy6rj.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CoN_pgMt.js";import"./Button-zNl_wLY1.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/Context Section",component:s},n={name:"Default",args:{align:"left",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:e})=>{await t(e.getByText("Lorem Ipsum")).toBeInTheDocument(),await t(e.getByText("Anthropology")).toBeInTheDocument()}},a={name:"Center Align",args:{align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:e})=>{await t(e.getByText("Lorem Ipsum")).toBeInTheDocument(),await t(e.getByText("Anthropology")).toBeInTheDocument()}},o={name:"Large",args:{size:"large",align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:e})=>{await t(e.getByText("Lorem Ipsum")).toBeInTheDocument(),await t(e.getByText("Anthropology")).toBeInTheDocument()}},r={name:"With Buttons",args:{buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}},{button:{size:"small",title:"button2",url:"https://www.colby.edu"}}],align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:e})=>{await t(e.getByText("Lorem Ipsum")).toBeInTheDocument(),await t(e.getByText("button1")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    align: "left",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph: "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Anthropology")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Center Align",
  args: {
    align: "center",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph: "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Anthropology")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Large",
  args: {
    size: "large",
    align: "center",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph: "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Anthropology")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "With Buttons",
  args: {
    buttons: [{
      button: {
        size: "small",
        title: "button1",
        url: "https://www.colby.edu"
      }
    }, {
      button: {
        size: "small",
        title: "button2",
        url: "https://www.colby.edu"
      }
    }],
    align: "center",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph: "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const w=["Default","RightAlign","Large","WithButtons"];export{n as Default,o as Large,a as RightAlign,r as WithButtons,w as __namedExportsOrder,y as default};
