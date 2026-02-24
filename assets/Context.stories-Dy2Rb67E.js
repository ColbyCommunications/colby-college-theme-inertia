import{_ as g}from"./Context-Dp7yX81d.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,b={title:"Core Components/Context",component:g,tags:["autodocs"],argTypes:{size:{control:"select",options:["xlarge","large","medium","small","xsmall"]},align:{control:"select",options:["left","center"]},type:{control:"select",options:["dark","light"]},subheading:{control:"text"},heading:{control:"text"},paragraph:{control:"text"},isStatic:{control:"boolean"},hero:{control:"boolean"},buttons:{control:"object"}}},n=e=>({components:{Context:g},setup(){return{args:e}},template:`<div :class="args.type === 'light' ? 'bg-indigo p-10' : 'bg-white p-10'"><Context v-bind="args" /></div>`}),a={name:"Default",render:n,args:{size:"medium",align:"left",type:"dark",subheading:"Academics",heading:"Explore Our Programs",paragraph:"Colby offers more than 60 majors and minors across the liberal arts and sciences.",buttons:{items:[{button:{url:"#",title:"Learn More",target:""}}]}},play:async({canvas:e})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Explore Our Programs")).toBeInTheDocument(),await t(e.getByText("Learn More")).toBeInTheDocument()}},o={name:"Multiple Buttons",render:n,args:{size:"medium",align:"left",type:"dark",subheading:"Admissions",heading:"Apply to Colby",paragraph:"Begin your journey at one of America's top liberal arts colleges.",buttons:{items:[{button:{url:"#",title:"Apply Now",target:""}},{button:{url:"#",title:"Request Info",target:""}}]}},play:async({canvas:e})=>{await t(e.getByText("Admissions")).toBeInTheDocument(),await t(e.getByText("Apply to Colby")).toBeInTheDocument(),await t(e.getByText("Apply Now")).toBeInTheDocument(),await t(e.getByText("Request Info")).toBeInTheDocument()}},r={name:"Centered",render:n,args:{size:"large",align:"center",type:"dark",subheading:"Mission",heading:"Our Purpose",paragraph:"Colby is dedicated to the education of thoughtful, capable citizens of the world.",buttons:{items:[{button:{url:"#",title:"Read More",target:""}}]}},play:async({canvas:e})=>{await t(e.getByText("Mission")).toBeInTheDocument(),await t(e.getByText("Our Purpose")).toBeInTheDocument();const u=e.getByText("Mission");await t(u.className).toMatch(/text-center/)}},s={name:"Light Type",render:n,args:{size:"large",align:"left",type:"light",subheading:"Spotlight",heading:"Faculty Achievements",paragraph:"Celebrating the accomplishments of our distinguished faculty.",buttons:{items:[{button:{url:"#",title:"View All",target:""}}]}},play:async({canvas:e})=>{await t(e.getByText("Spotlight")).toBeInTheDocument(),await t(e.getByText("Faculty Achievements")).toBeInTheDocument();const u=e.getByText("Spotlight");await t(u.className).toMatch(/text-canary/);const p=e.getByText("Faculty Achievements");await t(p.className).toMatch(/text-white/)}},i={name:"No Buttons",render:n,args:{size:"medium",align:"left",type:"dark",subheading:"Research",heading:"Student-Faculty Collaboration",paragraph:"Every year, hundreds of students collaborate with faculty on original research projects.",buttons:{items:[]}},play:async({canvas:e})=>{await t(e.getByText("Research")).toBeInTheDocument(),await t(e.getByText("Student-Faculty Collaboration")).toBeInTheDocument()}},c={name:"Hero Mode",render:n,args:{size:"xlarge",align:"center",type:"dark",hero:!0,subheading:"Welcome",heading:"Colby College",paragraph:"A top liberal arts college in Waterville, Maine.",buttons:{items:[{button:{url:"#",title:"Explore",target:""}}]}},play:async({canvas:e})=>{await t(e.getByText("Welcome")).toBeInTheDocument(),await t(e.getByText("Colby College")).toBeInTheDocument()}},l={name:"Static Mode",render:n,args:{size:"small",align:"left",type:"dark",isStatic:!0,subheading:"Notice",heading:"Campus Alert",paragraph:"Important information for the campus community.",buttons:{items:[]}},play:async({canvas:e})=>{await t(e.getByText("Notice")).toBeInTheDocument(),await t(e.getByText("Campus Alert")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Academics",
    heading: "Explore Our Programs",
    paragraph: "Colby offers more than 60 majors and minors across the liberal arts and sciences.",
    buttons: {
      items: [{
        button: {
          url: "#",
          title: "Learn More",
          target: ""
        }
      }]
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Explore Our Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Learn More")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Multiple Buttons",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Admissions",
    heading: "Apply to Colby",
    paragraph: "Begin your journey at one of America's top liberal arts colleges.",
    buttons: {
      items: [{
        button: {
          url: "#",
          title: "Apply Now",
          target: ""
        }
      }, {
        button: {
          url: "#",
          title: "Request Info",
          target: ""
        }
      }]
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Apply to Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Apply Now")).toBeInTheDocument();
    await expect(canvas.getByText("Request Info")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Centered",
  render,
  args: {
    size: "large",
    align: "center",
    type: "dark",
    subheading: "Mission",
    heading: "Our Purpose",
    paragraph: "Colby is dedicated to the education of thoughtful, capable citizens of the world.",
    buttons: {
      items: [{
        button: {
          url: "#",
          title: "Read More",
          target: ""
        }
      }]
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Mission")).toBeInTheDocument();
    await expect(canvas.getByText("Our Purpose")).toBeInTheDocument();
    const subheading = canvas.getByText("Mission");
    await expect(subheading.className).toMatch(/text-center/);
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Light Type",
  render,
  args: {
    size: "large",
    align: "left",
    type: "light",
    subheading: "Spotlight",
    heading: "Faculty Achievements",
    paragraph: "Celebrating the accomplishments of our distinguished faculty.",
    buttons: {
      items: [{
        button: {
          url: "#",
          title: "View All",
          target: ""
        }
      }]
    }
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "No Buttons",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Research",
    heading: "Student-Faculty Collaboration",
    paragraph: "Every year, hundreds of students collaborate with faculty on original research projects.",
    buttons: {
      items: []
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Research")).toBeInTheDocument();
    await expect(canvas.getByText("Student-Faculty Collaboration")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Hero Mode",
  render,
  args: {
    size: "xlarge",
    align: "center",
    type: "dark",
    hero: true,
    subheading: "Welcome",
    heading: "Colby College",
    paragraph: "A top liberal arts college in Waterville, Maine.",
    buttons: {
      items: [{
        button: {
          url: "#",
          title: "Explore",
          target: ""
        }
      }]
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Welcome")).toBeInTheDocument();
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Static Mode",
  render,
  args: {
    size: "small",
    align: "left",
    type: "dark",
    isStatic: true,
    subheading: "Notice",
    heading: "Campus Alert",
    paragraph: "Important information for the campus community.",
    buttons: {
      items: []
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Notice")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Alert")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};const T=["Default","WithMultipleButtons","Centered","LightType","NoButtons","WithHero","StaticMode"];export{r as Centered,a as Default,s as LightType,i as NoButtons,l as StaticMode,c as WithHero,o as WithMultipleButtons,T as __namedExportsOrder,b as default};
