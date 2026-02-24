import{_ as r,a as c}from"./MobileMenu-BBUcIQhl.js";import{_ as m,a as l}from"./ActionMenu-DMvmY3Yk.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BG0snce_.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Menus",tags:["autodocs"]},s=[{id:1,title:"Academics",url:"#",target:""},{id:2,title:"Admissions",url:"#",target:""},{id:3,title:"Campus Life",url:"#",target:""},{id:4,title:"Research",url:"#",target:""},{id:5,title:"About",url:"#",target:""}],p=[{id:1,title:"Alumni",url:"#"},{id:2,title:"Parents",url:"#"},{id:3,title:"Giving",url:"#"},{id:4,title:"Athletics",url:"#"},{id:5,title:"News",url:"#"}],T=[{id:1,title:"Facebook",url:"#"},{id:2,title:"Twitter",url:"#"},{id:3,title:"Instagram",url:"#"},{id:4,title:"YouTube",url:"#"}],d=[{id:1,title:"Facebook",url:"#"},{id:2,title:"Twitter",url:"#"},{id:3,title:"Instagram",url:"#"}],n={name:"Main Menu",render:()=>({components:{MainMenu:r},setup(){return{menu:s,isCurrent:u=>u.title==="Academics"}},template:'<MainMenu :menu="menu" :isCurrent="isCurrent" />'}),play:async({canvas:e})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Admissions")).toBeInTheDocument(),await t(e.getByText("Campus Life")).toBeInTheDocument(),await t(e.getByText("Research")).toBeInTheDocument(),await t(e.getByText("About")).toBeInTheDocument()}},a={name:"Mobile Menu",render:()=>({components:{MobileMenu:c},setup(){return{menus:{main:s,utility:p},isCurrent:u=>u.title==="Academics"}},template:'<div class="w-[375px] bg-white"><MobileMenu :menus="menus" :isCurrent="isCurrent" /></div>'}),parameters:{viewport:{defaultViewport:"mobile1"}},play:async({canvas:e})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Admissions")).toBeInTheDocument(),await t(e.getByText("Alumni")).toBeInTheDocument(),await t(e.getByText("Parents")).toBeInTheDocument()}},i={name:"Social Menu",render:()=>({components:{SocialMenu:l},setup(){return{menu:T}},template:'<div class="bg-indigo p-4"><SocialMenu :menu="menu" /></div>'}),play:async({canvas:e})=>{await t(e.getByText("Facebook")).toBeInTheDocument(),await t(e.getByText("Twitter")).toBeInTheDocument(),await t(e.getByText("Instagram")).toBeInTheDocument(),await t(e.getByText("YouTube")).toBeInTheDocument()}},o={name:"Action Menu",render:()=>({components:{ActionMenu:m},setup(){return{menu:d}},template:'<div class="bg-indigo p-4"><ActionMenu :menu="menu" /></div>'}),play:async({canvas:e})=>{await t(e.getByText("Facebook")).toBeInTheDocument(),await t(e.getByText("Twitter")).toBeInTheDocument(),await t(e.getByText("Instagram")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Life")).toBeInTheDocument();
    await expect(canvas.getByText("Research")).toBeInTheDocument();
    await expect(canvas.getByText("About")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Alumni")).toBeInTheDocument();
    await expect(canvas.getByText("Parents")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Facebook")).toBeInTheDocument();
    await expect(canvas.getByText("Twitter")).toBeInTheDocument();
    await expect(canvas.getByText("Instagram")).toBeInTheDocument();
    await expect(canvas.getByText("YouTube")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Facebook")).toBeInTheDocument();
    await expect(canvas.getByText("Twitter")).toBeInTheDocument();
    await expect(canvas.getByText("Instagram")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const I=["MainMenuDefault","MobileMenuDefault","SocialMenuDefault","ActionMenuDefault"];export{o as ActionMenuDefault,n as MainMenuDefault,a as MobileMenuDefault,i as SocialMenuDefault,I as __namedExportsOrder,w as default};
