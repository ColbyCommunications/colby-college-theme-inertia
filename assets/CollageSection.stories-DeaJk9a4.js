import{_ as i}from"./CollageSection-BdwVxKTJ.js";import"./iframe-DUhMLh8B.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-B_YdcaCR.js";import"./TextGroup-CukHTkLL.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-ZRNuMhM7.js";import"./Button-Z4CuRNZo.js";import"./Picture-CApDF2On.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Collage Section",component:i},e={heading:"Lorem Ipsum",subheading:"Veritatis sit voluptatem",images:[{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",image:{sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}},{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",image:{sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}},{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",image:{sizes:{Rectangle:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},t={name:"Default",args:{...e},play:async({canvas:a})=>{await n(a.getByText("Lorem Ipsum")).toBeInTheDocument(),await n(a.getByText(e.paragraph)).toBeInTheDocument()}},o={name:"Single Image",args:{...e,images:[e.images[0]]},play:async({canvas:a})=>{await n(a.getByText("Lorem Ipsum")).toBeInTheDocument()}},s={name:"Two Images",args:{...e,images:[e.images[0],e.images[1]]},play:async({canvas:a})=>{await n(a.getByText("Lorem Ipsum")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText(globalArgs.paragraph)).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Single Image",
  args: {
    ...globalArgs,
    images: [globalArgs.images[0]]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Two Images",
  args: {
    ...globalArgs,
    images: [globalArgs.images[0], globalArgs.images[1]]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const y=["Primary","SingleImage","TwoImages"];export{t as Primary,o as SingleImage,s as TwoImages,y as __namedExportsOrder,w as default};
