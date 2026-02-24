import{_ as p}from"./MediaContext-BIXMJq0N.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./Video-bD-NLK8l.js";import"./Icon-BG0snce_.js";import"./Picture-CxKtrm5G.js";import"./Context-Dp7yX81d.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,A={title:"Core Components/Media Context",component:p},e={heading:"Lorem Ipsum",subheading:"Veritatis sit voluptatem",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},a=async({canvas:r})=>{await d(r.getByText("Lorem Ipsum")).toBeInTheDocument(),await d(r.getByText(e.paragraph)).toBeInTheDocument()},s={name:"Default",args:{...e},play:a},t={name:"Inset",args:{...e,inset:!0},play:a},n={name:"Reverse",args:{...e,reverse:!0},play:a},o={name:"Large",args:{...e,size:"large"},play:a},i={name:"Video",args:{...e,video:{id:"jQixf1UCKac"}},play:async({canvas:r})=>{await d(r.getByText("Lorem Ipsum")).toBeInTheDocument()}},m={name:"Inset and Reverse",args:{...e,inset:!0,reverse:!0},play:a};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs
  },
  play: assertHeadingAndParagraph
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Inset",
  args: {
    ...globalArgs,
    inset: true
  },
  play: assertHeadingAndParagraph
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Reverse",
  args: {
    ...globalArgs,
    reverse: true
  },
  play: assertHeadingAndParagraph
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Large",
  args: {
    ...globalArgs,
    size: "large"
  },
  play: assertHeadingAndParagraph
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Inset and Reverse",
  args: {
    ...globalArgs,
    inset: true,
    reverse: true
  },
  play: assertHeadingAndParagraph
}`,...m.parameters?.docs?.source}}};const R=["Primary","Inset","Reverse","Large","Video","InsetAndReverse"];export{t as Inset,m as InsetAndReverse,o as Large,s as Primary,n as Reverse,i as Video,R as __namedExportsOrder,A as default};
