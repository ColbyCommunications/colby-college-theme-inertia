import{_ as n}from"./OverlayWideImage-C8jpTojV.js";import"./iframe-C6aVhbCK.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-CUR_bDlI.js";import"./TextGroup-jmqXIUoI.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CPdn2L11.js";import"./Button-Cwfv8ZIL.js";import"./Picture-z4cn1Zm5.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,g={title:"Blocks/Overlay Wide Image",component:n,tags:["!autodocs"],argTypes:{align:{name:"Align",control:{type:"inline-radio",labels:{left:"Left",center:"Center"}},options:["left","center"],table:{category:"Wordpress Fields"}},subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Overlay Wide Image",args:{align:"left",subheading:"Green Colby",heading:"Sustainability and Stewardship",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Go Green at Colby"}],image:{srcset:"https://placehold.co/880x400",src:"https://placehold.co/400x400",alt:"Placeholder image",sizes:{Landscape:"https://placehold.co/880x400"}}},play:async({canvas:t})=>{await a(t.getByText("Green Colby")).toBeInTheDocument(),await a(t.getByText("Sustainability and Stewardship")).toBeInTheDocument(),await a(t.getByText("Go Green at Colby")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Overlay Wide Image",
  args: {
    align: "left",
    subheading: "Green Colby",
    heading: "Sustainability and Stewardship",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{
      url: "#",
      title: "Go Green at Colby"
    }],
    image: {
      srcset: "https://placehold.co/880x400",
      src: "https://placehold.co/400x400",
      alt: "Placeholder image",
      sizes: {
        Landscape: "https://placehold.co/880x400"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Green Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Sustainability and Stewardship")).toBeInTheDocument();
    await expect(canvas.getByText("Go Green at Colby")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,g as default};
