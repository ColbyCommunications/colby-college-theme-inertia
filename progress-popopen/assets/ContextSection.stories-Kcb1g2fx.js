import o from"./ContextSection-IXBdR--7.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Context-BbEtaWPo.js";import"./TextGroup-o3sNFTrc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Context Section",component:o},e={name:"Default",args:{align:"left",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:r})=>{}},n={name:"Center Align",args:{align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:r})=>{}},t={name:"Large",args:{size:"large",align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:r})=>{}},a={name:"With Buttons",args:{buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}},{button:{size:"small",title:"button2",url:"https://www.colby.edu"}}],align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."},play:async({canvas:r})=>{}},v=["Default","RightAlign","Large","WithButtons"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{e as Default,t as Large,n as RightAlign,a as WithButtons,v as __namedExportsOrder,w as default};
