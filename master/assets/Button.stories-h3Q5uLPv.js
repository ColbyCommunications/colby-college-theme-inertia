import{_ as p}from"./Button-CbaLYlI5.js";import"./iframe-BH5Nl28C.js";import"./preload-helper-CNn__nYE.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Button",component:p},e={name:"Primary",args:{title:"Button Title",url:"https://www.colby.edu"},play:async({canvas:t})=>{}},a={name:"Small",args:{title:"Button Title",url:"https://www.colby.edu",size:"small"},play:async({canvas:t})=>{}},r={name:"Medium",args:{title:"Button Title",url:"https://www.colby.edu",size:"medium"},play:async({canvas:t})=>{}},n={name:"Large",args:{title:"Button Title",url:"https://www.colby.edu",size:"large"},play:async({canvas:t})=>{}},s={name:"Dark",args:{title:"Button Title",url:"https://www.colby.edu",type:"dark"},play:async({canvas:t})=>{}},o={name:"Dark with Arrow",args:{title:"Button Title",url:"https://www.colby.edu",type:"dark",arrow:!0},play:async({canvas:t})=>{}},l={name:"With Arrow",args:{title:"Button Title",url:"https://www.colby.edu",arrow:!0},play:async({canvas:t})=>{}},c={name:"Reverse",args:{title:"Button Title",url:"https://www.colby.edu",arrow:!0,reverse:!0},play:async({canvas:t})=>{}},i={name:"Transparent Background",args:{title:"Button Title",url:"https://www.colby.edu",transparentBg:!0},decorators:[()=>({template:'<div class="bg-indigo p-20"><story /></div>'})],play:async({canvas:t})=>{}},u={name:"Transparent Background with Arrow",args:{title:"Button Title",url:"https://www.colby.edu",transparentBg:!0,arrow:!0},decorators:[()=>({template:'<div class="bg-indigo p-20"><story /></div>'})],play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  name: "Dark with Arrow",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    type: "dark",
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
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Transparent Background",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    transparentBg: true
  },
  decorators: [() => ({
    template: '<div class="bg-indigo p-20"><story /></div>'
  })],
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Transparent Background with Arrow",
  args: {
    title: "Button Title",
    url: "https://www.colby.edu",
    transparentBg: true,
    arrow: true
  },
  decorators: [() => ({
    template: '<div class="bg-indigo p-20"><story /></div>'
  })],
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const link = canvas.getByRole("link", {
      name: "Button Title"
    });
    await expect(link).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};const B=["Primary","small","medium","large","dark","darkWithArrow","withArrow","reverse","transparent","transparentWithArrow"];export{e as Primary,B as __namedExportsOrder,s as dark,o as darkWithArrow,g as default,n as large,r as medium,c as reverse,a as small,i as transparent,u as transparentWithArrow,l as withArrow};
