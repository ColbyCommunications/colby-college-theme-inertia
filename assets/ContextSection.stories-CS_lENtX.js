import{_ as o}from"./ContextSection-B9SjteAh.js";import"./iframe-aFyCAL0S.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BM3uvBq2.js";import"./TextGroup-BfzbzKKf.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CZf8hs7t.js";import"./Button-R6CNTj6a.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,h={title:"Core Components/Context Section",component:o},e={name:"Default",args:{align:"left",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:n})=>{}},t={name:"Center Align",args:{align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:n})=>{}},a={name:"Large",args:{size:"large",align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:n})=>{}},r={name:"With Buttons",args:{buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}},{button:{size:"small",title:"button2",url:"https://www.colby.edu"}}],align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:n})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Anthropology")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Anthropology")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Anthropology")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const y=["Default","RightAlign","Large","WithButtons"];export{e as Default,a as Large,t as RightAlign,r as WithButtons,y as __namedExportsOrder,h as default};
