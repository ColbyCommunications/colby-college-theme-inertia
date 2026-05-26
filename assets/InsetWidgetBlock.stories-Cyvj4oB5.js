import{_ as n}from"./InsetWidget-J0iG-vuY.js";import"./iframe-CLBMR5NA.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-LLpQe4QK.js";import"./TextGroup-B6w_lD0A.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DbQqC42i.js";import"./Button-B44w8G7S.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,u={title:"Blocks/Inset Widget",component:n,tags:["!autodocs"],argTypes:{inset:{type:"boolean",name:"Inset",table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},size:{table:{disable:!0}}}},a={name:"Inset Widget",args:{inset:!1,subheading:"Get Involved",heading:"Ready to Learn More?",paragraph:"Connect with our admissions team to learn more about Colby College.",buttons:[{url:"#",title:"Request Information"},{url:"#",title:"Schedule a Visit"}]},play:async({canvas:e})=>{await t(e.getByText("Get Involved")).toBeInTheDocument(),await t(e.getByText("Ready to Learn More?")).toBeInTheDocument(),await t(e.getByText("Request Information")).toBeInTheDocument(),await t(e.getByText("Schedule a Visit")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
