import o from"./Widget-BmBDvT4n.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";import"./TextGroup-o3sNFTrc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";const{expect:g}=__STORYBOOK_MODULE_TEST__,h={title:"Core Components/Widget",component:o,tags:["autodocs"]},t={name:"Default",args:{heading:"Contact",text:'<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',buttons:[{url:"https://www.colby.edu",title:"Download now"}]},play:async({canvas:r})=>{}},e={name:"Without Buttons",args:{heading:"Hours",text:"<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"},play:async({canvas:r})=>{}},n={name:"Without Heading",args:{heading:"",text:"<p>Quick links and resources for current students.</p>",buttons:[{url:"#",title:"Student Portal"}]},play:async({canvas:r})=>{}},a={name:"Without Button Target",args:{heading:"Links",text:"<p>Important resources.</p>",buttons:[{title:"Office of the Registrar",url:"https://www.colby.edu/people/offices-directory/registrar/",target:""},{title:"Academic Calendar",url:"https://www.colby.edu/academics/calendar/",target:""},{title:"myColby",url:"https://my.colby.edu/",target:""}]},play:async({canvas:r})=>{}},w=["Default","WithoutButtons","WithoutHeading","WithoutButtonTarget"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{t as Default,a as WithoutButtonTarget,e as WithoutButtons,n as WithoutHeading,w as __namedExportsOrder,h as default};
