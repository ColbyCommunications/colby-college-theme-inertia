import{_ as x}from"./TextGroup-T77HtXsG.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Text Group",component:x,tags:["autodocs"],argTypes:{size:{control:"select",options:["xlarge","large","medium","small","xsmall"]},align:{control:"select",options:["left","center"]},type:{control:"select",options:["dark","light"]},subheading:{control:"text"},heading:{control:"text"},paragraph:{control:"text"},static:{control:"boolean"},hero:{control:"boolean"},date:{control:"boolean"}}},t=e=>({components:{TextGroup:x},setup(){return{args:e}},template:`<div :class="args.type === 'light' ? 'bg-indigo p-10' : 'bg-white p-10'"><TextGroup v-bind="args" /></div>`}),s={name:"Medium (Default)",render:t,args:{size:"medium",align:"left",type:"dark",subheading:"Academics",heading:"Explore Our Programs",paragraph:"Colby offers more than 60 majors and minors across the liberal arts and sciences."},play:async({canvas:e})=>{await a(e.getByText("Academics")).toBeInTheDocument(),await a(e.getByText("Explore Our Programs")).toBeInTheDocument();const n=e.getByText("Academics");await a(n.className).toMatch(/text-azure/),await a(n.className).toMatch(/uppercase/);const r=e.getByText("Explore Our Programs");await a(r.className).toMatch(/text-indigo/)}},i={name:"Extra Large",render:t,args:{size:"xlarge",align:"left",type:"dark",subheading:"Welcome",heading:"Colby College",paragraph:"A leading liberal arts college in Waterville, Maine."},play:async({canvas:e})=>{await a(e.getByText("Colby College")).toBeInTheDocument();const n=e.getByText("Welcome");await a(n.className).toMatch(/text-24/);const r=e.getByText("Colby College");await a(r.className).toMatch(/text-48/)}},o={name:"Large",render:t,args:{size:"large",align:"left",type:"dark",subheading:"Featured",heading:"Student Research",paragraph:"Undergraduate research is a hallmark of the Colby experience."},play:async({canvas:e})=>{await a(e.getByText("Featured")).toBeInTheDocument(),await a(e.getByText("Student Research")).toBeInTheDocument()}},c={name:"Small",render:t,args:{size:"small",align:"left",type:"dark",subheading:"News",heading:"Campus Update",paragraph:"The latest news and events from around campus."},play:async({canvas:e})=>{await a(e.getByText("News")).toBeInTheDocument(),await a(e.getByText("Campus Update")).toBeInTheDocument()}},l={name:"Extra Small",render:t,args:{size:"xsmall",align:"left",type:"dark",subheading:"Category",heading:"Article Title",paragraph:"A brief description of the article content."},play:async({canvas:e})=>{await a(e.getByText("Article Title")).toBeInTheDocument();const n=e.getByText("Article Title");await a(n.className).toMatch(/font-bold/),await a(n.className).toMatch(/text-18/)}},g={name:"Centered",render:t,args:{size:"large",align:"center",type:"dark",subheading:"Mission",heading:"Our Purpose",paragraph:"Colby is dedicated to the education of thoughtful, capable citizens of the world."},play:async({canvas:e})=>{await a(e.getByText("Mission")).toBeInTheDocument(),await a(e.getByText("Our Purpose")).toBeInTheDocument();const n=e.getByText("Mission");await a(n.className).toMatch(/text-center/);const r=e.getByText("Our Purpose");await a(r.className).toMatch(/text-center/)}},p={name:"Light Type",render:t,args:{size:"large",align:"left",type:"light",subheading:"Spotlight",heading:"Faculty Achievements",paragraph:"Celebrating the accomplishments of our distinguished faculty."},play:async({canvas:e})=>{await a(e.getByText("Spotlight")).toBeInTheDocument(),await a(e.getByText("Faculty Achievements")).toBeInTheDocument();const n=e.getByText("Spotlight");await a(n.className).toMatch(/text-canary/);const r=e.getByText("Faculty Achievements");await a(r.className).toMatch(/text-white/)}},d={name:"Small Static",render:t,args:{size:"small",align:"left",type:"dark",static:!0,subheading:"Static Label",heading:"Static Heading",paragraph:"This uses the small+static size branch."},play:async({canvas:e})=>{await a(e.getByText("Static Heading")).toBeInTheDocument()}},h={name:"Hero with Date",render:t,args:{size:"large",align:"left",type:"dark",hero:!0,date:!0,subheading:"January 15, 2025",heading:"Campus Event",paragraph:"A special event on campus."},play:async({canvas:e})=>{await a(e.getByText("Campus Event")).toBeInTheDocument(),await a(e.getByText("January 15, 2025")).toBeInTheDocument()}},m={name:"Hero without Date",render:t,args:{size:"large",align:"left",type:"dark",hero:!0,date:!1,subheading:"Welcome",heading:"Colby College",paragraph:"A premier liberal arts college."},play:async({canvas:e})=>{await a(e.getByText("Colby College")).toBeInTheDocument()}},u={name:"Heading Only (no subheading)",render:t,args:{size:"medium",align:"left",type:"dark",heading:"Just a Heading"},play:async({canvas:e})=>{await a(e.getByText("Just a Heading")).toBeInTheDocument()}},y={name:"With HTML Paragraph",render:t,args:{size:"medium",align:"left",type:"dark",subheading:"Resources",heading:"Helpful Links",paragraph:"<ul><li>Library</li><li>IT Support</li></ul>"},play:async({canvas:e})=>{await a(e.getByText("Helpful Links")).toBeInTheDocument(),await a(e.getByText("Library")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Explore Our Programs")).toBeInTheDocument();
    const subheading = canvas.getByText("Academics");
    await expect(subheading.className).toMatch(/text-azure/);
    await expect(subheading.className).toMatch(/uppercase/);
    const heading = canvas.getByText("Explore Our Programs");
    await expect(heading.className).toMatch(/text-indigo/);
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
    const subheading = canvas.getByText("Welcome");
    await expect(subheading.className).toMatch(/text-24/);
    const heading = canvas.getByText("Colby College");
    await expect(heading.className).toMatch(/text-48/);
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Featured")).toBeInTheDocument();
    await expect(canvas.getByText("Student Research")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Update")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Article Title")).toBeInTheDocument();
    const heading = canvas.getByText("Article Title");
    await expect(heading.className).toMatch(/font-bold/);
    await expect(heading.className).toMatch(/text-18/);
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Mission")).toBeInTheDocument();
    await expect(canvas.getByText("Our Purpose")).toBeInTheDocument();
    const subheading = canvas.getByText("Mission");
    await expect(subheading.className).toMatch(/text-center/);
    const heading = canvas.getByText("Our Purpose");
    await expect(heading.className).toMatch(/text-center/);
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Spotlight")).toBeInTheDocument();
    await expect(canvas.getByText("Faculty Achievements")).toBeInTheDocument();
    const subheading = canvas.getByText("Spotlight");
    await expect(subheading.className).toMatch(/text-canary/);
    const heading = canvas.getByText("Faculty Achievements");
    await expect(heading.className).toMatch(/text-white/);
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Static Heading")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Campus Event")).toBeInTheDocument();
    await expect(canvas.getByText("January 15, 2025")).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Just a Heading")).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Helpful Links")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}};const f=["Medium","XLarge","Large","Small","XSmall","Centered","LightType","SmallStatic","HeroWithDate","HeroNoDate","HeadingOnly","WithHtmlParagraph"];export{g as Centered,u as HeadingOnly,m as HeroNoDate,h as HeroWithDate,o as Large,p as LightType,s as Medium,c as Small,d as SmallStatic,y as WithHtmlParagraph,i as XLarge,l as XSmall,f as __namedExportsOrder,w as default};
