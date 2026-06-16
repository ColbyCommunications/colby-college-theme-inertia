import{_ as a}from"./FullBleedHero-DeJtJBPF.js";import"./iframe-3sEi0eTh.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-DxsAmysj.js";import"./TextGroup-Bz1jVrJj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DyPH3ZN2.js";import"./Button-DwMN5f-Z.js";import"./Picture-CgVeth7Z.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,h={title:"Blocks/Full Bleed Hero",component:a,tags:["!autodocs"],argTypes:{type:{name:"Type",control:{type:"inline-radio",labels:{dark:"Dark",light:"Light"}},options:["dark","light"],table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},image:{name:"",control:"object",table:{category:"Wordpress Fields"}},hero:{table:{disable:!0}}}},e={name:"Full Bleed Hero",args:{type:"dark",subheading:"Lorem ipsum",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",image:{src:"https://placehold.co/480x480",srcset:"https://placehold.co/1280x700",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Rectangle:"https://placehold.co/480x480"}}},play:async({canvas:t})=>{await o(t.getByText("Lorem ipsum")).toBeInTheDocument(),await o(t.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument(),await o(t.getByAltText("Placeholder image")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const u=["Dark"];export{e as Dark,u as __namedExportsOrder,h as default};
