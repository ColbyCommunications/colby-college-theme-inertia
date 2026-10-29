import t from"./Image-Do9JfLL3.js";import"./iframe-Dza9IuNh.js";import"./preload-helper-Nb-6AGzV.js";import"./Picture-u1ZOF9qY.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,c={title:"Blocks/Image",component:t,tags:["!autodocs"],argTypes:{image:{control:"object",name:"Image",table:{category:"Wordpress Fields"}},alignCenter:{name:"Align Center",control:{type:"check",labels:{yes:"Align Image Center"}},options:["yes"],table:{category:"Wordpress Fields"}},imageScale:{control:"select",name:"Image Scale",options:["100","75","50","25"],table:{category:"Wordpress Fields"}},imagePath:{name:"Image Path",control:"text",table:{category:"Wordpress Fields"}},caption:{table:{disable:!0}}}},e={name:"Image",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},alignCenter:"",imageScale:"100",imagePath:""},play:async({canvas:a})=>{await n(a.getByText("An example image caption")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
