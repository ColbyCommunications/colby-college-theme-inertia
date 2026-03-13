import{c as _,a as m,e as x,l as b,m as h,d as y}from"./iframe-7hMrkyzV.js";import{_ as v}from"./MediaContext-G7HbTYia.js";import"./preload-helper-PPVm8Dsz.js";import"./Video-BiQcRvSk.js";import"./Icon-6fyw9tHz.js";import"./Picture-CuW9RLEn.js";import"./Context-SwHlVN13.js";import"./TextGroup-xv_V1Og-.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CsAcoAIN.js";import"./Button-BdYe4hLK.js";const D={class:"bg-inset-media-context"},f={class:"bg-inset-media-context__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"},C={class:"bg-inset-media-context__main md:col-span-12"},V={class:"bg-inset-media-context__bg bg-hero__pattern bg-cover bg-no-repeat px-8 py-14 md:px-14"},c={__name:"BgInsetMediaContext",setup(g){return(d,l)=>(y(),_("div",D,[m("div",f,[m("div",C,[m("div",V,[x(v,b(h(d.$attrs)),null,16)])])])]))}};c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"BgInsetMediaContext",description:"",tags:{},sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/BgInsetMediaContext/BgInsetMediaContext.vue"]});const{expect:a}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/BG Inset Media Context",component:c},e={heading:"Lorem Ipsum",subheading:"Veritatis sit voluptatem",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},t=async({canvas:g,canvasElement:d})=>{const l=d.querySelectorAll(".media-context__context")[0],p=l.querySelectorAll(".text-group__heading")[0],u=l.querySelectorAll(".text-group__subheading")[0];await a(p.textContent.slice(0,-1)).toBe("Lorem Ipsum"),await a(p).toBeVisible(),await a(u.textContent.slice(0,-1)).toBe("Veritatis sit voluptatem"),await a(u).toBeVisible()},s={name:"Default",args:{...e},play:t},r={name:"Inset",args:{...e,inset:!0},play:t},o={name:"Reverse",args:{...e,reverse:!0},play:t},n={name:"Large",args:{...e,size:"large"},play:t},i={name:"Video",args:{...e,video:{id:"jQixf1UCKac"}},play:t};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs
  },
  play: assertHeadingVisible
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Inset",
  args: {
    ...globalArgs,
    inset: true
  },
  play: assertHeadingVisible
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Reverse",
  args: {
    ...globalArgs,
    reverse: true
  },
  play: assertHeadingVisible
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Large",
  args: {
    ...globalArgs,
    size: "large"
  },
  play: assertHeadingVisible
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Video",
  args: {
    ...globalArgs,
    video: {
      id: "jQixf1UCKac"
    }
  },
  play: assertHeadingVisible
}`,...i.parameters?.docs?.source}}};const N=["Primary","Inset","Reverse","Large","Video"];export{r as Inset,n as Large,s as Primary,o as Reverse,i as Video,N as __namedExportsOrder,E as default};
