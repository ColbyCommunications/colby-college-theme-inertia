import{_ as o}from"./ImageGrid-BtZxXBFD.js";import"./iframe-lCgBM3L3.js";import"./preload-helper-PPVm8Dsz.js";import"./Picture-C4P_JM5O.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,i={title:"Blocks/Image Grid",component:o,tags:["!autodocs"],argTypes:{imageOrientation:{name:"Image Orientation",control:{type:"radio",labels:{square:"Square",rectangle:"Rectangle",portrait:"Portrait",landscape:"Landscape"}},options:["square","rectangle","portrait","landscape"],table:{category:"Wordpress Fields"}},images:{name:"Images",control:"object",table:{category:"Wordpress Fields"}}}},r=[{srcset:"https://placehold.co/600x600",src:"https://placehold.co/600x600",alt:"Placeholder 1",caption:"Caption lorem ipsum dolor sit amet."},{srcset:"https://placehold.co/600x600",src:"https://placehold.co/600x600",alt:"Placeholder 2",caption:"Caption lorem ipsum dolor sit amet."}],e={name:"Image Grid",args:{imageOrientation:"square",images:r},play:async({canvas:a})=>{await t(a.getByAltText("Placeholder 1")).toBeInTheDocument(),await t(a.getByAltText("Placeholder 2")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Image Grid",
  args: {
    imageOrientation: "square",
    images: sampleImages
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder 2")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const m=["Square"];export{e as Square,m as __namedExportsOrder,i as default};
