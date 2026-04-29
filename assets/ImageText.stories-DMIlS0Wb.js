import{_ as h}from"./ImageText-CFl-8KLF.js";import"./iframe-0N6o4Hv8.js";import"./preload-helper-PPVm8Dsz.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Image with Text",component:h,tags:["autodocs"],argTypes:{imageScale:{control:"select",options:["100","75","50","25"]},wrappingText:{control:"select",options:["wrap","no-wrap"]},alignImage:{control:"select",options:["left","right"]},alignText:{control:"select",options:["left","center"]}}},t="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla. Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue.</p>",e={name:"Default",args:{image:{url:"https://placehold.co/400x300",alt:"Placeholder image"},imageScale:"50",alignImage:"left",wrappingText:"no-wrap",paragraphText:t,mediaCaption:"Image caption here"},play:async({canvas:a})=>{}},r={name:"Wrap Left",args:{...e.args,wrappingText:"wrap",alignImage:"left"},play:async({canvas:a})=>{}},n={name:"Wrap Right",args:{...e.args,wrappingText:"wrap",alignImage:"right"},play:async({canvas:a})=>{}},s={name:"Side-by-Side Right",args:{...e.args,alignImage:"right",imageScale:"50"},play:async({canvas:a})=>{}},p={name:"Scale 25%",args:{...e.args,imageScale:"25",wrappingText:"no-wrap"},play:async({canvas:a})=>{}},c={name:"Scale 75%",args:{...e.args,imageScale:"75",wrappingText:"no-wrap"},play:async({canvas:a})=>{}},o={name:"Scale 100%",args:{...e.args,imageScale:"100",wrappingText:"no-wrap"},play:async({canvas:a})=>{}},i={name:"Image Path Only",args:{imagePath:"https://placehold.co/400x300",imageScale:"50",wrappingText:"no-wrap",paragraphText:t},play:async({canvas:a})=>{}},g={name:"No Caption",args:{image:{url:"https://placehold.co/400x300",alt:"Placeholder image"},imageScale:"50",wrappingText:"wrap",alignImage:"left",paragraphText:t},play:async({canvas:a})=>{}},m={name:"Wrap with Image Path",args:{imagePath:"https://placehold.co/400x300",imageScale:"50",wrappingText:"wrap",alignImage:"left",paragraphText:t,mediaCaption:"Path-based image caption"},play:async({canvas:a})=>{}},l={name:"Centered Text",args:{image:{url:"https://placehold.co/400x300",alt:"Centered text image"},imageScale:"50",wrappingText:"no-wrap",alignImage:"left",alignText:"center",paragraphText:t},play:async({canvas:a})=>{}},u={name:"Wrap Right No Caption",args:{image:{url:"https://placehold.co/400x300",alt:"No caption wrap right"},imageScale:"75",wrappingText:"wrap",alignImage:"right",paragraphText:t},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Placeholder image"
    },
    imageScale: "50",
    alignImage: "left",
    wrappingText: "no-wrap",
    paragraphText: sampleText,
    mediaCaption: "Image caption here"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Wrap Left",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "left"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Wrap Right",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "right"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Side-by-Side Right",
  args: {
    ...Default.args,
    alignImage: "right",
    imageScale: "50"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Scale 25%",
  args: {
    ...Default.args,
    imageScale: "25",
    wrappingText: "no-wrap"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Scale 75%",
  args: {
    ...Default.args,
    imageScale: "75",
    wrappingText: "no-wrap"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Scale 100%",
  args: {
    ...Default.args,
    imageScale: "100",
    wrappingText: "no-wrap"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Image Path Only",
  args: {
    imagePath: "https://placehold.co/400x300",
    imageScale: "50",
    wrappingText: "no-wrap",
    paragraphText: sampleText
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "No Caption",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Placeholder image"
    },
    imageScale: "50",
    wrappingText: "wrap",
    alignImage: "left",
    paragraphText: sampleText
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Wrap with Image Path",
  args: {
    imagePath: "https://placehold.co/400x300",
    imageScale: "50",
    wrappingText: "wrap",
    alignImage: "left",
    paragraphText: sampleText,
    mediaCaption: "Path-based image caption"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Path-based image caption")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Centered Text",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Centered text image"
    },
    imageScale: "50",
    wrappingText: "no-wrap",
    alignImage: "left",
    alignText: "center",
    paragraphText: sampleText
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("Centered text image")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Wrap Right No Caption",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "No caption wrap right"
    },
    imageScale: "75",
    wrappingText: "wrap",
    alignImage: "right",
    paragraphText: sampleText
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("No caption wrap right")).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};const S=["Default","WrapLeft","WrapRight","SideBySideRight","Scale25","Scale75","Scale100","ImagePathOnly","NoCaption","WrapWithImagePath","CenteredText","WrapRightNoCaption"];export{l as CenteredText,e as Default,i as ImagePathOnly,g as NoCaption,o as Scale100,p as Scale25,c as Scale75,s as SideBySideRight,r as WrapLeft,n as WrapRight,u as WrapRightNoCaption,m as WrapWithImagePath,S as __namedExportsOrder,w as default};
