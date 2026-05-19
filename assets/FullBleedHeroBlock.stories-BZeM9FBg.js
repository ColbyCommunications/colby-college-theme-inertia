import{_ as a}from"./FullBleedHero-BGO1srmB.js";import"./iframe-CVsC1NHQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BGCNBukw.js";import"./TextGroup-CVB5CBbt.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-LntAtt7g.js";import"./Button-DYapneu4.js";import"./Picture-BwpjUAlr.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,g={title:"Blocks/Full Bleed Hero",component:a,tags:["!autodocs"],argTypes:{type:{name:"Type",control:{type:"inline-radio",labels:{dark:"Dark",light:"Light"}},options:["dark","light"],table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},image:{name:"",control:"object",table:{category:"Wordpress Fields"}},hero:{table:{disable:!0}}}},e={name:"Full Bleed Hero",args:{type:"dark",subheading:"Lorem ipsum",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",image:{src:"https://placehold.co/480x480",srcset:"https://placehold.co/1280x700",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Rectangle:"https://placehold.co/480x480"}}},play:async({canvas:t})=>{await o(t.getByText("Lorem ipsum")).toBeInTheDocument(),await o(t.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument(),await o(t.getByAltText("Placeholder image")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Full Bleed Hero",
  args: {
    type: "dark",
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum dolor sit amet",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    image: {
      src: "https://placehold.co/480x480",
      srcset: "https://placehold.co/1280x700",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/1280x700",
        Rectangle: "https://placehold.co/480x480"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const h=["Dark"];export{e as Dark,h as __namedExportsOrder,g as default};
