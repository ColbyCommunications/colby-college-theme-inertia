import o from"./HwImageSection-DqSZZTyW.js";import"./iframe-DjjpInl-.js";import"./preload-helper-CNn__nYE.js";import"./Context-seblQqT6.js";import"./TextGroup-RUgViCqU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-CQqu5YyY.js";import"./Button-Bw6Diio2.js";import"./Picture-DE2EuVpt.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,u={title:"Blocks/Half Width Image Section",component:o,tags:["!autodocs"],argTypes:{reverse:{control:{type:"boolean"},name:"Reverse",table:{category:"Wordpress Fields"}},image:{control:"object",name:"Image",table:{category:"Wordpress Fields"}},subheading:{control:"text",name:"Subheading",table:{category:"Wordpress Fields"}},heading:{control:"text",name:"Heading",table:{category:"Wordpress Fields"}},paragraph:{control:"text",name:"Paragraph",table:{category:"Wordpress Fields"}},buttons:{control:"object",name:"Buttons",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}},size:{table:{disable:!0}},hero:{table:{disable:!0}},imageOrientation:{table:{disable:!0}}}},e={name:"Half Width Image Section",args:{reverse:!1,image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/760x430",Square:"https://placehold.co/480x480"}},subheading:"Academics",heading:"Majors and Minors",paragraph:"Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",buttons:[{url:"#",title:"Majors and Minor at Colby"}]},play:async({canvas:a})=>{await t(a.getByText("Majors and Minors")).toBeInTheDocument(),await t(a.getByText("Majors and Minor at Colby")).toBeInTheDocument(),await t(a.getByAltText("Placeholder image")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Half Width Image Section",
  args: {
    reverse: false,
    image: {
      srcset: "https://placehold.co/760x430",
      src: "https://placehold.co/480x480",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/760x430",
        Square: "https://placehold.co/480x480"
      }
    },
    subheading: "Academics",
    heading: "Majors and Minors",
    paragraph: "Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",
    buttons: [{
      url: "#",
      title: "Majors and Minor at Colby"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minor at Colby")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,u as default};
