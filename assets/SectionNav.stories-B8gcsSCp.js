import r from"./SectionNav-mvsyBKl3.js";import"./iframe-BgQXPfKC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4-8ALNT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:c}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Section Nav",component:r,tags:["autodocs"]},t={name:"Default",args:{title:"Academics",items:[{link:{title:"Majors & Minors",url:"#"}},{link:{title:"Departments & Programs",url:"#"}},{link:{title:"Areas of Distinction",url:"#"}},{link:{title:"Course Catalog",url:"#"}},{link:{title:"Research",url:"#"}},{link:{title:"Registrar",url:"#"}},{link:{title:"Academic Calendar",url:"#"}}]},play:async({canvas:a})=>{}},e={name:"With Icons",args:{title:"Resources",items:[{link:{title:"Library",url:"#"},icon_class:"book"},{link:{title:"IT Support",url:"#"},icon_class:"computer"},{link:{title:"Contact",url:"#"},icon_class:"phone"},{link:{title:"FAQ",url:"#"},icon_class:"question_mark"}]},play:async({canvas:a})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Majors & Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Course Catalog")).toBeInTheDocument();
    await expect(canvas.getByText("Academic Calendar")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    await expect(canvas.getByText("FAQ")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const m=["Default","WithIcons"];export{t as Default,e as WithIcons,m as __namedExportsOrder,u as default};
