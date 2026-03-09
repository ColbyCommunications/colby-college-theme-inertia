import{_ as b}from"./TextGroup-Das5GGq6.js";import"./iframe-BfrXP-2i.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,A={title:"Core Components/Text Group",component:b,tags:["autodocs"],argTypes:{size:{control:"select",options:["xlarge","large","medium","small","xsmall"]},align:{control:"select",options:["left","center"]},type:{control:"select",options:["dark","light"]},subheading:{control:"text"},heading:{control:"text"},paragraph:{control:"text"},static:{control:"boolean"},hero:{control:"boolean"},date:{control:"boolean"}}},n=e=>({components:{TextGroup:b},setup(){return{args:e}},template:`<div :class="args.type === 'light' ? 'bg-indigo p-10' : 'bg-white p-10'"><TextGroup v-bind="args" /></div>`}),r={name:"Medium (Default)",render:n,args:{size:"medium",align:"left",type:"dark",subheading:"Academics",heading:"Explore Our Programs",paragraph:"Colby offers more than 60 majors and minors across the liberal arts and sciences."},play:async({canvas:e})=>{await a(e.getByText("Academics")).toBeInTheDocument(),await a(e.getByText("Explore Our Programs")).toBeInTheDocument();const t=e.getByText("Academics");await a(t.className).toMatch(/text-azure/),await a(t.className).toMatch(/uppercase/);const o=e.getByText("Explore Our Programs");await a(o.className).toMatch(/text-indigo/)},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},s={name:"Extra Large",render:n,args:{size:"xlarge",align:"left",type:"dark",subheading:"Welcome",heading:"Colby College",paragraph:"A leading liberal arts college in Waterville, Maine."},play:async({canvas:e})=>{await a(e.getByText("Colby College")).toBeInTheDocument();const t=e.getByText("Welcome");await a(t.className).toMatch(/text-24/);const o=e.getByText("Colby College");await a(o.className).toMatch(/text-48/)},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},c={name:"Large",render:n,args:{size:"large",align:"left",type:"dark",subheading:"Featured",heading:"Student Research",paragraph:"Undergraduate research is a hallmark of the Colby experience."},play:async({canvas:e})=>{await a(e.getByText("Featured")).toBeInTheDocument(),await a(e.getByText("Student Research")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},i={name:"Small",render:n,args:{size:"small",align:"left",type:"dark",subheading:"News",heading:"Campus Update",paragraph:"The latest news and events from around campus."},play:async({canvas:e})=>{await a(e.getByText("News")).toBeInTheDocument(),await a(e.getByText("Campus Update")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},l={name:"Extra Small",render:n,args:{size:"xsmall",align:"left",type:"dark",subheading:"Category",heading:"Article Title",paragraph:"A brief description of the article content."},play:async({canvas:e})=>{await a(e.getByText("Article Title")).toBeInTheDocument();const t=e.getByText("Article Title");await a(t.className).toMatch(/font-bold/),await a(t.className).toMatch(/text-18/)},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},d={name:"Centered",render:n,args:{size:"large",align:"center",type:"dark",subheading:"Mission",heading:"Our Purpose",paragraph:"Colby is dedicated to the education of thoughtful, capable citizens of the world."},play:async({canvas:e})=>{await a(e.getByText("Mission")).toBeInTheDocument(),await a(e.getByText("Our Purpose")).toBeInTheDocument();const t=e.getByText("Mission");await a(t.className).toMatch(/text-center/);const o=e.getByText("Our Purpose");await a(o.className).toMatch(/text-center/)},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},p={name:"Light Type",render:n,args:{size:"large",align:"left",type:"light",subheading:"Spotlight",heading:"Faculty Achievements",paragraph:"Celebrating the accomplishments of our distinguished faculty."},play:async({canvas:e})=>{await a(e.getByText("Spotlight")).toBeInTheDocument(),await a(e.getByText("Faculty Achievements")).toBeInTheDocument();const t=e.getByText("Spotlight");await a(t.className).toMatch(/text-canary/);const o=e.getByText("Faculty Achievements");await a(o.className).toMatch(/text-white/)},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},g={name:"Small Static",render:n,args:{size:"small",align:"left",type:"dark",static:!0,subheading:"Static Label",heading:"Static Heading",paragraph:"This uses the small+static size branch."},play:async({canvas:e})=>{await a(e.getByText("Static Heading")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},y={name:"Hero with Date",render:n,args:{size:"large",align:"left",type:"dark",hero:!0,date:!0,subheading:"January 15, 2025",heading:"Campus Event",paragraph:"A special event on campus."},play:async({canvas:e})=>{await a(e.getByText("Campus Event")).toBeInTheDocument(),await a(e.getByText("January 15, 2025")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},m={name:"Hero without Date",render:n,args:{size:"large",align:"left",type:"dark",hero:!0,date:!1,subheading:"Welcome",heading:"Colby College",paragraph:"A premier liberal arts college."},play:async({canvas:e})=>{await a(e.getByText("Colby College")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},h={name:"Heading Only (no subheading)",render:n,args:{size:"medium",align:"left",type:"dark",heading:"Just a Heading"},play:async({canvas:e})=>{await a(e.getByText("Just a Heading")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},u={name:"With HTML Paragraph",render:n,args:{size:"medium",align:"left",type:"dark",subheading:"Resources",heading:"Helpful Links",paragraph:"<ul><li>Library</li><li>IT Support</li></ul>"},play:async({canvas:e})=>{await a(e.getByText("Helpful Links")).toBeInTheDocument(),await a(e.getByText("Library")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},w={name:"Medium (No Animations)",render:n,args:{size:"medium",align:"left",type:"dark",subheading:"Academics",heading:"Explore Our Programs",paragraph:"Colby offers more than 60 majors and minors across the liberal arts and sciences."},play:async({canvas:e})=>{await a(e.getByText("Academics")).toBeInTheDocument(),await a(e.getByText("Explore Our Programs")).toBeInTheDocument();const t=e.getByText("Academics");await a(t.className).toMatch(/text-azure/),await a(t.className).toMatch(/uppercase/);const o=e.getByText("Explore Our Programs");await a(o.className).toMatch(/text-indigo/)},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!0},template:"<story />"})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Medium (No Animations)",
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = true;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...w.parameters?.docs?.source}}};const f=["Medium","XLarge","Large","Small","XSmall","Centered","LightType","SmallStatic","HeroWithDate","HeroNoDate","HeadingOnly","WithHtmlParagraph","NoAnimation"];export{d as Centered,h as HeadingOnly,m as HeroNoDate,y as HeroWithDate,c as Large,p as LightType,r as Medium,w as NoAnimation,i as Small,g as SmallStatic,u as WithHtmlParagraph,s as XLarge,l as XSmall,f as __namedExportsOrder,A as default};
