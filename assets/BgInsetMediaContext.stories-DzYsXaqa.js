import{c as l,a as i,e as p,q as u,s as g,d as _}from"./iframe-BfBFAde5.js";import{_ as x}from"./MediaContext-BIXMJq0N.js";import"./preload-helper-PPVm8Dsz.js";import"./Video-bD-NLK8l.js";import"./Icon-BG0snce_.js";import"./Picture-CxKtrm5G.js";import"./Context-Dp7yX81d.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const h={class:"bg-inset-media-context"},b={class:"bg-inset-media-context__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"},y={class:"bg-inset-media-context__main md:col-span-12"},D={class:"bg-inset-media-context__bg bg-hero__pattern bg-cover bg-no-repeat px-8 py-14 md:px-14"},d={__name:"BgInsetMediaContext",setup(c){return(m,f)=>(_(),l("div",h,[i("div",b,[i("div",y,[i("div",D,[p(x,u(g(m.$attrs)),null,16)])])])]))}};d.__docgenInfo={exportName:"default",displayName:"BgInsetMediaContext",description:"",tags:{},sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/BgInsetMediaContext/BgInsetMediaContext.vue"]};const{expect:v}=__STORYBOOK_MODULE_TEST__,q={title:"Core Components/BG Inset Media Context",component:d},e={heading:"Lorem Ipsum",subheading:"Veritatis sit voluptatem",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},a=async({canvas:c})=>{await v(c.getByText("Lorem Ipsum")).toBeInTheDocument()},s={name:"Default",args:{...e},play:a},t={name:"Inset",args:{...e,inset:!0},play:a},r={name:"Reverse",args:{...e,reverse:!0},play:a},o={name:"Large",args:{...e,size:"large"},play:a},n={name:"Video",args:{...e,video:{id:"jQixf1UCKac"}},play:a};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs
  },
  play: assertHeadingVisible
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Inset",
  args: {
    ...globalArgs,
    inset: true
  },
  play: assertHeadingVisible
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Reverse",
  args: {
    ...globalArgs,
    reverse: true
  },
  play: assertHeadingVisible
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Large",
  args: {
    ...globalArgs,
    size: "large"
  },
  play: assertHeadingVisible
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Video",
  args: {
    ...globalArgs,
    video: {
      id: "jQixf1UCKac"
    }
  },
  play: assertHeadingVisible
}`,...n.parameters?.docs?.source}}};const A=["Primary","Inset","Reverse","Large","Video"];export{t as Inset,o as Large,s as Primary,r as Reverse,n as Video,A as __namedExportsOrder,q as default};
