import t from"./Image-DObwaTBW.js";import"./iframe-aFyCAL0S.js";import"./preload-helper-PPVm8Dsz.js";import"./Picture-BPeCsQm5.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,c={title:"Blocks/Image",component:t,tags:["!autodocs"],argTypes:{image:{control:"object",name:"Image",table:{category:"Wordpress Fields"}},alignCenter:{name:"Align Center",control:{type:"check",labels:{yes:"Align Image Center"}},options:["yes"],table:{category:"Wordpress Fields"}},imageScale:{control:"select",name:"Image Scale",options:["100","75","50","25"],table:{category:"Wordpress Fields"}},imagePath:{name:"Image Path",control:"text",table:{category:"Wordpress Fields"}},caption:{table:{disable:!0}}}},e={name:"Image",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},alignCenter:"",imageScale:"100",imagePath:""},play:async({canvas:a})=>{await n(a.getByText("An example image caption")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Image",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    alignCenter: "",
    imageScale: "100",
    imagePath: ""
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("An example image caption")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,c as default};
