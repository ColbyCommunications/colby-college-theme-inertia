import r from"./ListContext-BxlQS-XI.js";import"./iframe-CnrjvFls.js";import"./preload-helper-DmLEtdH0.js";import"./Context-D5cZySbU.js";import"./TextGroup-CmaI_y-9.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DkbncDde.js";import"./Button-7VUkjaD3.js";const{expect:p}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/List Context",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]}}},e={name:"Default",args:{heading:"More from [Program]",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Read More"}],items:[{link:{url:"#",title:"Majors and Minors"}},{link:{url:"#",title:"Current Courses"}},{link:{url:"#",title:"Research"}},{link:{url:"#",title:"Facilities"}},{link:{url:"#",title:"Honors & Programs"}},{title:"Career Pathways"},{link:{url:"#",title:"Faculty & Staff"}}]},play:async({canvas:a})=>{}},t={name:"Small",args:{...e.args,size:"small",buttons:[]},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const d=["Default","Small"];export{e as Default,t as Small,d as __namedExportsOrder,g as default};
