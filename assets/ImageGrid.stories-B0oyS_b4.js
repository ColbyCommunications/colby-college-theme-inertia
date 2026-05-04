import{_ as i}from"./ImageGrid-B3TQwRC8.js";import"./iframe-JoPPn0qi.js";import"./preload-helper-PPVm8Dsz.js";import"./Picture-CngznvIr.js";const{expect:u}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Image Grid",component:i,tags:["autodocs"],argTypes:{imageOrientation:{control:"select",options:["square","rectangle","portrait","landscape"]}}},e=[{srcset:"https://placehold.co/600x600",src:"https://placehold.co/600x600",alt:"Placeholder 1",caption:"Caption lorem ipsum dolor sit amet."},{srcset:"https://placehold.co/600x600",src:"https://placehold.co/600x600",alt:"Placeholder 2",caption:"Caption lorem ipsum dolor sit amet."}],t={name:"Square",args:{images:e,imageOrientation:"square"},play:async({canvas:a})=>{}},r={name:"Landscape",args:{images:[e[0]],imageOrientation:"landscape"},play:async({canvas:a})=>{}},s={name:"No Captions",args:{images:e.map(({caption:a,...c})=>c),imageOrientation:"square"},play:async({canvas:a})=>{}},o={name:"Rectangle",args:{images:e,imageOrientation:"rectangle"},play:async({canvas:a})=>{}},n={name:"Portrait",args:{images:e,imageOrientation:"portrait"},play:async({canvas:a})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Square",
  args: {
    images: sampleImages,
    imageOrientation: "square"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder 2")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Landscape",
  args: {
    images: [sampleImages[0]],
    imageOrientation: "landscape"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "No Captions",
  args: {
    images: sampleImages.map(({
      caption,
      ...img
    }) => img),
    imageOrientation: "square"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder 2")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Rectangle",
  args: {
    images: sampleImages,
    imageOrientation: "rectangle"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Portrait",
  args: {
    images: sampleImages,
    imageOrientation: "portrait"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const y=["Square","Landscape","NoCaptions","Rectangle","Portrait"];export{r as Landscape,s as NoCaptions,n as Portrait,o as Rectangle,t as Square,y as __namedExportsOrder,d as default};
