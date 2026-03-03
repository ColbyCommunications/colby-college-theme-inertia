import{S as l}from"./SubpageNav-Bt3kHmC5.js";import"./iframe-DosZwoRT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Subpage Nav",component:l,tags:["autodocs"]},i={name:"Default",args:{heading:"Academics",parentPermalink:"#",items:[{title:"Majors & Minors",url:"#",active:!0},{title:"Departments & Programs",url:"#"},{title:"Areas of Distinction",url:"#"},{title:"Course Catalog",url:"#"},{title:"Research",url:"#"},{title:"Registrar",url:"#"},{title:"Academic Calendar",url:"#"}]},play:async({canvas:t,canvasElement:r,userEvent:s})=>{await e(t.getByText("Academics")).toBeInTheDocument(),await e(t.getByText("Majors & Minors")).toBeInTheDocument(),await e(t.getByText("Registrar")).toBeInTheDocument();const a=r.querySelector(".subpage-nav__items"),n=r.querySelector(".subpage-nav h2 > div");await e(a).toHaveClass("hidden"),await e(n).not.toBeNull(),await s.click(n),await e(a).not.toHaveClass("hidden")}},o={name:"All Inactive",args:{heading:"Resources",parentPermalink:"#",items:[{title:"Library",url:"#"},{title:"IT Support",url:"#"},{title:"Campus Map",url:"#"}]},play:async({canvas:t,canvasElement:r,userEvent:s})=>{await e(t.getByText("Resources")).toBeInTheDocument(),await e(t.getByText("Library")).toBeInTheDocument();const a=r.querySelector(".subpage-nav__items"),n=r.querySelector(".subpage-nav h2 > div");await e(a).toHaveClass("hidden"),await e(n).not.toBeNull(),await s.click(n),await e(a).not.toHaveClass("hidden"),await s.click(n),await e(a).toHaveClass("hidden")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    canvasElement,
    userEvent
  }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Majors & Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Registrar")).toBeInTheDocument();
    const menu = canvasElement.querySelector(".subpage-nav__items");
    const toggle = canvasElement.querySelector(".subpage-nav h2 > div");
    await expect(menu).toHaveClass("hidden");
    await expect(toggle).not.toBeNull();
    await userEvent.click(toggle);
    await expect(menu).not.toHaveClass("hidden");
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    canvasElement,
    userEvent
  }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    const menu = canvasElement.querySelector(".subpage-nav__items");
    const toggle = canvasElement.querySelector(".subpage-nav h2 > div");
    await expect(menu).toHaveClass("hidden");
    await expect(toggle).not.toBeNull();
    await userEvent.click(toggle);
    await expect(menu).not.toHaveClass("hidden");
    await userEvent.click(toggle);
    await expect(menu).toHaveClass("hidden");
  }
}`,...o.parameters?.docs?.source}}};const v=["Default","AllInactive"];export{o as AllInactive,i as Default,v as __namedExportsOrder,d as default};
