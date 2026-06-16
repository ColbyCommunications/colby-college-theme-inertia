import{_ as n}from"./ContextSection-C7SLt9AL.js";import"./iframe-CkyGBYgK.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BCgZ6G7Z.js";import"./TextGroup-BKUu4W3Q.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DcxHVmYR.js";import"./Button-jMWs_O0j.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,d={title:"Blocks/Context Section",component:n,tags:["!autodocs"],argTypes:{hero:{name:"Hero",control:"boolean",table:{category:"Wordpress Fields"}},align:{name:"Align",control:{type:"radio",labels:{left:"Left",center:"Center"}},options:["left","center"],table:{category:"Wordpress Fields"}},size:{name:"Size",control:{type:"inline-radio",labels:{medium:"Medium",large:"Large"}},options:["medium","large"],table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Context Section",args:{hero:!1,align:"left",size:"medium",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",buttons:{url:"#",title:"Test Button"}},play:async({canvas:t})=>{await o(t.getByText("Lorem Ipsum")).toBeInTheDocument(),await o(t.getByText("Anthropology")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};
