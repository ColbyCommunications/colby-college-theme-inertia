import{_ as n}from"./ContextSection-Dx1qsGoR.js";import"./iframe-o8pGYXWK.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-Cizk3fx7.js";import"./TextGroup-y4MRmKHm.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BbLweHth.js";import"./Button-DTHgAldo.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,g={title:"Blocks/Context Section",component:n,tags:["!autodocs"],argTypes:{hero:{name:"Hero",control:"boolean",table:{category:"Wordpress Fields"}},align:{name:"Align",control:{type:"radio",labels:{left:"Left",center:"Center"}},options:["left","center"],table:{category:"Wordpress Fields"}},size:{name:"Size",control:{type:"inline-radio",labels:{medium:"Medium",large:"Large"}},options:["medium","large"],table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Context Section",args:{hero:!1,align:"left",size:"medium",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",buttons:{url:"#",title:"Test Button"}},play:async({canvas:t})=>{await o(t.getByText("Lorem Ipsum")).toBeInTheDocument(),await o(t.getByText("Anthropology")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Context Section",
  args: {
    hero: false,
    align: "left",
    size: "medium",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph: "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",
    buttons: {
      url: "#",
      title: "Test Button"
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Anthropology")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,g as default};
