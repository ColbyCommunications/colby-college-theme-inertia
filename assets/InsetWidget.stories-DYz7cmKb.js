import{_ as c}from"./InsetWidget-BSz_3Ba-.js";import"./iframe-aFyCAL0S.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BM3uvBq2.js";import"./TextGroup-BfzbzKKf.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CZf8hs7t.js";import"./Button-R6CNTj6a.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Inset Widget",component:c,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]}}},e={name:"Default",args:{subheading:"Get Involved",heading:"Ready to Learn More?",paragraph:"Connect with our admissions team to learn more about Colby College.",buttons:[{url:"#",title:"Request Information"},{url:"#",title:"Schedule a Visit"}]},play:async({canvas:t})=>{}},a={name:"Inset",args:{...e.args,inset:!0},play:async({canvas:t})=>{}},r={name:"Small",args:{...e.args,size:"small"},play:async({canvas:t})=>{}},n={name:"Large",args:{...e.args,size:"large"},play:async({canvas:t})=>{}},s={name:"Without Buttons",args:{subheading:"Notice",heading:"Information Only",paragraph:"No action buttons in this variant."},play:async({canvas:t})=>{}},o={name:"Without Button Target",args:{subheading:"Action",heading:"Take Action",paragraph:"Buttons without target attribute.",buttons:[{url:"#",title:"Click Here"}]},play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "Get Involved",
    heading: "Ready to Learn More?",
    paragraph: "Connect with our admissions team to learn more about Colby College.",
    buttons: [{
      url: "#",
      title: "Request Information"
    }, {
      url: "#",
      title: "Schedule a Visit"
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Get Involved")).toBeInTheDocument();
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
    await expect(canvas.getByText("Request Information")).toBeInTheDocument();
    await expect(canvas.getByText("Schedule a Visit")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Inset",
  args: {
    ...Default.args,
    inset: true
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Small",
  args: {
    ...Default.args,
    size: "small"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Large",
  args: {
    ...Default.args,
    size: "large"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Without Buttons",
  args: {
    subheading: "Notice",
    heading: "Information Only",
    paragraph: "No action buttons in this variant."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Information Only")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Without Button Target",
  args: {
    subheading: "Action",
    heading: "Take Action",
    paragraph: "Buttons without target attribute.",
    buttons: [{
      url: "#",
      title: "Click Here"
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Take Action")).toBeInTheDocument();
    await expect(canvas.getByText("Click Here")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const B=["Default","Inset","Small","Large","WithoutButtons","WithoutButtonTarget"];export{e as Default,a as Inset,n as Large,r as Small,o as WithoutButtonTarget,s as WithoutButtons,B as __namedExportsOrder,v as default};
