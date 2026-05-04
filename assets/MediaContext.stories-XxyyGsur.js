import m from"./MediaContext-C0mcLD9h.js";import"./iframe-lCgBM3L3.js";import"./preload-helper-PPVm8Dsz.js";import"./Video-BoYwJ133.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Icon-ZS6riMzK.js";import"./Picture-C4P_JM5O.js";import"./Context-ABrT5yy0.js";import"./TextGroup-BMK6ZOe6.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CtXH7SIf.js";import"./Button-wOxxjB09.js";const{expect:f}=__STORYBOOK_MODULE_TEST__,I={title:"Core Components/Media Context",component:m},e={heading:"Lorem Ipsum",subheading:"Veritatis sit voluptatem",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},a=async({canvas:d})=>{},r={name:"Default",args:{...e},play:a},s={name:"Inset",args:{...e,inset:!0},play:a},t={name:"Reverse",args:{...e,reverse:!0},play:a},n={name:"Large",args:{...e,size:"large"},play:a},o={name:"Video",args:{...e,video:{id:"jQixf1UCKac"}},play:async({canvas:d})=>{}},i={name:"Inset and Reverse",args:{...e,inset:!0,reverse:!0},play:a};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs
  },
  play: assertHeadingAndParagraph
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Inset",
  args: {
    ...globalArgs,
    inset: true
  },
  play: assertHeadingAndParagraph
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Reverse",
  args: {
    ...globalArgs,
    reverse: true
  },
  play: assertHeadingAndParagraph
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Large",
  args: {
    ...globalArgs,
    size: "large"
  },
  play: assertHeadingAndParagraph
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Video",
  args: {
    ...globalArgs,
    video: {
      id: "jQixf1UCKac"
    }
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Inset and Reverse",
  args: {
    ...globalArgs,
    inset: true,
    reverse: true
  },
  play: assertHeadingAndParagraph
}`,...i.parameters?.docs?.source}}};const _=["Primary","Inset","Reverse","Large","Video","InsetAndReverse"];export{s as Inset,i as InsetAndReverse,n as Large,r as Primary,t as Reverse,o as Video,_ as __namedExportsOrder,I as default};
