import{_ as r}from"./Video-Dnr2Jxzi.js";import"./iframe-o8pGYXWK.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Icon-DpxLDECl.js";import"./Picture-B-dnp4nI.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Video",component:r},a={name:"Default",args:{id:"jQixf1UCKac",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}},play:async({canvas:s})=>{}},e={name:"No Play Icon",args:{...a.args,playIcon:!1},play:async({canvas:s})=>{}},t={name:"With Video Loop",args:{...a.args,videoLoop:"https://example.com/video.mp4"},play:async({canvas:s})=>{}},o={name:"Click to Play",args:a.args,play:async({canvasElement:s,userEvent:c})=>{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("this is an alt tag")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "No Play Icon",
  args: {
    ...Primary.args,
    playIcon: false
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("this is an alt tag")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "With Video Loop",
  args: {
    ...Primary.args,
    videoLoop: "https://example.com/video.mp4"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("this is an alt tag")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Click to Play",
  args: Primary.args,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const overlay = canvasElement.querySelector(".video__overlay");
    if (overlay) await userEvent.click(overlay);
  }
}`,...o.parameters?.docs?.source}}};const h=["Primary","NoPlayIcon","WithVideoLoop","ClickToPlay"];export{o as ClickToPlay,e as NoPlayIcon,a as Primary,t as WithVideoLoop,h as __namedExportsOrder,u as default};
