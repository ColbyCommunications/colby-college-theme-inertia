import{_ as i}from"./Video-bD-NLK8l.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BG0snce_.js";import"./Picture-CxKtrm5G.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,h={title:"Core Components/Video",component:i},e={name:"Default",args:{id:"jQixf1UCKac",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}},play:async({canvas:a})=>{await s(a.getByAltText("this is an alt tag")).toBeInTheDocument()}},t={name:"No Play Icon",args:{...e.args,playIcon:!1},play:async({canvas:a})=>{await s(a.getByAltText("this is an alt tag")).toBeInTheDocument()}},o={name:"With Video Loop",args:{...e.args,videoLoop:"https://example.com/video.mp4"},play:async({canvas:a})=>{await s(a.getByAltText("this is an alt tag")).toBeInTheDocument()}},n={name:"Click to Play",args:e.args,play:async({canvasElement:a,userEvent:r})=>{const c=a.querySelector(".video__overlay");c&&await r.click(c)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    id: "jQixf1UCKac",
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Hero: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        mobile: "https://placehold.co/300x200"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("this is an alt tag")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "No Play Icon",
  args: {
    ...Primary.args,
    playIcon: false
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("this is an alt tag")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Video Loop",
  args: {
    ...Primary.args,
    videoLoop: "https://example.com/video.mp4"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("this is an alt tag")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Click to Play",
  args: Primary.args,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const overlay = canvasElement.querySelector(".video__overlay");
    if (overlay) await userEvent.click(overlay);
  }
}`,...n.parameters?.docs?.source}}};const g=["Primary","NoPlayIcon","WithVideoLoop","ClickToPlay"];export{n as ClickToPlay,t as NoPlayIcon,e as Primary,o as WithVideoLoop,g as __namedExportsOrder,h as default};
