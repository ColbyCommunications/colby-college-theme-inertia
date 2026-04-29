import{_ as t}from"./ImageText-UOqJNM-Z.js";import"./iframe-YkMtoKZp.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:"Blocks/Image with Text",component:t,tags:["!autodocs"],argTypes:{paragraphText:{name:"Paragraph Text",control:"text",table:{category:"Wordpress Fields"}},wrappingText:{name:"Wrapping Text",control:{type:"radio",labels:{wrap:"Wrap",noWrap:"No Wrap"}},options:["wrap","noWrap"],table:{category:"Wordpress Fields"}},alignText:{name:"Align Text",control:{type:"radio",labels:{top:"Top",center:"Center"}},options:["top","center"],table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}},imagePath:{name:"Image Path",control:"text",table:{category:"Wordpress Fields"}},alignImage:{name:"Align Image",control:"select",options:["left","right"],table:{category:"Wordpress Fields"}},imageScale:{name:"Scale",control:"select",options:["100","75","50","25"],table:{category:"Wordpress Fields"}},mediaCaption:{table:{category:"Wordpress Fields",disable:!0}},caption:{name:"Caption (optional)",control:"text",table:{category:"Wordpress Fields"},if:{arg:"imagePath",truthy:!0}}}},r="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla. Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue.</p>",e={name:"Image with Text",args:{paragraphText:r,wrappingText:"no-wrap",alignText:"top",image:{url:"https://placehold.co/400x300",alt:"Placeholder image"},imagePath:"",caption:"Image caption here",alignImage:"left",imageScale:"50",mediaCaption:"Image caption here"},play:async({canvas:a})=>{await o(a.getByText("Image caption here")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Image with Text",
  args: {
    paragraphText: sampleText,
    wrappingText: "no-wrap",
    alignText: "top",
    image: {
      url: "https://placehold.co/400x300",
      alt: "Placeholder image"
    },
    imagePath: "",
    caption: "Image caption here",
    alignImage: "left",
    imageScale: "50",
    mediaCaption: "Image caption here"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,s as default};
