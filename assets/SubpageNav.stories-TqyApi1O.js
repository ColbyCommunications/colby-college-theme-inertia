import{S as c}from"./SubpageNav-BH5DJrzX.js";import"./iframe-u12Z2ejW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Subpage Nav",component:c,tags:["autodocs"]},s={name:"Default",args:{heading:"Academics",parentPermalink:"#",items:[{title:"Majors & Minors",url:"#",active:!0},{title:"Departments & Programs",url:"#"},{title:"Areas of Distinction",url:"#"},{title:"Course Catalog",url:"#"},{title:"Research",url:"#"},{title:"Registrar",url:"#"},{title:"Academic Calendar",url:"#"}]},play:async({canvas:t,canvasElement:o,userEvent:r})=>{await e(t.getByText("Academics")).toBeInTheDocument(),await e(t.getByText("Majors & Minors")).toBeInTheDocument(),await e(t.getByText("Registrar")).toBeInTheDocument();const n=o.querySelector(".subpage-nav__items"),a=o.querySelector(".subpage-nav h2 > div");await e(n).toHaveClass("hidden"),await e(a).not.toBeNull(),await r.click(a),await e(n).not.toHaveClass("hidden")},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},i={name:"All Inactive",args:{heading:"Resources",parentPermalink:"#",items:[{title:"Library",url:"#"},{title:"IT Support",url:"#"},{title:"Campus Map",url:"#"}]},play:async({canvas:t,canvasElement:o,userEvent:r})=>{await e(t.getByText("Resources")).toBeInTheDocument(),await e(t.getByText("Library")).toBeInTheDocument();const n=o.querySelector(".subpage-nav__items"),a=o.querySelector(".subpage-nav h2 > div");await e(n).toHaveClass("hidden"),await e(a).not.toBeNull(),await r.click(a),await e(n).not.toHaveClass("hidden"),await r.click(a),await e(n).toHaveClass("hidden")},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},l={name:"No Animation",args:{heading:"Academics",parentPermalink:"#",items:[{title:"Majors & Minors",url:"#",active:!0},{title:"Departments & Programs",url:"#"},{title:"Areas of Distinction",url:"#"},{title:"Course Catalog",url:"#"},{title:"Research",url:"#"},{title:"Registrar",url:"#"},{title:"Academic Calendar",url:"#"}]},play:async({canvas:t,canvasElement:o,userEvent:r})=>{await e(t.getByText("Academics")).toBeInTheDocument(),await e(t.getByText("Majors & Minors")).toBeInTheDocument(),await e(t.getByText("Registrar")).toBeInTheDocument();const n=o.querySelector(".subpage-nav__items"),a=o.querySelector(".subpage-nav h2 > div");await e(n).toHaveClass("hidden"),await e(a).not.toBeNull(),await r.click(a),await e(n).not.toHaveClass("hidden")},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!0},template:"<story />"})]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "No Animation",
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = true;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...l.parameters?.docs?.source}}};const y=["Default","AllInactive","NoAnimation"];export{i as AllInactive,s as Default,l as NoAnimation,y as __namedExportsOrder,w as default};
