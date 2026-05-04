import l from"./Image-CM9tvNVQ.js";import"./iframe-CQJlxVxo.js";import"./preload-helper-PPVm8Dsz.js";const{expect:g}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Image",component:l,tags:["autodocs"],argTypes:{imageScale:{control:"select",options:["100","75","50","25"]}}},e={name:"Default",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},caption:"An example image caption"},play:async({canvas:a})=>{}},t={name:"75% Scale",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"75",caption:"Image at 75% scale"},play:async({canvas:a})=>{}},c={name:"50% Scale",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"50",caption:"Image at 50% scale"},play:async({canvas:a})=>{}},r={name:"Centered",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"50",alignCenter:!0,caption:"Centered image at 50% scale"},play:async({canvas:a})=>{}},o={name:"With Image Path",args:{imagePath:"https://placehold.co/800x500",caption:"Image loaded via path"},play:async({canvas:a})=>{}},s={name:"25% Scale",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"25",caption:"Image at 25% scale"},play:async({canvas:a})=>{}},n={name:"No Caption",args:{image:{url:"https://placehold.co/800x500",alt:"No caption image"}},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    caption: "An example image caption"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("An example image caption")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "75% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "75",
    caption: "Image at 75% scale"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Image at 75% scale")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "50% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "50",
    caption: "Image at 50% scale"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Image at 50% scale")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Centered",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "50",
    alignCenter: true,
    caption: "Centered image at 50% scale"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Centered image at 50% scale")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Image Path",
  args: {
    imagePath: "https://placehold.co/800x500",
    caption: "Image loaded via path"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Image loaded via path")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "25% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "25",
    caption: "Image at 25% scale"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Image at 25% scale")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "No Caption",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "No caption image"
    }
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("No caption image")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const u=["Default","Scaled75","Scaled50","Centered","WithPath","Scaled25","NoCaption"];export{r as Centered,e as Default,n as NoCaption,s as Scaled25,c as Scaled50,t as Scaled75,o as WithPath,u as __namedExportsOrder,d as default};
