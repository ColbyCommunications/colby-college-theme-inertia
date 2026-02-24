import{_ as s}from"./ContextSection-DX2UACuC.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-Dp7yX81d.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,h={title:"Core Components/Context Section",component:s},n={name:"Default",args:{align:"left",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:e})=>{await t(e.getByText("Lorem Ipsum")).toBeInTheDocument(),await t(e.getByText("Anthropology")).toBeInTheDocument()}},a={name:"Center Align",args:{align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:e})=>{await t(e.getByText("Lorem Ipsum")).toBeInTheDocument(),await t(e.getByText("Anthropology")).toBeInTheDocument()}},o={name:"Large",args:{size:"large",align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:e})=>{await t(e.getByText("Lorem Ipsum")).toBeInTheDocument(),await t(e.getByText("Anthropology")).toBeInTheDocument()}},r={name:"With Buttons",args:{buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}},{button:{size:"small",title:"button2",url:"https://www.colby.edu"}}],align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:e})=>{await t(e.getByText("Lorem Ipsum")).toBeInTheDocument(),await t(e.getByText("button1")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const d=["Default","RightAlign","Large","WithButtons"];export{n as Default,o as Large,a as RightAlign,r as WithButtons,d as __namedExportsOrder,h as default};
