import a from"./ListContext-A9NQab_U.js";import"./iframe-wmDQsgH0.js";import"./preload-helper-CNn__nYE.js";import"./Context-B7Ph-fHJ.js";import"./TextGroup-Bp4ptozu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-4rJTUgyd.js";import"./Button-fRnKrT9M.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,p={title:"Blocks/List Context",component:a,tags:["!autodocs"],argTypes:{size:{name:"Size",control:{type:"inline-radio",labels:{default:"Default",small:"Small"}},options:["default","small"],table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"List Context",args:{size:"default",subheading:"Subheading",heading:"More from [Program]",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Read More"}],items:[{link:{url:"#",title:"Majors and Minors"}},{link:{url:"#",title:"Current Courses"}},{link:{url:"#",title:"Research"}},{link:{url:"#",title:"Facilities"}},{link:{url:"#",title:"Honors & Programs"}},{title:"Career Pathways"},{link:{url:"#",title:"Faculty & Staff"}}]},play:async({canvas:t})=>{await n(t.getByText("More from [Program]")).toBeInTheDocument(),await n(t.getByText("Majors and Minors")).toBeInTheDocument(),await n(t.getByText("Read More")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "List Context",
  args: {
    size: "default",
    subheading: "Subheading",
    heading: "More from [Program]",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{
      url: "#",
      title: "Read More"
    }],
    items: [{
      link: {
        url: "#",
        title: "Majors and Minors"
      }
    }, {
      link: {
        url: "#",
        title: "Current Courses"
      }
    }, {
      link: {
        url: "#",
        title: "Research"
      }
    }, {
      link: {
        url: "#",
        title: "Facilities"
      }
    }, {
      link: {
        url: "#",
        title: "Honors & Programs"
      }
    }, {
      title: "Career Pathways"
    }, {
      link: {
        url: "#",
        title: "Faculty & Staff"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("More from [Program]")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Read More")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,p as default};
