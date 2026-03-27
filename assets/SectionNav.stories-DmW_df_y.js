import i from"./SectionNav-DA7T21ft.js";import"./iframe-CXCUApFV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Section Nav",component:i,tags:["autodocs"]},n={name:"Default",args:{title:"Academics",items:[{link:{title:"Majors & Minors",url:"#"}},{link:{title:"Departments & Programs",url:"#"}},{link:{title:"Areas of Distinction",url:"#"}},{link:{title:"Course Catalog",url:"#"}},{link:{title:"Research",url:"#"}},{link:{title:"Registrar",url:"#"}},{link:{title:"Academic Calendar",url:"#"}}]},play:async({canvas:e})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Majors & Minors")).toBeInTheDocument(),await t(e.getByText("Course Catalog")).toBeInTheDocument(),await t(e.getByText("Academic Calendar")).toBeInTheDocument()}},a={name:"With Icons",args:{title:"Resources",items:[{link:{title:"Library",url:"#"},icon_class:"book"},{link:{title:"IT Support",url:"#"},icon_class:"computer"},{link:{title:"Contact",url:"#"},icon_class:"phone"},{link:{title:"FAQ",url:"#"},icon_class:"question_mark"}]},play:async({canvas:e})=>{await t(e.getByText("Resources")).toBeInTheDocument(),await t(e.getByText("Library")).toBeInTheDocument(),await t(e.getByText("FAQ")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    title: "Academics",
    items: [{
      link: {
        title: "Majors & Minors",
        url: "#"
      }
    }, {
      link: {
        title: "Departments & Programs",
        url: "#"
      }
    }, {
      link: {
        title: "Areas of Distinction",
        url: "#"
      }
    }, {
      link: {
        title: "Course Catalog",
        url: "#"
      }
    }, {
      link: {
        title: "Research",
        url: "#"
      }
    }, {
      link: {
        title: "Registrar",
        url: "#"
      }
    }, {
      link: {
        title: "Academic Calendar",
        url: "#"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Majors & Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Course Catalog")).toBeInTheDocument();
    await expect(canvas.getByText("Academic Calendar")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "With Icons",
  args: {
    title: "Resources",
    items: [{
      link: {
        title: "Library",
        url: "#"
      },
      icon_class: "book"
    }, {
      link: {
        title: "IT Support",
        url: "#"
      },
      icon_class: "computer"
    }, {
      link: {
        title: "Contact",
        url: "#"
      },
      icon_class: "phone"
    }, {
      link: {
        title: "FAQ",
        url: "#"
      },
      icon_class: "question_mark"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    await expect(canvas.getByText("FAQ")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const m=["Default","WithIcons"];export{n as Default,a as WithIcons,m as __namedExportsOrder,u as default};
