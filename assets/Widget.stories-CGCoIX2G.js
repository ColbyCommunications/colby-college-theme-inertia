import{_ as s}from"./Widget-BRCS12CY.js";import"./iframe-BwF8kxoK.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-3HwiSt1F.js";import"./Button-BRr3CzHO.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Widget",component:s,tags:["autodocs"]},n={name:"Default",args:{heading:"Contact",text:'<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',buttons:[{url:"https://www.colby.edu",title:"Download now"}]},play:async({canvas:t})=>{await e(t.getByText("Contact")).toBeInTheDocument(),await e(t.getByText("207-859-4000")).toBeInTheDocument(),await e(t.getByText("Download now")).toBeInTheDocument()}},a={name:"Without Buttons",args:{heading:"Hours",text:"<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"},play:async({canvas:t})=>{await e(t.getByText("Hours")).toBeInTheDocument(),await e(t.getByText("Monday - Friday: 8am - 5pm")).toBeInTheDocument()}},o={name:"Without Heading",args:{heading:"",text:"<p>Quick links and resources for current students.</p>",buttons:[{url:"#",title:"Student Portal"}]},play:async({canvas:t})=>{await e(t.getByText("Student Portal")).toBeInTheDocument()}},r={name:"Without Button Target",args:{heading:"Links",text:"<p>Important resources.</p>",buttons:[{url:"#",title:"Visit Site"}]},play:async({canvas:t})=>{await e(t.getByText("Links")).toBeInTheDocument(),await e(t.getByText("Visit Site")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Contact",
    text: '<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',
    buttons: [{
      url: "https://www.colby.edu",
      title: "Download now"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
    await expect(canvas.getByText("207-859-4000")).toBeInTheDocument();
    await expect(canvas.getByText("Download now")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Without Buttons",
  args: {
    heading: "Hours",
    text: "<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Hours")).toBeInTheDocument();
    await expect(canvas.getByText("Monday - Friday: 8am - 5pm")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Without Heading",
  args: {
    heading: "",
    text: "<p>Quick links and resources for current students.</p>",
    buttons: [{
      url: "#",
      title: "Student Portal"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Student Portal")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Without Button Target",
  args: {
    heading: "Links",
    text: "<p>Important resources.</p>",
    buttons: [{
      url: "#",
      title: "Visit Site"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Links")).toBeInTheDocument();
    await expect(canvas.getByText("Visit Site")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","WithoutButtons","WithoutHeading","WithoutButtonTarget"];export{n as Default,r as WithoutButtonTarget,a as WithoutButtons,o as WithoutHeading,l as __namedExportsOrder,d as default};
