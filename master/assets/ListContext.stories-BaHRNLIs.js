import r from"./ListContext-A9NQab_U.js";import"./iframe-wmDQsgH0.js";import"./preload-helper-CNn__nYE.js";import"./Context-B7Ph-fHJ.js";import"./TextGroup-Bp4ptozu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-4rJTUgyd.js";import"./Button-fRnKrT9M.js";const{expect:g}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/List Context",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]}}},e={name:"Default",args:{heading:"More from [Program]",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Read More"}],items:[{link:{url:"#",title:"Majors and Minors"}},{link:{url:"#",title:"Current Courses"}},{link:{url:"#",title:"Research"}},{link:{url:"#",title:"Facilities"}},{link:{url:"#",title:"Honors & Programs"}},{title:"Career Pathways"},{link:{url:"#",title:"Faculty & Staff"}}]},play:async({canvas:a})=>{}},t={name:"Small",args:{...e.args,size:"small",buttons:[]},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("More from [Program]")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Read More")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Small",
  args: {
    ...Default.args,
    size: "small",
    buttons: []
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("More from [Program]")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const f=["Default","Small"];export{e as Default,t as Small,f as __namedExportsOrder,d as default};
