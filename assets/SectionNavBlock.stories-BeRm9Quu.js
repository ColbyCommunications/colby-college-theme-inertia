import a from"./SectionNav-BbZrEk3Z.js";import"./iframe-UIbP18SM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4-8ALNT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,c={title:"Blocks/Section Navigation",component:a,tags:["!autodocs"],argTypes:{title:{name:"Title",control:"text",table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},n={name:"Section Navigation",args:{title:"Academics",items:[{link:{title:"Majors & Minors",url:"#"}},{link:{title:"Departments & Programs",url:"#"}},{link:{title:"Areas of Distinction",url:"#"}},{link:{title:"Course Catalog",url:"#"}},{link:{title:"Research",url:"#"}},{link:{title:"Registrar",url:"#"}},{link:{title:"Academic Calendar",url:"#"}}]},play:async({canvas:e})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Majors & Minors")).toBeInTheDocument(),await t(e.getByText("Course Catalog")).toBeInTheDocument(),await t(e.getByText("Academic Calendar")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Section Navigation",
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
}`,...n.parameters?.docs?.source}}};const m=["Default"];export{n as Default,m as __namedExportsOrder,c as default};
