import n from"./Widget-DfwHf4dC.js";import"./iframe-BeFdV9vL.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonGroup-FYF5r83H.js";import"./Button-DKS7ljQH.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Widget",component:n,tags:["autodocs"]},t={name:"Default",args:{heading:"Contact",text:'<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',buttons:[{url:"https://www.colby.edu",title:"Download now"}]},play:async({canvas:o})=>{}},e={name:"Without Buttons",args:{heading:"Hours",text:"<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"},play:async({canvas:o})=>{}},a={name:"Without Heading",args:{heading:"",text:"<p>Quick links and resources for current students.</p>",buttons:[{url:"#",title:"Student Portal"}]},play:async({canvas:o})=>{}},r={name:"Without Button Target",args:{heading:"Links",text:"<p>Important resources.</p>",buttons:[{title:"Office of the Registrar",url:"https://www.colby.edu/people/offices-directory/registrar/",target:""},{title:"Academic Calendar",url:"https://www.colby.edu/academics/calendar/",target:""},{title:"myColby",url:"https://my.colby.edu/",target:""}]},play:async({canvas:o})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Without Button Target",
  args: {
    heading: "Links",
    text: "<p>Important resources.</p>",
    buttons: [{
      title: "Office of the Registrar",
      url: "https://www.colby.edu/people/offices-directory/registrar/",
      target: ""
    }, {
      title: "Academic Calendar",
      url: "https://www.colby.edu/academics/calendar/",
      target: ""
    }, {
      title: "myColby",
      url: "https://my.colby.edu/",
      target: ""
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Links")).toBeInTheDocument();
    await expect(canvas.getByText("Visit Site")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const m=["Default","WithoutButtons","WithoutHeading","WithoutButtonTarget"];export{t as Default,r as WithoutButtonTarget,e as WithoutButtons,a as WithoutHeading,m as __namedExportsOrder,d as default};
