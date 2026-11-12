import d from"./MediaContext-D2h8paAC.js";import"./iframe-4HAiBMit.js";import"./preload-helper-CNn__nYE.js";import"./Video-BDDraqKK.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-D0uN3RK1.js";import"./Picture-BZpVOJSK.js";import"./HlsBackground-C7WSnS9f.js";import"./Context-DE0hm3e4.js";import"./TextGroup-CAMHCgeJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-Cw-m8yM0.js";import"./Button-DmYcRcsq.js";const{expect:L}=__STORYBOOK_MODULE_TEST__,P={title:"Core Components/Media Context",component:d},e={heading:"Lorem Ipsum",subheading:"Veritatis sit voluptatem",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},a=async({canvas:m})=>{},r={name:"Default",args:{...e},play:a},s={name:"Inset",args:{...e,inset:!0},play:a},t={name:"Reverse",args:{...e,reverse:!0},play:a},n={name:"Large",args:{...e,size:"large"},play:a},o={name:"Video",args:{...e,video:{id:"jQixf1UCKac"}},play:async({canvas:m})=>{}},i={name:"Inset and Reverse",args:{...e,inset:!0,reverse:!0},play:a};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const S=["Primary","Inset","Reverse","Large","Video","InsetAndReverse"];export{s as Inset,i as InsetAndReverse,n as Large,r as Primary,t as Reverse,o as Video,S as __namedExportsOrder,P as default};
