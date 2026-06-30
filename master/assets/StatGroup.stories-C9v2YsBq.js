import r from"./StatGroup-BbcmwY3n.js";import"./iframe-Bq6OY017.js";import"./preload-helper-CNn__nYE.js";import"./Context-ClGLxUzp.js";import"./TextGroup-IBwim9oO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-Dhdhbddy.js";import"./Button-CRkPS1UD.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Stat Group",component:r,tags:["autodocs"]},t={name:"Default",args:{subheading:"By the Numbers",heading:"Colby at a Glance",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Full Statistics",target:"_blank"}],items:[{heading:"2,000",paragraph:"Students from around the world"},{heading:"56",paragraph:"Majors across the arts and sciences"},{heading:"35",paragraph:"Minors to complement any major"},{heading:"9:1",paragraph:"Student-to-faculty ratio"}]},play:async({canvas:e})=>{}},a={name:"Without Button Target",args:{subheading:"Overview",heading:"Quick Facts",paragraph:"Key statistics about the college.",buttons:[{url:"#",title:"Learn More"}],items:[{heading:"1,800",paragraph:"Undergraduate students"},{heading:"12:1",paragraph:"Student-to-faculty ratio"}]},play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Colby at a Glance")).toBeInTheDocument();
    await expect(canvas.getByText("2,000")).toBeInTheDocument();
    await expect(canvas.getByText("56")).toBeInTheDocument();
    await expect(canvas.getByText("9:1")).toBeInTheDocument();
    await expect(canvas.getByText("Full Statistics")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Without Button Target",
  args: {
    subheading: "Overview",
    heading: "Quick Facts",
    paragraph: "Key statistics about the college.",
    buttons: [{
      url: "#",
      title: "Learn More"
    }],
    items: [{
      heading: "1,800",
      paragraph: "Undergraduate students"
    }, {
      heading: "12:1",
      paragraph: "Student-to-faculty ratio"
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Quick Facts")).toBeInTheDocument();
    await expect(canvas.getByText("1,800")).toBeInTheDocument();
    await expect(canvas.getByText("Learn More")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const y=["Default","WithoutButtonTarget"];export{t as Default,a as WithoutButtonTarget,y as __namedExportsOrder,d as default};
