import{_ as l}from"./Context-BM3uvBq2.js";import"./iframe-aFyCAL0S.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-BfzbzKKf.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CZf8hs7t.js";import"./Button-R6CNTj6a.js";const{expect:b}=__STORYBOOK_MODULE_TEST__,x={title:"Core Components/Context",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["xlarge","large","medium","small","xsmall"]},align:{control:"select",options:["left","center"]},type:{control:"select",options:["dark","light"]},subheading:{control:"text"},heading:{control:"text"},paragraph:{control:"text"},isStatic:{control:"boolean"},hero:{control:"boolean"},buttons:{control:"object"}}},t=e=>({components:{Context:l},setup(){return{args:e}},template:`<div :class="args.type === 'light' ? 'bg-indigo p-10' : 'bg-white p-10'"><Context v-bind="args" /></div>`}),a={name:"Default",render:t,args:{size:"medium",align:"left",type:"dark",subheading:"Academics",heading:"Explore Our Programs",paragraph:"Colby offers more than 60 majors and minors across the liberal arts and sciences.",buttons:{items:[{button:{url:"#",title:"Learn More",target:""}}]}},play:async({canvas:e})=>{}},r={name:"Multiple Buttons",render:t,args:{size:"medium",align:"left",type:"dark",subheading:"Admissions",heading:"Apply to Colby",paragraph:"Begin your journey at one of America's top liberal arts colleges.",buttons:{items:[{button:{url:"#",title:"Apply Now",target:""}},{button:{url:"#",title:"Request Info",target:""}}]}},play:async({canvas:e})=>{}},o={name:"Centered",render:t,args:{size:"large",align:"center",type:"dark",subheading:"Mission",heading:"Our Purpose",paragraph:"Colby is dedicated to the education of thoughtful, capable citizens of the world.",buttons:{items:[{button:{url:"#",title:"Read More",target:""}}]}},play:async({canvas:e})=>{}},n={name:"Light Type",render:t,args:{size:"large",align:"left",type:"light",subheading:"Spotlight",heading:"Faculty Achievements",paragraph:"Celebrating the accomplishments of our distinguished faculty.",buttons:{items:[{button:{url:"#",title:"View All",target:""}}]}},play:async({canvas:e})=>{}},s={name:"No Buttons",render:t,args:{size:"medium",align:"left",type:"dark",subheading:"Research",heading:"Student-Faculty Collaboration",paragraph:"Every year, hundreds of students collaborate with faculty on original research projects.",buttons:{items:[]}},play:async({canvas:e})=>{}},i={name:"Hero Mode",render:t,args:{size:"xlarge",align:"center",type:"dark",hero:!0,subheading:"Welcome",heading:"Colby College",paragraph:"A top liberal arts college in Waterville, Maine.",buttons:{items:[{button:{url:"#",title:"Explore",target:""}}]}},play:async({canvas:e})=>{}},c={name:"Static Mode",render:t,args:{size:"small",align:"left",type:"dark",isStatic:!0,subheading:"Notice",heading:"Campus Alert",paragraph:"Important information for the campus community.",buttons:{items:[]}},play:async({canvas:e})=>{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Explore Our Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Learn More")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Apply to Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Apply Now")).toBeInTheDocument();
    await expect(canvas.getByText("Request Info")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Mission")).toBeInTheDocument();
    await expect(canvas.getByText("Our Purpose")).toBeInTheDocument();
    const subheading = canvas.getByText("Mission");
    await expect(subheading.className).toMatch(/text-center/);
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Spotlight")).toBeInTheDocument();
    await expect(canvas.getByText("Faculty Achievements")).toBeInTheDocument();
    const subheading = canvas.getByText("Spotlight");
    await expect(subheading.className).toMatch(/text-canary/);
    const heading = canvas.getByText("Faculty Achievements");
    await expect(heading.className).toMatch(/text-white/);
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Research")).toBeInTheDocument();
    await expect(canvas.getByText("Student-Faculty Collaboration")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Welcome")).toBeInTheDocument();
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Notice")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Alert")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};const f=["Default","WithMultipleButtons","Centered","LightType","NoButtons","WithHero","StaticMode"];export{o as Centered,a as Default,n as LightType,s as NoButtons,c as StaticMode,i as WithHero,r as WithMultipleButtons,f as __namedExportsOrder,x as default};
