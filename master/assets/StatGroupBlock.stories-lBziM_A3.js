import n from"./StatGroup-BRnxFo2o.js";import"./iframe-_0QUABCw.js";import"./preload-helper-CNn__nYE.js";import"./Context-D-BCrhz4.js";import"./TextGroup-DHzjnflj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Bm_WHhor.js";import"./Button-DCkS8znm.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,g={title:"Blocks/Stat Group",component:n,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},a={name:"Stat Group",args:{subheading:"By the Numbers",heading:"Colby at a Glance",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Full Statistics",target:"_blank"}],items:[{heading:"2,000",paragraph:"Students from around the world"},{heading:"56",paragraph:"Majors across the arts and sciences"},{heading:"35",paragraph:"Minors to complement any major"},{heading:"9:1",paragraph:"Student-to-faculty ratio"}]},play:async({canvas:t})=>{await e(t.getByText("Colby at a Glance")).toBeInTheDocument(),await e(t.getByText("2,000")).toBeInTheDocument(),await e(t.getByText("56")).toBeInTheDocument(),await e(t.getByText("9:1")).toBeInTheDocument(),await e(t.getByText("Full Statistics")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Stat Group",
  args: {
    subheading: "By the Numbers",
    heading: "Colby at a Glance",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{
      url: "#",
      title: "Full Statistics",
      target: "_blank"
    }],
    items: [{
      heading: "2,000",
      paragraph: "Students from around the world"
    }, {
      heading: "56",
      paragraph: "Majors across the arts and sciences"
    }, {
      heading: "35",
      paragraph: "Minors to complement any major"
    }, {
      heading: "9:1",
      paragraph: "Student-to-faculty ratio"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby at a Glance")).toBeInTheDocument();
    await expect(canvas.getByText("2,000")).toBeInTheDocument();
    await expect(canvas.getByText("56")).toBeInTheDocument();
    await expect(canvas.getByText("9:1")).toBeInTheDocument();
    await expect(canvas.getByText("Full Statistics")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const d=["Default"];export{a as Default,d as __namedExportsOrder,g as default};
