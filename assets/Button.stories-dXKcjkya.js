import{_ as m}from"./Button-u50yI3p6.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,B={title:"Core Components/Button",component:m},a={name:"Primary",args:{title:"Button Title",url:"https://www.colby.edu"},play:async({canvas:t})=>{const e=t.getByRole("link",{name:"Button Title"});await n(e).toBeInTheDocument(),await n(e).toHaveAttribute("href","https://www.colby.edu")}},o={name:"Small",args:{title:"Button Title",url:"https://www.colby.edu",size:"small"},play:async({canvas:t})=>{const e=t.getByRole("link",{name:"Button Title"});await n(e).toBeInTheDocument()}},r={name:"Medium",args:{title:"Button Title",url:"https://www.colby.edu",size:"medium"},play:async({canvas:t})=>{const e=t.getByRole("link",{name:"Button Title"});await n(e).toBeInTheDocument()}},s={name:"Large",args:{title:"Button Title",url:"https://www.colby.edu",size:"large"},play:async({canvas:t})=>{const e=t.getByRole("link",{name:"Button Title"});await n(e).toBeInTheDocument()}},l={name:"Dark",args:{title:"Button Title",url:"https://www.colby.edu",type:"dark"},play:async({canvas:t})=>{const e=t.getByRole("link",{name:"Button Title"});await n(e).toBeInTheDocument()}},c={name:"With Arrow",args:{title:"Button Title",url:"https://www.colby.edu",arrow:!0},play:async({canvas:t})=>{const e=t.getByRole("link",{name:"Button Title"});await n(e).toBeInTheDocument(),await n(e.querySelector("svg")).not.toBeNull()}},i={name:"Reverse",args:{title:"Button Title",url:"https://www.colby.edu",arrow:!0,reverse:!0},play:async({canvas:t})=>{const e=t.getByRole("link",{name:"Button Title"});await n(e).toBeInTheDocument(),await n(e.querySelector("svg")).not.toBeNull()}},u={name:"Transparent Background",args:{title:"Button Title",url:"https://www.colby.edu",transparentBg:!0},play:async({canvas:t})=>{const e=t.getByRole("link",{name:"Button Title"});await n(e).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu"
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", "https://www.colby.edu");
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Small",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "small"
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Medium",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "medium"
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Large",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    size: "large"
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Dark",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    type: "dark"
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "With Arrow",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    arrow: true
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
    await expect(link.querySelector("svg")).not.toBeNull();
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
    await expect(link.querySelector("svg")).not.toBeNull();
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Transparent Background",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    transparentBg: true
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};const d=["Primary","small","medium","large","dark","withArrow","reverse","transparent"];export{a as Primary,d as __namedExportsOrder,l as dark,B as default,s as large,r as medium,i as reverse,o as small,u as transparent,c as withArrow};
