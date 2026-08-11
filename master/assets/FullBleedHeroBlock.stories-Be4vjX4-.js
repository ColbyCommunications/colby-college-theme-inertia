import a from"./FullBleedHero-DlUy65ex.js";import"./iframe-BZgw57HR.js";import"./preload-helper-CNn__nYE.js";import"./Context-B0mPVuwN.js";import"./TextGroup-CJvLR6YI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-BaJsu1GL.js";import"./Button-Q_5EkEyO.js";import"./Picture-BJnc-O4A.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,u={title:"Blocks/Full Bleed Hero",component:a,tags:["!autodocs"],argTypes:{type:{name:"Type",control:{type:"inline-radio",labels:{dark:"Dark",light:"Light"}},options:["dark","light"],table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},image:{name:"",control:"object",table:{category:"Wordpress Fields"}},hero:{table:{disable:!0}}}},e={name:"Full Bleed Hero",args:{type:"dark",subheading:"Lorem ipsum",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",image:{src:"https://placehold.co/480x480",srcset:"https://placehold.co/1280x700",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Rectangle:"https://placehold.co/480x480"}}},play:async({canvas:t})=>{await o(t.getByText("Lorem ipsum")).toBeInTheDocument(),await o(t.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument(),await o(t.getByAltText("Placeholder image")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const x=["Dark"];export{e as Dark,x as __namedExportsOrder,u as default};
