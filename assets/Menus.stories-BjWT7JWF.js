import{_ as u,M as o}from"./MobileMenu-B8ozi-uw.js";import{_ as c,a as m}from"./ActionMenu-D0UsqkQL.js";import"./iframe-o8pGYXWK.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-DpxLDECl.js";const{expect:B}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Menus",tags:["autodocs"]},r=[{id:1,title:"Academics",url:"#",target:""},{id:2,title:"Admissions",url:"#",target:""},{id:3,title:"Campus Life",url:"#",target:""},{id:4,title:"Research",url:"#",target:""},{id:5,title:"About",url:"#",target:""},{id:6,title:"News",url:"#",target:""}],l=[{id:1,title:"Alumni",url:"#"},{id:2,title:"Parents",url:"#"},{id:3,title:"Giving",url:"#"},{id:4,title:"Athletics",url:"#"},{id:5,title:"News",url:"#"}],p=[{id:1,title:"Facebook",url:"#"},{id:2,title:"Twitter",url:"#"},{id:3,title:"Instagram",url:"#"},{id:4,title:"YouTube",url:"#"}],d=[{id:1,title:"Facebook",url:"#"},{id:2,title:"Twitter",url:"#"},{id:3,title:"Instagram",url:"#"}],t={name:"Main Menu",render:()=>({components:{MainMenu:u},setup(){return{menu:r,isCurrent:s=>s.title==="Academics"}},template:'<MainMenu :menu="menu" :isCurrent="isCurrent" />'}),play:async({canvas:e})=>{}},n={name:"Mobile Menu",render:()=>({components:{MobileMenu:o},setup(){return{menus:{main:r,utility:l},isCurrent:s=>s.title==="Academics"}},template:'<div class="w-[375px] bg-white"><MobileMenu :menus="menus" :isCurrent="isCurrent" /></div>'}),parameters:{viewport:{defaultViewport:"mobile1"}},play:async({canvas:e})=>{}},a={name:"Social Menu",render:()=>({components:{SocialMenu:m},setup(){return{menu:p}},template:'<div class="bg-indigo p-4"><SocialMenu :menu="menu" /></div>'}),play:async({canvas:e})=>{}},i={name:"Action Menu",render:()=>({components:{ActionMenu:c},setup(){return{menu:d}},template:'<div class="bg-indigo p-4"><ActionMenu :menu="menu" /></div>'}),play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Main Menu",
  render: () => ({
    components: {
      MainMenu
    },
    setup() {
      const isCurrent = item => item.title === "Academics";
      return {
        menu: mainMenuItems,
        isCurrent
      };
    },
    template: '<MainMenu :menu="menu" :isCurrent="isCurrent" />'
  }),
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Life")).toBeInTheDocument();
    await expect(canvas.getByText("Research")).toBeInTheDocument();
    await expect(canvas.getByText("About")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Mobile Menu",
  render: () => ({
    components: {
      MobileMenu
    },
    setup() {
      const isCurrent = item => item.title === "Academics";
      return {
        menus: {
          main: mainMenuItems,
          utility: utilityMenuItems
        },
        isCurrent
      };
    },
    template: '<div class="w-[375px] bg-white"><MobileMenu :menus="menus" :isCurrent="isCurrent" /></div>'
  }),
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Alumni")).toBeInTheDocument();
    await expect(canvas.getByText("Parents")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Social Menu",
  render: () => ({
    components: {
      SocialMenu
    },
    setup() {
      return {
        menu: socialMenuItems
      };
    },
    template: '<div class="bg-indigo p-4"><SocialMenu :menu="menu" /></div>'
  }),
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Facebook")).toBeInTheDocument();
    await expect(canvas.getByText("Twitter")).toBeInTheDocument();
    await expect(canvas.getByText("Instagram")).toBeInTheDocument();
    await expect(canvas.getByText("YouTube")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Action Menu",
  render: () => ({
    components: {
      ActionMenu
    },
    setup() {
      return {
        menu: actionMenuItems
      };
    },
    template: '<div class="bg-indigo p-4"><ActionMenu :menu="menu" /></div>'
  }),
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Facebook")).toBeInTheDocument();
    await expect(canvas.getByText("Twitter")).toBeInTheDocument();
    await expect(canvas.getByText("Instagram")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const D=["MainMenuDefault","MobileMenuDefault","SocialMenuDefault","ActionMenuDefault"];export{i as ActionMenuDefault,t as MainMenuDefault,n as MobileMenuDefault,a as SocialMenuDefault,D as __namedExportsOrder,w as default};
