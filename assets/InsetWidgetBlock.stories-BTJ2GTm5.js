import{_ as n}from"./InsetWidget-7g6nh_i0.js";import"./iframe-BgQXPfKC.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-tEoFrYWo.js";import"./TextGroup-CHD4iHm7.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CCu1xz8V.js";import"./Button-C-lFUJoe.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,u={title:"Blocks/Inset Widget",component:n,tags:["!autodocs"],argTypes:{inset:{type:"boolean",name:"Inset",table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},size:{table:{disable:!0}}}},a={name:"Inset Widget",args:{inset:!1,subheading:"Get Involved",heading:"Ready to Learn More?",paragraph:"Connect with our admissions team to learn more about Colby College.",buttons:[{url:"#",title:"Request Information"},{url:"#",title:"Schedule a Visit"}]},play:async({canvas:e})=>{await t(e.getByText("Get Involved")).toBeInTheDocument(),await t(e.getByText("Ready to Learn More?")).toBeInTheDocument(),await t(e.getByText("Request Information")).toBeInTheDocument(),await t(e.getByText("Schedule a Visit")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Inset Widget",
  args: {
    inset: false,
    subheading: "Get Involved",
    heading: "Ready to Learn More?",
    paragraph: "Connect with our admissions team to learn more about Colby College.",
    buttons: [{
      url: "#",
      title: "Request Information"
    }, {
      url: "#",
      title: "Schedule a Visit"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Get Involved")).toBeInTheDocument();
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
    await expect(canvas.getByText("Request Information")).toBeInTheDocument();
    await expect(canvas.getByText("Schedule a Visit")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const g=["Default"];export{a as Default,g as __namedExportsOrder,u as default};
