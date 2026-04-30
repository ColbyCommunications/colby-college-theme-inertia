import{_ as i}from"./Button-BRb3G0IJ.js";import"./iframe-Bmd2UPGG.js";import"./preload-helper-PPVm8Dsz.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/Button",component:i},t={name:"Primary",args:{title:"Button Title",url:"https://www.colby.edu"},play:async({canvas:e})=>{}},a={name:"Small",args:{title:"Button Title",url:"https://www.colby.edu",size:"small"},play:async({canvas:e})=>{}},r={name:"Medium",args:{title:"Button Title",url:"https://www.colby.edu",size:"medium"},play:async({canvas:e})=>{}},n={name:"Large",args:{title:"Button Title",url:"https://www.colby.edu",size:"large"},play:async({canvas:e})=>{}},s={name:"Dark",args:{title:"Button Title",url:"https://www.colby.edu",type:"dark"},play:async({canvas:e})=>{}},o={name:"With Arrow",args:{title:"Button Title",url:"https://www.colby.edu",arrow:!0},play:async({canvas:e})=>{}},l={name:"Reverse",args:{title:"Button Title",url:"https://www.colby.edu",arrow:!0,reverse:!0},play:async({canvas:e})=>{}},c={name:"Transparent Background",args:{title:"Button Title",url:"https://www.colby.edu",transparentBg:!0},play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", "https://www.colby.edu");
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Small",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "small"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Medium",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "medium"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Large",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "large"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Dark",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    type: "dark"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Arrow",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    arrow: true
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
    await expect(link.querySelector("svg")).not.toBeNull();
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Reverse",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    arrow: true,
    reverse: true
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
    await expect(link.querySelector("svg")).not.toBeNull();
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Transparent Background",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    transparentBg: true
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};const d=["Primary","small","medium","large","dark","withArrow","reverse","transparent"];export{t as Primary,d as __namedExportsOrder,s as dark,y as default,n as large,r as medium,l as reverse,a as small,c as transparent,o as withArrow};
