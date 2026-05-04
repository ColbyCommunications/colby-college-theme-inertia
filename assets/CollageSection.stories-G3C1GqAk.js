import{_ as r}from"./CollageSection-DLZghN-y.js";import"./iframe-Dk8X5kg9.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-LNWjQ5kA.js";import"./TextGroup-zhl_ARTF.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BM8qokrS.js";import"./Button-B99iu2cV.js";import"./Picture-Y-vsZVhD.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,x={title:"Core Components/Collage Section",component:r},e={heading:"Lorem Ipsum",subheading:"Veritatis sit voluptatem",images:[{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",image:{sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}},{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",image:{sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}},{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",image:{sizes:{Rectangle:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},a={name:"Default",args:{...e},play:async({canvas:o})=>{}},t={name:"Single Image",args:{...e,images:[e.images[0]]},play:async({canvas:o})=>{}},s={name:"Two Images",args:{...e,images:[e.images[0],e.images[1]]},play:async({canvas:o})=>{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText(globalArgs.paragraph)).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Single Image",
  args: {
    ...globalArgs,
    images: [globalArgs.images[0]]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Two Images",
  args: {
    ...globalArgs,
    images: [globalArgs.images[0], globalArgs.images[1]]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const w=["Primary","SingleImage","TwoImages"];export{a as Primary,t as SingleImage,s as TwoImages,w as __namedExportsOrder,x as default};
