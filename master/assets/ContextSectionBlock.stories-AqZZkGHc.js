import n from"./ContextSection-B5JAo49y.js";import"./iframe-mwRIpWYs.js";import"./preload-helper-CNn__nYE.js";import"./Context-B8l2u3Hh.js";import"./TextGroup-BBaIa2YP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-H-I5KpdP.js";import"./Button-C8utxSoV.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,d={title:"Blocks/Context Section",component:n,tags:["!autodocs"],argTypes:{hero:{name:"Hero",control:"boolean",table:{category:"Wordpress Fields"}},align:{name:"Align",control:{type:"radio",labels:{left:"Left",center:"Center"}},options:["left","center"],table:{category:"Wordpress Fields"}},size:{name:"Size",control:{type:"inline-radio",labels:{medium:"Medium",large:"Large"}},options:["medium","large"],table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Context Section",args:{hero:!1,align:"left",size:"medium",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",buttons:{url:"#",title:"Test Button"}},play:async({canvas:t})=>{await o(t.getByText("Lorem Ipsum")).toBeInTheDocument(),await o(t.getByText("Anthropology")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
