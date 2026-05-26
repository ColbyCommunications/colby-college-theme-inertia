import{_ as s}from"./Video-jTUROJ7o.js";import"./iframe-50IdwWHA.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-DsqdWQfm.js";import"./Icon-DOfhAy3K.js";import"./Picture-DL67JYY_.js";import"./HlsBackground-CHLrXXNA.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:"Core Components/Video",component:s},t={name:"Default",args:{id:"jQixf1UCKac",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}},play:async({canvas:o})=>{}},a={name:"No Play Icon",args:{...t.args,playIcon:!1},play:async({canvas:o})=>{}},e={name:"With Video Loop",args:{...t.args,videoLoop:"https://www.colby.edu/communications/training-videos/flyover-rocky-east-shore.mp4"},play:async({canvas:o})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "With Video Loop",
  args: {
    ...Primary.args,
    videoLoop: "https://www.colby.edu/communications/training-videos/flyover-rocky-east-shore.mp4"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("this is an alt tag")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const y=["Primary","NoPlayIcon","WithVideoLoop"];export{a as NoPlayIcon,t as Primary,e as WithVideoLoop,y as __namedExportsOrder,h as default};
