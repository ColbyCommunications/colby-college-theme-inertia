import{_ as i}from"./BgInsetMediaContext-B6xENiu4.js";import"./iframe-DTQvshqa.js";import"./preload-helper-PPVm8Dsz.js";import"./MediaContext-Dqr4zoJ-.js";import"./Video-PlB8gDdk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Icon-wl6YJJL-.js";import"./Picture-Cmoj2WFy.js";import"./Context-4HtdI-UF.js";import"./TextGroup-BOYR6eDq.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-COr3JDjA.js";import"./Button-q0sjokTk.js";const{expect:R}=__STORYBOOK_MODULE_TEST__,I={title:"Core Components/BG Inset Media Context",component:i},e={heading:"Lorem Ipsum",subheading:"Veritatis sit voluptatem",image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},a=async({canvas:m,canvasElement:c})=>{},r={name:"Default",args:{...e},play:a},s={name:"Inset",args:{...e,inset:!0},play:a},t={name:"Reverse",args:{...e,reverse:!0},play:a},n={name:"Large",args:{...e,size:"large"},play:a},o={name:"Video",args:{...e,video:{id:"jQixf1UCKac"}},play:a};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs
  },
  play: assertHeadingVisible
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Inset",
  args: {
    ...globalArgs,
    inset: true
  },
  play: assertHeadingVisible
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Reverse",
  args: {
    ...globalArgs,
    reverse: true
  },
  play: assertHeadingVisible
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Large",
  args: {
    ...globalArgs,
    size: "large"
  },
  play: assertHeadingVisible
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Video",
  args: {
    ...globalArgs,
    video: {
      id: "jQixf1UCKac"
    }
  },
  play: assertHeadingVisible
}`,...o.parameters?.docs?.source}}};const L=["Primary","Inset","Reverse","Large","Video"];export{s as Inset,n as Large,r as Primary,t as Reverse,o as Video,L as __namedExportsOrder,I as default};
