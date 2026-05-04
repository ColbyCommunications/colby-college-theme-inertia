import o from"./Widget-BUktZvVH.js";import"./iframe-CQJlxVxo.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-Bii6xvXt.js";import"./Button-D33RBgaZ.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Widget",component:o,tags:["autodocs"]},t={name:"Default",args:{heading:"Contact",text:'<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',buttons:[{url:"https://www.colby.edu",title:"Download now"}]},play:async({canvas:r})=>{}},e={name:"Without Buttons",args:{heading:"Hours",text:"<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"},play:async({canvas:r})=>{}},a={name:"Without Heading",args:{heading:"",text:"<p>Quick links and resources for current students.</p>",buttons:[{url:"#",title:"Student Portal"}]},play:async({canvas:r})=>{}},n={name:"Without Button Target",args:{heading:"Links",text:"<p>Important resources.</p>",buttons:[{url:"#",title:"Visit Site"}]},play:async({canvas:r})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
    await expect(canvas.getByText("207-859-4000")).toBeInTheDocument();
    await expect(canvas.getByText("Download now")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Without Buttons",
  args: {
    heading: "Hours",
    text: "<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Hours")).toBeInTheDocument();
    await expect(canvas.getByText("Monday - Friday: 8am - 5pm")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Student Portal")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Links")).toBeInTheDocument();
    await expect(canvas.getByText("Visit Site")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const l=["Default","WithoutButtons","WithoutHeading","WithoutButtonTarget"];export{t as Default,n as WithoutButtonTarget,e as WithoutButtons,a as WithoutHeading,l as __namedExportsOrder,d as default};
