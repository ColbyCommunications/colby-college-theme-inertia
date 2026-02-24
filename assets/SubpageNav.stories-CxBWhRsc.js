import{S as s}from"./SubpageNav-BA35LU5t.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Subpage Nav",component:s,tags:["autodocs"]},r={name:"Default",args:{heading:"Academics",parentPermalink:"#",items:[{title:"Majors & Minors",url:"#",active:!0},{title:"Departments & Programs",url:"#"},{title:"Areas of Distinction",url:"#"},{title:"Course Catalog",url:"#"},{title:"Research",url:"#"},{title:"Registrar",url:"#"},{title:"Academic Calendar",url:"#"}]},play:async({canvas:e,userEvent:n})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Majors & Minors")).toBeInTheDocument(),await t(e.getByText("Registrar")).toBeInTheDocument();const a=e.getByText("Academics");await n.click(a)}},i={name:"All Inactive",args:{heading:"Resources",parentPermalink:"#",items:[{title:"Library",url:"#"},{title:"IT Support",url:"#"},{title:"Campus Map",url:"#"}]},play:async({canvas:e,userEvent:n})=>{await t(e.getByText("Resources")).toBeInTheDocument(),await t(e.getByText("Library")).toBeInTheDocument();const a=e.getByText("Resources");await n.click(a),await n.click(a)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Academics",
    parentPermalink: "#",
    items: [{
      title: "Majors & Minors",
      url: "#",
      active: true
    }, {
      title: "Departments & Programs",
      url: "#"
    }, {
      title: "Areas of Distinction",
      url: "#"
    }, {
      title: "Course Catalog",
      url: "#"
    }, {
      title: "Research",
      url: "#"
    }, {
      title: "Registrar",
      url: "#"
    }, {
      title: "Academic Calendar",
      url: "#"
    }]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Majors & Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Registrar")).toBeInTheDocument();
    // Click heading to toggle mobile menu
    const heading = canvas.getByText("Academics");
    await userEvent.click(heading);
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "All Inactive",
  args: {
    heading: "Resources",
    parentPermalink: "#",
    items: [{
      title: "Library",
      url: "#"
    }, {
      title: "IT Support",
      url: "#"
    }, {
      title: "Campus Map",
      url: "#"
    }]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    // Toggle menu open then closed
    const heading = canvas.getByText("Resources");
    await userEvent.click(heading);
    await userEvent.click(heading);
  }
}`,...i.parameters?.docs?.source}}};const p=["Default","AllInactive"];export{i as AllInactive,r as Default,p as __namedExportsOrder,g as default};
