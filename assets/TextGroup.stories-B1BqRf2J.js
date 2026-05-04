import{_ as u}from"./TextGroup-DU2HigOJ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-JoPPn0qi.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:b}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/Text Group",component:u,tags:["autodocs"],argTypes:{size:{control:"select",options:["xlarge","large","medium","small","xsmall"]},align:{control:"select",options:["left","center"]},type:{control:"select",options:["dark","light"]},subheading:{control:"text"},heading:{control:"text"},paragraph:{control:"text"},static:{control:"boolean"},hero:{control:"boolean"},date:{control:"boolean"}}},a=e=>({components:{TextGroup:u},setup(){return{args:e}},template:`<div :class="args.type === 'light' ? 'bg-indigo p-10' : 'bg-white p-10'"><TextGroup v-bind="args" /></div>`}),t={name:"Medium (Default)",render:a,args:{size:"medium",align:"left",type:"dark",subheading:"Academics",heading:"Explore Our Programs",paragraph:"Colby offers more than 60 majors and minors across the liberal arts and sciences."},play:async({canvas:e})=>{}},r={name:"Extra Large",render:a,args:{size:"xlarge",align:"left",type:"dark",subheading:"Welcome",heading:"Colby College",paragraph:"A leading liberal arts college in Waterville, Maine."},play:async({canvas:e})=>{}},s={name:"Large",render:a,args:{size:"large",align:"left",type:"dark",subheading:"Featured",heading:"Student Research",paragraph:"Undergraduate research is a hallmark of the Colby experience."},play:async({canvas:e})=>{}},n={name:"Small",render:a,args:{size:"small",align:"left",type:"dark",subheading:"News",heading:"Campus Update",paragraph:"The latest news and events from around campus."},play:async({canvas:e})=>{}},i={name:"Extra Small",render:a,args:{size:"xsmall",align:"left",type:"dark",subheading:"Category",heading:"Article Title",paragraph:"A brief description of the article content."},play:async({canvas:e})=>{}},c={name:"Centered",render:a,args:{size:"large",align:"center",type:"dark",subheading:"Mission",heading:"Our Purpose",paragraph:"Colby is dedicated to the education of thoughtful, capable citizens of the world."},play:async({canvas:e})=>{}},o={name:"Light Type",render:a,args:{size:"large",align:"left",type:"light",subheading:"Spotlight",heading:"Faculty Achievements",paragraph:"Celebrating the accomplishments of our distinguished faculty."},play:async({canvas:e})=>{}},l={name:"Small Static",render:a,args:{size:"small",align:"left",type:"dark",static:!0,subheading:"Static Label",heading:"Static Heading",paragraph:"This uses the small+static size branch."},play:async({canvas:e})=>{}},g={name:"Hero with Date",render:a,args:{size:"large",align:"left",type:"dark",hero:!0,date:!0,subheading:"January 15, 2025",heading:"Campus Event",paragraph:"A special event on campus."},play:async({canvas:e})=>{}},p={name:"Hero without Date",render:a,args:{size:"large",align:"left",type:"dark",hero:!0,date:!1,subheading:"Welcome",heading:"Colby College",paragraph:"A premier liberal arts college."},play:async({canvas:e})=>{}},d={name:"Heading Only (no subheading)",render:a,args:{size:"medium",align:"left",type:"dark",heading:"Just a Heading"},play:async({canvas:e})=>{}},m={name:"With HTML Paragraph",render:a,args:{size:"medium",align:"left",type:"dark",subheading:"Resources",heading:"Helpful Links",paragraph:"<ul><li>Library</li><li>IT Support</li></ul>"},play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Medium (Default)",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Academics",
    heading: "Explore Our Programs",
    paragraph: "Colby offers more than 60 majors and minors across the liberal arts and sciences."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Explore Our Programs")).toBeInTheDocument();
    const subheading = canvas.getByText("Academics");
    await expect(subheading.className).toMatch(/text-azure/);
    await expect(subheading.className).toMatch(/uppercase/);
    const heading = canvas.getByText("Explore Our Programs");
    await expect(heading.className).toMatch(/text-indigo/);
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Extra Large",
  render,
  args: {
    size: "xlarge",
    align: "left",
    type: "dark",
    subheading: "Welcome",
    heading: "Colby College",
    paragraph: "A leading liberal arts college in Waterville, Maine."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
    const subheading = canvas.getByText("Welcome");
    await expect(subheading.className).toMatch(/text-24/);
    const heading = canvas.getByText("Colby College");
    await expect(heading.className).toMatch(/text-48/);
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Large",
  render,
  args: {
    size: "large",
    align: "left",
    type: "dark",
    subheading: "Featured",
    heading: "Student Research",
    paragraph: "Undergraduate research is a hallmark of the Colby experience."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Featured")).toBeInTheDocument();
    await expect(canvas.getByText("Student Research")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Small",
  render,
  args: {
    size: "small",
    align: "left",
    type: "dark",
    subheading: "News",
    heading: "Campus Update",
    paragraph: "The latest news and events from around campus."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Update")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Extra Small",
  render,
  args: {
    size: "xsmall",
    align: "left",
    type: "dark",
    subheading: "Category",
    heading: "Article Title",
    paragraph: "A brief description of the article content."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Article Title")).toBeInTheDocument();
    const heading = canvas.getByText("Article Title");
    await expect(heading.className).toMatch(/font-bold/);
    await expect(heading.className).toMatch(/text-18/);
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Centered",
  render,
  args: {
    size: "large",
    align: "center",
    type: "dark",
    subheading: "Mission",
    heading: "Our Purpose",
    paragraph: "Colby is dedicated to the education of thoughtful, capable citizens of the world."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Mission")).toBeInTheDocument();
    await expect(canvas.getByText("Our Purpose")).toBeInTheDocument();
    const subheading = canvas.getByText("Mission");
    await expect(subheading.className).toMatch(/text-center/);
    const heading = canvas.getByText("Our Purpose");
    await expect(heading.className).toMatch(/text-center/);
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Light Type",
  render,
  args: {
    size: "large",
    align: "left",
    type: "light",
    subheading: "Spotlight",
    heading: "Faculty Achievements",
    paragraph: "Celebrating the accomplishments of our distinguished faculty."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Spotlight")).toBeInTheDocument();
    await expect(canvas.getByText("Faculty Achievements")).toBeInTheDocument();
    const subheading = canvas.getByText("Spotlight");
    await expect(subheading.className).toMatch(/text-canary/);
    const heading = canvas.getByText("Faculty Achievements");
    await expect(heading.className).toMatch(/text-white/);
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Small Static",
  render,
  args: {
    size: "small",
    align: "left",
    type: "dark",
    static: true,
    subheading: "Static Label",
    heading: "Static Heading",
    paragraph: "This uses the small+static size branch."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Static Heading")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Hero with Date",
  render,
  args: {
    size: "large",
    align: "left",
    type: "dark",
    hero: true,
    date: true,
    subheading: "January 15, 2025",
    heading: "Campus Event",
    paragraph: "A special event on campus."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Campus Event")).toBeInTheDocument();
    await expect(canvas.getByText("January 15, 2025")).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Hero without Date",
  render,
  args: {
    size: "large",
    align: "left",
    type: "dark",
    hero: true,
    date: false,
    subheading: "Welcome",
    heading: "Colby College",
    paragraph: "A premier liberal arts college."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Heading Only (no subheading)",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    heading: "Just a Heading"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Just a Heading")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With HTML Paragraph",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Resources",
    heading: "Helpful Links",
    paragraph: "<ul><li>Library</li><li>IT Support</li></ul>"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Helpful Links")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};const f=["Medium","XLarge","Large","Small","XSmall","Centered","LightType","SmallStatic","HeroWithDate","HeroNoDate","HeadingOnly","WithHtmlParagraph"];export{c as Centered,d as HeadingOnly,p as HeroNoDate,g as HeroWithDate,s as Large,o as LightType,t as Medium,n as Small,l as SmallStatic,m as WithHtmlParagraph,r as XLarge,i as XSmall,f as __namedExportsOrder,T as default};
