import o from"./HwImageSection-BaRs86Kv.js";import"./iframe-C6aVhbCK.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-CUR_bDlI.js";import"./TextGroup-jmqXIUoI.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CPdn2L11.js";import"./Button-Cwfv8ZIL.js";import"./Picture-z4cn1Zm5.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,g={title:"Blocks/Half Width Image Section",component:o,tags:["!autodocs"],argTypes:{reverse:{control:{type:"boolean"},name:"Reverse",table:{category:"Wordpress Fields"}},image:{control:"object",name:"Image",table:{category:"Wordpress Fields"}},subheading:{control:"text",name:"Subheading",table:{category:"Wordpress Fields"}},heading:{control:"text",name:"Heading",table:{category:"Wordpress Fields"}},paragraph:{control:"text",name:"Paragraph",table:{category:"Wordpress Fields"}},buttons:{control:"object",name:"Buttons",table:{category:"Wordpress Fields"}},type:{table:{disable:!0}},size:{table:{disable:!0}},hero:{table:{disable:!0}},imageOrientation:{table:{disable:!0}}}},e={name:"Half Width Image Section",args:{reverse:!1,image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/760x430",Square:"https://placehold.co/480x480"}},subheading:"Academics",heading:"Majors and Minors",paragraph:"Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",buttons:[{url:"#",title:"Majors and Minor at Colby"}]},play:async({canvas:a})=>{await t(a.getByText("Majors and Minors")).toBeInTheDocument(),await t(a.getByText("Majors and Minor at Colby")).toBeInTheDocument(),await t(a.getByAltText("Placeholder image")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,g as default};
